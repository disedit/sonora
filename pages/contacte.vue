<template>
  <div class="contact">
    <h1 class="section-title">
      Contacte
    </h1>
    <div class="contact-wrapper">
      <p class="contact-text reckless">
        Contacta amb nosaltres omplint aquest formulari
      </p>
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
          Hem rebut el teu correu. Et contestarem tan prompte com ens siga possible.
        </div>
      </div>
      <div class="contact-illustrations d-none d-lg-block">
        <img src="../assets/images/illustrations/geldo.png" class="contact-illustrations-1" alt="">
        <img src="../assets/images/illustrations/castello.png" class="contact-illustrations-2" alt="">
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
  },

  head () {
    return {
      title: 'Contacte - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` },
        { name: 'theme-color', content: '#D0D2D6' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  overflow: hidden;

  &-wrapper {
    margin: 0 auto;
    margin-top: $navbar-safe-area + 4rem;
    max-width: 1200px;
    width: 100%;
    position: relative;
    padding: 0 $viewport-x-padding;
  }

  &-text {
    font-size: 2.3rem;
    line-height: 1.1;
    text-wrap: balance;
  }

  &-form {
    font-size: $text-md;
    margin-top: 2rem;
    margin-bottom: 12rem;

    &-label {
      display: block;
      margin-top: 1rem;
      margin-bottom: .5rem;
    }

    &-input {
      appearance: none;
      border: 1px $black solid;
      padding: .75rem;
      font-family: inherit;
      background: transparent;
      width: 100%;
      max-width: 800px;
      line-height: 1.2;

      &:focus {
        outline: 0;
      }
    }

    &-button {
      margin-top: 1rem;

      .sonora-button {
        &:focus-visible {
          outline: 4px $blue solid;
        }
      }
    }
  }

  .submitted {
    max-width: 40ch;
    text-wrap: balance;
  }

  &-illustrations {
    pointer-events: none;

    img {
      position: absolute;
    }

    &-1 {
      width: 44%;
      top: -15%;
      right: -15%;
      z-index: 2;
    }

    &-2 {
      width: 55%;
      top: 65%;
      right: 0;
    }
  }
}

@include media-breakpoint-down(lg) {
  .contact {
    margin-top: $mobile-nav;

    &-wrapper {
      padding: 0 $mobile-padding;
      margin-top: 3rem;
      margin-bottom: 6rem;
    }

    &-text,
    &-form {
      font-size: 1.25rem;
    }

    &-form {
      margin-bottom: 0;
    }

    &-form-input {
      max-width: 100%;
    }

    .sonora-button {
      display: block;
      width: 100%;
    }
  }
}
</style>
