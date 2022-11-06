<template>
    <v-card
        max-width="300"
    >
        <v-list>
            <v-list-item
                v-for="(link, index) in links" 
                :key="index"
            >
                <v-list-item-icon>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    {{ link.name }}
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            links:[
                {link: '/', name: 'Главная', icon: 'mdi-home'},
                {link: '/console', name: 'Консоль', icon: 'mdi-console'},
            ]
        }
    }
}
</script>

<style>

</style>