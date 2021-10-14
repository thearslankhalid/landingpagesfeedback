<template>
  <article class="post-page">
    <Header />
    <div class="post-header-container">
      <div class="grid-container post-header">
        <header>
          <h1>{{ article.title }}</h1>
        </header>
        <img :src="imgSrc()" />
      </div>
    </div>

    <div class="grid-container">
      <nuxt-content :document="article" />
      <!-- <aside>
        <CardForm />
      </aside> -->
    </div>
    <CTASection />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.article.imageFolder}/${this.article.headerImg}`)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
