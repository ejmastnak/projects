<script setup>
const props = defineProps({
  title: String,
  img: String,
  imgAlt: String,
  href: String,
})
</script>

<template>
  <div class="w-fit mx-auto md:w-full md:mx-auto flex flex-col md:flex-row gap-y-5 gap-x-10">

    <div class="max-w-lg py-3">
      <h2 class="text-3xl font-semibold leading-snug text-center">
        <RouterLink class="text-blue-500 hover:text-blue-600 hover:underline" :to="href">{{title}}</RouterLink>
      </h2>

      <div class="text-center border-t border-gray-200 pt-5 mt-5 text-sm text-gray-800 max-w-md">
        <slot />
      </div>
    </div>

    <RouterLink class="shrink-0 mx-auto block w-fit" :to="href">
      <img 
        class="object-cover md:h-64 lg:h-80 rounded-lg"
        :src="img"
        :alt="imgAlt" 
      />
    </RouterLink>


  </div>
</template>
