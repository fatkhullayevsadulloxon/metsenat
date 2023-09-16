<template>
  <div>
    <div class="container">
      <h1 class="font-poppins mt-[76px] text-[40px] max-w-[423px]">
        Homiy sifatida ariza topshirish
      </h1>
      <FNavbar
        :personNav="personNav"
        @physicalPersonClick="physicalPersonClick"
        @legalPersonClick="legalPersonClick"
      />
    </div>
    <Transition name="fade">
      <CFromGroup v-if="!personNav"></CFromGroup>
    </Transition>
    <Transition>
      <LegalPerson v-if="personNav"></LegalPerson>
    </Transition>
  </div>
</template>
<script>
import CInput from '../components/Form/CInput.vue'
import CFromGroup from '../components/Form/CFromGroup.vue'
import FNavbar from '../components/Form/FNavbar.vue'
import LegalPerson from '../components/legalPerson/LegalPerson.vue'
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      personNav: false
    }
  },
  methods: {
    legalPersonClick() {
      this.personNav = true
    },
    physicalPersonClick() {
      this.personNav = false
    }
  },
  components: { CInput, CFromGroup, FNavbar, LegalPerson, RouterLink }
}
</script>
<style>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
