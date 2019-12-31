<template>
    <v-app class='index'>
        <app-navigation></app-navigation>
        <v-content>
            <home></home>
        </v-content>
    </v-app>
</template>

<style>
    .index{
        font-family: 'Nunito', sans-serif;
    }
</style>

<script>
import Home from '@/components/home'
import AppNavigation from '@/components/appNavigation'

export default {
    name: 'index',
    components:{
        Home,
        AppNavigation
    }
};
</script>