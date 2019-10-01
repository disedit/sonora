<template>
  <div class="contact">
    <h2>Contacte</h2>
    <div class="contact-form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Correu Electrònic:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="El teu e-mail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="La teua pregunta" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.name"
          required
          rows="4"
          max-rows="6"
          placeholder="Enter name"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .contact {
    padding-top: 2rem;

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

</style>
