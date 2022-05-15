<template>
  <label v-if="label" class="inline-block mb-3 text-gray-700">{{ label }}</label>
  <div class="flex justify-center">
    <div class="xl:w-96">
      <input
        class="block py-1.5 px-3 m-0 mb-8 w-full text-base font-normal text-gray-700 focus:text-gray-700 bg-clip-padding bg-white focus:bg-white rounded border border-gray-300 focus:border-blue-600 border-solid focus:outline-none transition ease-in-out"
        :placeholder="placeholder"
        :name="name"
        :type="type"
        :aria-label="name"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  },
};
</script>
