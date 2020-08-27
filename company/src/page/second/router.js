import Vue from "vue";
import Router from "vue-router";
import Home from "../../views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/index/second",
      name: "second",
      component: Home,
    },
    // {
    //   path: "/index/second",
    //   name: "second",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue"),
    // },
  ],
});
