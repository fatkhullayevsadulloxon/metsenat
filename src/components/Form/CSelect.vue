<template>
    <div class="!cursor-pointer">
        <div :class="props.selectShow === true ? '!border-blue text-blue' : ''" @click="$emit('onSelectShow')"
            class="w-full flex hover:border-blue hover:text-blue  transition items-center justify-between !bg-gray-light-200 border-2 rounded-md border-blue-light py-3 px-4">
            <p class="font-rubik">{{ selectedText }}</p>
            <slot name="suffix"></slot>
        </div>
        <transition>
            <div class="z-10">
                <div class="w-[90%] !z-10 !bg-white mt-1 border-2 rounded-md !border-blue-light absolute" v-if="selectShow || paymentSelectShow">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    onClear: Function,
    selectedText: String,
    selectShow: Boolean,
    paymentSelectShow: Boolean
}>()
// const selectedText = ref('Barchasi')



</script>
<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>