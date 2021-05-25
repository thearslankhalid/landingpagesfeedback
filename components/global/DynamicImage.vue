<template>
  <figure>
    <img :src="imgSrc()" :alt="altText" />
    <figcaption>{{ figCaption }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'DynamicImage',

  props: {
    path: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
    figCaption: {
      type: String,
      required: true,
    },
  },

  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.path}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
