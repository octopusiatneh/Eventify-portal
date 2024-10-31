<template>
  <VRow>
    <VCol>
      <VRow>
        <VCol lg="12" class="pb-0">
          <VSelect
            multiple
            chips
            closable-chips
            label="Resources"
            v-model="selectedResources"
            :items="items"
          >
            <template #item="data">
              <v-list-item lines="two" v-bind="data.props">
                <v-divider />
                <v-list-item-subtitle
                  v-for="endpoint in data.item.value.endpoints"
                  :key="endpoint"
                >
                  {{ endpoint }}
                </v-list-item-subtitle>
              </v-list-item>
            </template>
          </VSelect>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedResources = ref([])
const endpointOfSelectedResources = computed(() => {
  return selectedResources.value.flatMap(item => item.endpoints || [])
})
const items = ref([
  {
    name: 'Forms',
    endpoints: ['GET forms/search', 'POST forms/validate'],
    props: { title: 'Forms' },
  },
  {
    name: 'Contracts',
    endpoints: ['GET contracts/search', 'POST contracts/validate'],
    props: { title: 'Contracts' },
  },
])
</script>
