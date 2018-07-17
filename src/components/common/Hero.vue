<template>
  <div class="hero">
    <div class="hero__text">
      <h3 class="text__subheading" :class="{ 'text__subheading--active': isActive }">
        <div>{{ subheading }}</div>
      </h3>
      <h1 class="text__heading" :class="{ 'text__heading--active': isActive }" v-for="heading in headings">
        <div>
          {{ heading }}
        </div>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isActive: false
    }
  },
  props: {
    subheading: {
      type: String,
      default: 'Subheading'
    },
    headings: {
      type: Array,
      default: () => ['Heading1', 'Heading2']
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  },
  mounted() {
    setTimeout(() => {
      this.toggleActive()
    }, 500)
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/dimensions.scss';
@import '@/assets/styles/fonts.scss';
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/z-ids.scss';

.hero {
  position: relative;
  height: 100vh;
  z-index: $z-content-over-stripes;
  pointer-events: none;

  &__text {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    overflow: hidden;
    pointer-events: auto;

    .text__subheading {
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
      line-height: 1.4375;
      letter-spacing: .18em;
      font-family: $font-mono;
      overflow: hidden;

      > div {
        transform: translateY(100%);
        transition: transform 1.5s cubic-bezier(.19,1,.22,1);
      }

      &--active > div {
        transform: none;
      }
    }

    .text__heading {
      color: $color-bg-body;
      background-color: #fff;
      text-transform: uppercase;
      padding-left: 13px;
      margin-bottom: 15px;
      font-size: 56px;
      line-height: 1.12195;
      letter-spacing: .24em;
      font-weight: 700;
      transform: translateX(-100%);
      white-space: nowrap;
      overflow: hidden;

      @for $i from 1 through 4 {
        &:nth-child(#{$i}), &:nth-child(#{$i}) > div {
          transition: transform 1s cubic-bezier(.275,.99,.22,1);
          transition-delay: .1s * $i;
        }
      }

      > div {
        transform: translateX(100%);
      }

      &--active {
        transform: none;

        > div {
          transform: none;
        }
      }

    }
  }
}
</style>
