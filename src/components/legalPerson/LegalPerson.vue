<template>
    <div>
        <CFromGroup>
            <CLabel class="mt-7" label="Tashkilot nomi">
                <CInput v-model="organizationName" class="mt-2" placeholder="Orient group">

                </CInput>
            </CLabel>
        </CFromGroup>
    </div>
</template>
<script setup>
import { ref } from "vue"
import CFromGroup from '../Form/CFromGroup.vue';
import CInput from '../Form/CInput.vue';
import CLabel from '../Form/CLabel.vue';

const organizationName = ref('')



</script>
<style></style>