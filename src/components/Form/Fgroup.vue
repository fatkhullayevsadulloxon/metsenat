<template>
    <section class="group">
        <div class="container">
            <div class="!w-[587px]">
                <form class="fgroup-form">
                    <Flabel class="" for="firstName" title="F.I.Sh. (Familiya Ism Sharifingiz)"></Flabel>
                    <Finput type="text" id="firstName" placeholder="Abdullayev Abdulla Abdulla o’g’li" class="mt-[8px]">
                    </Finput>
                    <Flabel class="mt-[28px]" for="phone" title="Telefon raqamingiz"> </Flabel>
                    <div class="flex items-center">
                        <span class="absolute font-rubik mt-2 ms-[16px] text-[16px]">+998</span>
                        <Finput id="phone" class="mt-[8px] ps-[57px]" v-mask="['(##) ###-##-##', '(##) ###-##-##']"
                            placeholder="00 000 00 00"></Finput>
                    </div>
                    <Flabel class="mt-[28px]" title="To‘lov summasi"> </Flabel>
                    <Fpayment :payments="payments" @otherClick="otherClick" />
                    <div v-if="otherLabel === true">
                        <Finput type="text" placeholder="0" class="mt-[28px]"></Finput>
                    </div>
                    <slot></slot>
                    <FButton class="mt-[28px]"></FButton>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import FButton from './FButton.vue'
import Finput from './Finput.vue'
import Flabel from './Flabel.vue'
import Fpayment from './Fpayment.vue'
import { TheMask } from 'vue-the-mask'

export default {
    components: { Flabel, Finput, Fpayment, TheMask, FButton },
    data() {
        return {
            payments: [
                { id: 1, sum: '1 000 000' },
                { id: 2, sum: '5 000 000' },
                { id: 3, sum: '7 000 000' },
                { id: 4, sum: '10 000 000' },
                { id: 5, sum: '30 000 000' },
            ],
            otherLabel: false
        }
    },
    methods: {
        otherClick() {
            this.otherLabel = true
        }
    }
}
</script>
<style scoped></style>
