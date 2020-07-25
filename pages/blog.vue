<template>
    <!-- <v-app class='index' :style="style1">  -->
    <v-app>
        <app-navigation-lite></app-navigation-lite>
        <br><br><br>
        <v-card
            class = "ma-3 pa-3 mx-auto"
        >
            <section class="blog-post">
                <h1 class="title">{{ header }}</h1>
                <p class="paragraph">{{ content }}</p>
            </section>
        </v-card>
        
    </v-app>
</template>

<style>
    /* .index{
        font-family: 'Roboto', sans-serif;
    } */
    .blog-post {
        margin: 25px 0;
        padding: 0 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .title {
        margin: 50px 0;
    }
    p {
        color: #000;
        margin: 15px 0 5px;
        max-width: 450px;
        line-height: 1.44;
    }
</style>

<script>
import AppNavigationLite from '@/components/appNavLite'
import Prismic from 'prismic-javascript';
import PrismicDom from 'prismic-dom'
import PrismicConfig from './../prismic.config.js';


export default {
    name: 'blog',
    components:{
        AppNavigationLite,

    },
    async asyncData() {
        const api = await Prismic.getApi(PrismicConfig.apiEndpoint);
        let blog_post = {};
        const results = await api.query(
            Prismic.Predicates.at("document.type", "fadel-blog-post"), {lang: "en-gb"}
        );
        blog_post = results.results[0];
        const header = PrismicDom.RichText.asText(blog_post.data.blog_post_title);
        const content = PrismicDom.RichText.asText(blog_post.data.blog_content);
        return {
            blog_post,
            header,
            content
        };
    },
};
</script>

