<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

export default {
  name: "App",
  components: {
    // HeaderComp
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
}
* {
  box-sizing: border-box;
}
@import './css/style.css'
</style>
