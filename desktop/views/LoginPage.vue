<script setup lang="ts">
import { ref } from 'vue'
import CenterLayout from '@/layouts/CenterLayout.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import { authService } from '@/services'
import { useRouter } from 'vue-router'
import { userStore } from '@/store'

const router = useRouter()
const user = userStore()

const formData = ref({
  email: '',
  password: ''
})

const login = async () => {
  try {
    await authService.login(formData.value)
    router.push('/home')
    user.$patch({ email: formData.value.email })
  } catch(error) {
    if (error.response === 401) {
      console.warn('Authentication error')
    }
  }
}
</script>

<template>
  <CenterLayout>
    <div class="bg-gray-50 login-page">
      <img alt="Vue logo" src="../assets/logo.png" class="pt-10 mx-auto w-24 h-full" />
      <form class="p-10">
        <BaseInput
          v-model="formData.email"
          name="username"
          type="email"
          label="Username"
          placeholder="Enter username"
        />
        <BaseInput
          v-model="formData.password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter password"
        />
        <BaseButton
          :fullWidth="true"
          @click.prevent="login()"
        >Log in</BaseButton>
      </form>
    </div>
  </CenterLayout>
</template>
