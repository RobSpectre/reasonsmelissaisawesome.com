<script setup>
import { ref } from 'vue'

import { useReasons } from '@/stores/reasons'

const reason = ref('')
const reasonStore = useReasons()

const handleSubmit = async () => {
  if (reason.value.trim()) {
    await reasonStore.addReason(reason.value)
    reason.value = ''
  }
}
</script>

<template lang='pug'>
.flex.flex-row.items-center.justify-center.w-full.px-5
  input.flex-1.p-3.border.border-stone-50.rounded-sm(
    v-model='reason'
    type='text'
    placeholder='Enter a reason why Melissa is awesome...'
    class='placeholder:text-xs'
    @keydown.enter='handleSubmit()'
  )
  button.w-24.ml-3.p-3.bg-stone-500.text-white.rounded-sm.uppercase(
    @click='handleSubmit()'
    class='hover:bg-stone-400'
  ) Submit
</template>
