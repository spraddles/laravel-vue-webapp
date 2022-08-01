<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { userStore } from '@/store'
import { meService } from '@/services'
import BaseLayout from '@/layouts/BaseLayout.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseRadio from '@/components/BaseRadio.vue'
import BaseCheckboxMulti from '@/components/BaseCheckboxMulti.vue'
import BaseDatePicker from '@/components/BaseDatePicker.vue'

const store = userStore()

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
  getCurrentUserDetails()
})


const getCurrentUserDetails = async () => {
  try {

    const initResponse = await meService.getDetails({ email: store.email })
    const response = initResponse.data.data

    firstName.value = response.first_name
    lastName.value = response.last_name
    dateOfBirth.value = response.date_of_birth
    favouriteFood.value = response.favourite_food.split(',') // convert comma separated strings to array
    language.value = response.language
    gender.value = response.gender

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
        <BaseButton class="xl:w-96">Save</BaseButton>
      </form>
    </div>
  </BaseLayout>
</template>
