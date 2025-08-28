<script setup>

import Carousel from '@/Components/Carousel.vue'

const props = defineProps({
  reverse: Boolean,
  imgs: Array,
  imgAlts: Array,
  caption: String,
  imgClasses: String,
  captionClasses: String,
})
</script>
<template>
  <div
    class="md:flex md:gap-x-6"
    :class="reverse ? 'md:flex-row-reverse' : ''"
  >
    <div class="mb-4 md:mb-0 shrink-0">
      <Carousel :imgs="imgs" :imgAlts="imgAlts" :imgClasses="imgClasses" />
      <p v-if="caption" :class="captionClasses" class="text-base text-gray-700 text-center mx-auto">{{caption}}</p>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
