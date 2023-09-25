<template>
  <section class="dashboard">
    <div class="dashboard__container">
      <Navbar>
        <template #search-button>
          <div class="navbar__left flex items-center 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0">
            <CInput variant="secondary" placeholder="Izlash" class="me-5">
              <template #prefix>
                <div>
                  <img src="../assets/img/search-icon.svg" alt="" />
                </div>
              </template>
            </CInput>
            <CButton variant="secondary" title="Filter">
              <template #prefix>
                <div>
                  <img src="../assets/img/filter-1.svg" alt="" />
                </div>
              </template>
            </CButton>
          </div>
        </template>
      </Navbar>
      <CPay></CPay>
      <CChart></CChart>
    </div>
  </section>
</template>
<script setup>
import CChart from '../components/Dashboard/CChart.vue';
import CPay from '../components/Dashboard/CPay.vue';
import Navbar from '../components/Navbar/Navbar.vue';
import CInput from '../components/Form/CInput.vue';
import CButton from '../components/Form/CButton.vue';

</script>
<style scoped></style>
