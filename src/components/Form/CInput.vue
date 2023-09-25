<template>
  <div :class="inputStyle" class="flex items-center border-2 !rounded-md transition">
    <slot name="prefix" />
    <input
      @showPassword="showPassword"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="!w-full text-base font-normal outline-none font-rubik !bg-transparent ps-2"
      :type="type"
    />
    <slot name="suffix" />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

defineEmits(['update:modelValue'])

const props = defineProps<{
  variant?: 'secondary'
  placeholder: String
  type: String
  modelValue: String,
  value: String
}>()

const inputStyle = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-gray-light-300 py-2.5 px-4 pe-[100px] focus-within:bg-white focus-within:bg-white'
    default:
      return 'placeholder:text-gray-light/30 !bg-transparent focus-within:border-blue bg-gray-light-200 tran border-blue-light py-3 px-4'
  }
})

const showPassword = () => {
  console.log('salom')
}
</script>

<style>
input::placeholder {
  font-size: 15px;
  font-family: 'Rubik';
}
</style>
