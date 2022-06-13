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

// FAVOURITE FOOD
const getExistingFavouriteFood = (() => {
  var a = ['Italian', 'Mexican'];
  favouriteFood.value = a;
});
const getFavouriteFoodOptions = (() => {
  var a = ['Thai', 'Italian', 'Mexican', 'Greek', 'Seafood', 'Steak'];
  favouriteFoodOptions.value = a;
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

// GENDER
const getExistingGender = (() => {
  var a = 'Female';
  gender.value = a;
});
const getGenderOptions = (() => {
  var a = ['Male', 'Female', 'Other'];
  genderOptions.value = a;
});

</script>

<template>
  <BaseLayout>
    <div class="user-profile-page">
      <h1 class="mb-10">This is your profile page</h1>
      <form>
        <BaseInput 
          v-model="firstName"
          :name="'first_name'"
          type="text"
          :label="'First name'"
          :placeholder="'Type your first name'"
        />
        <BaseInput 
          v-model="lastName"
          :name="'last_name'"
          type="text"
          :label="'Last name'"
          :placeholder="'Type your last name'"
        />
        <BaseDatePicker
          v-model="dateOfBirth"
          :name="'date_of_birth'"
          :label="'Date of birth'"
        />
        <BaseCheckboxMulti
          v-model="favouriteFood"
          :options="favouriteFoodOptions"
          :heading="'Favourite food'"
          :name="'favourite_food'"
        />
        <BaseSelect
          v-model="language"
          :options="languageOptions"
          :placeholder="'Please select a language'"
          :label="'Language'"
        />
        <BaseRadio
          v-model="gender"
          :options="genderOptions"
          :heading="'Gender'"
          :name="'gender'"
        />
        <BaseButton class="xl:w-96">Save</BaseButton>
      </form>
    </div>
  </BaseLayout>
</template>
