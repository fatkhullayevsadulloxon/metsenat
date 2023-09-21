<template>
    <div class="pagination mt-7 flex items-center justify-between mb-20">
        <p class="font-rubik text-black text-sm">{{ partners.count }} tadan 1-{{ page_size }} ko'rsatilmoqda</p>
        <div class="pagination__right flex items-center">
            <div>
                <div @click="limitShowToggle" class="pagination__limit-show flex items-center">
                    <p class="font-rubik text-black text-sm">Ko‘rsatish</p>
                    <div
                        class="border-2 broder-black bg-white px-[10px] cursor-pointer rounded py-[5px] flex items-center ms-2.5">
                        <p>10</p>
                        <i v-if="!limitShowOpen" class="fa-solid fa-chevron-down ms-1 mt-1"></i>
                        <i v-if="limitShowOpen" class="fa-solid fa-chevron-up ms-1 mt-1"></i>
                    </div>
                </div>
                <transition name="slide-fade">
                    <div v-if="limitShowOpen" class="show-limit absolute ms-20 border-2 border-gray border-t-0">
                        <ul class="show-limit__list bg-white">
                            <li @click="() => {
                                $emit('onChangePageSize', pageSize.num)
                            }" v-for="pageSize in limitPageSize" :key="pageSize.id"
                                class="show-limit__item px-4 py-1 cursor-pointer hover:text-blue transition border border-b-blue">
                                {{ pageSize.num }}</li>
                        </ul>
                    </div>
                </transition>
            </div>
            <div class="pagination__end flex ms-2">
                <div @click="$emit('onChangePrev')"
                    :class="page <= 1 ? '!bg-[#DFE3E8] !cursor-not-allowed	 !opacity-50' : ''"
                    class="pagination__left-arrow bg-white cursor-pointer rounded border-2 border-gray-light-700 me-1">
                    <i class="fa-solid fa-chevron-left py-2.5 px-3" style="color: #696868;"></i>
                </div>
                <div v-for="pageNumber in totalPages" :key="pageNumber" @click="$emit('onChangePage', pageNumber)" class="">
                    <p :class="pageNumber === page ? '!border-blue text-blue' : ''"
                        v-if="pageNumber < page + 3 && pageNumber > page - 3 || (page < 5 && pageNumber <= 5)"
                        class="py-1.5 bg-white border-2 border-gray-light-700 cursor-pointer rounded  !ms-2 me-2 px-3 font-rubik text-black">
                        {{ pageNumber }}</p>
                </div>
                <div @click="$emit('onChangeNext')"
                    :class="page >= totalPages ? '!bg-[#DFE3E8] !cursor-not-allowed !opacity-50' : ''"
                    class="pagination__left-arrow bg-white cursor-pointer rounded border-2 border-gray-light-700">
                    <i class="fa-solid fa-chevron-right py-2.5 px-3" style="color: #696868;"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<({
    partners: Object,
    totalPages: Array,
    page: Number,
    page_size: Number
})>()

const limitPageSize = [
    { id: 1, num: 1 },
    { id: 2, num: 2 },
    { id: 3, num: 3 },
    { id: 4, num: 4 },
    { id: 5, num: 5 },
    { id: 6, num: 6 },
    { id: 7, num: 7 },
    { id: 8, num: 8 },
    { id: 9, num: 9 },
    { id: 10, num: 10 },
]


const limitShowOpen = ref(false)


const limitShowToggle = () => {
    if (limitShowOpen.value === false) limitShowOpen.value = true
    else { limitShowOpen.value = false }
}

</script>
<style scoped>
.show-limit__list {
    overflow: scroll;
    height: 100px;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translatey(20px);
    opacity: 0;
}

.show-limit__list::-webkit-scrollbar-track {
    background-color: transparent
}

.show-limit__list::-webkit-scrollbar {
    width: 2px !important;
}</style>