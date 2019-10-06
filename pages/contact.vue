<template>
  <div class="contact">
    <h2>Contacte</h2>
    <div class="contact-form">
      <b-form v-if="!submitted" @submit.prevent="onSubmit">
        <b-form-group
          id="email-group"
          label="Correu electrònic"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="El teu e-mail"
          />
        </b-form-group>

        <b-form-group
          id="message-group"
          label="La teua pregunta"
          label-for="message"
        >
          <b-form-textarea
            id="message"
            v-model="form.message"
            required
            rows="4"
            max-rows="6"
            placeholder="Escriu ací la teua pregunta"
          />
        </b-form-group>
        <b-button type="submit" variant="primary" :disabled="submitting">
          Envia
        </b-button>
      </b-form>
      <div v-else class="submitted">
        <div class="alert alert-success">
          Hem rebut el teu correu. Et contestarem tan prompte com siga possible.
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
      axios.post('https://disedit.com/sonora/contact.php', this.form)
        .then(() => {
          this.submitted = true
        }).catch((error) => {
          alert(error)
        }).then(() => {
          this.submitting = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .contact {
    max-width: 800px;

    .contact-form {
      padding-top: 2rem;
      font-size: 1.8rem;
    }
  }

  .form-control {
    border: 2px solid $primary;
    border-radius: 0;
    font-size: 1.6rem;
    background: $background;
  }

  .btn {
    border-radius: 0;
    font-size: 1.6rem;
  }

  .alert-success {
    background: $secondary;
    color: $background;
  }
</style>
