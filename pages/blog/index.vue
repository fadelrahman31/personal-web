<template>
    <v-app>
        <app-navigation-lite></app-navigation-lite>
        <br><br><br>
        <h1>{{ $prismic.asText(title) }}</h1>
        <p>{{ $prismic.asText(konten) }}</p>
    </v-app>
</template>

<script>
import AppNavigationLite from '@/components/appNavLite'


export default {
    name: 'blog',
    components: {
        AppNavigationLite
    },
    async asyncData({ $prismic, error }) {
        try{
            const document = (await $prismic.api.getSingle('about-me'))
            console.log(document)
            return {
                title: document.data.judul,
                konten: document.data.konten,
                document
            }
        } catch (e) {
            error({ statusCode: 404, message: 'Page not found' })
        }
        
    },
    
}
</script>