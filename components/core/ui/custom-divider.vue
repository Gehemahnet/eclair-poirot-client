<template>
  {{ label }}
</template>

<script setup lang="ts">
interface IProps {
  label: string
}

const props = defineProps<IProps>();

</script>

<style scoped lang="scss">

</style>
