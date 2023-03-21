<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
});
</script>
<template>
  <div class="slidev-layout">
    <slot name="title"/>
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-6">
        <slot name="left"/>
      </div>
      <div class="col-span-6">
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>