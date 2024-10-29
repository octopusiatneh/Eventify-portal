<template>
  <AppPageTitle title="Endpoints management" />
  <h1 v-if="isAuthenticated">Is authenticated</h1>
  <h1 v-else>Not authenticated</h1>
</template>

<script setup lang="ts">
import AppPageTitle from '@/core/components/AppPageTitle.vue'
import { useAuth0 } from '@auth0/auth0-vue'

const { isAuthenticated } = useAuth0()

console.log(isAuthenticated.value)
</script>
