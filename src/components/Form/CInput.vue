<template>
    <div
        class="flex items-center w-full py-3 px-4 !rounded-md focus-within:border-blue bg-gray-light-200 border-2 tran border-blue-light transition">
        <slot name='prefix' />
        <input :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            class="w-full text-base font-normal placeholder:text-gray-light/30 outline-none rounded-lg font-rubik bg-transparent">
        <slot name="suffix" />
    </div>
</template>
<script setup >
defineProps(['modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>
    
<style>
input::placeholder {
    font-size: 15px;
    font-family: "Rubik"
}
</style>