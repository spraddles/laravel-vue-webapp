<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseRadio from '@/components/BaseRadio.vue';
import { onMounted, ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const language = ref('');
const languageOptions = ref([]);
const gender = ref('');
const genderOptions = ref([]);

onMounted(() => {
  getExistingFirstName();
  getExistingLastName();
  getExistingLanguage();
  getLanguageOptions();
  getExistingGender();
  getGenderOptions();
});

// FIRST NAME
const getExistingFirstName = (() => {
  var a = 'John';
  firstName.value = a;
});

// LAST NAME
const getExistingLastName = (() => {
  var a = 'Smith';
  lastName.value = a;
});

// LANGUAGE
const getExistingLanguage = (() => {
  var a = 'German';
  language.value = a;
});
const getLanguageOptions = (() => {
  var a = ['English', 'German', 'Spanish', 'Russian', 'Portuguese', 'French'];
  languageOptions.value = a;
});
const updateLanguageFromChildComponent = ((value) => {
  language.value = value
});

// GENDER
const getExistingGender = (() => {
  var a = 'Male';
  gender.value = a;
});
const getGenderOptions = (() => {
  var a = ['Male', 'Female', 'Other'];
  genderOptions.value = a;
});
const updateGenderFromChildComponent = ((value) => {
  gender.value = value
});
</script>

<template>
  <BaseLayout>
    <div class="user-profile-page">
      <h1 class="mb-10">This is your profile page</h1>
      <form>
        <BaseInput 
          name="firstName"
            type="text"
            :label="'First name'"
          />
        <BaseInput 
          name="lastName"
            type="text"
            :label="'Last name'"
          />
        <BaseSelect
          :model-value="language"
          :options="languageOptions"
          :placeholder="'Please select a language'"
          :label="'Language'"
          @update:modelValue="updateLanguageFromChildComponent($event)"
        />
        <BaseRadio
          :model-value="gender"
          :options="genderOptions"
          :heading="'Gender'"
          :name="'gender'"
          @update:modelValue="updateGenderFromChildComponent($event)"
        />
        <BaseButton class="xl:w-96">Save</BaseButton>
      </form>
    </div>
  </BaseLayout>
</template>