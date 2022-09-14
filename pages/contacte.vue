<template>
  <div class="contact animated-gradient safe-area">
    <div class="main-container">
      <h1 class="contact-title">
        Contacte
      </h1>
      <p class="contact-text-lg">
        Contacta amb nosaltres omplint aquest formulari.
      </p>
      <div class="contact-form">
        <b-form v-if="!submitted" @submit.prevent="onSubmit">
          <b-form-group
            id="email-group"
            label="Correu electrònic"
            label-for="email"
            class="email-group mb-0"
          >
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              required
            />
          </b-form-group>

          <b-form-group
            id="message-group"
            label="Missatge"
            label-for="message"
            class="message-group mb-0"
          >
            <b-form-textarea
              id="message"
              v-model="form.message"
              required
              rows="4"
              max-rows="6"
            />
          </b-form-group>
          <b-button :disabled="submitting" type="submit" variant="primary">
            Enviar
          </b-button>
        </b-form>
        <div v-else class="submitted">
          <div class="alert alert-success">
            Hem rebut el teu correu. Et contestarem tan prompte com siga possible.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        email: '',
        message: ''
      },
      submitted: false,
      submitting: false
    }
  },
  methods: {
    onSubmit () {
      this.submitting = true
      axios.post('https://services.disedit.com/api/sonora/contact', this.form)
        .then(() => {
          this.submitted = true
        }).catch(() => {
          alert('Ha ocorregut un error enviant el correu. Torna a intentar-ho més tard.')
        }).then(() => {
          this.submitting = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
