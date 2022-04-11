<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
  blur: {
    default: false,
  }
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout fact" :style="style">
    <swisscom-branding/>
      <div class="my-auto">
        <slot />
    </div>
  </div>
</template>
