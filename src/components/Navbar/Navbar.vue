<template>
  <section class="navbar bg-white border-b-2">
    <div class="container navbar__container 2xl:flex xl:flex lg:flex md:flex block items-center justify-between">
      <nav class="sitenav py-6">
        <ul class="sitenav__list 2xl:flex xl:flex lg:flex md:flex block items-center cursor-pointer">
          <li class="sitenav__item">
            <RouterLink class-active="active" to="/dashboard"
              class="!border-2 !border-r-0 opacity-60 text-blue rounded-l-md hover:bg-blue hover:opacity-100 hover:text-white transition !border-blue py-3.5 2xl:!px-13 xl:!px-13 lg:!px-13 md:!px-13 sm:!px-20 !px-20 font-rubik uppercase tracking-1.25 text-xs">
              Dashboard
            </RouterLink>
          </li>
          <li class="sitenav__item 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-7">
            <RouterLink class-active="active" to="/partners"
              class="bg-transparent opacity-60 hover:opacity-100 hover:bg-blue hover:text-white transition text-blue !border-2 !border-blue py-3.5 2xl:!px-13 xl:!px-13 lg:!px-13 md:!px-13 sm:!px-20 !px-[86.5px] font-rubik uppercase tracking-1.25 text-xs">
              Homiylar
            </RouterLink>
          </li>
          <li class="sitenav__item 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-7">
            <RouterLink class-active="active" to="/students"
              class="bg-transparent opacity-60 2xl:rounded-r-md lg:rounded-r-md md:rounded-r-md hover:opacity-100 text-blue hover:bg-blue hover:text-white transition border-2 2xl:!border-l-0 xl:!border-l-0 lg:!border-l-0 md:!border-l-0 !border-blue py-3.5 2xl:!px-13 xl:!px-13 lg:!px-13 md:!px-13 sm:!px-20 !px-[82px] font-rubik uppercase tracking-1.25 text-xs">
              Talabalar
            </RouterLink>
          </li>
        </ul>
      </nav>
      <slot name="search-button"></slot>
    </div>
  </section>
</template>
<script setup>


</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
