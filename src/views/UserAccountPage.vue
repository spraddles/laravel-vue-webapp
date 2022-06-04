<script setup>
import { ref, onMounted } from 'vue';
import BaseLayout from '@/layouts/BaseLayout.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseCheckboxSingle from '@/components/BaseCheckboxSingle.vue';
import BaseButton from '@/components/BaseButton.vue';

onMounted(() => {
  getExistingIsAdmin();
});

const isAdmin = ref(false);

const getExistingIsAdmin = (() => {
  var a = true;
  isAdmin.value = a;
});
const updateIsAdminFromChildComponent = ((value) => {
  isAdmin.value = value
});

</script>

<template>
  <BaseLayout>
    <div class="user-account-page">
      <h1 class="mb-10">This is your account page</h1>
      <form>
        <BaseInput name="username" type="email" label="Username" />
        <BaseInput name="password" type="password" label="Password" />
        <BaseCheckboxSingle
          :model-value="isAdmin"
          :heading="'Remember this setting'"
          :name="'remember_setting'"
          @update:modelValue="updateIsAdminFromChildComponent($event)"
        />
        <BaseButton class="xl:w-96">Save</BaseButton>
      </form>
    </div>
  </BaseLayout>
</template>