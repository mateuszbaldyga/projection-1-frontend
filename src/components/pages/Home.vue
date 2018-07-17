<template>
  <div class="home-page">
    <Hero/>
    <ParallaxBlock
      heading="Lorem<br>Lorem"
      subheading="how we do it"
      article="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    <ParallaxBlock
      layoutReverse
      heading="Lorem<br>Lorem"
      subheading="how we do it"
      imgSrc="https://images.pexels.com/photos/160920/kickboxer-girl-kickboxing-athletic-girl-160920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      article="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    <BracketTitle
      layoutSmallHeading
      heading="the<br>journal"
      />
  </div>
</template>

<script>
import Hero from '@/components/common/Hero'
import ParallaxBlock from '@/components/common/ParallaxBlock'
import BracketTitle from '@/components/common/BracketTitle'

export default {
  components: {
    Hero,
    ParallaxBlock,
    BracketTitle
  }
}
</script>

<style lang="scss">
h1 {
  // position: absolute 0 0 * *;
}
</style>
