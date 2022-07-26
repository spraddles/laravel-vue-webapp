<script setup>
import SideMenu from '@/components/SideMenu.vue'
</script>

<template>
  <div class="container">
    <div class="flex my-12 mx-auto lg:w-11/12">
      <div class="w-1/4 h-12">
        <SideMenu />
      </div>
      <div class="w-3/4 h-12">
        <slot />
      </div>
    </div>
  </div>
</template>