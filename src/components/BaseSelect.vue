<template>
  <div>
    <label v-if="label" class="inline-block mb-3 text-gray-700">{{label}}</label>
    <select 
      class="block py-1.5 px-3 mb-8
      text-gray-700
      bg-drop-down-arrow-position bg-no-repeat bg-drop-down-arrow-size bg-drop-down-arrow-image
      rounded border border-gray-300
      focus:border-blue-600
      focus:outline-none
      ease-in-out appearance-none xl:w-96"
      :name="label">
      <option
        v-for="(option, index) in options"
        :key="index"
        :selected="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>