<template>
  <div class="contact">
    <div class="contact-text">
      <h1>Contacta amb nosaltres<br>omplint aquest formulari.</h1>
    </div>
    <div class="contact-form">
      <form v-if="!submitted" @submit.prevent="onSubmit">
        <label for="email" class="contact-form-label">
          Correu electrònic
        </label>
        <input
          id="email"
          v-model="form.email"
          class="contact-form-input"
          type="email"
          required
        >
        <label for="message" class="contact-form-label">
          Missatge
        </label>
        <textarea
          id="message"
          v-model="form.message"
          class="contact-form-input"
          required
          rows="6"
          max-rows="10"
        />
        <div class="contact-form-button">
          <button :disabled="submitting" type="submit" class="sonora-button">
            <span>{{ submitting ? 'Enviant...' : 'Enviar' }}</span>
          </button>
        </div>
      </form>
      <div v-else class="submitted">
        Hem rebut el teu correu. Et contestarem tan prompte com siga possible.
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

    &-label {
      display: block;
      border-bottom: 2px $black solid;
      padding: 1.5rem $viewport-x-padding;
    }

    &-input {
      display: block;
      background: $white;
      border: 0;
      border-bottom: 2px $black solid;
      width: 100%;
      font-family: inherit;
      padding: 1.5rem $viewport-x-padding;

      &:focus {
        outline: 0;
      }
    }

    &-button {
      text-align: center;
      padding: 1.5rem $viewport-x-padding;

      button:disabled {
        color: $black;
        opacity: .25;
      }
    }
  }
}

.submitted {
  background: $yellow;
  padding: $viewport-x-padding;
  font-size: $text-lg;
  line-height: 1.1;
  border-bottom: 2px $black solid;
}

@include media-breakpoint-down(md) {
  .contact {
    grid-template-columns: 1fr;
    gap: 0;

    &-form {
      &-label,
      &-input {
        border-width: 1px;
      }
    }
  }
}
</style>
