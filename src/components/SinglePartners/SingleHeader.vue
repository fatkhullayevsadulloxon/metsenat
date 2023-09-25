<template>
    <section class="single-header bg-white ">
        <div class="container single__header">
            <div class="py-7.5 2xl:flex xl:flex lg:flex md:flex block items-center">
                <RouterLink to="/partners">
                    <img src="../../assets/img/arrow-left.svg" alt="">
                </RouterLink>
                <h3 class="font-pro-bold max-w-[500px] ms-4 text-blue-light-700 text-2xl	">{{ singleSponsor.full_name }}</h3>
                <p :class="getColor(singleSponsor.get_status_display)" class=" py-1.5 px-2.5 rounded-md font-rubik text-[#00CF83] text-xs ms-3">{{
                    singleSponsor.get_status_display }}</p>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">

const props = defineProps<{
    singleSponsor: Object,
}>()

const getColor = (status) => {
    if (status === "Yangi") {
        return 'text-blue !bg-[#EDF1FD]'
    } else if (status === "Moderatsiyada") {
        return 'text-orange bg-[#eacfb2]'
    } else if (status === "Tasdiqlangan") {
        return 'text-success bg-[#DDFFF2]'
    } else if (status === "Bekor qilingan") {
        return 'text-[#979797]'
    }
}


</script>
<style lang="css">
    .text{
        color: #b49c81
    }
</style>