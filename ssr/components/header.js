import Vue from "vue";
import MapNote from "./map.vue";
import silidefix from "./silidefix";
import footerPage from "./footer";

export default {
    name: "headerPag",
    components: {
        MapNote,
        silidefix,
        footerPage
    },
    props: {
        info: {
            type: Object,
            require: true
        }
    },
    data() {
        return {
            iphead: "",
            swiperOption: {
                // 所有配置均为可选（同Swiper配置）
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                // notNextTick: true,
                // observer:true,//修改swiper自己或子元素时，自动初始化swiper
                // observeParents:true,//修改swiper的父元素时，自动初始化swiper
                // init: false,
                loop: true,
                effect: "fade",
                grabCursor: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                cube: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                flip: {
                    slideShadows: true,
                    limitRotation: true
                },
                fade: {
                    crossFade: true
                },
                autoplay: true,
                speed: 1000,
                slidesPerView: "auto",
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 30
            },
            ops: {
                vuescroll: {},
                scrollPanel: {},
                rail: {},
                bar: {
                    background: "#666"
                }
            },
            company: {
                Cover: { Path: "" },
                QRCode: { Path: "" },
                CompanyLocal: ""
            },
            customer: [],
            background: "background:none",
            lunbo: [],
            product: [],
            service: []
        };
    },

    created() {
        this.company = this.info.company[0];
        this.customer = this.info.customer;
        this.lunbo = this.info.lunbo;
        this.product = this.info.product;
        this.service = this.info.service;
        if (process.browser) {
            window.addEventListener("scroll", this.handleScroll);
        }
    },

    destroyed() {
        if (process.browser) {
            window.removeEventListener("scroll", this.handleScroll);
        }
    },
    mounted() {
        let width = document.documentElement.clientWidth;
        document.querySelector(".bannerLb").style.width = width + "px";

        let query = this.$route.query;
        if (query.id) {
            setTimeout(() => {
                this.goScroll(query.id);
            }, 300);
        }
    },
    methods: {
        handleScroll(vertical) {
            // console.log(window.scrollY);
            // let height = vertical.scrollTop;
            let height = window.scrollY;
            if (height > 320) {
                this.background = "background:#1997e8";
            } else {
                this.background = "background:none";
            }
        },
        openSecond(id, type) {
            this.$router.push({ path: "/second", query: { id: id, type: type } });
        },
        goTop() {
            this.goScroll("home");
            // this.$router.push({ path: "/", query: {} });
        },
        goScroll(id) {
            var docHeight;
            if (id != this.$route.query.id) {
                this.$router.push({ path: "/", query: { id: id } });
            }

            if (id == "home") {
                docHeight = 0;
            } else {
                docHeight = document.getElementById(id).offsetTop; //+560 ;
            }

            // const vs = this.$refs["vs"];
            window.scrollTo({ top: docHeight, behavior: "smooth" });
            // vs.scrollTo({
            //         y: docHeight
            //     },
            //     300,
            //     "easeInQuad"
            // );
        },
        getList() {
            let that = this;
            this.$axios.get("/api/home1/index").then(
                res => {
                    let data = res.data;
                    that.company = data.company[0];
                    that.customer = data.customer;
                    that.lunbo = data.lunbo;
                    that.product = data.product;
                    that.service = data.service;
                },
                error => {
                    console.error(error);
                }
            );
        }
    }
};