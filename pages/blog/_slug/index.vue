<template>
    <v-app>

    </v-app>
</template>

<script>
import Prismic from 'prismic-javascript'
import { initApi, generatePageData } from '@/prismic.config'


export default {
    asyncData(context) {
        if (context.payload) {
            return generatePageData('fadel-blog-post', context.payload.data)
        } else {
            return initApi(),then(api => {
                return api
                  .query(Prismic.Predicates.at('my.fadel-blog-post.uid', context.params.slug))
                  .then(response => {
                      return generatePageData('fadel-blog-post', response.results[0].data)
                  })
            })
        }
    },
}
</script>