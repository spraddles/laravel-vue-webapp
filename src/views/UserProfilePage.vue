<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { onMounted, ref } from 'vue';

const language = ref('');
const languageOptions = ref([]);

onMounted(() => {
  getExistingLanguage();
  getLanguageOptions();
  // console.log(language.value);
});

const getExistingLanguage = (() => {
  // some API request that fetches existing language
  // returns a string (if set) else returns empty string (if none set)
  var a = 'German';
  language.value = a;
});

const getLanguageOptions = (() => {
  // some API that fetches language options
  var b = ['English', 'German', 'Spanish', 'Russian', 'Portuguese', 'French'];
  languageOptions.value = b;
});
</script>

<template>
  <BaseLayout>
    <div class="user-profile-page">
      <h1 class="mb-10">Welcome to your profile page</h1>
      <form>
        <BaseInput name="firstName" type="text" label="First name" />
        <BaseInput name="lastName" type="text" label="Last name" />
        <BaseSelect
          :model-value="language"
          :options="languageOptions"
          :placeholder="'Please select a language'"
          :label="'Language'"
          @update:modelValue="language"
        />
        <BaseInput name="username" type="email" label="Username" />
        <BaseInput name="password" type="password" label="Password" />
        <BaseButton class="xl:w-96">Save</BaseButton>
      </form>
    </div>
  </BaseLayout>
</template>