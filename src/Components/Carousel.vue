<script setup>
import { ref } from 'vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  imgs: Array,
  imgAlts: Array,
  imgClasses: String,
})

const carouselIdx = ref(props.imgs.length - 1)

function carouselNext() {
  carouselIdx.value = (carouselIdx.value + 1) % props.imgs.length;
}

function carouselPrev() {
  carouselIdx.value = (carouselIdx.value === 0) ? props.imgs.length - 1 : carouselIdx.value - 1;
}

</script>

<template>
  <div>
    <img :class="imgClasses" :src="imgs[carouselIdx]" />

    <!-- Carousel controls -->
    <div class="mt-2 mx-auto w-fit flex items-center gap-x-4">

      <!-- Previous -->
      <button type="button" @click="carouselPrev"  class="rounded-full bg-gray-300 p-1.5 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400">
        <ChevronLeftIcon class="size-5" aria-hidden="true" />
      </button>

      <div class="flex gap-x-1.5">
        <div v-for="(num, i) in imgs.length" :key="i" class="h-2 w-6 rounded-xl" :class="i === carouselIdx ? 'bg-blue-600' : 'bg-gray-200'" />
      </div>

      <!-- Next -->
      <button type="button" @click="carouselNext"  class="rounded-full bg-gray-300 p-1.5 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400">
        <ChevronRightIcon class="size-5" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
