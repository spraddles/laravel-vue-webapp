<script setup>
import { ref } from 'vue'
import BaseLayout from '@layouts/BaseLayout.vue'
import BaseButton from '@components/BaseButton.vue'
import authService from '@services/auth.service.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const formData = ref({ email: 'test@test.com' })

const logout = async (formData) => {
  await authService.logout(formData)
  router.push('/login')
}
</script>

<template>
  <BaseLayout>
    <div class="home-page">
      <h1>Welome to the Home Page</h1>
      <BaseButton @click.prevent="logout(formData)">Log out</BaseButton>
    </div>
  </BaseLayout>
</template>
