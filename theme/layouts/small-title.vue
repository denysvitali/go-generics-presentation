<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout" :style="style">
    <swisscom-branding/>
    <div class="small-title-slide w-full">
      <slot />
    </div>
  </div>
</template>

<style>
.small-title-slide h1 {
  font-size: 2rem;
}
</style>