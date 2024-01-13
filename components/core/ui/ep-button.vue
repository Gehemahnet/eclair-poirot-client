<template>
  <Button
    :label="label"
    :icon="icon"
    :loading="loading"
    :severity="severity"
    :rounded="rounded"
    :plain="plain"
    :text="text"
    :disabled="disabled as Booleanish"
  />
</template>

<script setup lang="ts">
import type {Booleanish} from 'primevue/ts-helpers';

interface IProps{
  label: string;
  icon?: string;
  loading?: boolean;
  rounded?: boolean;
  plain?: boolean;
  text?: boolean;
  disabled?: Booleanish;
  severity?: 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' | string;
}
const props = defineProps<IProps>();

</script>

<style scoped>

</style>
