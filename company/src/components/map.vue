<template>
  <div id="container">
  </div>
</template>
<script>
  // import BMap from 'BMap';
  export default {
    data() {
      return {
      }
    },
    mounted() {
      var map = new BMap.Map('container');
      var point = new BMap.Point(116.2928970000, 40.0562200000);
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

  /* 抖动动画 */
  @-moz-keyframes tada{
    0%{-moz-transform:scale(1);}
    10%,20%{-moz-transform:scale(0.9) rotate(-3deg);}
    30%,50%,70%,90%{-moz-transform:scale(1.2) rotate(3deg);}
    40%,60%,80%{-moz-transform:scale(1.2) rotate(-3deg);}
    100%{-moz-transform:scale(1) rotate(0);}
   }

  @-webkit-keyframes tada{
    0%{-webkit-transform:scale(1);}
    10%,20%{-webkit-transform:scale(0.9) rotate(-3deg);}
    30%,50%,70%,90%{-webkit-transform:scale(1.2) rotate(3deg);}
    40%,60%,80%{-webkit-transform:scale(1.2) rotate(-3deg);}
    100%{-webkit-transform:scale(1) rotate(0);}}

.doudun:hover{
  -webkit-animation: tada 1s .2s ease both;
  -moz-animation: tada 1s .2s ease both;
}
</style>
