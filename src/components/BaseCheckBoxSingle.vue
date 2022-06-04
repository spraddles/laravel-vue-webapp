<script setup>
import { defineProps, defineEmits } from 'vue';

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
});

defineEmits(['update:modelValue']);

</script>

<template>
  <div class="mb-8">
    <input 
      class="mr-3 w-5 h-5"
      type="checkbox"
      :id="props.name"
      :name="props.name"
      :checked="props.modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    />
    <label class="relative bottom-1 text-gray-700" :for="props.name">{{props.heading}}</label>
  </div>
</template>
