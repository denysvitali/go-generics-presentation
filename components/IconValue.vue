<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  icon: {
    type: String,
  },
  useFontAwesome: {
    default: false,
  }
});
</script>

<template>
  <div class="icon-container">
    <font-awesome-icon :icon="'fa-solid ' + props.icon" v-if="props.useFontAwesome" />
    <sdx-icon :icon-name="props.icon" size="3" v-if="!props.useFontAwesome"/>
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