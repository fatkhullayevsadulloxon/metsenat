<template>
  <div class="container">
    <div class="2xl:!w-[587px] xl:!w-[587px] lg:!w-[587px] md:!w-[587px] sm:!w-[400px]">
      <form @submit.prevent="onSubmit()">
        <CLabel class="mt-7" label="F.I.Sh. (Familiya Ism Sharifingiz)">
          <CInput
            v-model="formData.firstName"
            :class="formData.firstName === '' ? 'border-red-500' : ''"
            placeholder="Abdullayev Abdulla Abdulla o’g’li"
            class="mt-2"
          >
            <template #prefix>
              <span class="absolute font-rubik text-[15px]"></span>
            </template>
          </CInput>
          <span v-for="error in v$.firstName.$errors" :key="error.$uid" class="text-red-500">
            {{ error.$message }}
          </span>
        </CLabel>
        <CLabel class="mt-7" label="Telefon raqamingiz" placeholder="00 000-00-00">
          <CInput
            v-model="formData.phone"
            v-mask="['## ###-##-##']"
            placeholder="00 000-00-00"
            class="mt-2"
          >
            <template #prefix>
              <span class="font-rubik font-normal text-base me-1">+998</span>
            </template>
          </CInput>
        </CLabel>
        <CLabel label="To‘lov summasi" class="mt-7" />
        <CPayment
          @otherClick="otherClick"
          @otherClickFalse="otherClickFalse"
          :payments="payments"
        ></CPayment>
        <CInput
          :type="number"
          v-model="formData.otherSumValue"
          class="mt-4"
          placeholder="0"
          v-if="otherSum"
        >
        </CInput>
        <slot></slot>
        <CButton class="mt-7" />
      </form>
    </div>
  </div>
</template>
<script setup>
import CInput from './CInput.vue'
import CLabel from './CLabel.vue'
import CPayment from './Cpayment.vue'
import CButton from './CButton.vue'
import { reactive, ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

const formData = reactive({
  firstName: '',
  phone: '',
  otherSumValue: ''
})

const rules = computed(() => {
  return {
    firstName: { required, minLength: minLength(3) },
    phone: { required },
    otherSumValue: { required }
  }
})

const v$ = useVuelidate(rules, formData)

const onSubmit = async () => {
  const result = await v$.value.$validate()

  if (result) {
    console.log('salom')
  } else {
    console.log('error')
  }
}

const otherSum = ref(false)

const otherClick = () => {
  otherSum.value = true
}

const otherClickFalse = () => {
  otherSum.value = false
}

const payments = [
  { id: 1, sum: '1 000 000' },
  { id: 2, sum: '5 000 000' },
  { id: 3, sum: '7 000 000' },
  { id: 4, sum: '10 000 000' },
  { id: 5, sum: '30 000 000' }
]
</script>
<style></style>
