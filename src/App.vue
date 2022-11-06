<template>
    <v-app>
        <v-main>
            <v-container>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
name: 'App',
    data () {
        return {
            
        }
    }
};
</script>

<style lang="scss">
    * {
        padding: 0px;
        margin: 0px;
    }
    #app {
        background: url('@/assets/images/main.png');
    }
    
    
</style>
