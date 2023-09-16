<template>
    <section class="dashboard">
        <div class="dashboard__container">
            <Navbar></Navbar>
            <CPay></CPay>
            <CChart></CChart>
        </div>
    </section>
</template>
<script>
import Navbar from '../Navbar/Navbar.vue';
import CChart from './CChart.vue';
import CPay from './CPay.vue';

export default {
    components: { Navbar, CPay, CChart }
}
</script>
<style scoped>
    
</style>