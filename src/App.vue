<template>
  <div class="navigation">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>

  <router-view></router-view>
</template>
<style scoped lang="scss">
.navigation {
  a {
    margin-right: 10px;
  }
}
</style>
