<template>
  <div class="contact">
    <h1 class="contact-title visually-hidden">
      Contacta
    </h1>
    <div class="contact-text">
      Contacta amb nosaltres<br>omplint aquest formulari.
    </div>
    <div class="contact-form">
      <form v-if="!submitted" @submit.prevent="onSubmit">
        <label for="email">
          Correu electrònic
        </label>
        <input
          id="email"
          v-model="form.email"
          class="contact-form-input"
          type="email"
          required
        >
        <label for="message">
          Missatge
        </label>
        <textarea
          id="message"
          v-model="form.message"
          class="contact-form-input"
          required
          rows="4"
          max-rows="6"
        />
        <div>
          <button :disabled="submitting" type="submit" class="sonora-button">
            Enviar
          </button>
        </div>
      </form>
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
.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: $black;
  gap: 2px;

  &-text {
    background: $body-bg;
    padding: $viewport-x-padding;
    text-transform: uppercase;
    font-size: $text-xl;
    line-height: 1.1;
  }

  &-form {
    background: $body-bg;

    label {
      display: block;
    }
  }
}
</style>
