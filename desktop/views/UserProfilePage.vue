<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { userStore } from '@/store'
import { userService } from '@/services'
import BaseLayout from '@/layouts/BaseLayout.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseRadio from '@/components/BaseRadio.vue'
import BaseCheckboxMulti from '@/components/BaseCheckboxMulti.vue'
import BaseDatePicker from '@/components/BaseDatePicker.vue'

const store = userStore()

const userID = ref('')
const firstName = ref('')
const lastName = ref('')
const dateOfBirth = ref('')
const favouriteFood = ref([])
const language = ref('')
const gender = ref('')

const favouriteFoodOptions = ref(['Thai', 'Italian', 'Mexican', 'Greek', 'Seafood', 'Steak', 'Chinese'])
const languageOptions = ref(['English', 'German', 'Spanish', 'Russian', 'Portuguese', 'French', 'Italian'])
const genderOptions = ref(['Male', 'Female', 'Other'])

onMounted(() => {
  fetchUserDetails()
})

const fetchUserDetails = async () => {
  try {
    const initResponse = await userService.getDetails({ email: store.email })
    const response = initResponse.data.data
    userID.value = response.id
    firstName.value = response.first_name
    lastName.value = response.last_name
    dateOfBirth.value = response.date_of_birth
    favouriteFood.value = response.favourite_food.split(',') // string to array
    language.value = response.language
    gender.value = response.gender
  } catch(error) {
    if (error.response === 401) {
      console.warn('Error retrieving data')
    }
  }
}

const saveUserDetails = async () => {
  const userObject = {
    first_name: firstName.value,
    last_name: lastName.value,
    date_of_birth: dateOfBirth.value,
    favourite_food: String(favouriteFood.value), // array to string
    gender: gender.value,
    language: language.value
  }
  try {
    await userService.updateDetails(userID.value, userObject)
  } catch(error) {
    if (error.response === 401) {
      console.warn('Error retrieving data')
    }
  }
}

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
        <BaseButton 
          :fullWidth="true"
          class="xl:w-96" 
          @click.prevent="saveUserDetails()"
        >Save</BaseButton>
      </form>
    </div>
  </BaseLayout>
</template>
