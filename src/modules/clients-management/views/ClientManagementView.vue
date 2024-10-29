<template>
  <div class="flex-column">
    <AppPageTitle title="Clients Management" />
    <VDataTableServer
      :items="items"
      :items-length="totalItems"
      :loading="loading"
      :header-props="headerProps"
      :height="height"
      item-value="name"
      @update:options="fetchItems"
      class="px-8"
    >
      <template #loading>
        <VSkeletonLoader type="table-row@25" />
      </template>
      
      <template #top>
        <VRow class="mx-1 my-3" justify="end">
          <VBtn color="primary" class="my-auto" @click="onClick">
            Create new
          </VBtn>
        </VRow>
      </template>
    </VDataTableServer>
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'
import AppPageTitle from '@/core/components/AppPageTitle.vue'
import { ref } from 'vue'
import router from '@/router/router'

const items = ref([])
const totalItems = ref(0)

const loading = ref(true)
const height = ref(window.innerHeight - 219)
const headerProps = { style: { 'font-size': '0.75rem' } satisfies StyleValue }

const onClick = () => router.push({ name: 'client-create' })

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
