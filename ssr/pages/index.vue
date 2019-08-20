<template>
  <div class="home">
    <HeaderPage :info="info" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderPage from "@/components/header.vue";
export default {
  name: "home",
  components: {
    HeaderPage
  },
  async asyncData({ $axios, error }) {
    // 1.运行时间实在组件创建前，this不能用
    // 2.nuxt传递上下文进来
    const info = await $axios.$get("/api/home1/index");
    return { info };

    // 重定向到错误页面
    error({ statusCode: 400, message: "数据查询失败" });
  }
};
</script>
<style>
.home {
  height: 100%;
}
</style>

