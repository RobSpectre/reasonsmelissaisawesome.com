<script setup>
import { computed } from 'vue'

import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const props = defineProps({
  reasons: Array
})

const carouselConfig = {
  dir: 'ttb',
  snapAlign: 'center',
  height: 500,
  itemsToShow: 8,
  wrapAround: true,
  autoplay: 400
}


</script>

<template lang='pug'>
.relative
  Carousel(v-bind='carouselConfig')
    Slide(v-for='reason in reasons' :key='reason.id')
      h2 {{ reason.text }}
  .fade-overlay.fade-top
  .fade-overlay.fade-bottom
</template>

<style lang='sass' scoped>
$fade-height: 150px
$fade-bg-color: #1c1917
$fade-bg-opacity: 1

.carousel__slide
  @apply text-white

.fade-overlay
  position: absolute
  left: 0
  width: 100%
  pointer-events: none
  z-index: 5

.fade-top
  position: absolute
  top: 0
  height: $fade-height
  background: linear-gradient(to bottom, rgba($fade-bg-color, $fade-bg-opacity), rgba($fade-bg-color, 0))

.fade-bottom
  position: absolute
  bottom: 0
  height: $fade-height
  background: linear-gradient(to top, rgba($fade-bg-color, $fade-bg-opacity), rgba($fade-bg-color, 0))
</style>
