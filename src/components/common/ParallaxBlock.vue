<template>
  <div class="parallax-block" :class="{ 'parallax-block--layout-reverse': layoutReverse }">
    <article class="parallax-block__article">
      <BracketTitle
        class="article__bracket-title"
        :layoutReverse="layoutReverse"
        :subheading="subheading"
        :heading="heading"/>
      <p class="article__p">{{ article }}</p>
      <BaseButton>Learn more</BaseButton>
    </article>
    <parallax :speedFactor="0.25">
      <img :src="imgSrc" alt="">
    </parallax>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import BracketTitle from '@/components/common/BracketTitle'

export default {
  components: {
    Parallax,
    BracketTitle
  },
  props: {
    imgSrc: {
      type: String,
      default: 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    heading: String,
    subheading: String,
    article: String,
    layoutReverse: Boolean
  }
}
</script>

<style lang="scss">
  .Masthead {
    overflow: visible !important;
  }
  .parallax-block {
    position: relative;
    overflow: visible;

    &__img {
      background-size: cover;
      background-repeat: no-repeat;
    }

    &__article {
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);

      .article__bracket-title {
        margin-bottom: 20px;
      }

      .article__p {
        max-width: 500px;
        margin-bottom: 25px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.77778;
        font-family: Roboto,sans-serif;
      }
    }

    &--layout-reverse {
      .parallax-block {

        &__article {
          left: auto;
          right: 5%;
          text-align: right;
        }
      }
    }
  }
</style>
