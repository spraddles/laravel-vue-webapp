<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  heading: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => []
  },
})

</script>

<template>
  <div class="mb-8">
    <p v-if="props.heading" class="mb-3 text-gray-700">{{props.heading}}</p>
    <div v-for="(option, index) in options" :key="index" class="mb-3">
      <input
        class="mr-3 w-5 h-5"
        type="radio"
        :name="props.name"
        :value="option"
        :id="option"
        :checked="option === props.modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      />
      <label class="relative bottom-1 text-gray-700" :for="option">{{option}}</label>
    </div>
  </div>
</template>
