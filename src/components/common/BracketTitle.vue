<template>
  <div class="bracket-title" :class="className">
    <div class="bracket-title__bracket"></div>
    <h3 class="bracket-title__subheading" v-if="subheading">
      <div v-html="subheading"/>
    </h3>
    <h1 class="bracket-title__heading" v-if="heading">
      <div v-html="heading"/>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    subheading: String,
    layoutReverse: Boolean,
    layoutSmallHeading: Boolean
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    className() {
      return {
        'bracket-title--active': this.isActive,
        'bracket-title--layout-reverse': this.layoutReverse,
        'bracket-title--layout-s-heading': this.layoutSmallHeading
      }
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
  @import '@/assets/styles/colors.scss';
  @import '@/assets/styles/dimensions.scss';
  @import '@/assets/styles/z-ids.scss';
  @import '@/assets/styles/fonts.scss';
  
  $dim-bracket-width: 13px;
  
  .bracket-title {
    position: relative;
    padding: 23px 0 23px 35px;

    &__bracket {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: $dim-bracket-width;
      background-color: $color-accent;
      transform: scaleY(0);
      transition: transform .5s cubic-bezier(.275,.99,.22,1);

      &:before, &:after {
        content: '';
        position: absolute;
        background-color: $color-accent;
        left: $dim-bracket-width;
        width: $dim-bracket-width;
        height: $dim-bracket-width;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform .5s .5s cubic-bezier(.275,.99,.22,1);
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 0;
      }
    }

    &__subheading {
      margin-bottom: 10px;
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
    }

    &__heading {
      color: #fff;
      text-transform: uppercase;
      font-size: 56px;
      line-height: 1.12195;
      letter-spacing: .24em;
      font-weight: 700;
      transform: translateX(-100%);
      white-space: nowrap;
      overflow: hidden;

      &, & > div {
        transition: transform 2s cubic-bezier(.275,.99,.22,1);
      }

      > div {
        transform: translateX(100%);
      }
    }

    &--layout-reverse {
      text-align: right;
      padding-left: 0;
      padding-right: 35px;

      .bracket-title__bracket {
        left: auto;
        right: 0;

        &:before, &:after {
          left: auto;
          right: $dim-bracket-width;
          transform-origin: right;
        }
      }

      .bracket-title__heading {
        transform: translateX(100%);
        margin-right: -.24em;

        > div {
          transform: translateX(-100%);
        }
      }
    }

    &--layout-s-heading {
      .bracket-title__heading {
        font-size: 26px
      }
    }

    &--active {

      .bracket-title__bracket {
        transform: none;

        &:before, &:after {
          transform: none;
        }
      }

      .bracket-title__subheading > div {
        transform: none;
      }

      .bracket-title__heading {
        transform: none;

        > div {
          transform: none;
        }
      }
    }
  }
</style>
