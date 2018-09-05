<template>
  <div id="header">
    header
  </div>
</template>

<script>
import auth from '@/auth';

export default {
  name: 'AppHeader',
  data () {
    return {
    };
  },
  created () {
    this.drawerCtrl();
  }
};
</script>

<style lang="less">
</style>
