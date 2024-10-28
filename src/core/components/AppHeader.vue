<template>
  <VAppBar density="compact" color="primary">
    <VToolbarTitle>
      <VImg
        height="40"
        :aspect-ratio="2.525"
        class="mr-2"
        src="@/assets/images/fandisentinel_logo_white_text_40.png"
      />
    </VToolbarTitle>
    <VSpacer />
    <VToolbarItems>
      <VBtn
        v-for="btn in buttons"
        :key="btn.name"
        :to="btn.route"
        variant="text"
      >
        {{ btn.name }}
      </VBtn>
    </VToolbarItems>
  </VAppBar>
</template>

<script setup lang="ts">
const buttons = [
  {
    name: 'Clients',
    route: 'clients-management',
  },
  {
    name: 'Endpoints',
    route: 'endpoints-management',
  },
]
</script>
