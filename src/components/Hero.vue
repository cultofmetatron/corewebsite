<template>
  <section class="container top-spacer">
    <div class="columns">
      <div class="column">
        <hero-card />
      </div>
      <div class="column">
        <slot name="right-side"></slot>
      </div>
    </div>
  </section>
</template>

<style>

img.profile-image {
  border: 1px solid rgb(0, 41, 128);
  box-shadow: 2px 2px 10px rgb(0, 41, 128);
}

section.container.top-spacer {
  margin-top: 20px;
}

</style>

<script>
import HeroCard from './HeroCard';

const aboutMe = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
  like Aldus PageMaker including versions of Lorem Ipsum.
`;

export default {
  components: {
    'hero-card': HeroCard
  },
  data () {
    return {
      aboutMe
    };
  }
};
</script>
