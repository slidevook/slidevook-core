<template>
  <footer
    v-if="$slidev.nav.currentLayout.match(/^RightImage|CoverRight/)"
    class="absolute bottom-0 left-0 p-2"
  >
    <img src='https://slidevook-public.s3.ap-northeast-1.amazonaws.com/slidevook-title.png' style="height: 2rem;"/>
  </footer>
</template>