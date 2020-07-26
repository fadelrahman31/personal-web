<template>
  <div class="w-10/12 mx-auto my-16 dark-mode:text-white text-slice">
    <prismic-rich-text :field="slice.primary.text" v-if="slice.primary.text.length > 0" />
  </div>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      default: null
    }
  }
}
</script>