<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  heading: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  }
})

</script>

<template>
  <div class="mb-8">
    <input 
      class="mr-3 w-5 h-5"
      type="checkbox"
      :id="props.name"
      :name="props.name"
      :checked="props.modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label class="relative bottom-1 text-gray-700" :for="props.name">{{props.heading}}</label>
  </div>
</template>
