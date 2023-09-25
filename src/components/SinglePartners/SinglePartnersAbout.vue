<template>
    <section class="single-partners-about">
        <div class="container">
            <div class="bg-white m-auto rounded-xl 2xl:w-[793px] xl:w-[793px] lg:w-[793px] w-full mt-10">
                <div class="p-8">
                    <div class="2xl:flex xl:flex lg:flex md:flex block items-center justify-between">
                        <h3 class="font-pro-bold ms-4 text-blue-light-700 text-2xl !m-0 !p-0">Homiy haqida</h3>
                        <CButton @click="onShowModal" title="Tahrirlash" variant="secondary">
                            <template #prefix>
                                <div>
                                    <img src="../../assets/img/edit.svg" alt="">
                                </div>
                            </template>
                        </CButton>
                    </div>
                    <div class="2xl:flex xl:flex lg:flex md:flex block items-center mt-8">
                        <img class="py-4 px-4.5 me-5 bg-[#E0E7FF] rounded-md" src="../../assets/img/user.svg" alt="">
                        <h3 class="text-[#212121] text-base font-pro-bold max-w-[163px]">{{ singleSponsor.full_name }}
                        </h3>
                    </div>
                    <div class="2xl:flex xl:flex lg:flex md:flex block items-center mt-9">
                        <div>
                            <p class="uppercase mb-2 font-rubik tracking-1.25 text-[#B5B5C3] text-xs">Telefon raqam</p>
                            <a :href="`tel:${singleSponsor.phone}`" class="text-[#212121] text-base font-pro-bold">{{
                                singleSponsor.phone }}</a>
                        </div>
                        <div class="2xl:ms-[227px] xl:ms-[227px] lg:ms-[227px] md:ms-[227px] m-auto">
                            <p class="uppercase font-rubik tracking-1.25 text-[#B5B5C3] text-xs">Homiylik summasi</p>
                            <h3 class="text-[#212121] text-base font-pro-bold mt-3">{{ formatPrice(singleSponsor.sum) }} UZS
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition>
            <div class="modal" v-if="modalShow">
                <Modal class="modal-single" title="Tahrirlash" @onCloseModal="onCloseModal">
                    <Transition name="fade">
                        <partnersSingleModal v-if="personNav" :singleSponsor="singleSponsor">
                            <template #navbar>
                                <FNavbar :personNav="personNav" @legalPersonClick="legalPersonClick" @physicalPersonClick="physicalPersonClick"></FNavbar>
                            </template>
                        </partnersSingleModal>
                    </Transition>
                    <!-- <Transition name="fade"> -->
                    <partnersSingleModal v-if="!personNav" :singleSponsor="singleSponsor">
                        <template #navbar>
                            <FNavbar :personNav="personNav" @physicalPersonClick="physicalPersonClick" @legalPersonClick="legalPersonClick"></FNavbar>
                        </template>
                        <template #firmname>
                            <CLabel label="Tashkilot nomi" class="mt-8">
                                <CInput placeholder="Orient Group" class="mt-2"></CInput>
                            </CLabel>
                        </template>
                    </partnersSingleModal>
                    <!-- </Transition>/ -->
                </Modal>
            </div>
        </transition>
    </section>
</template>
<script>
import CButton from '../Form/CButton.vue';
import CInput from '../Form/CInput.vue';
import CLabel from '../Form/CLabel.vue';
import FNavbar from '../Form/FNavbar.vue';
import Modal from '../Modal/Modal.vue';
import partnersSingleModal from './partnersSingleModal.vue';

export default {

    components: { CButton, CInput, Modal, partnersSingleModal, FNavbar, CLabel },
    props: {
        singleSponsor: {
            type: Object
        }
    },
    data() {
        return {
            modalShow: false,
            personNav: true
        }
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed('UZS').replace(' ', ' ');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        onShowModal() {
            this.modalShow = true
        },
        onCloseModal() {
            this.modalShow = false
        },

        physicalPersonClick() {
            this.personNav = true
        },
        legalPersonClick() {
            this.personNav = false
        },
    }
}


</script>
<style scoped lang="css">
.modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 5;
    margin-top: -300px
}

</style>