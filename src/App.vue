<template>
  <div id="app">
    <AppLoader/>
    <router-view/>
  </div>
</template>

<script>
import AppLoader from '@/components/common/AppLoader'

export default {
  components: {
    AppLoader
  }
}
</script>

<style lang="scss" src="@/assets/styles/_MAIN.scss">
</style>

<style lang="scss">
</style>
