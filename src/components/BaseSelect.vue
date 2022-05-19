<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: '',
  }
});
</script>

<template>
  <div>
    <label v-if="props.label" class="inline-block mb-3 text-gray-700">{{props.label}}</label>
    <select 
      class="block py-1.5 px-3 mb-8
      text-gray-700
      bg-drop-down-arrow-position bg-no-repeat bg-drop-down-arrow-size bg-drop-down-arrow-image
      rounded border border-gray-300
      focus:border-blue-600
      focus:outline-none
      ease-in-out appearance-none xl:w-96"
      :name="props.label">
      <option 
        v-if="props.placeholder" 
        :value="props.placeholder"
        selected 
        disabled
        @input="$emit('update:modelValue', $event.target.value)"
      >{{props.placeholder}}</option>
    </select>
  </div>
</template>
