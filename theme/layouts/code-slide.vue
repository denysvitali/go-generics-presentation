<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout default" :class="props.class">
    <swisscom-branding/>
    <slot />
  </div>
</template>