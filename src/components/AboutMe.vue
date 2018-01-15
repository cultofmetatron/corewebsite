<template>
  <div class="aboutme">
    <h1>Hi! I'm Peter,</h1>
    <h2>a software engineer for hire</h2>
    <p>
      I've in software startups in silicon valley for the past 5 years and recently moved on to freelance fulltime.
      I've built mvps using <a href="https://nodejs.org/en/" target="_blank">nodejs</a> and <a href="https://elixir-lang.github.io/" target="_blank">elixir</a> with frontend experience in
      <a href="http://backbonejs.org/" target="_blank">backbone</a> all the way to <a href="https://reactjs.org/" target="_blank">react</a> and <a href="https://vuejs.org/" target="_blank">vue</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 0em
}

h2 {
  font-size: 1.5em;
  margin-bottom: 1em;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
