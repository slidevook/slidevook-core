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
<template>
  <div class="h-full w-full grid grid-cols-12 gap-5">
    <div class="col-span-8">
      <div class="slidev-layout">
        <slot/>
      </div>
    </div>
    <div class="col-span-4">
      <div class="h-full flex place-items-center mr-2">
        <img :src="imagePath" class="max-h-full" crossorigin="anonymous" />
      </div>
    </div>
  </div>
</template>