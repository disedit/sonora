<template>
  <div class="contact-wrapper">
    <div class="main-container contact">
      <h1>Contacta amb nosaltres emplenant el següent formulari</h1>
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
            />
          </b-form-group>

          <b-form-group
            id="message-group"
            label="Missatge"
            label-for="message"
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
    <img class="contact-shape" src="../assets/images/shapes/contact.svg" alt="">
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
    h1 {
      text-align: left;
      max-width: 1000px;
      margin: 2rem 0;
    }

    &-form {
      padding-top: 2rem;
      font-size: $text-base;

      form {
        display: grid;
        grid-template-columns: 1fr 1.75fr;

        .form-control {
          background: transparent;
        }

        #message-group {
          margin-left: -1px;
        }

        #email {
          &:focus {
            box-shadow: none;
          }
        }

        #message {
          min-height: 40vh;
          overflow-y: auto !important;

          &:focus {
            box-shadow: none;
          }
        }

        .btn.btn-primary {
          width: auto;
          grid-column: 2;
          align-self: end;
          justify-self: end;
          padding: .5rem 2rem;
          text-transform: uppercase;
          background-color: $white;
          color: $black;
          border: 1px solid $black;

          &:hover {
            background: $black;
            color: $white;
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

    &-shape {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 70vw;
      z-index: -10;
      height: auto;
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
  }

  @include media-breakpoint-down(md) {
    .contact {
      h1 {
        margin: 1rem 0;
        font-size: $text-lg;
        text-align: center;
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

      &-shape {
        height: auto;
        width: auto;
      }
    }
  }
</style>
