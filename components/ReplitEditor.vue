<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  path: {
    default: "@denysvitali/go-generics-example-1",
  },
  file: {
    default: "main.go",
  },
});

const path = ref(props.path);
const file = ref(props.file);
</script>

<template>
  <div class="code-container">
    <iframe
      frameborder="0"
      class="code-frame"
      :src="`https://replit.com/${path}?embed=true#${file}`"
    >
    </iframe>
  </div>
</template>

<style scoped>
div.code-container {
  position: relative;
  width: 100%;
  height: 500px;
}
iframe.code-frame {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 133.33%;
  height: 100%;
  zoom: 0.75;
  -moz-transform: scale(0.75);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.75);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.75);
  -webkit-transform-origin: 0 0;
}
</style>