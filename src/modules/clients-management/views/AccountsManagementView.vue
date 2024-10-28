<template>
  <AppPageTitle title="Accounts Management" />
  <VRow>
    <VCol cols="12" class="px-8 pt-6">
      <VDataTableServer
        :items="items"
        :items-length="totalItems"
        :loading="loading"
        :height="height"
        item-value="name"
        items-per-page-text="Accounts per page:"
        :header-props="headerProps"
        @update:options="fetchItems"
      >
        <template #top>
          <VRow class="mx-1 my-3" justify="end">
            <VBtn v-if="true" color="primary" class="my-auto">
              Create new
            </VBtn>
          </VRow>
        </template>
      </VDataTableServer>
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'
import AppPageTitle from '@/core/components/AppPageTitle.vue'
import { ref } from 'vue'

const loading = ref(true)

const items = ref([])
const totalItems = ref(0)

const height = ref(window.innerHeight - 170)
const headerProps = { style: { 'font-size': '0.75rem' } satisfies StyleValue }

const fetchItems = () => {
  loading.value = true
  fetch('https://mock.apidog.com/m2/709244-684307-default/11048001')
    .then(response => response.json())
    .then(data => {
      items.value = data
      totalItems.value = items.value.length
      loading.value = false
    })
}
</script>

<style>
/**
 * This font-size value is shared above with adjustedFontSize.
 * But they function differently and cannot be shared
 */
.data-table-filters-custom-font .v-input * {
  font-size: 0.75rem !important;
}
</style>

<style scoped>
.min-margin {
  margin: 0 2px;
}
</style>

<style>
.lenderFlag td {
  background-color: #ee6;
}

td {
  margin: 0 2px;
  padding: 0 2px;
}

div.v-data-table__wrapper > table > tbody > tr > td.text-start {
  font-size: 80%;
}
</style>
