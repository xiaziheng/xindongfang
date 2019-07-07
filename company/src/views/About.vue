<template>
  <div class="home">
    <second />
  </div>
</template>

<script>
// @ is an alias to /src
import second from '@/components/second.vue'

export default {
  name: 'home',
  components: {
    second
  }
}
</script>
<style>
.home{
  height: 100%;
}
</style>

