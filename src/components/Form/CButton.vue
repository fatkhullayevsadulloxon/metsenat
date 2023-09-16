<template>
  <div>
    <div :class="buttonColor" class="flex items-center justify-center transition rounded-md !py-[14px] !px-8">
      <slot name="prefix"></slot>
      <button @click="$emit('onSubmit')" class="font-rubik font-medium ms-2.5">
        {{title}}
      </button>
    </div>
    <slot name="suffix"></slot>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'outline' | 'secondary'
  "title": String
}>()

const buttonColor = computed(() => {
  switch (props.variant) {
    case 'outline':
      return 'bg-transparent border-blue text-blue hover:bg-blue hover:text-white'
    case 'secondary':
      return 'bg-gray-light-400 text-blue hover:opacity-50 active:opacity-20'
    default:
      return 'bg-blue text-white border-2 border-blue hover:bg-transparent hover:text-blue'
  }
})
</script>
