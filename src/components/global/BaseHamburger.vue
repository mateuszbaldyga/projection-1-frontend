<template>
  <button class="base-hamburger" :class="{ 'base-hamburger--opened': isOpened }" @click="toggle">
    <div class="base-hamburger__burger">
    </div>
    <p class="base-hamburger__label">{{ hamburgerLabel }}</p>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false
    }
  },
  computed: {
    hamburgerLabel() {
      return this.isOpened ? 'Close' : 'Menu'
    }
  },
  methods: {
    toggle() {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/z-ids.scss';

.base-hamburger {
  position: relative;
  padding: 0 10px 30px;
  cursor: pointer;

  &__burger {
    position: relative;
    width: 30px;
    height: 10px;

    &:before, &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transform-origin: center;
      transition: transform .5s ease;
    }

    &:before {
      top: 0;
    }

    &:after {
      top: 10px;
    }
  }

  &__label {
    position: absolute;
    top: 20px;
    left: -3px;
    right: -3px;
    font-size: 8px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.24em;
    font-family: Replica-Bold, sans-serif;
    text-align: center;
    color: #fff;
    transition: transform .5s ease;
  }

  &--opened {
    .base-hamburger__burger {
      &:before {
        transform: translateY(10px) rotate(-45deg);
      }

      &:after {
        transform: rotate(45deg);
      }
    }

    .base-hamburger__label {
      transform: translateY(10px);
    }
  }
}
</style>
