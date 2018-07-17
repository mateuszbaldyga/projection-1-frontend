<template>
  <div class="app-loader" :class="{ 'app-loader--hidden': !pageLoading }">
    <div class="app-loader__stripes">
      <div class="stripes__stripe stripes__stripe-0">
      </div>
      <div class="stripes__stripe stripes__stripe-1">
      </div>
      <div class="stripes__stripe stripes__stripe-2">
      </div>
      <div class="stripes__stripe stripes__stripe-3">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('ui', [
      'pageLoading'
    ])
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/z-ids.scss';

  $dur: .3s;
  $del: .09s;

  .app-loader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $z-app-loader;
    pointer-events: none;
    overflow: hidden;

    &__stripes {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
    }

    .stripes__stripe {
      position: absolute;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 75%;
      background: linear-gradient(90deg, #000, #000);
      transform: matrix(1, -1, 0, 1, 0, 0);
      transition: transform $dur;
      will-change: transform;

      &-0 {
        top: calc(-97% - 0px);
        transition-delay: $del * 0;
      }

      &-1 {
        top: calc(-22% - 2px);
        transition-delay: $del * 0;
      }

      &-2 {
        top: calc(53% - 4px);
        transition-delay: $del * 0;
      }

      &-3 {
        top: calc(128% - 6px);
        transition-delay: $del * 0;
      }
    }

    &--hidden {
      .stripes__stripe {
        transform: translate(-100%, -100%) matrix(1, -1, 0, 1, 0, 0);

        &-0 {
          top: calc(-97% - 0px);
          transition-delay: $del * 3;
        }

        &-1 {
          top: calc(-22% - 2px);
          transition-delay: $del * 2;
        }

        &-2 {
          top: calc(53% - 4px);
          transition-delay: $del * 1;
        }

        &-3 {
          top: calc(128% - 6px);
          transition-delay: $del * 0;
        }
      }
    }
  }
</style>