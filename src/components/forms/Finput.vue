<template>
       <input 
       class="w-full ps-[16px] py-[10px] outline-none rounded-[8px] font-rubik bg-gray-light-200 border border-blue-light" :placeholder="placeholder"> 
</template>
<script>
export default {
  
}
</script>
<style scoped>
    input::placeholder{
        font-family: 'Rubik';
        font-weight: 400;
        font-size: 15px
    }
</style>