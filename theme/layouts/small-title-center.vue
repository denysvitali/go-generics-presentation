<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
  align: {
    default: 'top'
  },
  slideTitle: {
    default: 'X'
  }
})

const style = computed(() => {
    let properties = handleBackground(props.background, true)
    properties['vertical-align'] = props.align
  }
)
</script>

<template>
  <div class="slidev-layout" :style="style">
    <swisscom-branding/>
    <div class="small-title-slide-center w-full h-full">
      <h1 v-html="props.slideTitle"/>
      <div class="vertical-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>

.small-title-slide-center .vertical-center {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

.vertical-center {
  height: 100%;
}
</style>