
import vuescroll from 'vuescroll';
import silidefix from './silidefix';
import footerPage from './footer'
export default {

    name: "headerPag",
    data() {
        return {
            ops: {
                vuescroll: {},
                scrollPanel: {},
                rail: {},
                bar: {
                    background: "#666",
                }
            },
            company: {
                Cover: { Path: '' },
                QRCode: { Path: '' },
                CompanyLocal: ''
            },
            customer: [],
            background: 'background:#1997e8',
            lunbo: [],
            product: [],
            service: [],
            Details:{
                Cover: { Path: '' },
            }
        }



    },
    
    components: {
        vuescroll,
        silidefix,
        footerPage
    },
    computed: {

      
    },
   
    created() {
        // console.log(this.$route.query)
        
        this.getDetail(()=>{});
        this.getList()
    },
 
    methods: {
        handleScroll(vertical) {
            // console.log(vertical, horizontal, nativeEvent)
            let height = vertical.scrollTop;
            if(height>=320){
                this.background = 'background:#1997e8';
            }else{
                this.background = 'background:#1997e8';
            }
        },
        goTop() {
            this.goScroll('home')
        },
        goScroll(id) {
            this.$router.push({path:'/',query:{id:id}})
        },
        openSecond(id,type){
            this.$router.push({path:'/second',query:{id:id,type:type}});
            window.location.reload()
        },
        getList() {
            this.$http.get('/api/home1/index').then((res) => {

                let data = res.data;
                this.customer = data.customer;
                this.lunbo = data.lunbo;
                this.product = data.product;
                this.service = data.service;
            })
        },
        getDetail(cb) {
            let query=this.$route.query;
            let params={
                id:query.id,type:query.type
            }
            this.$http.get('/api/home1/Details',{params}).then((res) => {

            //   console.log(res)
              this.Details = res.data.Data;
              this.company = res.data.CompanyInfo;
                cb()
            })
            
        }
    },
    
};