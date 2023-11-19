<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    @change="onChangeHandler"
  >
</template>

<script setup lang="ts">
interface IProps {
  placeholder?: string;
  type?: string;
  modelValue: string;
}
interface IEmits {
  (event: 'update:modelValue', value: string): void;
}
const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
  type: 'text',
});

const emits = defineEmits<IEmits>();
const onChangeHandler = (e) => {
  emits('update:modelValue', e.target.value);
};
</script>

<style scoped lang="scss">

</style>
