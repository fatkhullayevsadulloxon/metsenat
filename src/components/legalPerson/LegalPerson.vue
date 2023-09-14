<template>
    <div>
        <CFromGroup>
            <CLabel class="mt-7" label="Tashkilot nomi">
                <CInput class="mt-2" placeholder="Orient group">

                </CInput>
            </CLabel>
        </CFromGroup>
    </div>
</template>
<script>
import CFromGroup from '../Form/CFromGroup.vue';
import CInput from '../Form/CInput.vue';
import CLabel from '../Form/CLabel.vue';



export default {
    components: { CFromGroup, CLabel, CInput }
}
</script>
<style></style>