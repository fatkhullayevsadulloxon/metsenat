<template>
    <section class="pay">
        <div class="container pay__container">
            <div class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-1">
                <CPaylList class="2xl:mt-0 xl:mt-0 lg:mt-0 mt-5" :totalNumber="`${dashboardResult.total_paid}`" img="../../src/assets/img/sum-blue.svg" />
                <CPaylList class="2xl:mt-0 xl:mt-0 lg:mt-0 mt-5" :totalNumber="`${dashboardResult.total_need}`" img="../../src/assets/img/sum-yellow.svg" />
                <CPaylList class="2xl:mt-0 xl:mt-0 lg:mt-0 mt-5" :totalNumber="`${dashboardResult.total_must_pay}`" img="../../src/assets/img/sum-orange.svg" />
            </div>
        </div>
    </section>
</template>
<script setup>
import CPaylList from './CPaylList.vue';
import client from '../../api/api';
import { onMounted, ref } from 'vue';

let dashboardResult = ref({})

const GetPay = async () => {
    try {
        const data = await client.get('dashboard/')
        dashboardResult.value = data.data
        
    } catch (error) {
        console.log(error);
    }
}
console.log(dashboardResult);

onMounted(() => {
    GetPay()
})


</script>
<style></style>