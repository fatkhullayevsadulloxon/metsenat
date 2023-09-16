<template>
  <label class="text-black font-rubik uppercase tracking-[1.125px] font-medium text-[12px] block">
    {{ label }}
    <slot></slot>
  </label>
</template>
<script>
import CInput from './CInput.vue'

export default {
  props: {
    label: String
  },
  components: { CInput }
}
</script>
<style lang=""></style>
