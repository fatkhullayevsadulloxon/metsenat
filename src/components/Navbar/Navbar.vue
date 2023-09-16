<template>
    <section class="navbar bg-white border-b-2">
        <div class="container navbar__container 2xl:flex xl:flex lg:flex md:flex block items-center justify-between">
            <nav class="sitenav py-6">
                <ul class="sitenav__list 2xl:flex xl:flex lg:flex md:flex block items-center cursor-pointer">
                    <li class="sitenav__item">
                        <RouterLink to="/dashboard" class="bg-blue rounded-l-md text-white !border-2 !border-blue py-3.5 2xl:!px-13 xl:!px-13 lg:!px-13 md:!px-13 sm:!px-20 !px-20 font-rubik uppercase tracking-1.25 text-xs">
                            Dashboard
                        </RouterLink>
                    </li>
                    <li class="sitenav__item 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-7">
                        <RouterLink to="/partners" class="bg-transparent opacity-60 hover:opacity-100 hover:bg-blue hover:text-white transition text-blue !border-2 !border-blue py-3.5 2xl:!px-13 xl:!px-13 lg:!px-13 md:!px-13 sm:!px-20 !px-[86.5px] font-rubik uppercase tracking-1.25 text-xs">
                            Homiylar
                        </RouterLink>
                    </li>
                    <li class="sitenav__item 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-7">
                        <RouterLink to="/students" class="bg-transparent opacity-60 2xl:rounded-r-md lg:rounded-r-md md:rounded-r-md hover:opacity-100 text-blue hover:bg-blue hover:text-white transition border-2 2xl:!border-l-0 xl:!border-l-0 lg:!border-l-0 md:!border-l-0 !border-blue py-3.5 2xl:!px-13 xl:!px-13 lg:!px-13 md:!px-13 sm:!px-20 !px-[82px] font-rubik uppercase tracking-1.25 text-xs">
                            Talabalar
                        </RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="navbar__left flex items-center 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 pb-6">
                <CInput variant="secondary" placeholder="Izlash" class="me-5">
                    <template #prefix>
                        <div>
                            <img src="../../assets/img/search-icon.svg" alt="">
                        </div>
                    </template>
                </CInput>
                <CButton variant="secondary" title="Filter">
                    <template #prefix>
                        <div>
                            <img src="../../assets/img/filter-1.svg" alt="">
                        </div>
                    </template>
                </CButton>
            </div>
        </div>
    </section>
</template>
<script setup>
import CButton from '../Form/CButton.vue';
import CInput from '../Form/CInput.vue';


</script>
<style scoped>
    
</style>