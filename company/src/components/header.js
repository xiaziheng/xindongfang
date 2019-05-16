
 import vuescroll from 'vuescroll';
export default {

    name: "header",
    data() {
        return {
            swiperOption: {
                // 所有配置均为可选（同Swiper配置）
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,
                effect: 'cube',
                cube: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                flip: {
                    slideShadows : true,
                    limitRotation : true,
                },
                fade: {
                    crossFade: true,
                  },
                autoplay: true,
                loop: true,
                speed:1000,
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 30,
            },
            ops:{
                vuescroll: {},
                scrollPanel: {},
                rail: {},
                bar: {
                    background:"#666",
                }
              }
        }
       
    },
    components: {
        vuescroll
      },
    computed: {  
  
        swiper() {  
          return this.$refs.mySwiper.swiper;  
        }  
    },
    mounted(){
       
    }
};