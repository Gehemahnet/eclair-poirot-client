<template>
  <div class="ep-input__container">
    <component
      :is="prefix"
      v-if="prefix"
      class="ep-input__prefix"
    />
    <InputText
      class="ep-input__input"
      :class="{'with-prefix' :prefix}"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @change="onChangeHandler"
    />
  </div>
</template>

<script setup lang="ts">
import type {Component, InputTypeHTMLAttribute} from 'vue';

interface IProps {
  placeholder: string;
  type: InputTypeHTMLAttribute;
  modelValue: string;
  prefix?: Component | string;
}

interface IEmits {
  (event: 'update:modelValue', value: string): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<IEmits>();
const onChangeHandler = (e) => {
  emits('update:modelValue', e.target.value);
};
</script>

<style scoped>
.ep-input__container {
  width: 100%;
  position: relative;
}

.ep-input__prefix {
  position: absolute;
  top: calc(var(--medium-padding) - 1px);
  left: var(--medium-padding);
}

.with-prefix {
  padding-left: calc(var(--medium-padding) + 32px)
}
</style>
