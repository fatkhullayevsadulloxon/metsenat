<template>
    <section class="group">
        <div class="container">
            <div class="!w-[587px]">
                <h1 class="font-poppins mt-[76px] text-[40px] max-w-[423px]">Homiy sifatida ariza topshirish</h1>
                <div class="flex items-center cursor-pointer mt-[40px]">
                    <div class="bg-blue !rounded-l-md">
                        <p
                            class="uppercase text-white !rounded-l-md text-[12px] border-[3px] border-blue tracking-[1.125px] font-rubik py-[10px] px-[89px]">
                            Jismoniy shaxs</p>
                    </div>
                    <div class="bg-transparent !rounded-r-md">
                        <p
                            class="uppercase text-blue !rounded-r-md opacity-60 border-[3px] border-s-0 border-blue-light text-[12px] tracking-[1.125px] font-rubik py-[10px] px-[89px]">
                            Yuridik shaxs</p>
                    </div>
                </div>
                <form class="fgroup-form">
                    <Flabel class="mt-[28px]" for="firstName">
                        F.I.Sh. (Familiya Ism Sharifingiz)
                    </Flabel>
                    <Finput type="text" id="firstName" placeholder="Abdullayev Abdulla Abdulla o’g’li" class="mt-[8px] ">
                    </Finput>
                    <Flabel class="mt-[28px]" for="phone">
                        Telefon raqamingiz
                    </Flabel>
                    <div class="flex items-center">
                        <span class="absolute font-rubik mt-2 ms-[16px] text-[16px]">+998</span>
                        <Finput type="number" id="phone" class="mt-[8px] ps-[57px]" placeholder="00 000 00 00"></Finput>
                    </div>
                    <Flabel class="mt-[28px]">
                        To‘lov summasi
                    </Flabel>
                    <Fpayment :payments="payments" />
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import Finput from './Finput.vue';
import Flabel from './Flabel.vue';
import Fpayment from './Fpayment.vue';

export default {
    components: { Flabel, Finput, Fpayment },
    data() {
        return {
            payments: [
                { id: 1, sum: "1 000 000" },
                { id: 2, sum: "5 000 000" },
                { id: 3, sum: "7 000 000" },
                { id: 4, sum: "10 000 000" },
                { id: 5, sum: "30 000 000" },
            ]
        }
    },
}
</script>
<style scoped></style>