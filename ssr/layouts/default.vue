<template>
  <div id="#app">
    <nuxt />
  </div>
</template>
 
 <script>
import Vue from "vue";

if (process.browser) {
  const VueAwesomeSwiper = require("vue-awesome-swiper/dist/ssr");
  Vue.use(VueAwesomeSwiper);
}
export default {};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.__rail-is-vertical {
  z-index: 100 !important;
}
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfloat {
  zoom: 1;
}
#app,
html,
body {
  height: 100%;
  // background: linear-gradient(180deg,hsla(0,0%,100%,0) 60%,#fff),linear-gradient(70deg,#dbedff 32%,#ebfff0);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
