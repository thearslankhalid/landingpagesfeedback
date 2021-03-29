<template>
  <header class="nav-header">
    <div class="grid-container">
      <nav>
        <div class="logo-row">
          <Logo />
          <button class="menu-button" @click.prevent="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
              />
            </svg>
          </button>
        </div>
        <ul class="nav-list menu-list" :class="{ open: isMenuShown }">
          <li>
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link class="nav-link" to="/teardowns">
              Landing Page Reviews
            </nuxt-link>
          </li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from './Logo'
export default {
  components: {
    Logo,
  },

  data() {
    return {
      isMenuShown: false,
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuShown = !this.isMenuShown
    },
  },
}
</script>
