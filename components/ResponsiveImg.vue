<template>
    
</template>

<script>
export default {
    name: 'ResponsiveImg',
    props:{
        imgobject: {
            type: Object,
            default: null
        },
        size: {
            type: String,
            default: null
        }
    },
    methods: {
        imageSrcset() {
           let srcset =
                `${this.imgobject['320'].url} ${this.imgobject['320'].dimensions.width}w, ` +
                `${this.imgobject['640'].url} ${this.imgobject['640'].dimensions.width}w, ` +
                `${this.imgobject['768'].url} ${this.imgobject['768'].dimensions.width}w, ` +
                `${this.imgobject['1024'].url} ${this.imgobject['1024'].dimensions.width}w, ` +
                `${this.imgobject['1536'].url} ${this.imgobject['1536'].dimensions.width}w, ` +
                `${this.imgobject.url} ${this.imgobject.dimensions.width}w, `
 
            return srcset 
        }
    }
}
</script>