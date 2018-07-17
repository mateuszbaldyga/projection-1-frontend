<template>
  <header class="header">
    <nav class="header__nav">
      <router-link
        class="nav__link"
        v-for="(item, id) in headerMenu"
        :to="item.link">
        <BaseSvg v-if="id === 0" name="logo"/>
        <!-- <BaseSvg v-if="id === 0" name="startup-videos-logo"/> -->
        <template v-else>
          {{item.label}}
        </template>
      </router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapGetters('nav', ['headerMenu'])
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/dimensions.scss';
@import '@/assets/styles/breakpoints.scss';
@import '@/assets/styles/colors.scss';

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-right: $dim-sidebar-width;
  padding-top: $dim-header-offset-top;

  &__nav {
    display: flex;
  }

  .nav__link {
    position: relative;
    flex-shrink: 0;
    width: 25%;
    padding-bottom: 25px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.16667;
    letter-spacing: .24em;
    transition: color .3s;

    &:hover {
      @include media(gteMobile) {
        color: $color-accent;
      }
    }
  }

  svg {
    height: 0;
  }
}
</style>
