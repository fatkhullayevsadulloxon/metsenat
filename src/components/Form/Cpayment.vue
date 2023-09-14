<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="mt-[12px]" v-for="(payment, index) in payments" :key="index">
            <h3 @click="() => {
                paymentId = payment.id
            }
                " :class="paymentId === payment.id ? '!border-2 !border-blue' : ''"
                class="py-[20px] cursor-pointer px-[35px] border-2 border-blue-light font-rubik font-medium text-[18px]">
                {{ payment.sum }} <span class="font-normal text-blue absolute ms-1">uzs</span>
            </h3>
        </div>
        <div class="mt-[12px]">
            <h3 @click="$emit('otherClick')"
                class="text-center py-[20px] cursor-pointer px-[35px] border-2 border-blue-light font-rubik font-medium text-[18px]">
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
            paymentId: 0,
        }
    }
}
</script>
<style scoped></style>
