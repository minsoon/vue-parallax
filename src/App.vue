<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
import * as VApp from 'vuetify/es5/components/VApp';
export default {
  name: 'App',
  components: {
    ...VApp
  }
};
</script>

<style lang="less">
  @import './less/common';
</style>
