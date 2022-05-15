<template>
  <CenterLayout>
    <div class="bg-gray-50 login-page">
      <img alt="Vue logo" src="../assets/logo.png" class="pt-10 mx-auto w-24 h-full" />
      <form class="p-10">
        <BaseInput
          v-model="username"
          name="username"
          type="email"
          label="Username"
          placeholder="Enter username"
        />
        <BaseInput
          v-model="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter password"
        />
        <BaseButton>Log in</BaseButton>
      </form>
    </div>
  </CenterLayout>
</template>

<script>
import CenterLayout from '@/layouts/CenterLayout.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'LoginPage',
  components: {
    CenterLayout,
    BaseInput,
    BaseButton,
  },
};
</script>
