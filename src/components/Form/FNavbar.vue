<template>
  <div class="2xl:flex xl:flex lg:flex md:flex block items-center cursor-pointer mt-[20px]">
    <div :class="personNav === false ? ' bg-blue text-white !border-[3px] !border-blue' : ''"
      @click="$emit('physicalPersonClick')" class="!rounded-l-md">
      <p :class="personNav === true ? '!text-blue !border-[3px] !border-blue-light' : ''"
        class="uppercase !rounded-l-md text-[12px] tracking-[1.125px] font-rubik py-[10px] px-[89px]">
        Jismoniy shaxs
      </p>
    </div>
    <div :class="personNav === true ? '!bg-blue text-white !border-[3px] !border-blue' : ''"
      @click="$emit('legalPersonClick')" class="bg-transparent !rounded-r-md">
      <p :class="personNav === false ? '!text-blue !border-[3px] opacity-60 !border-blue' : ''"
        class="uppercase !rounded-r-md text-[12px]  tracking-[1.125px] font-rubik py-[10px] px-[89px]">
        Yuridik shaxs
      </p>
    </div>
  </div>
  <RouterLink to="/login" class="flex items-center mt-5 w-[587px]">
    <p class="font-rubik uppercase tracking-[1.125px] text-[12px] text-blue">Login sahifasi o'tish</p>
    <i class="fa-solid fa-arrow-right fa-fade fa-lg ms-2" style="color: #36F;"></i>
  </RouterLink>
</template>
<script>
export default {
  props: {
    personNav: {
      type: Boolean
    }
  }
}
</script>
<style></style>
