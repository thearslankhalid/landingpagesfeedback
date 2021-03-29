<template>
  <img :src="imgSrc()" :alt="altText" />
</template>

<script>
export default {
  name: 'DynamicImage',

  props: {
    filename: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
  },

  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.filename}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
