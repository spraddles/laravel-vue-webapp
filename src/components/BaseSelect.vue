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
        v-if="modelValue == ''" 
        :value="props.placeholder"
        selected
        disabled
      >{{props.placeholder}}</option>
      <option 
        v-else
        :value="props.modelValue"
        selected
        disabled
      >{{props.modelValue}}</option>
      <option 
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        @input="$emit('update:modelValue', $event.target.value)"
      >{{option}}</option>
    </select>
  </div>
</template>
