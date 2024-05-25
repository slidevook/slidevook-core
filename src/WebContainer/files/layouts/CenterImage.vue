<template>
  <div class="h-full w-full">
    <div class="slidev-layout">
      <slot />
      <div class="grid grid-rows-1 h-11/12 place-items-center">
        <div class="h-full manual-shadow flex place-items-center">
          <img :src="imagePath" class="max-h-full rounded-lg" crossorigin="anonymous" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from 'vue';
const props = defineProps({
  image: {
    type: String,
    required: true,
  }
});

const imagePath = computed(
  () => {
    return props.image.startsWith('/') ? props.image.slice(1) : props.image; // NOTE: convert absolute path -> relative path for build to SPA
  }
);
</script>