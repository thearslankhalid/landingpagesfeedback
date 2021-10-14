<template>
  <Tweet :id="tweetId" />
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  components: {
    Tweet,
  },

  props: ['tweetId'],
}
</script>
