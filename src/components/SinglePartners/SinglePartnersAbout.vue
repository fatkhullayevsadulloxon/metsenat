<template>
    <section class="single-partners-about">
        <div class="container">
            <div class="bg-white m-auto rounded-xl w-[793px] mt-10">
                <div class="p-8">
                    <div class="flex items-center justify-between">
                        <h3 class="font-pro-bold ms-4 text-blue-light-700 text-2xl !m-0 !p-0">Homiy haqida</h3>
                        <CButton title="Tahrirlash" variant="secondary">
                            <template #prefix>
                                <div>
                                    <img src="../../assets/img/edit.svg" alt="">
                                </div>
                            </template>
                        </CButton>
                    </div>
                    <div class="flex items-center mt-8">
                        <img class="py-4 px-4.5 bg-[#E0E7FF] rounded-md" src="../../assets/img/user.svg" alt="">
                        <h3 class="text-[#212121] text-base font-pro-bold max-w-[163px] ms-5">{{ singleSponsor.full_name }}
                        </h3>
                    </div>
                    <div class="flex items-center mt-9">
                        <div>
                            <p class="uppercase font-rubik tracking-1.25 text-[#B5B5C3] text-xs">Telefon raqam</p>
                            <h3 class="text-[#212121] text-base font-pro-bold mt-3">{{ singleSponsor.phone }}</h3>
                        </div>
                        <div class="ms-[227px]">
                            <p class="uppercase font-rubik tracking-1.25 text-[#B5B5C3] text-xs">Homiylik summasi</p>
                            <h3 class="text-[#212121] text-base font-pro-bold ">{{ formatPrice(singleSponsor.sum) }} UZS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import CButton from '../Form/CButton.vue';
import CInput from '../Form/CInput.vue';

const props = defineProps<{
    singleSponsor: Object,
}>()

const formatPrice = (value) => {
    let val = (value / 1).toFixed('UZS').replace(' ', ' ');
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

</script>
<style scoped lang="css"></style>