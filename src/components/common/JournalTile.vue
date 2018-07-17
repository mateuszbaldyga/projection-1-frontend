<template>
  <div class="journal-tile">
    <img class="journal-tile__img" :src="imgSrc" alt="">
    <article class="journal-tile__article">
      <h4 class="article__subheading"></h4>
      <h2 class="article__heading">{{ subheading[0] }} <span></span> {{ subheading[1] }}</h2>
      <BaseButton>{{ cta }}</BaseButton>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    cta: String,
    heading: String,
    subheading: Array
  }
}
</script>

<style lang="scss">
.journal-tile {

  &__img {

  }

  &__article {

    .article__subheading {
      margin-bottom: 15px;
      color: #000;
      font-size: 10px;
      font-weight: 400;
      text-transform: uppercase;
      line-height: 1.2;
      letter-spacing: .1em;
    }

    .article__heading {
      margin-bottom: 25px;
      color: #000;
      font-size: 22px;
      text-transform: uppercase;
      letter-spacing: .15em;

      span {

      }
    }
  }
}
</style>
