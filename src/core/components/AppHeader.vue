<template>
  <VAppBar density="compact" color="primary" class="d-flex flex-0-1">
    <VToolbarTitle>
      <VImg
        height="40"
        :aspect-ratio="2.525"
        class="mr-2"
        src="@/assets/images/fandisentinel_logo_white_text_40.png"
      />
    </VToolbarTitle>
    <VSpacer />
    <VToolbarItems v-if="isAuthenticated">
      <VBtn :to="{ name: 'clients-management' }" variant="text"> Clients </VBtn>
      <VBtn>
        <VIcon icon="mdi-account"></VIcon>
      </VBtn>
    </VToolbarItems>
  </VAppBar>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { isAuthenticated } = useAuth0()
</script>
