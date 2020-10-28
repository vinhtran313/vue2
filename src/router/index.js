import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginComp from "../components/LoginComp.vue";
import Checkin from "../components/Checkin.vue";
import Event from "../components/EventComp.vue";
import History from "../components/History.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage,
      children: [
        {
          path: "login",
          name: "login",
          component: LoginComp,
        },
        {
          path: "checkin",
          name: "checkin",
          component: Checkin,
        },
        {
          path: "event",
          name: "event",
          component: Event,
        },
        {
          path: "history",
          name: "history",
          component: History
        }
      ],
    },
  ],
});
