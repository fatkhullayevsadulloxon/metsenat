<template>
  <section class="dashboard">
    <div class="dashboard__container">
      <CPay></CPay>
      <CChart></CChart>
    </div>
  </section>
</template>
<script>
import CChart from '../components/Dashboard/CChart.vue';
import CPay from '../components/Dashboard/CPay.vue';

export default {
  components: { CPay, CChart }
}
</script>
<style scoped></style>
