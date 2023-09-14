<template>
    <div class="container">
        <div class="!w-[587px]">
            <CLabel class="mt-7" label="F.I.Sh. (Familiya Ism Sharifingiz)">
                <CInput :class="inputError.firstNameInput === true ? 'border-red-500' : ''" v-model="firstName"
                    placeholder="Abdullayev Abdulla Abdulla o’g’li" class="mt-2">
                    <template #prefix>
                        <span class="absolute font-rubik text-[15px] "></span>
                    </template>
                </CInput>
            </CLabel>
            <CLabel class="mt-7" label="Telefon raqamingiz" prefixtitle="+998" placeholder="00 000-00-00">
                <CInput :class="inputError.phoneInput === true ? 'border-red-500' : ''" v-model="phone"
                    v-mask="['## ###-##-##']" placeholder="00 000-00-00" class="mt-2">
                    <template #prefix>
                        <span class="font-rubik font-normal text-base me-1">+998</span>
                    </template>
                </CInput>
            </CLabel>
            <CLabel label="To‘lov summasi" class="mt-7" />
            <CPayment :payments="payments"></CPayment>
            <slot></slot>
            <CButton @onSubmit="onSubmit" class="mt-7" />
        </div>
    </div>
</template>
<script setup>
import CInput from './CInput.vue';
import CLabel from './CLabel.vue';
import CPayment from "./Cpayment.vue"
import CButton from "./CButton.vue"
import { ref } from "vue"

const payments = [
    { id: 1, sum: '1 000 000' },
    { id: 2, sum: '5 000 000' },
    { id: 3, sum: '7 000 000' },
    { id: 4, sum: '10 000 000' },
    { id: 5, sum: '30 000 000' },
]
const firstName = ref('')
const phone = ref('')
const inputError = ref({
    firstNameInput: false,
    phoneInput: false,
})

const onSubmit = () => {
    if (firstName.value === '') {
        inputError.value.firstNameInput = true
    }
    if (phone.value === '') {
        inputError.value.phoneInput = true
    }
}

</script>
<style>
input:nth-child(2) {
    /* display: none */
}
</style>