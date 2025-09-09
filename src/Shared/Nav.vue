<script setup>
import logo from '@/assets/img/logo.svg'
</script>

<template>
  <nav class="sticky relative top-0 bg-white border-b z-20 py-5 px-4">
    <div class="max-w-5xl mx-auto flex items-center">
      <RouterLink to="/" class="mt-1 text-xl font-medium">
        <img :src="logo" />
      </RouterLink>
    </div>
  </nav>
</template>
