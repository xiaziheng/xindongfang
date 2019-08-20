<template>
  <div class="home">
    <SecondPage :info="info" :model="model" :type="type" />
  </div>
</template>

<script>
import SecondPage from "@/components/second.vue";
export default {
  name: "second",
  components: {
    SecondPage
  },
  async asyncData({ $axios, query, error }) {
    let params = {
      id: query.id,
      type: query.type
    };
    // 1.运行时间实在组件创建前，this不能用
    // 2.nuxt传递上下文进来
    const info = await $axios.$get("/api/home1/index");
    const model = await $axios.$get("/api/home1/Details", { params });
    return { info, model: model.Data, type: query.type };

    // 重定向到错误页面
    error({ statusCode: 400, message: "数据查询失败" });
  }
};
</script>

<style lang="scss" scoped>
</style>