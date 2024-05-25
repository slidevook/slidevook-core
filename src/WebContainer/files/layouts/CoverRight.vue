<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  image: {
    type: String,
  },
});

const imagePath = computed(
  () => {
    const srcPath = `${props.image.startsWith('/') ? props.image.slice(1) : props.image}`;// NOTE: convert absolute path -> relative path for build to SPA
    return srcPath;
  }
);
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
    <div class="slidev-layout default">
      <slot />
    </div>
    <div class="w-full w-full">
      <img class="object-cover w-full h-full" :src="imagePath" crossorigin="anonymous" />
    </div>
  </div>
</template>
