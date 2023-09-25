<template>
  <div>
    <div
      :class="buttonColor"
      class="flex items-center cursor-pointer justify-center transition rounded-md"
    >
      <slot name="prefix"></slot>
      <button @click="$emit('onSubmit')" class="font-rubik font-medium ms-2.5">
        {{ title }}
      </button>
    </div>
    <slot name="suffix"></slot>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'outline' | 'secondary'
  title: String
}>()

const buttonColor = computed(() => {
  switch (props.variant) {
    case 'outline':
      return 'bg-transparent border-2 border-blue-light text-blue hover:bg-blue hover:text-white py-2 px-8'
    case 'secondary':
      return 'bg-gray-light-400 text-blue hover:opacity-50 active:opacity-20 px-8 py-2.5'
    default:
      return 'bg-blue text-white border border-blue hover:opacity-50 active:opacity-30 py-2 px-8'
  }
})
</script>
