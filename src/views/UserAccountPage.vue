<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <BaseLayout>
    <div class="user-account-page">
      <h1 class="mb-10">This is your account page</h1>
      <form>
        <BaseInput name="username" type="email" label="Username" />
        <BaseInput name="password" type="password" label="Password" />
        <BaseButton class="xl:w-96">Save</BaseButton>
      </form>
    </div>
  </BaseLayout>
</template>