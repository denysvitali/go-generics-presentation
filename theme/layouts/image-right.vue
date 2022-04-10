<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  image: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: "cover",
  },
  class: {
    type: String,
  },
})
const style = computed(() => {
    let s = handleBackground(props.image)
    s.backgroundSize = props.backgroundSize;
    return s;  
  }
)
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <swisscom-branding/>
    <div class="slidev-layout default" :class="props.class">
      <slot />
    </div>
    <div class="w-full w-full" :style="style" />
  </div>
</template>