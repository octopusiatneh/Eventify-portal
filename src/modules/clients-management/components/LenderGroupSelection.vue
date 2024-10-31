<template>
  <VRow>
    <VCol>
      <VRow>
        <VCol lg="12" class="pb-0">
          <VSelect
            v-model="selectedLenderGroups"
            multiple
            chips
            closable-chips
            label="Lender Group"
            :items="items"
          ></VSelect>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedLenderGroups = ref([])
const items = ref(['HCA', 'BHA', 'HA'])
</script>
