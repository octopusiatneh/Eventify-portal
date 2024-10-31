<template>
  <VApp>
    <AppHeader />
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/core/components/AppHeader.vue'
</script>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
.v-application {
  /*
    HTML editor adds a paragraph element to list items (<li><p/></li>).
    Remove margin from paragraphs that are direct and only child of list items.
  */
  & li > p:only-child {
    margin: 0;
  }

  .v-field--disabled {
    @apply opacity-60;
  }

  .v-card__title {
    word-break: break-word;
  }

  .v-img__img {
    width: inherit;
  }

  a:not(.v-btn) {
    @apply text-primary;
  }

  .v-card-title {
    @apply py-4;
  }

  input[readonly] {
    @apply text-neutral-500;
  }

  .material-icons:not(.v-icon--size-default) {
    font-size: inherit;
  }

  .v-icon-action {
    font-size: inherit;
    @apply text-neutral-500;
  }

  .v-selection-control__input > .v-icon {
    @apply text-neutral-500;
  }

  h1,h2,h3,h4,h5,h6 {
    font-size: inherit;
    font-weight: inherit
}
}
</style>
