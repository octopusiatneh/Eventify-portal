<template>
  <VSheet flat color="secondary" class="px-8 py-4">
    {{ title }}
  </VSheet>
</template>

<script setup lang="ts">
defineProps({
  title: String,
})
</script>