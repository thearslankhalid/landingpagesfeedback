<template>
  <div class="thankyou-page">
    <div class="header-container">
      <Logo />
      <div class="grid-container">
        <header>
          <h1>Thank You</h1>
          <p class="lead-text">
            A welcome email is on its way. If you have any unanswered questions,
            write them back to me. I will try my best to address them in your
            landing page review.
          </p>
        </header>
      </div>
    </div>
    <section class="offer-section">
      <div class="grid-container">
        <div class="content">
          <h2>Get actionable tips</h2>
          <p>
            If you find it helpful to receive short and actionable tips to
            improve your landing page... then follow me on Twitter.
          </p>
          <a class="link" href="https://www.twitter.com/thearslankhalid">
            Click here to follow me on Twitter
          </a>
        </div>
      </div>
    </section>
    <section class="offer-section">
      <div class="grid-container">
        <div class="content">
          <h2>Steal tips now</h2>
          <p>
            If you have some time, you can also steal a tip or two from my
            latest feedback and use it to improve your landing page.
          </p>
          <nuxt-link
            class="link"
            :to="{
              name: 'blog-slug',
              params: { slug: latestArticle[0].slug },
            }"
          >
            Check out latest feedback
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const latestArticle = await $content('blog', params.slug)
      .only('slug')
      .sortBy('createdAt', 'desc')
      .limit(1)
      .fetch()

    return { latestArticle }
  },
}
</script>
