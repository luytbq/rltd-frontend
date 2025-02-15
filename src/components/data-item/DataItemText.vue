<script setup>
import './data-item.css';
import { computed } from 'vue';

const props = defineProps({
  // data =
  //  {
  //        "type": "text",
  //        "suffix": " m",
  //        "styles": [
  //            "text-white",
  //            "p-1"
  //        ],
  //        "position": {
  //            "x": 630,
  //            "y": 167
  //        },
  //        "value": "2.95"
  //    }
  data: Object,
});

const clazz = ['data-item', 'data-item-text', 'default'];
Array.isArray(props.data?.styles) ? clazz.push(...props.data.styles) : undefined;

const txt = computed(() => {
  let txt = props.data.prefix? props.data.prefix + ' ' + props.data.value : props.data.value;
  txt += props.data.suffix? ' ' + props.data.suffix: '';
  return txt;
})
</script>

<template>
  <div v-if="props.data" :class="clazz"
    :style="{
      visibility: (props.data.value === undefined? 'hidden' : 'visible'),
      top: props.data.position.y + 'px', left: props.data.position.x + 'px'
    }"
  > {{ txt }}</div>
</template>

<style scoped>
.data-item-text {
  width: fit-content;
}
</style>
