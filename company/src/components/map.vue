<template>
  <div id="container">
  </div>
</template>
<script>
  import BMap from 'BMap';
  export default {
    data() {
      return {
      }
    },
    props:['mapadd'],
    mounted() {
      var mapadr=this.mapadd.split(',');
      var map = new BMap.Map('container');
      var point = new BMap.Point(mapadr[0], mapadr[1]);
      // var point = new BMap.Point(116.407143,39.91737);
      map.centerAndZoom(point, 15);
      // map.addControl(new BMap.MapTypeControl(1));
      map.enableScrollWheelZoom(true);
      map.enableDoubleClickZoom(true);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
    },
    methods: {
    },
    created: function () {
    }
  }
</script>
<style scoped>
  #container {
   width: 100%;
    height: 300px;
    margin-bottom: 50px;
  }
</style>
