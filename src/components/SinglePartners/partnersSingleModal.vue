<template>
    <div>
        <slot name="navbar"></slot>
        <form @submit.prevent="updatePartners">
            <CLabel class="mt-8" label="F.I.Sh. (Familiya Ism Sharifingiz)">
                <CInput v-model="firstName" class="mt-2" placeholder="Ishmuhammedov Aziz Ishqobilovich">

                </CInput>
            </CLabel>
            <CLabel class="mt-7" label="Telefon raqamingiz" placeholder="00 000-00-00">
                <CInput v-model="phone" v-mask="['## ###-##-##']" placeholder="00 000-00-00" class="mt-2">
                    <template #prefix>
                        <span class="font-rubik font-normal text-base">+998</span>
                    </template>
                </CInput>
            </CLabel>
            <CLabel class="mt-7" label="Holati"></CLabel>
            <CSelect @onSelectShow="onSelectShow" :selectShow="selectShow" selectedText="Barchasi" class="mt-2">
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
            <CLabel class="mt-7" label="Homiylik summasi">
                <CInput v-model="sum" placeholder="Homiylik summasi" class="mt-2">

                </CInput>
            </CLabel>
            <CLabel class="mt-7" label="To‘lov turi"></CLabel>
            <CSelect @onSelectShow="onSelectShow1" :selectShow="paymentSelectShow" :selectedText="selectedText"
                class="mt-2">
                <template #suffix>
                    <div>
                        <img src="../../assets/img/arrow-bottom.svg" alt="">
                    </div>
                </template>
                <div class="absolute bg-white w-full">
                    <div v-for="payment in paymentType" :key="payment.id" @click="selectedTextChange($event)"
                        class="py-3 px-4 hover:text-blue transition">
                        <p class="font-rubik">{{ payment.title }}</p>
                        <hr class="bg-blue-light !h-[1px] mt-2">
                    </div>
                </div>
            </CSelect>
            <slot name="firmname"></slot>
            <hr class="mt-7">
            <div class="flex justify-end mt-7">
                <CButton @click="updatePartners" title="Saqlash">
                    <template #prefix>
                        <div>
                            <img src="../../assets/img/save-1.svg" alt="">
                        </div>
                    </template>
                </CButton>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import Modal from '../Modal/Modal.vue';
import FNavbar from '../Form/FNavbar.vue';
import CLabel from '../Form/CLabel.vue';
import CInput from '../Form/CInput.vue';
import CButton from '../Form/CButton.vue';
import client from '../../api/api';
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import CSelect from '../Form/CSelect.vue';


const props = defineProps<{
    singleSponsor: Object
}>()

const firstName = ref('')
const phone = ref('')
let sum = ref('')
const paymentType = ref([])
const selectedText = ref('Pul o‘tkazmalari')

const router = useRouter()
const route = useRoute()

const updatePartners = async () => {
    try {
        const { data } = await client.put(`sponsor-update/${route.params.id}`, {
            full_name: firstName.value,
            phone: phone.value
        })
    } catch (error) {
        console.log(error)
    }
}
const getPaymentType = async () => {
    try {
        const { data } = await client.get(`payment-type-list/`)
        paymentType.value = data
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    firstName.value = props.singleSponsor.full_name
    phone.value = props.singleSponsor.phone
    sum.value = props.singleSponsor.sum
    getPaymentType()
})


const selectShow = ref(false)
const paymentSelectShow = ref(false)

const onSelectShow = () => {
    selectShow.value = !selectShow.value

}

const onSelectShow1 = () => {
    paymentSelectShow.value = !paymentSelectShow.value
}

const selectedTextChange = (e) => {
    selectedText.value = e.target.innerHTML
    selectShow.value = false
}

</script>
<style scoped lang="css"></style>