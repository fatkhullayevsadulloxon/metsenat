<template>
    <section class="login">
        <div class="container login-container">
            <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img class="m-auto" src="../../assets/img/logo.svg" alt="">
                <div class="login-box bg-white shadow-lg shadow-shadow-bg/10 mt-[48px] rounded-lg bg-white">
                    <div class="p-8 !w-[399px]">
                        <h3 class="font-poppins text-2xl">Kirish</h3>
                        <form class="mt-11">
                            <CLabel label="Login">
                                <CInput placeholder="adm8904" class="mt-2"></CInput>
                            </CLabel>
                            <CLabel class="mt-5.5" label="Parol">
                                <CInput placeholder="adm8904" class="mt-2"></CInput>
                            </CLabel>
                            <div class="g-recaptcha ms-4  mt-5.5" data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"></div>
                            <CButton class="mt-5.5"></CButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import CLabel from "../Form/CLabel.vue"
import CInput from "../Form/CInput.vue"
import CButton from "../Form/CButton.vue"

</script>
<style scoped>

.g-recaptcha .rc-anchor-normal{
    width: 3999px !important;
}


</style>