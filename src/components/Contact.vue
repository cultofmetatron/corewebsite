<template>
  <div class="contact-form">
    <div v-if="!submitted">
      <h1>Lets get in touch!</h1>
      <p>
        Need someone to help you realize your mvp or solution to scale your business?
        I'm always interested in new projects.
      </p>
      <form v-on:submit="pushForm">
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input class="input is-large" type="text" v-model="firstName" placeholder="Name">
            <span class="icon is-medium is-left">
              <icon name="user"></icon>
            </span>
            <span class="icon is-medium is-right">
              <icon name="check"></icon>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input class="input is-large" type="email" v-model="email" placeholder="Email">
            <span class="icon is-medium is-left">
              <icon name="envelope"></icon>
            </span>
            <span class="icon is-medium is-right">
              <icon name="check"></icon>
            </span>
          </div>
        </div>

        <div class="field has-addons has-addons-left is-large">
          <p class="control">
            <span class="select is-large">
              <select class="is-large" v-model="currency">
                <option>$</option>
                <option>£</option>
                <option>€</option>
              </select>
            </span>
          </p>
          <p class="control">
            <input class="input is-large" type="number" v-model="budget" placeholder="Budget">
          </p>
        </div>

        <div class="field">
          <label class="label"></label>
          <div class="control">
            <textarea required class="textarea is-large" v-model="summary" placeholder="Tell me a Bit about your project"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-link is-large is-fullwidth">Submit</button>
          </div>
        </div>

      </form>
    </div>

    <div v-if="submitted">
      <p>Thanks for your inquiry. I'll reach out to you soon!</p>
    </div>
  </div>
</template>
<style scoped>
h1 {
  border-left: 4px solid black;
  border-bottom: 1px solid black;
  font-size: 2em;
  padding-left: 10px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
}

</style>
<script>
import firebase from '@/services/firebase';

export default {
  methods: {
    pushForm (ev) {
      console.log(this.firstName);
      const firestore = firebase.firestore();
      // push the data up
      firestore.collection('submissions').add({
        firstName: this.firstName,
        email: this.email,
        budget: this.budget,
        summary: this.summary,
        currency: this.currency
      })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
          this.submitted = true;
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  },
  data () {
    return {
      firstName: '',
      email: '',
      budget: '',
      summary: '',
      currency: '$',
      submitted: false
    };
  }
};
</script>
