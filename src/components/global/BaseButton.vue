<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';

.base-button {
  position: relative;
  padding: 13px 24px;
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
  color: #fff;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform-origin: left;
  }

  &:before {
    transition: transform .8s cubic-bezier(.23,1,.32,1);
    border: 1px solid #fff;
  }

  &:after {
    transition: transform .8s cubic-bezier(.19,1,.22,1);
    background-color: $color-accent;
    transform: scaleX(0);
  }

  &:hover {
    &:before {
      transform: translate(10px, 10px);
    }

    &:after {
      transform: none;
    }
  }
}
</style>
