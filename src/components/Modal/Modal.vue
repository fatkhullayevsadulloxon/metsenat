<template>
    <div class="global-modal bg-white rounded-lg w-[586px]">
        <div class="p-8">
            <div class="flex items-center justify-between">
                <h3 class="font-pro-bold text-2xl text-blue-light-700">{{ title }}</h3>
                <img @click="$emit('onCloseModal')" class="cursor-pointer hover:opacity-70 active:opacity-30 transition" src="../../assets/img/close.svg" alt="" width="28" height="28">
            </div>
            <hr class="mt-7">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps < {
    title: String
} > ()
</script>
<style lang="css" scoped>
.global-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
}
</style>