<template>
    <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2">
        <div class="hover:opacity-50 transition bg-blue-light">
            <h3 @click="() => {
                otherBorder = true
                paymentId = 0
            }
                " :class="otherBorder === true ? '!border-blue' : ''"
                class="text-center py-4 cursor-pointer px-4 border-2 border-blue-light font-rubik font-medium text-[13px]">
                {{ title }}
            </h3>
        </div>
        <div class="hover:opacity-50 transition border-2 border-blue-light" v-for="(payment, index) in payments"
            :key="index">
            <div class="py-4 px-4 flex items-center justify-center cursor-pointer m-auto">
                <h3 @click="() => {
                    ; (paymentId = payment.id), (otherBorder = false)
                }
                    " :class="paymentId === payment.id ? '!border-blue' : ''"
                    class="cursor-pointer font-rubik flex items-center font-medium text-[14px]"
                    style="white-space: nowrap;">
                    {{ payment.sum }}
                </h3>
                <p class="font-normal font-rubik text-[14px] text-blue">UZS</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        payments: {
            type: Array,
            required: true
        },
        title: String
    },
    data() {
        return {
            paymentId: 0,
            otherBorder: false
        }
    }
}
</script>
<style scoped></style>
