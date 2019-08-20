 <template>
  <div style="position:relative" @click="hideMask" @mouseleave="showMask">
    <div class="mask" title="点击后可放大" v-if="mask"></div>
    <baidu-map
      class="bm-view"
      :position="position"
      :zoom="zoom"
      :dragging="true"
      animation="BMAP_ANIMATION_BOUNCE"
      ak="Y9KRKIC73FsfZhtDFsh84byKV5qGx9vf"
      :scroll-wheel-zoom="mask"
    ></baidu-map>
  </div>
</template>
<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  components: {
    BaiduMap
  },
  data() {
    return {
      mask: true,
      position: { lng: 0, lat: 0 },
      zoom: 3
    };
  },
  props: ["mapadd"],
  mounted() {
    // let that = this;
    // let timers = setInterval(() => {
    //   if (that.mapadd) {
    //     clearInterval(timers);
    //     var mapadr = that.mapadd.split(",");
    //     var map = new BMap.Map("container");
    //     var point = new BMap.Point(mapadr[0], mapadr[1]);
    //     // var point = new BMap.Point(116.370522,40.067801);
    //     map.centerAndZoom(point, 15);
    //     // map.addControl(new BMap.MapTypeControl(1));
    //     map.enableScrollWheelZoom(true);
    //     map.enableDoubleClickZoom(true);
    //     var marker = new BMap.Marker(point);
    //     map.addOverlay(marker);
    //   }
    // }, 100);
  },
  methods: {
    hideMask() {
      this.mask = false;
    },
    showMask() {
      this.mask = true;
    },
    handler({ BMap, map }) {
      // this.center.lng = 116.404;
      // this.center.lat = 39.915;
      // this.zoom = 15;
    }
  },
  created: function() {
    this.position.lng = this.mapadd.split(",")[0];
    this.position.lat = this.mapadd.split(",")[1];
    this.zoom = 15;
    console.log(this.position.lng);
  }
};
</script>
<style scoped>
#container {
  width: 100%;
  height: 300px;
  /* margin-bottom: 50px; */
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
}
</style>
