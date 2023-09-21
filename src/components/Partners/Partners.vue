<template>
    <div>
        <Navbar>
            <template #search-button>
                <div class="navbar__left flex items-center 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0">
                    <CInput v-model="search" @input="(onClickSearch, $event)" variant="secondary" placeholder="Izlash" class="me-5">
                        <template #prefix>
                            <div>
                                <img src="../../assets/img/search-icon.svg" alt="" />
                            </div>
                        </template>
                    </CInput>
                    <CButton variant="secondary" title="Filter" @click="onCLick">
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
                <Pagination @onChangePageSize="onChangePageSize" @onChangePrev="onChangePrev" @onChangeNext="onChangeNext" @onChangePage="onChangePage"
                    :page="page" :totalPages="totalPages" :partners="partners" :page_size="page_size"></Pagination>
            </div>
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

let partnersListResult = ref([])
let partners = ref({})
let page = ref(1)
let totalPages = ref(0)
let search = ref('')
let page_size = ref(10)


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

onMounted(() => {
    GetPartnersList()
})
</script>
<style lang="">
    
</style>