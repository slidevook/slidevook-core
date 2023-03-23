<template>
  <footer
    v-if="$slidev.nav.currentLayout.match(/default|CenterImage|LeftRightImage|TopBottomImage|Column2|Column2Center|Column3|Column3Center|Square4|Square4Center/)"
    class="absolute top-0 right-0 p-2"
  >
    <img src='https://slidevook-public.s3.ap-northeast-1.amazonaws.com/slidevook-title.svg' style="height: 2rem;"/>
  </footer>
</template>