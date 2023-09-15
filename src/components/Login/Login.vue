<template>
    <section class="login">
        <div class="container login-container">
            <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img class="m-auto" src="../../assets/img/logo.svg" alt="">
                <div class="login-box bg-white shadow-lg shadow-shadow-bg/10 mt-[48px] rounded-lg bg-white">
                    <div class="p-8 !w-[399px]">
                        <h3 class="font-poppins text-2xl">Kirish</h3>
                        <form @submit.prevent class="mt-11">
                            <CLabel label="Login">
                                <CInput :class="inputError.loginInput === true ? 'border-red-500' : ''" v-model="login"
                                    placeholder="adm8904" class="mt-2"></CInput>
                            </CLabel>
                            <CLabel class="mt-5.5" label="Parol">
                                <CInput :class="inputError.passwordInput === true ? 'border-red-500' : ''" :type="type"
                                    v-model="password" placeholder="parol" class="mt-2">
                                    <template #suffix>
                                        <i v-if="!showPasswordIcon" @click="showPassword"
                                            class="fa-solid fa-eye fa-xl cursor-pointer" style="color: #A5A5A5;"></i>
                                        <i v-if="showPasswordIcon" @click="showPassword"
                                            class="fa-solid fa-eye-slash fa-xl cursor-pointer" style="color: #A5A5A5;"></i>
                                    </template>
                                </CInput>
                            </CLabel>
                            <div class="g-recaptcha ms-4  mt-5.5">
                            </div>
                            <CButton @click="onSubmit" class="mt-5.5"></CButton>
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
import { ref } from "vue"

const showPasswordIcon = ref(false)
const password = ref('')
const login = ref('')
const type = ref("password")

const inputError = ref({
    loginInput: false,
    passwordInput: false,
})

const showPassword = () => {
    if (type.value === "password") {
        type.value = "text"
    } else {
        type.value = 'password'
    }
    if (showPasswordIcon.value === false) {
        showPasswordIcon.value = true
    } else {
        showPasswordIcon.value = false
    }
}

const onSubmit = () => {
    if (login.value === '') {
        inputError.value.loginInput = true
    } else {
        inputError.value.loginInput = false
    }
    if (password.value === '') {
        inputError.value.passwordInput = true
    } else {
        inputError.value.passwordInput = false
    }
}

</script>
<style scoped>
.g-recaptcha .rc-anchor-normal {
    width: 3999px !important;
}

.login {
    background: #F5F5F7;
    width: 100%;
    height: 100vh;
}
</style>