<template>
  <div class="slidev-layout">
    <slot />
    <div class="h-11/12 w-full grid grid-cols-1 grid-rows-2 gap-y-0.5 place-items-center">
      <img :src="topImagePath" class="rounded-md max-h-full" crossorigin="anonymous" />
      <img :src="bottomImagePath" class="rounded-md max-h-full" crossorigin="anonymous" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from 'vue';
const props = defineProps({
  topImage: {
    type: String,
    required: true,
  },
  bottomImage: {
    type: String,
    required: true,
  }
});
const topImagePath = computed(
  () => {
    return props.topImage.startsWith('/') ? props.topImage.slice(1) : props.topImage; // NOTE: convert absolute path -> relative path for build to SPA
  }
);
const bottomImagePath = computed(
  () => {
    return props.bottomImage.startsWith('/') ? props.bottomImage.slice(1) : props.bottomImage; // NOTE: convert absolute path -> relative path for build to SPA
  }
);
</script>