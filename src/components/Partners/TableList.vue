<template>
    <router-link  :to="`/partners/${partnersList.id}`" v-for="(partnersList, index) in partnersListResult" :key="index" class="table-list hover:opacity-50 active:hover:opacity-20 transition">
        <div class="!bg-white w-full rounded-lg mt-3">
            <div class="flex items-center !justify-between py-6 ms-4 pe-12">
                <div class="flex items-center absolute">
                    <p class="font-rubik font-normal text-black text-sm max-w-222">{{ index + 1 }}</p>
                    <p class="font-rubik font-normal text-black text-sm max-w-222 ms-8 ">{{ partnersList.full_name }}
                    </p>
                </div>
                <div class="ms-4 flex ">
                    <p class="font-rubik font-normal text-black text-sm max-w-222 absolute ms-[300px]">{{ partnersList.phone }}</p>
                    <p class="font-rubik font-normal text-black text-sm max-w-222 ms-[468px]">{{ formatPrice(partnersList.sum) }} <span>UZS</span> </p>
                    <p class="font-rubik font-normal text-black text-sm max-w-222 absolute ms-[700px]">{{ partnersList.spent }} <span>UZS</span> </p>
                    <p class="font-rubik font-normal text-black text-sm max-w-222 absolute ms-[820px]">{{ partnersList.created_at.substr(0, 10) }} </p>
                    <p :class="getColor(partnersList.get_status_display)" class="font-rubik font-normal text-black text-sm max-w-222 absolute ms-[940px]">{{ partnersList.get_status_display }} </p>
                    <img class="absolute ms-[1070px]" src="../../assets/img/eye-1.svg" alt="" width="24" height="24">
                </div>
            </div>
        </div>
    </router-link>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';


const props = defineProps<{
    partnersListResult: Array,
}>()

const getColor = (status) => {
    if(status === "Yangi"){
        return 'text-blue'
    } else if(status === "Moderatsiyada"){
        return 'text-orange'
    } else if(status === "Tasdiqlangan"){
        return 'text-orange'
    } else if(status === "Bekor qilingan"){
        return 'text-[#979797]'
    }
}


const formatPrice = (value) => {
    let val = (value / 1).toFixed('UZS').replace(' ', ' ');
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

</script>
<style scoped lang="css">
.table-list{
    overflow: scroll
}
</style>