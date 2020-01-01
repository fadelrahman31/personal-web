<template>
    <v-app class='index' :style="style1">
        <app-navigation></app-navigation>
        <v-content>
            <home></home>
            
        </v-content>
    </v-app>
</template>

<style>
    .index{
        font-family: 'Roboto', sans-serif;
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
    },
    data(){
        return{
            style1:{
                backgroundColor: '#2c4863'
            }
            
        }
    }
};
</script>

