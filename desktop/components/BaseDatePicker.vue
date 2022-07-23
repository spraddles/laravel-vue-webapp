<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
})

const changeAttribute = (() => {
  document.getElementById('date_of_birth').setAttribute('type', 'date')
})

</script>

<template>
<div>
  <label v-if="label" class="inline-block mb-3 text-gray-700">{{props.label}}</label>
  <div class="flex">
    <div class="xl:w-96">
      <input
        class="block py-1.5 px-3 m-0 mb-8 w-full 
        text-base font-normal text-gray-700 focus:text-gray-700 
        bg-clip-padding bg-white 
        focus:bg-white rounded border border-gray-300 focus:border-blue-600 border-solid focus:outline-none
        transition ease-in-out"
        :type="props.modelValue ? 'text' : 'date'"
        :id="props.name"
        :name="props.name"
        :placeholder="props.modelValue"
        :value="props.modelValue"
        :aria-label="name"
        @focus="props.modelValue ? changeAttribute() : false"
        @change="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</div>
</template>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  height: 22px;
  width: 22px;
  padding-left: 150px;
}
</style>