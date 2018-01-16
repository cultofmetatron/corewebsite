<template>
  <div class="social columns">
    <div v-for="icon in icons" :key="icon.name" class="column">
      <a v-bind:href="icon.href" target="_blank">
        <b-tooltip
          v-bind:label="icon.tooltip"
        >
          <icon
              v-bind:name="icon.name"
              v-bind:scale="scale"
              type="is-primary">
          </icon>
        </b-tooltip>
      </a>
    </div>
  </div>
</template>

<style scoped>

div.social {
  margin-top: 10px;
  vertical-align: middle;
  text-align: center;
}

div.social div.column {
  border-bottom: 5px solid transparent;
}

div.social div.column:hover {
  border-bottom: 5px solid rgb(2, 87, 194);
  color: rgb(2, 87, 194);
}

div.social div.column > * {
  vertical-align: middle;
  cursor: pointer
}

div.social div.column > * a {
  color: rgb(2, 87, 194);
}

div.social div.column > * a:hover {
  color: rgb(2, 87, 194);
}

</style>

<script>

export default {
  data () {
    return {
      scale: 5,
      icons: [
        {
          name: 'linkedin',
          href: 'https://www.linkedin.com/in/peterdecroos/',
          tooltip: 'Linkedin'
        },
        {
          name: 'github',
          href: 'https://github.com/cultofmetatron',
          tooltip: 'Github'
        },
        {
          name: 'code',
          href: 'https://www.codementor.io/cultofmetatron',
          tooltip: 'CodeMentor'
        },
        {
          name: 'instagram',
          href: 'https://www.instagram.com/cultofmetatron/',
          tooltip: 'Instagram'
        },
        {
          name: 'twitter',
          href: 'https://twitter.com/cultofmetatron',
          tooltip: 'Twitter'
        }
      ]
    };
  }
};
</script>
