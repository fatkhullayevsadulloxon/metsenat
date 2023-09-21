<template>
  <header class="header bg-white border-b-2">
    <div class="container header__container flex items-center justify-between !py-3">
      <RouterLink class="header__logo hover:opacity-50 transition !bg-transparent" to="/">
        <img src="../../assets/img/header-logo.svg" alt="" width="173" height="24" />
      </RouterLink>
      <div class="header__right flex items-center">
        <button
          class="header__user-btn hover:opacity-50 transition flex rounded-md items-center bg-gray-light-500 py-2 px-4">
          <p class="me-6 font-rubik font-medium text-blue-light-700 line-clamp-2">Shohrux</p>
          <div class="bg-success rounded">
            <i class="fa-solid fa-user fa-lg px-2 !pb-3 !pt-5 fa-xl" style="color: #ffffff"></i>
          </div>
        </button>
        <button class="hover:opacity-50 ms-10 2xl:block xl:block lg:block md:block sm:hidden hidden">
          <img src="../../assets/img/log-out__img.svg" alt="" />
        </button>
      </div>
    </div>
  </header>
</template>
<script>
export default {}
</script>
<style lang=""></style>
