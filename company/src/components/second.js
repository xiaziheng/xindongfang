
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
            background: 'background:none',
            lunbo: [],
            product: [],
            service: [],
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
        this.getList(()=>{
        });
        
    },
 
    methods: {
        handleScroll(vertical) {
            // console.log(vertical, horizontal, nativeEvent)
            let height = vertical.scrollTop;
            if(height>=320){
                this.background = 'background:#1997e8';
            }else{
                this.background = 'background:none';
            }
        },
        goTop() {
            this.goScroll('home')
        },
        goScroll(id) {
            var docHeight;
            if (id == 'home') {
                docHeight = 0;
            } else {
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
        getList(cb) {
            this.$http.get('/api/home1/index').then((res) => {

                let data = res.data;
                this.company = data.company[0];
                this.customer = data.customer;
                this.lunbo = data.lunbo;
                this.product = data.product;
                this.service = data.service;
                cb()
            })
            
        }
    },
    
};