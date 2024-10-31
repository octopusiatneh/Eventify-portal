<template>
  <AppPageTitle title="Create new client" />
  <VContainer>
    <VForm>
      <VContainer fluid>
        <ClientDetailsInput />
        <LenderGroupSelection />
        <EndpointSelection />
      </VContainer>
    </VForm>
  </VContainer>
</template>

<script setup lang="ts">
import AppPageTitle from '@/core/components/AppPageTitle.vue'
import ClientDetailsInput from '@/modules/clients-management/components/ClientDetailsInput.vue'
import EndpointSelection from '@/modules/clients-management/components/EndpointSelection.vue'
import LenderGroupSelection from '@/modules/clients-management/components/LenderGroupSelection.vue'
</script>
