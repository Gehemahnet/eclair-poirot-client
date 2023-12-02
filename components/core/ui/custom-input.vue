<template>
  <div class="custom-input__container">
    <component
      :is="prefix"
      v-if="prefix"
      class="custom-input__prefix"
    />
    <input
      class="custom-input__input"
      :class="{'with-prefix' :prefix}"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @change="onChangeHandler"
    >
  </div>
</template>

<script setup lang="ts">
import type {Component} from 'vue';

interface IProps {
  placeholder?: string;
  type?: string;
  modelValue: string;
  prefix?: Component | string;
}
interface IEmits {
  (event: 'update:modelValue', value: string): void;
}
const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
  type: 'text',
  prefix: '',
});

const emits = defineEmits<IEmits>();
const onChangeHandler = (e) => {
  emits('update:modelValue', e.target.value);
};
</script>

<style scoped lang="scss">
.custom-input {
  &__container {
    width: 100%;
    position: relative;
  }
  &__prefix {
    position: absolute;
    top: calc(var(--medium-padding) - 1px);
    left: var(--medium-padding);
  }
}

.with-prefix {
  padding-left: calc(var(--medium-padding) + 32px)
}
</style>
