<script setup>
const props = defineProps({
  title: String,
  img: String,
  imgAlt: String,
  href: String,
})
</script>

<template>
  <div class="flex gap-x-5">
    <RouterLink class="shrink-0" :to="href">
      <img 
        class="object-cover h-28 w-28 rounded-lg"
        :src="img"
        :alt="imgAlt" 
      />
    </RouterLink>
    <div class="max-w-lg">
      <RouterLink class="text-blue-500 hover:text-blue-600 hover:underline font-semibold leading-snug" :to="href">{{title}}</RouterLink>
      <div class="mt-1 sm:mt-px text-sm text-gray-800">
        <slot />
      </div>
    </div>
  </div>

</template>
