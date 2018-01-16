<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <router-link to="contact" class="button is-primary">
              <span class="icon is-medium is-right">
                <icon name="envelope"></icon>
              </span>
              <span>&nbsp; Contact me </span>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>

</style>

<script>
export default {
  data () {
    return {
      navItems: [
        {
          foo: 'bar'
        }
      ]
    };
  }
};
</script>
