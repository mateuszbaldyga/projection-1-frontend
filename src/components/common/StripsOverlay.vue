<template>
  <div class="strips-overlay">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/dimensions.scss';
@import '@/assets/styles/z-ids.scss';

.strips-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  pointer-events: none;
  padding-right: $dim-sidebar-width;
  z-index: $z-stripes-overlay;

  > div {
    flex-shrink: 0;
    width: 25%;

    &:not(:last-child) {
      border-right: 1px solid $color-border-stripes-overlay;
    }
  }
}
</style>
