<template>
  <div class="home">
    <HeaderPage />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderPage from '@/components/header.vue'

export default {
  name: 'home',
  components: {
    HeaderPage
  }
}
</script>
<style>
.home{
  height: 100%;
}
</style>

