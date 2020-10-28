<template>
  <div class="home-page">
    <div v-if="isLogin == false">
      <header-comp />
      <router-view v-on:login-event="login()"></router-view>
    </div>
    <div v-else>
      <header-comp />
      <div class="wrapper">
        <sidebar />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from "../components/HeaderComp";
import Sidebar from "../components/SidebarComp";
export default {
  name: "home-page",
  data() {
    return {
      isLogin: true,
    };
  },
  components: {
    HeaderComp,
    Sidebar,
  },
  methods: {
    login() {
      console.log("đã thay đổi");
      this.isLogin = true;
    },
  }
};
</script>
<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>
