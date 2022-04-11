<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
  backgroundSize: {
    default: 'cover',
  },
  dim: {
    default: true,
  }
})

const style = computed(() => {
    let s = handleBackground(props.background, props.dim)
    s.backgroundSize = props.backgroundSize;
    return s;  
  }
)</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <swisscom-branding/>
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
