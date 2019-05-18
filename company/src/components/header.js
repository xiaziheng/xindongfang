
 import vuescroll from 'vuescroll';
 import MapNote from './map'
 import silidefix from './silidefix';
 import footerPage from './footer'
export default {

    name: "headerPag",
    data() {
        return {
            swiperOption: {
                // 所有配置均为可选（同Swiper配置）
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,
                effect: 'cube',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
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
              },
              company:{
                  Cover:{Path:''},
                  QRCode:{Path:''},
                  CompanyLocal:''
              },
              customer:[],
              lunbo:[],
              product:[],
              service:[],
        }

       
    },
    components: {
        vuescroll,
        MapNote,
        silidefix,
        footerPage
      },
    computed: {  
  
        swiper() {  
          return this.$refs.mySwiper.swiper;  
        }  
    },
    created(){
        this.getList();
    },
    mounted(){
       
    },
    methods:{
        goTop(){
            this.goScroll('home')
        },
        goScroll(id){
            var docHeight;
            if(id == 'home'){
                docHeight =0;
            }else{
                docHeight = document.getElementById(id).offsetTop  //+560 ;
            }
          
            this.$refs['vs'].scrollTo(
                {
                  y: docHeight
                },
                300,
                'easeInQuad'
              );
        },
       getList(){
           this.$http.get('/api/home1/index').then((res)=>{
           
            let data = res.data;
            this.company = data.company[0];
            this.customer=data.customer;
            this.lunbo= data.lunbo;
            this.product=data.product;
            this.service=data.service;
           })
       }
    }
};