<template lang='pug'>
.w-full.flex.items-center.justify-center
  h1 Reasons
    span.title Melissa!
    | is awesome
</template>

<style lang='sass'>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker')

@mixin inter-tight($weight: 400)
  font-weight: $weight

h1
  @include inter-tight(700)
  @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl uppercase

.title
  font-family: 'Permanent Marker', serif
  font-weight: 400
  @apply mx-3 normal-case text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl
</style>
