<template>
  <div class="contact-form">
    <h1>Lets get in touch!</h1>
    <p>
      Need someone to help you realize your mvp or solution to scale your business?
      I'm always interested in new projects.
    </p>
    <form>

      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input class="input is-large" type="text" placeholder="Name">
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
          <input class="input is-large" type="email" placeholder="Email">
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
            <select class="is-large">
              <option>$</option>
              <option>£</option>
              <option>€</option>
            </select>
          </span>
        </p>
        <p class="control">
          <input class="input is-large" type="text" placeholder="Budget">
        </p>
      </div>

      <div class="field">
        <label class="label">Tell me a Bit about your project</label>
        <div class="control">
          <textarea class="textarea is-large" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link is-large">Submit</button>
        </div>
      </div>

    </form>
  </div>
</template>
<style scoped>
h1 {
  border-left: 4px solid black;
  border-bottom: 1px solid black;
  font-size: 2em;
  padding-left: 10px;
}

</style>
<script>
export default {
  data () {
    return {};
  }
};
</script>
