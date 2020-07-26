<template>
    <main class="col-span-12">
        <article>
            <div class="grid items-center grid-cols-1 md:grid-cols-5 post header">
                <div class="post-image" v-if="mainimage.url !== undefined">
                    <ResponsiveImg :imgobject="mainimage" :sizes="'(min-width: 768px) 60vw, 100vw'" />
                </div>
                <div class="w-10/12 mx-auto mt-4 post-data md:mt-0 md:w-full md:pl-8">
                    <h1
                        class="text-3xl font-bold tracking-wider uppercase break-words lg:text-5xl"
                    >{{ $prismic.asText(title) }}</h1>

                    <div class="w-16 mt-2 mb-4 border-b-2 border-accent-dark"></div>

                    <ul class="flex justify-start list-none post-meta">
                        <li class="italic date">{{ date }}</li>
                    </ul>
                </div>
            </div>

            <div class="content">
                <Slices :slicedata="slices" />
            </div>
        </article>
    </main>
</template>

<script>
import ResponsiveImg from '~/components/ResponsiveImg'
import Slices from '~/components/Slices'

export default {
    components:{
        ResponsiveImg,
        Slices
    },
    async asyncData({ $prismic, params, error }) {
        try{
            //Query post
            const post = await $prismic.api.getByUID('post', params.uid)
            console.log(post)

            //Returns data to be used in template
            return {
                title: post.data.title,
                date: Intl.DateTimeFormat('en-US').format(
                    new Date(post.data.date)
                ),
                mainimage: post.data.image,
                slices: post.data.body
            }

        } catch (e) {
            //Returns error page
            error({ statusCode: 404, message: 'Page not found' })

        }
    },    
}
</script>