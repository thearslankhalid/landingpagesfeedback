<template>
  <div class="email-form-container">
    <form class="email-form" @submit.prevent="postEmail">
      <fieldset
        :class="{
          error: $v.form.email.$error,
          success: emailSuccess,
        }"
      >
        <input
          ref="emailInput"
          required
          placeholder="name@domain.com"
          name="email"
          type="email"
          @blur="setEmail"
        />
        <FeedbackIcons v-if="emailSuccess" icon-name="check-circle" />
        <FeedbackIcons v-if="$v.form.email.$error" icon-name="times-circle" />
      </fieldset>
      <fieldset
        :class="{ error: $v.form.website.$error, success: websiteSuccess }"
      >
        <input
          ref="websiteInput"
          required
          type="url"
          placeholder="https://www.mysite.com"
          @blur="setWebsite"
        />
        <FeedbackIcons v-if="websiteSuccess" icon-name="check-circle" />
        <FeedbackIcons v-if="$v.form.website.$error" icon-name="times-circle" />
      </fieldset>
      <fieldset class="honey-pot">
        <input
          v-model="form.honeypot"
          type="text"
          name="Asdjhlasdfb12easdasddf"
        />
      </fieldset>
      <button class="btn btn-primary" type="submit">
        {{ submitButtonText }}
      </button>
    </form>
  </div>
</template>

<script>
import { required, email, url } from 'vuelidate/lib/validators'
import { addContact } from '~/api'
import firebase from '~/plugins/firebase'
const data = () => {
  return {
    email: '',
    website: '',
    honeypot: '',
  }
}
export default {
  props: {
    buttonText: {
      type: String,
      required: false,
      default: 'Yes, I want it',
    },
  },

  data() {
    return {
      form: data(),
      submitButtonText: 'Yes I want it',
      submitted: false,
    }
  },

  computed: {
    emailSuccess() {
      if (!this.$v.form.email.$invalid && this.$v.form.email.email) {
        return true
      }

      return false
    },
    websiteSuccess() {
      if (!this.$v.form.website.$invalid && this.$v.form.website.url) {
        return true
      }

      return false
    },
  },

  validations: {
    form: {
      email: {
        required,
        email,
      },
      website: {
        required,
        url,
      },
    },
  },

  created() {
    this.submitButtonText = this.buttonText
  },

  methods: {
    setEmail(event) {
      this.form.email = event.target.value
      this.$v.form.email.$touch()
    },

    setWebsite(event) {
      this.form.website = event.target.value
      this.$v.form.website.$touch()
    },

    postEmail() {
      if (this.form.honeypot.length) {
        return false
      }

      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        return false
      }

      this.submitButtonText = 'Signing you up :)'

      addContact(this.form.email, this.form.website).then((response) => {
        if (response.data.success) {
          firebase.auth().signInAnonymously()
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              const uid = user.uid
              firebase
                .database()
                .ref('users/' + uid)
                .set(
                  {
                    email: this.form.email,
                    website: this.form.website,
                  },
                  (error) => {
                    if (error) {
                      this.submitButtonText = 'Try Again :('
                    } else {
                      this.submitButtonText = 'You Joined the list :)'
                      setTimeout(() => {
                        this.reset()
                      }, 1000)
                    }
                  }
                )
            }
          })
        }
      })
    },

    reset() {
      this.resetData()
      this.resetInputs()
      this.resetValidations()
      this.submitButtonText = this.buttonText
    },

    resetData() {
      Object.assign(this.form, data())
    },

    resetValidations() {
      this.$v.form.email.$model = ''
      this.$v.form.website.$model = ''
      this.$v.form.$reset()
    },

    resetInputs() {
      this.$refs.emailInput.value = ''
      this.$refs.websiteInput.value = ''
    },
  },
}
</script>
