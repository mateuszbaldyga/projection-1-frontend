<template>
  <aside class="sidebar">
    <BaseHamburger @click.native="toggleMenu"/>
  </aside>
</template>

<script>
export default {
  components: {},
  methods: {
    toggleMenu() {
      this.$store.commit('ui/SWITCH_MENU_OVERLAY', 'toggle')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/dimensions.scss';
@import '@/assets/styles/z-ids.scss';

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: $dim-sidebar-width;
  height: 100%;
  padding-top: $dim-header-offset-top;
  z-index: $z-menu-overlay + 10;
}
</style>
