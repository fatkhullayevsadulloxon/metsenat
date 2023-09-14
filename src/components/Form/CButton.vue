<template>
  <div>
    <button @click="$emit('onSubmit')"
      class="w-full py-[14px] text-white hover:opacity-50 transition bg-blue rounded-md font-rubik border-2 font-medium"
      :class="buttonColor">
      Yuborish
    </button>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  variant?: 'primary' | 'outline' | 'secondary'
}>()

const buttonColor = computed(() => {
  switch (props.variant) {
    case 'outline':
      return 'bg-transparent border-blue text-blue'
    default:
      return 'bg-blue text-white border-blue hover:bg-transparent hover:text-blue'
  }
})
</script>