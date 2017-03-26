<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">todolian</h1>
    </md-toolbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
h1 {
  flex: 1;
}
</style>
