<script setup lang="ts">
import { computed, onMounted } from "vue";
import { handleBackground } from "../layoutHelper";

const props = defineProps({
  tweetUrl: {},
});

onMounted(()=>{
    let script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.head.appendChild(script);
})

</script>

<template>
  <div class="tweet">
    <blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
      <a :href="tweetUrl + '?ref_src=twsrc%5Etfw'" />
    </blockquote>
  </div>
</template>

<style>
.tweet {
  zoom: 0.8;
  -moz-transform: scale(0.8);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.8);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.8);
  -webkit-transform-origin: 0 0;
}
</style>