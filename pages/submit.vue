<script setup>
import { onMounted } from 'vue'

import Submit from '@/components/Submit.vue'
import ReasonsList from '@/components/ReasonsList.vue'
import Title from '@/components/Title.vue'

import { useReasons } from '@/stores/reasons'

const reasonsStore = useReasons()

onMounted( async () => {
  reasonsStore.subscribeToReasons()
})
</script>

<template lang='pug'>
.min-h-screen.flex.flex-col.items-center.justify-center
  Title
  Submit
  ReasonsList(:reasons='reasonsStore.reasons')
</template>
