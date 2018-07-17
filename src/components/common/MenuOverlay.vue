<template>
  <div class="menu-overlay" :class="{ 'menu-overlay--opened': isOpened }">
    <div class="menu-overlay__covers"></div>
    <div class="menu-overlay__inner">
      <header class="inner__header">

      </header>
      <nav class="inner__nav">
        <router-link
          class="nav__link"
          v-for="item in overlayMenu"
          :to="item.link">
          {{item.label}}
        </router-link>
      </nav>
      <div class="inner__footer">

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapGetters('nav', ['overlayMenu']),
    ...mapGetters('ui', {
      isOpened: 'isMenuOverlayOpened'
    })
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/colors.scss';
  @import '@/assets/styles/dimensions.scss';
  @import '@/assets/styles/z-ids.scss';

  $dur-overlay: .5s;
  $dur-links: 1s;

  .menu-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $z-menu-overlay;
    width: 100%;
    padding-top: $dim-header-offset-top;
    transform: translateX(calc(100% - 100px));
    transition: transform $dur-overlay;
    transition-delay: .5s;

    &__covers {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform-origin: right;

      &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      &:before {
        background-color: $color-bg-body;
      }

      &:after {
        background-color: $color-bg-sidebar;
        transition: opacity $dur-overlay ease;
        transition-delay: .5s;
      }
    }

    &__inner {
      position: absolute;
      top: 0;
      right: 100px;
      bottom: 0;
      left: 0;
      opacity: 0;
      transition: opacity .3s;
      transition-delay: 0s;

      .inner__header {
        height: 260px;
      }

      .inner__header, .nav__link, .inner__footer {
        position: relative;
        background-color: $color-bg-sidebar;

        &:before, &:after {
          content: '';
          position: absolute;
        }

        &:before {
          top: 0;
          right: 0;
          left: 0;
          height: 1px;
          background-color: $color-bg-body;
        }

        &:after {
          top: 1px;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: $color-bg-body;
          transition: transform $dur-links cubic-bezier(.19,1,.22,1);
          transform-origin: bottom;
          transition-delay: 0s;
        }
      }

      .inner__nav {

        .nav__link {
          display: block;
          font-size: 32px;
          font-weight: 500;
          transition: color .15s;
          line-height: 100px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: .18em;

          span {
            position: relative;
          }

          &:hover {
            color: $color-accent;
          }
        }
      }

      .inner__footer {
        height: 100%;
      }
    }

    &--opened {
      transform: none;
      transition-delay: 0s;

      @for $i from 1 through 6 {
        .nav__link:nth-child(#{$i}):after {
          transition-delay: $dur-overlay + .1s * $i;
        }
      }

      .menu-overlay__covers:after {
        opacity: 0;
        transition-delay: 0s;
      }

      .menu-overlay__inner {
        opacity: 1;
        transition-delay: $dur-overlay;
      }

      .inner__header, .nav__link, .inner__footer {
        &:after {
          transform: scaleY(0);
          transition: transform $dur-links cubic-bezier(.19,1,.22,1);
        }
      }

      .inner__header:after {
        transition-delay: $dur-overlay + .1s * 0;
      }

      .inner__footer:after {
        transition-delay: $dur-overlay + .1s * 7;
      }
    }
  }
</style>
