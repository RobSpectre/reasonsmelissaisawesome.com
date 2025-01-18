<script setup>
import { onMounted } from 'vue'

import Header from '@/components/Header.vue'
import ReasonsList from '~/components/ReasonsList.vue'
import Title from '@/components/Title.vue'

import { useReasons } from '@/stores/reasons'

const reasonsStore = useReasons()

onMounted( async () => {
  reasonsStore.subscribeToReasons()
})
</script>

<template lang='pug'>
.min-h-screen.flex.flex-col.items-center.justify-center(class="print:hidden")
  Header
  .text-white
    Title
  ReasonsList(:reasons='reasonsStore.reasons')
.hidden.print-wrapper(class="print:block")
    .centered-content.text-stone-900
      Title
    .text-content.uppercase.text-2xl.text-stone-800
      p.inline.ml-2(
        v-if='reasonsStore.reasons'
        v-for='reason in reasonsStore.reasons'
      ) 
        | {{ reason.text }} |
</template>

<style>
@media print {
  /* Set page to US Letter size landscape */
  @page {
    size: letter landscape;  /* 11" x 8.5" */
    margin: 0.25in;         /* Reduced margins to maximize space */
  }

  /* Reset default body styles */
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    page-break-after: always;
    page-break-before: avoid;
  }

  /* Main content wrapper */
  .print-wrapper {
    position: relative;
    height: calc(8.5in - 0.5in);
    width: calc(11in - 0.5in);
    padding: 0.25in;
    overflow: hidden;
  }

  /* Centered div (remove absolute positioning and let it flow) */
  .centered-content {
    margin: 0 1rem 1rem 1rem;         /* space around it so text is not flush */
    shape-outside: circle(50%);       /* example shape, or a polygon(...) */
    shape-margin: 0.5rem;
    border: 1px solid #000;
    padding: 0.15in;
    background: #fff;
  }

  /* Text content (remove shape-outside & columns) */
  .text-content {
    position: relative;
    margin: 0.25in;
    text-align: justify;
    hyphens: auto;
    /* Remove shape-outside and shape-margin
       because we no longer need it (and they do nothing
       unless the element is floated anyway):
       
       shape-outside: polygon(...);
       shape-margin: 0.15in;
    */
    
    /* Remove column properties to avoid complicating flow */
    column-count: 1;
  }

  p {
    font-size: 1.56rem;
    margin-bottom: 1rem; /* optional spacing between paragraphs */
  }

  /* Hide any elements that shouldn't appear in print */
  .no-print {
    display: none !important;
  }
}
</style>
