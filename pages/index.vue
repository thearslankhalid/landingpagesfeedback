<template>
  <div class="home-page">
    <Header />
    <section id="hero-section">
      <div class="grid-container">
        <header>
          <div class="header-container">
            <h1>
              Do you want your SaaS landing page to
              <span class="text-yellow">convert more</span>?
            </h1>
            <p class="lead-text">
              I help SaaS founders and Indie Hackers
              <span class="text-yellow">
                improve their landing page experience
              </span>
              all the way from the first impression to the landing page
              conversion.
            </p>
            <a class="btn btn-primary" href="#secondary-cta-section">
              Get free feedback
            </a>
          </div>
        </header>
      </div>
    </section>
    <section id="primary-section">
      <div class="grid-container">
        <header>
          <h2 class="section-heading">What does the review contain?</h2>
          <p>
            The review contains a mix of conversion and optimization suggestions
            to impove your landing page.
          </p>
        </header>
        <div class="cards-container">
          <div class="card-row">
            <div class="card">
              <FeedbackIcons icon-name="align-left" />
              <h4>Copy suggestions</h4>
              <p>Suggestions on making your landing page copy clear</p>
            </div>
            <div class="card">
              <FeedbackIcons icon-name="chart-line" />
              <h4>Conversion tips</h4>
              <p>Tips to convert more visitors into leads</p>
            </div>
          </div>
          <div class="card-row">
            <div class="card">
              <FeedbackIcons icon-name="palette" />
              <h4>Design comments</h4>
              <p>Feedback about the layout and design</p>
            </div>
            <div class="card">
              <FeedbackIcons icon-name="tachometer" />
              <h4>Optimization hacks</h4>
              <p>Hacks to optimize the landing page</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="social-proof-section">
      <div class="grid-container">
        <h2 class="section-heading">
          What other SaaS founders and Indie Hackers are saying:
        </h2>
      </div>
      <div class="grid-container">
        <div
          v-for="(column, i) in reviews"
          :key="i"
          class="social-proof-column"
        >
          <div v-for="(review, j) in column" :key="j" class="card">
            <p>{{ review.review }}</p>
            <div class="person-container">
              <img :src="imgSrc(review.name)" :alt="review.name + 'picture'" />
              <div class="person-info">
                <p class="name">{{ review.name }}</p>
                <p class="position">
                  {{ review.position }},
                  <span class="company">{{ review.company }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>

<script>
import { socialProof } from '~/store/socialProof'

export default {
  data() {
    return {
      reviews: socialProof,
    }
  },

  methods: {
    imgSrc(filename) {
      try {
        return require(`~/static/social/${filename}.jpg`)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
