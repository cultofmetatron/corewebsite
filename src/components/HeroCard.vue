<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="../assets/profile1280px.jpg" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{fullName}}</p>
          <p class="subtitle is-6"><a href="https://twitter.com/cultofmetatron">@{{twitter}}</a></p>
          <p class="subtitle is-6">Eth Wallet: 0x28906cB6Ac7Ee70b534aA18032b204E49aaB4804</p>
        </div>
      </div>
      <div class="content">
        {{blurb}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullName: 'Peter de Croos',
      twitter: 'Cultofmetatron',
      blurb: `
        Engineer, Staff spinner, Intrepid Adventurer
      `
    };
  }
};
</script>
