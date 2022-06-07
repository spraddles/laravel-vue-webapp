<script setup>
import { onMounted, ref } from 'vue';
import BaseLayout from '@/layouts/BaseLayout.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseRadio from '@/components/BaseRadio.vue';
import BaseCheckboxMulti from '@/components/BaseCheckboxMulti.vue';
import BaseDatePicker from '@/components/BaseDatePicker.vue';

const firstName = ref('');
const lastName = ref('');
const dateOfBirth = ref('');
const favouriteFood = ref([]);
const favouriteFoodOptions = ref([]);
const language = ref('');
const languageOptions = ref([]);
const gender = ref('');
const genderOptions = ref([]);

onMounted(() => {
  getExistingFirstName();
  getExistingLastName();
  getExistingDateOfBirth();
  getExistingFavouriteFood();
  getFavouriteFoodOptions();
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

// DATE OF BIRTH
const getExistingDateOfBirth = (() => {
  var a = '01/01/1993';
  dateOfBirth.value = a;
});
const updateDateOfBirthFromChildComponent = ((value) => {
  dateOfBirth.value = value
});

// FAVOURITE FOOD
const getExistingFavouriteFood = (() => {
  var a = ['Italian', 'Mexican'];
  favouriteFood.value = a;
});
const getFavouriteFoodOptions = (() => {
  var a = ['Thai', 'Italian', 'Mexican', 'Greek', 'Seafood', 'Steak'];
  favouriteFoodOptions.value = a;
});
const updateFavouriteFoodFromChildComponent = ((value) => {
  favouriteFood.value = value
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
  var a = 'Female';
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
          :model-value="firstName"
          :name="'first_name'"
          type="text"
          :label="'First name'"
          :placeholder="'Type your first name'"
          @update:modelValue="firstName=$event"
        />
        <BaseInput 
          :model-value="lastName"
          :name="'last_name'"
          type="text"
          :label="'Last name'"
          :placeholder="'Type your last name'"
        />
        <BaseDatePicker
          :model-value="dateOfBirth"
          :name="'date_of_birth'"
          :label="'Date of birth'"
          @update:modelValue="updateDateOfBirthFromChildComponent($event)"
        />
        <BaseCheckboxMulti
          :model-value="favouriteFood"
          :options="favouriteFoodOptions"
          :heading="'Favourite food'"
          :name="'favourite_food'"
          @update:modelValue="updateFavouriteFoodFromChildComponent($event)"
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
