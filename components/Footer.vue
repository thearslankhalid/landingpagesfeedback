<template>
  <div class="footer-container">
    <div class="grid-container">
      <footer>
        <div class="row">
          <nuxt-link to="/">
            <Logo class="text-white" />
          </nuxt-link>
          <ul class="nav-list">
            <li>
              <nuxt-link class="nav-link" to="/sass-case-studies">
                Case Studies
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="nav-link" to="/about">About</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="row">
          <small>&copy; Copyright LandingPagesFeedback, 2021</small>
          <div class="social-list">
            <small>Connect with me on Twitter</small>
            <a target="_blank" href="https://www.twitter.com/thearslankhalid"
              ><BrandIcons icon-name="twitter"
            /></a>
            <!-- <a href="https://www.linkedin.com/thearslankhalid"
              ><BrandIcons icon-name="linkedin"
            /></a> -->
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
export default {
  components: {
    Logo,
  },

  methods: {
    imgSrc(filename) {
      try {
        return require(`~/static/brands/${filename}.svg`)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
