<template>
  <custom-header />
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import CustomHeader from '~/components/core/layout/custom-header.vue';
</script>

<style scoped>

</style>
