<template>
  <VRow>
    <VCol>
      <VRow>
        <VCol>
          <h2 class="text-primary font-weight-regular">Client details</h2>
        </VCol>

        <VCol lg="5" class="pb-0 text-right">
          <VBtn class="mr-4 light-grey-border" :variant="'text'"> Cancel </VBtn>
          <VBtn color="primary" elevation="0"> Save </VBtn>
        </VCol>
      </VRow>

      <VRow>
        <VCol lg="3" class="pb-0">
          <VTextField
            :label="'Client Application Name'"
            density="compact"
            variant="outlined"
            required
          />
        </VCol>
        <VCol lg="3" class="pb-0">
          <VTextField
            :label="'Email Address'"
            density="compact"
            variant="outlined"
          />
        </VCol>
        <VCol lg="3" class="pb-0">
          <VTextField
            :label="'Username'"
            density="compact"
            variant="outlined"
          />
        </VCol>
        <VCol lg="3" class="pb-0">
          <VTextField :label="'Status'" density="compact" variant="outlined" />
        </VCol>
      </VRow>

      <VRow>
        <VCol lg="3" class="pb-0">
          <VTextField
            :label="'Created Date'"
            density="compact"
            variant="outlined"
          />
        </VCol>
        <VCol lg="3" class="pb-0">
          <VTextField
            :label="'Updated Date'"
            density="compact"
            variant="outlined"
          />
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
// TODO: Add refs: title, items
</script>
