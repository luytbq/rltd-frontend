<script setup>
import './data-item.css';
import { computed, ref } from 'vue';

const props = defineProps({
  // data = {
  //    "type": "switch",
  //    "fetch": {
  //      "url": "http://localhost:3000/api/schemas/factory-1/devices/pump11/state"
  //    },
  //    "control": {
  //        "0": {
  //            "label": "Off",
  //            "desc": "turn on pump NT 11",
  //            "styles": [ "red" ],
  //            "method": "PATCH",
  //            "url": "http://localhost:3000/api/schemas/factory-1/devices/pump11/state/1"
  //        },
  //        "1": {
  //            "label": "On",
  //            "desc": "turn off pump NT 11",
  //            "styles": [ "green" ],
  //            "method": "PATCH",
  //            "url": "http://localhost:3000/api/schemas/factory-1/devices/pump11/state/0"
  //        }
  //    },
  //    "position": {
  //        "x": 167,
  //        "y": 170
  //    },
  //    "_id": "pump11",
  //    "value": 1
  //}
  data: Object,
});

const emit = defineEmits({
  'control': null, // no validation
});

const disabled = ref(false);

const label = computed(() => props.data.control[props.data.value]?.label)
const desc = computed(() => props.data.control[props.data.value]?.desc)
const controlUrl = computed(() => props.data.control[props.data.value]?.url)
const method = computed(() => props.data.control[props.data.value]?.method)
const clazz = computed(() => {
  const clazz = ['data-item', 'data-item-switch', 'default'];
  Array.isArray(props.data?.styles) ? clazz.push(...props.data.styles) : undefined;
  Array.isArray(props.data?.control[props.data.value]?.styles) ? clazz.push(...props.data.control[props.data.value].styles) : undefined;
  if (disabled.value)
    clazz.push('disabled')
  return clazz;
});

const fetchValue = async () => {
  const res = await fetch(props.data.fetch.url);
  const resBody = await res.json();
  console.log(resBody.value);
}

const control = async () => {
  console.log(disabled.value);
  if (disabled.value) return;

  disabled.value = true;
  await fetch(controlUrl.value, { method: method.value });
  disabled.value = false;

  fetchValue();
}
</script>

<template>
  <div v-if="props.data" :class="clazz"
    :style="{
      visibility: (props.data.value === undefined? 'hidden' : 'visible'),
      top: props.data.position.y + 'px', left: props.data.position.x + 'px'
    }"
    :title="desc"
    @click="control"
  > {{ label }}</div>
</template>

<style scoped>
.data-item-text {
  width: fit-content;
}
</style>
