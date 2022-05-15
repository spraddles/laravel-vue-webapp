<template>
  <BaseLayout>
    <div class="user-profile-page">
      <h1 class="mb-10">Welome to your profile page</h1>
      <form>
        <BaseInput
          name="firstName"
          type="text"
          label="First name"
        />
        <BaseInput
          name="lastName"
          type="text"
          label="Last name"
        />
        <BaseSelect
          :options="options"
          label="Language"
        />
        <BaseInput
          v-model="language"
          name="username"
          type="email"
          label="Username"
        />
        <BaseInput
          name="password"
          type="password"
          label="Password"
        />
        <BaseButton class="xl:w-96">Save</BaseButton>
      </form>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';

export default {
  name: 'UserProfilePage',
  components: {
    BaseLayout,
    BaseInput,
    BaseButton,
    BaseSelect
  },
  data() {
    return {
      langauge: '',
      options: ['English', 'German', 'Spanish', 'Russian']
    }
  }
};
</script>