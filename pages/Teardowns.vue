<template>
  <div class="teardown-page">
    <Header />
    <!-- <QuestionCta /> -->
    <ul class="grid-container post-list">
      <li v-for="article of articles" :key="article.slug">
        <nuxt-link
          :to="{ name: 'case-studies-slug', params: { slug: article.slug } }"
        >
          <img
            loading="lazy"
            :src="imgSrc(`${article.imageFolder}/${article.postImg}`)"
          />
          <div class="header-container">
            <h4>{{ article.title }}</h4>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'postImg', 'slug', 'imageFolder'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  },

  methods: {
    imgSrc(filename) {
      try {
        return require(`~/assets/images/${filename}`)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
