<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  icon: {
    type: String,
  },
});
</script>

<template>
  <div class="icon-container">
    <sdx-icon :icon-name="props.icon" size="3"/>
    <div class="icon-text"><slot/></div>
  </div>
</template>

<style scoped>
  div.icon-container {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
</style>