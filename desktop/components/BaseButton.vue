<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  fullWidth: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="flex mt-4 space-x-2">
    <button
      type="button"
      :class="fullWidth ? 'w-full' : ''"
      class="py-2 px-6 font-medium text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-200"
    >
      <slot />
    </button>
  </div>
</template>

<style type="text/css">
button {
  width: 200px;
}
</style>
