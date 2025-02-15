<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { generateCSS } from '../utility/styles-util.js';
import ErrorDisplay from '../components/utility/ErrorDisplay.vue'
import DataItemText from '../components/data-item/DataItemText.vue'
import DataItemSwitch from '../components/data-item/DataItemSwitch.vue'

const error = ref(null);
const data = ref(null);

try {
  const urlParams = new URLSearchParams(window.location.search);
  const bData = urlParams.get('data');
  data.value = JSON.parse(atob(bData));
  console.log('SCADA', 'data', data._rawValue);
  if (!data.value?.schema?.url)
    throw new Error('invalid data')
} catch (e) {
  error.value = e;
}

document.title = 'SCADA1';

const schema = ref(null);
const dataMap = ref({});
let intervalIds = [];
let styleElement = null;

const fetchSchema = async () => {
  try {
    const res = await fetch(data.value.schema.url);
    schema.value = await res.json();
    console.log("Schema loaded:", schema._rawValue);

    // init dataMap;
    schema.value?.dataFeeds.forEach(feed => {
      Object.keys(feed.dataMap).forEach(dataName => {
        dataMap.value[dataName] = feed.dataMap[dataName];
        dataMap.value[dataName]['_id'] = dataName;
      });
    });

    addStyles(schema._rawValue.styles);

    // start pooling;
    console.log("dataMap loaded:", dataMap._rawValue);

    startPolling();
  } catch (error) {
    console.error("Error fetching schema:", error);
  }
};

const fetchDataFeed = async (feed) => {
  try {
    const res = await fetch(feed.fetchUrl);
    const data = await res.json();

    // Update dataMap values from the fetched data
    Object.keys(data).forEach((key) => {
      if (dataMap.value[key]) {
        dataMap.value[key].value = data[key];
      }
    });
  } catch (error) {
    console.error(`Error fetching data from ${feed.fetchUrl}:`, error);
  }
};

const startPolling = () => {
  if (!schema.value?.dataFeeds) return;

  schema.value?.dataFeeds.forEach(feed => {
    fetchDataFeed(feed);
    const id = setInterval(() => fetchDataFeed(feed), feed.fetchInterval || 5000);
    intervalIds.push(id);
  });
};

// Create and insert the <style> element
const addStyles = (stylesObj) => {
  console.log('stylesObj', stylesObj);
  if (!stylesObj) return;

  const css = generateCSS(stylesObj);
  styleElement = document.createElement("style");
  styleElement.type = "text/css";
  styleElement.textContent = css;
  document.body.appendChild(styleElement);
}

// delete the <style> element
const clearStyle = () => {
  if (styleElement && document.head.contains(styleElement)) {
    document.head.removeChild(styleElement);
  }
}


onMounted(fetchSchema)
onUnmounted(() => {
  intervalIds.forEach(clearInterval);
  clearStyle();
});
</script>

<template>
  <ErrorDisplay v-if="!!error || !data" :errorMsg="error"></ErrorDisplay>
  <div v-else>
    <div v-if="schema" class="scada-container" :style="{ width: schema.map.width + 'px', height: schema.map.height + 'px' }">
      <img :src="schema.map.baseImg" class="background-image" />

      <component
        :is="item.type=='text'? DataItemText : DataItemSwitch"
        v-for="(item, key) in dataMap"
        :id="item._id"
        :key="key"
        :data="item"
      ></component>
    </div>
  </div>
</template>
<style scoped>
.scada-container {
  position: relative;
  overflow: hidden;
}
.background-image {
  width: 100%;
  height: auto;
  display: block;
}
</style>
