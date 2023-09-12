<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="" v-for="(payment, index) in payments" :key="index">
            <h3 class="font-">{{ payment.sum }} uzs</h3>
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
    }
}
</script>
<style scoped>
    
</style>