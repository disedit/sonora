<template>
  <div class="contact safe-area">
    <div class="main-container">
      <h1 class="contact-title">
        Contacte
      </h1>
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
  .contact {
    background-image: url(~assets/images/gradients/gradient-contact.jpg);
    background-color: $blue;
    background-size: cover;

    &-form {
      padding-top: 2rem;
      font-size: $text-base;

      form {
        display: grid;
        row-gap: 1rem;
        column-gap: 3rem;
        grid-template-columns: 1.2fr 1fr;

        .form-control {
          background: transparent;
          padding: 1rem;
          color: $black;
        }

        #email {
          appearance: none;

          &:focus {
            box-shadow: none;
          }
        }

        .message-group {
          grid-column: 1;
        }

        #message {
          min-height: 40vh;
          overflow-y: auto !important;
          appearance: none;

          &:focus {
            box-shadow: none;
          }
        }

        .btn.btn-primary {
          width: auto;
          grid-column: 2;
          align-self: end;
          justify-self: start;
          padding: .5rem 4rem;
          text-transform: uppercase;
          background-color: transparent;
          color: $black;
          border: 1px solid $black;

          &:hover {
            background: $white;
          }
        }

        &::v-deep {
          input,
          textarea {
            &:focus {
              box-shadow: 0 0 0 0.2rem rgba($secondary, 0.25);
            }
          }
        }
      }
    }

    &-wrapper {
      position: relative;
    }
  }

  .form-control {
    border: 1px solid $black;
    border-radius: 0;
    font-size: $text-base;
    background: $body-bg;
  }

  .btn {
    border-radius: 0;
    font-size: $text-base;
  }

  .alert-success {
    background: $secondary;
    color: $white;
    border: 0;
    margin-bottom: 30rem;
  }

  @include media-breakpoint-down(md) {
    .contact {
      h1 {
        margin: 1rem 0;
      }

      &-form {
        margin-bottom: 2rem;

        form {
          grid-template-columns: 1fr;

          .btn.btn-primary {
            grid-column: 1;
          }
        }
      }
    }
  }
</style>
