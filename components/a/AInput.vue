<!-- eslint-disable max-len -->
<template>
  <div class="d-flex flex-column">
    <Field
      v-slot="{ field }"
      :name="name"
      :model-value="modelValue"
      :validate-on-change="validateOnChange"
    >
      <input
        v-bind="field"
        class="input form-control form-control--underline"
        :type="type"
        :placeholder="placeholder"
        :aria-label="placeholder"
        :value="modelValue"
        @input="handleUpdateInput"
      >
    </Field>
    <ErrorMessage
      class="text-danger"
      :name="name"
      as="small"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  classLabel?: string
  modelValue?: string | number
  label?: string
  type?: string
  id: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
  design?: 'underline' | 'box'
  message?: string
  validateOnChange?: boolean
  helper?: string
}
withDefaults(defineProps<Props>(), {
  classLabel: '',
  label: '',
  placeholder: '',
  design: 'box',
  type: 'text',
  message: undefined,
  validateOnChange: true,
  helper: '',
  modelValue: undefined,
})

const emits = defineEmits(['update:modelValue', 'focusout'])

const handleUpdateInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emits('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.input {
  background-color: transparent;
  box-shadow: none;
  outline: none;
  appearance: none;
  width: 100%;
  :focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
