<script setup lang="ts">
import { ref } from 'vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import BaseButton from '@/components/BaseButton.vue'
import { authService } from '@/services'
import { useRouter } from 'vue-router'
import { userStore } from '@/store'

const router = useRouter()
const user = userStore()

const formData = ref({ email: user.email })

const logout = async () => {
  await authService.logout(formData.value)
  router.push('/login')
}
</script>

<template>
  <BaseLayout>
    <div class="home-page">
      <h1>Welome to the Home Page</h1>
      <BaseButton @click.prevent="logout()">Log out</BaseButton>
    </div>
  </BaseLayout>
</template>
