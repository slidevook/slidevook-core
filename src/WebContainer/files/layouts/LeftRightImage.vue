<template>
  <div class="slidev-layout">
    <slot />
    <div class="h-11/12 w-full grid grid-rows-1 grid-cols-2 place-items-center gap-x-2">
      <div class="h-full flex place-items-center">
        <img :src="leftImagePath" class="max-h-full rounded-lg" crossorigin="anonymous" />
      </div>
      <div class="h-full flex place-items-center">
        <img :src="rightImagePath" class="max-h-full rounded-lg" crossorigin="anonymous" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from 'vue';
const props = defineProps({
  leftImage: {
    type: String,
    required: true,
  },
  rightImage: {
    type: String,
    required: true,
  }
});
const leftImagePath = computed(
  () => {
    return props.leftImage.startsWith('/') ? props.leftImage.slice(1) : props.leftImage; // NOTE: convert absolute path -> relative path for build to SPA
  }
);
const rightImagePath = computed(
  () => {
    return props.rightImage.startsWith('/') ? props.rightImage.slice(1) : props.rightImage; // NOTE: convert absolute path -> relative path for build to SPA
  }
);
</script>