<template>
    <div>
        <CLabel for="select" class="mt-7" label="ariza holati"></CLabel>
        <CSelect :selectShow="selectShow" @onSelectShow="onSelectShow" :selectedText="selectedText" id="select"
            class="mt-2">
            <template #suffix>
                <div>
                    <img src="../../assets/img/arrow-bottom.svg" alt="">
                </div>
            </template>
            <div class="py-3 px-4 hover:text-blue transition">
                <p @click="selectedTextChange($event)" class="font-rubik">Barchasi</p>
            </div>
            <hr class="bg-blue-light !h-[1px]">
            <div @click="selectedTextChange($event)" class="py-3 px-4 hover:text-blue transition">
                <p class="font-rubik">Yangi</p>
            </div>
            <hr class="bg-blue-light !h-[1px]">
            <div @click="selectedTextChange($event)" class="py-3 px-4 hover:text-blue transition">
                <p class="font-rubik">Moderatsiyada</p>
            </div>
            <hr class="bg-blue-light !h-[1px]">
            <div @click="selectedTextChange($event)" class="py-3 px-4 hover:text-blue transition">
                <p class="font-rubik">Tasdiqlangan</p>
            </div>
            <hr class="bg-blue-light !h-[1px]">
            <div @click="selectedTextChange($event)" class="py-3 px-4 hover:text-blue transition">
                <p class="font-rubik">Bekor qilingan</p>
            </div>
        </CSelect>
        <CLabel for="select" class="mt-7 mb-4" label="Homiylik summasi"></CLabel>
        <CPaymentPartners :payments="payments" title="Barchasi"></CPaymentPartners>
        <VDatePicker mode="dateTime" is24hr v-model="datelocal" :popover="false">
            <template #default="{ togglePopover, inputValue, inputEvents }">
                <CLabel class="mt-7" label="Sana">
                    <div class="flex w-[50%] items-center border-2 !rounded-md transition placeholder:text-gray-light/30 !bg-transparent focus-within:border-blue bg-gray-light-200 tran border-blue-light py-3 px-4">
                        <input @click="() => togglePopover()" placeholder="kk.oo.yyyy - kk.oo.yyyy" v-on="inputEvents" :value="inputValue"
                            class="w-full text-base font-normal outline-none font-rubik !bg-transparent ps-2" />
                            <img class="cursor-pointer" src="../../assets/img/calendar.svg" alt="">
                    </div>
                </CLabel>
            </template>
        </VDatePicker>
        <hr class="mt-7">
        <div class="flex items-center justify-end mt-7">
            <CButton @click='onClear' variant="outline" title="Tozalash">
                <template #prefix>
                    <div>
                        <img src="../../assets/img/clear.svg" alt="">
                    </div>
                </template>
            </CButton>
            <CButton @click="$emit('onCloseModal')" title="Natijalarni ko‘rish" class="ms-4">
                <template #prefix>
                    <div>
                        <img src="../../assets/img/eye-2.svg" alt="">
                    </div>
                </template>
            </CButton>
        </div>
    </div>
</template>
<script setup lang="ts">
import CLabel from '../Form/CLabel.vue';
import CSelect from '../Form/CSelect.vue';
import CPaymentPartners from './CPaymentPartners.vue';
import CInput from '../Form/CInput.vue';
import CButton from '../Form/CButton.vue';
import { ref } from 'vue';

const props = defineProps<{
    modalShow: String
}>()

const selectShow = ref(false)

const onSelectShow = () => {
    selectShow.value = !selectShow.value
}

const payments = [
    { id: 1, sum: '1 000 000' },
    { id: 2, sum: '5 000 000' },
    { id: 3, sum: '7 000 000' },
    { id: 4, sum: '10 000 000' },
    { id: 5, sum: '30 000 000' }
]

const selectedText = ref('Barchasi')

const selectedTextChange = (e) => {
    selectedText.value = e.target.textContent
    selectShow.value = false
    // selectShow.value = false
}

const datelocal = ref('')

const onClear = () => {
    datelocal.value = ''
}

</script>
<style lang="css" scoped></style>