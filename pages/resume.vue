<template>
    <v-app class='index' :style="style1">
        <app-navigation-lite></app-navigation-lite>
        <br><br><br>
        <v-content class="ma-5">
            <pdf src="/resume.pdf"></pdf>
        </v-content>
    </v-app>
</template>

<style>
    .index{
        font-family: 'Roboto', sans-serif;
    }
</style>

<script>
import pdf from 'vue-pdf'
import AppNavigationLite from '@/components/appNavLite'

export default {
    name: 'resume',
    components:{
        AppNavigationLite,
        pdf,
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

