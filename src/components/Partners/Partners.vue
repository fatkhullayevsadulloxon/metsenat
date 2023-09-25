<template>
    <div>
        <Navbar>
            <template #search-button>
                <div class="navbar__left flex items-center 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0">
                    <CInput v-model="search" @input="(onClickSearch, $event)" variant="secondary" placeholder="Izlash"
                        class="me-5">
                        <template #prefix>
                            <div>
                                <img src="../../assets/img/search-icon.svg" alt="" />
                            </div>
                        </template>
                    </CInput>
                    <CButton variant="secondary" title="Filter" @click="onCLickModal">
                        <template #prefix>
                            <div>
                                <img src="../../assets/img/filter-1.svg" alt="" />
                            </div>
                        </template>
                    </CButton>
                </div>
            </template>
        </Navbar>
        <section class="table-partners mt-12">
            <div class="container table__container">
                <div class="table__header flex items-center !justify-between">
                    <div class="table__header-left ms-4 flex">
                        <p class="uppercase font-rubik text-gray-light-800 tracking-1.25 text-xs">#</p>
                        <p class="uppercase font-rubik text-gray-light-800 tracking-1.25 text-xs ms-8">f.i.sh.</p>
                    </div>
                    <div class="table__header-right ms-4 flex">
                        <p class="uppercase font-rubik text-gray-light-800 tracking-1.25 text-xs me-14">Tel.Raqami</p>
                        <p class="uppercase font-rubik text-gray-light-800 tracking-1.25 text-xs me-14">Homiylik summasi
                        </p>
                        <p class="uppercase font-rubik text-gray-light-800 tracking-1.25 text-xs me-14">Sarflangan summa
                        </p>
                        <p class="uppercase font-rubik text-gray-light-800 tracking-1.25 text-xs me-14">Sana </p>
                        <p class="uppercase font-rubik text-gray-light-800 tracking-1.25 text-xs me-14">Holati </p>
                        <p class="uppercase font-rubik text-gray-light-800 tracking-1.25 text-xs me-6">Amallar </p>
                    </div>
                </div>
                <TableList :partnersListResult="partnersListResult"></TableList>
                <Pagination @onChangePageSize="onChangePageSize" @onChangePrev="onChangePrev" @onChangeNext="onChangeNext"
                    @onChangePage="onChangePage" :page="page" :totalPages="totalPages" :partners="partners"
                    :page_size="page_size"></Pagination>
            </div>
            <transition>
                <div class="modal" v-if="modalShow">
                    <Modal class="salom" title="Filter" @onCloseModal="onCloseModal">
                      <PartnersModal @onCloseModal="onCloseModal" :modalShow="modalShow"></PartnersModal>
                    </Modal>
                </div>
            </transition>
        </section>
    </div>
</template>
<script setup>
import client from '../../api/api'
import { onMounted, ref } from 'vue'
import TableList from './TableList.vue';
import Pagination from './Pagination.vue';
import Navbar from '../Navbar/Navbar.vue';
import CInput from '../Form/CInput.vue';
import CButton from '../Form/CButton.vue';
import Modal from '../Modal/Modal.vue';
import CSelect from '../Form/CSelect.vue';
import CLabel from '../Form/CLabel.vue';
import PartnersModal from './PartnersModal.vue';

let partnersListResult = ref([])
let partners = ref({})
let page = ref(1)
let totalPages = ref(0)
let search = ref('')
let page_size = ref(10)
let modalShow = ref(false)


const GetPartnersList = async () => {
    try {
        const { data } = await client.get('sponsor-list/', {
            params: {
                page: page.value,
                page_size: page_size.value,
                search: search.value
            }
        })
        partnersListResult.value = data.results
        partners.value = data
        totalPages.value = Math.ceil(data.count / 10)
    } catch (error) {
        console.log(error)
    }
}

const onChangePage = (pageNumber) => {
    page.value = pageNumber
    GetPartnersList()
}
const onChangeNext = () => {
    page.value++
    GetPartnersList()

}
const onChangePrev = () => {
    page.value--
    GetPartnersList()
}
const onClickSearch = (e) => {
    search.value = e.data
    GetPartnersList()
}
const onChangePageSize = (e) => {
    page_size.value = e
    GetPartnersList()
}

const onCLickModal = () => {
    modalShow.value = true
}
const onCloseModal  = () => {
    modalShow.value = false
}

onMounted(() => {
    GetPartnersList()
})
</script>
<style lang="css" scoped>
.modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 5;
}

.salom{
    margin-top: -400px
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>