<template>
  <div class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">
    <div
      class="mt-[12px] hover:opacity-50 transition"
      v-for="(payment, index) in payments"
      :key="index"
    >
      <h3
        @click="
          () => {
            ;(paymentId = payment.id), (otherBorder = false)
            $emit('otherClickFalse')
          }
        "
        :class="paymentId === payment.id ? '!border-blue' : ''"
        class="py-[20px] cursor-pointer px-[35px] border-2 border-blue-light font-rubik font-medium text-[18px]"
      >
        {{ payment.sum }} <span class="font-normal text-blue absolute ms-1">uzs</span>
      </h3>
    </div>
    <div class="mt-[12px] hover:opacity-50 transition">
      <h3
        @click="
          () => {
            otherBorder = true
            paymentId = 0
            $emit('otherClick')
          }
        "
        :class="otherBorder === true ? '!border-blue' : ''"
        class="text-center py-[20px] cursor-pointer px-[35px] border-2 border-blue-light font-rubik font-medium text-[18px]"
      >
        Boshqa
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    payments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      paymentId: 1,
      otherBorder: false
    }
  }
}
</script>
<style scoped></style>
