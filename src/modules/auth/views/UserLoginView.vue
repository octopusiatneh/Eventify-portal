<template>
  <div class="h-100 w-100 mx-auto d-flex align-center justify-center">
    <div class="py-12">
      <VCard width="380" class="elevation-4">
        <VCardTitle>
          <VLayout row justify-space-around>
            <VContainer fluid class="p-0">
              <VImg
                :aspect-ratio="2.525"
                justify="left"
                height="125"
                class="my-0 w-full"
                src="@/assets/images/fandisentinel_logo.png"
              />
            </VContainer>
          </VLayout>
        </VCardTitle>
        <VCardText>
          <h1 class="my-4 text-center text-primary font-bold text-2xl">
            Welcome to Admin Portal
          </h1>
          <p class="mb-7 text-info">
            F&amp;I Sentinel's CITADEL is an online system for the submission of
            finance and insurance products for approval for financing by finance
            companies and lenders. If you already have an account, please login
            below.
          </p>
        </VCardText>
        <VCardActions class="p-4">
          <VContainer class="m-0 p-0">
            <VLayout row class="m-0 p-0 justify-space-around">
              <VBtn
                data-cy="login-btn-login"
                color="primary"
                variant="flat"
                @click="handleLogin()"
              >
                Log in
              </VBtn>
            </VLayout>
          </VContainer>
        </VCardActions>
      </VCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from '@/core/composables/useAuth0'

const { login } = useAuth()
const handleLogin = login
</script>
