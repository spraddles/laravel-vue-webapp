<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseRadio from '@/components/BaseRadio.vue'
import BaseCheckboxMulti from '@/components/BaseCheckboxMulti.vue'
import BaseDatePicker from '@/components/BaseDatePicker.vue'

const form = {
  firstName: ref(''),
  lastName: ref(''),
  dateOfBirth: ref(''),
  language: ref(''),
  gender: ref(''),
}

const favouriteFood = ref([])
const favouriteFoodOptions = ref([])
const languageOptions = ref([])
const genderOptions = ref([])

onMounted(() => {
  getExistingFirstName()
  getExistingLastName()
  getExistingDateOfBirth()
  getExistingFavouriteFood()
  getFavouriteFoodOptions()
  getExistingLanguage()
  getLanguageOptions()
  getExistingGender()
  getGenderOptions()
})

// FIRST NAME
const getExistingFirstName = (() => {
  var a = 'John'
  form.firstName.value = a
})

// LAST NAME
const getExistingLastName = (() => {
  var a = 'Smith'
  form.lastName.value = a
})

// DATE OF BIRTH
const getExistingDateOfBirth = (() => {
  var a = '01/01/1993'
  form.dateOfBirth.value = a
})

// FAVOURITE FOOD
const getExistingFavouriteFood = (() => {
  var a = ['Italian', 'Mexican']
  favouriteFood.value = a
})
const getFavouriteFoodOptions = (() => {
  var a = ['Thai', 'Italian', 'Mexican', 'Greek', 'Seafood', 'Steak']
  favouriteFoodOptions.value = a
})

// LANGUAGE
const getExistingLanguage = (() => {
  var a = 'German'
  form.language.value = a
})
const getLanguageOptions = (() => {
  var a = ['English', 'German', 'Spanish', 'Russian', 'Portuguese', 'French']
  languageOptions.value = a
})

// GENDER
const getExistingGender = (() => {
  var a = 'Female'
  form.gender.value = a
})
const getGenderOptions = (() => {
  var a = ['Male', 'Female', 'Other']
  genderOptions.value = a
})

</script>

<template>
  <BaseLayout>
    <div class="user-profile-page">
      <h1 class="mb-10">This is your profile page</h1>
      <form>
        <BaseInput 
          v-model="form.firstName"
          :name="'first_name'"
          type="text"
          :label="'First name'"
          :placeholder="'Type your first name'"
        />
        <BaseInput 
          v-model="form.lastName"
          :name="'last_name'"
          type="text"
          :label="'Last name'"
          :placeholder="'Type your last name'"
        />
        <BaseDatePicker
          v-model="form.dateOfBirth"
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
          v-model="form.language"
          :options="languageOptions"
          :placeholder="'Please select a language'"
          :label="'Language'"
        />
        <BaseRadio
          v-model="form.gender"
          :options="genderOptions"
          :heading="'Gender'"
          :name="'gender'"
        />
        <BaseButton class="xl:w-96">Save</BaseButton>
      </form>
    </div>
  </BaseLayout>
</template>
