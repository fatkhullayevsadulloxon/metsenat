<template>
  <div>
    <div class="2xl:flex xl:flex lg:flex md:flex block items-center cursor-pointer mt-[20px]">
      <div :class="personNav === true ? 'bg-blue text-white !border-[3px] !border-blue' : ''"
        @click="$emit('physicalPersonClick')" class="!rounded-l-md">
        <p :class="personNav === false
            ? '!text-blue !border-[3px] !border-blue hover:bg-blue hover:!text-white transition'
            : ''
          " class="uppercase !rounded-l-md text-[12px] tracking-[1.125px] font-rubik py-3.5 !px-[74px]">
          Jismoniy shaxs
        </p>
      </div>
      <div :class="personNav === false ? '!bg-blue text-white !border-[3px] !border-blue' : ''"
        @click="$emit('legalPersonClick')" class="bg-transparent !rounded-r-md">
        <p :class="personNav === true
            ? '!text-blue hover:bg-blue hover:!text-white !border-[3px] !border-blue transition'
            : ''
          " class="uppercase !rounded-r-md text-[12px] tracking-[1.125px] font-rubik py-3.5 !px-[74px]">
          Yuridik shaxs
        </p>
      </div>
    </div>

  </div>
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
