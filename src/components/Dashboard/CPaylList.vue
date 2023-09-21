<template>
  <div class="pay-box bg-white rounded-lg">
    <div class="pay-list flex items-center p-6 pe-28">
      <img :src="`${props.img}`" alt="" width="48" height="48" />
      <div class="ms-4">
        <p class="font-rubik text-gray-light-600 text-xs">Jami to‘langan summa</p>
        <vue3-autocounter
          class="font-pro-bold text-xl"
          ref="counter"
          :startAmount="0"
          :endAmount="totalNumber"
          :duration="3"
          separator=" "
          :decimals="0"
        />
        <span class="uppercase font-pro-bold text-xl text-gray-light-700 absolute ms-1"> uzs</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  img: String
  totalNumber: Number
}>()
</script>

<style scoped></style>
