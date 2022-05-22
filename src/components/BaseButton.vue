<template>
  <div class="flex justify-center mt-4 space-x-2">
    <button
      type="button"
      class="py-2 px-6 w-full font-medium text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-200"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {},
};
</script>

<style type="text/css">
button {
  width: 200px;
}
</style>
