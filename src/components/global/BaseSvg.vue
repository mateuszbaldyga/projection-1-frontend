<template>
  <svg class="base-svg">
    <use :xlink:href="svgPath"/>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    svgPath () {
      // return `/static/svg/sprites.svg#${this.name}`
      // return `@/assets/svg-sprite/sprites.svg#${this.name}`
      // return `/assets/svg-sprite/sprites.svg#${this.name}`
      // return `~assets/svg-sprite/sprites.svg#${this.name}`
      return `#${this.name}`
      // src/assets/svg-sprite/sprites.svg
      // return `/public/sprites.svg#${this.name}`
    }
  }
}
</script>

<style lang="scss">

</style>
