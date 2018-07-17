<template>
  <div class="default-layout">
    <Header/>
    <router-view/>
    <SideBar/>
    <StripsOverlay/>
    <MenuOverlay/>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import SideBar from '@/components/common/Sidebar'
import StripsOverlay from '@/components/common/StripsOverlay'
import MenuOverlay from '@/components/common/MenuOverlay'

export default {
  components: {
    Header,
    SideBar,
    StripsOverlay,
    MenuOverlay
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/dimensions.scss';

.default-layout {
  min-height: 100vh;
  padding-right: $dim-sidebar-width;
}
</style>
