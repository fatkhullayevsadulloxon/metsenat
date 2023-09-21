<template>
    <section class="single-header bg-white ">
        <div class="container single__header">
            <div class="py-7.5 flex items-center">
                <RouterLink to="/partners">
                    <img src="../../assets/img/arrow-left.svg" alt="">
                </RouterLink>
                <h3 class="font-pro-bold max-w-[500px] ms-4 text-blue-light-700 text-2xl	">{{ singleSponsor.full_name }}</h3>
                <p class="bg-[#DDFFF2] py-1.5 px-2.5 rounded-md font-rubik text-[#00CF83] text-xs ms-3">{{
                    singleSponsor.get_status_display }}</p>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">

const props = defineProps<{
    singleSponsor: Object,
}>()

</script>
<style lang="">
    
</style>