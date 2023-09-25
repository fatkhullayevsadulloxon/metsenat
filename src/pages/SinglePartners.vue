<template>
    <div>
        <SingleHeader :singleSponsor="singleSponsor"></SingleHeader>
        <SinglePartnersAbout :singleSponsor="singleSponsor"></SinglePartnersAbout>
        <img class="m-auto mt-[174px]" src="../assets/img/footer-bg.svg" alt="">
    </div>
</template>
<script>
import SingleHeader from '../components/SinglePartners/SingleHeader.vue';
import client from '../api/api';
import SinglePartnersAbout from '../components/SinglePartners/SinglePartnersAbout.vue';

export default {
    components: { SingleHeader, SinglePartnersAbout },
    data() {
        return {
            singleSponsor: {} 
        }
    },
    
    methods: {
        async SinglePartnersList() {
            const { data } = await client.get(`sponsor-detail/${this.$route.params.id}`)
            this.singleSponsor = data
        }
    },
    mounted() {
        this.SinglePartnersList()
    }
}

</script>
<style scoped></style>