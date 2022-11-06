<template>
    <v-sheet
        class="left-panel"
        elevation="20"
    >
    <navigationList/>
    </v-sheet>
</template>

<script>
import navigationList from '@/components/navigationList.vue';

export default {
    name: 'homePage',
        components: {
            navigationList
        },
    }
</script>

<style lang="scss" scoped>

</style>
