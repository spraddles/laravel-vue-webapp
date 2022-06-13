<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
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
    default: () =>[]
  },
});

const emit = defineEmits(['update:modelValue']);

const check = (item, checked) => {
  let updatedValue = [...props.modelValue];
  if (checked) {
    updatedValue.push(item);
  } else {
    updatedValue.splice(updatedValue.indexOf(item), 1);
  }
  emit('update:modelValue', updatedValue);
};

</script>

<template>
  <div class="mb-8">
    <p v-if="props.heading" class="mb-3 text-gray-700">{{props.heading}}</p>
    <div 
      class="mb-3" 
      v-for="(option, index) in options"
      :key="index">
      <input
        class="mr-3 w-5 h-5"
        type="checkbox"
        :id="option"
        :name="props.name"
        :checked="props.modelValue.includes(option)"
        @change="check(option, $event.target.checked)"
      />
      <label class="relative bottom-1 text-gray-700" :for="option">{{option}}</label>
    </div>
  </div>
</template>
