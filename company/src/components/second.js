import vuescroll from 'vuescroll';
import silidefix from './silidefix';
import footerPage from './footer';
const emptyModel = {
    Name: '',
    Detail: '',
    Intro: '',
    Cover: { Path: '' },
}
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
            Details: emptyModel,
            FixedName: false,
            PageInfo: {
                Name: '产品',
                EnglishName: 'PRODUCT'
            },
            type: 0,
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
        this.initPage();
        this.getDetail(() => {});
        this.getList()
    },

    methods: {
        initPage() {
            this.type = this.$route.query.type;
            let type = this.$route.query.type;
            type = type + '';
            switch (type) {
                case '1':
                    this.PageInfo.Name = '产品';
                    this.PageInfo.EnglishName = 'PRODUCT';
                    break;
                case '2':
                    this.PageInfo.Name = '业务';
                    this.PageInfo.EnglishName = 'BUSINESS';
                    break;
                case '3':
                    this.PageInfo.Name = '客户';
                    this.PageInfo.EnglishName = 'Customer';
                    break;
                default:
                    break;
            }
        },
        handleScroll(vertical) {
            // console.log(vertical, horizontal, nativeEvent)
            let height = vertical.scrollTop;
            if (height > 120) {
                this.FixedName = true;
            } else {
                this.FixedName = false;
            }
            if (height >= 320) {
                this.background = 'background:#1997e8';

            } else {
                this.background = 'background:#1997e8';
            }
        },
        goTop() {
            // this.goScroll('home')
            this.$refs['vs'].scrollTo({
                    y: 0
                },
                300
            );
        },
        goScroll(id) {
            window.location.href = this.goHome + '?id=' + id;
            // this.$router.push({ path: '/', query: { id: id } })
        },
        openSecond(id, type) {
            window.location.href = this.goSecond + '?id=' + id + '&type=' + type;
            window.location.reload()
                // this.$router.push({path:'/second',query:{id:id,type:type}});
                // window.location.reload()
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
            let query = this.$route.query;
            let params = {
                id: query.id,
                type: query.type
            }
            this.$http.get('/api/home1/Details', { params }).then((res) => {
                this.Details = this.convertModel(res.data.Data, query.type);
                this.company = res.data.CompanyInfo;
                cb()
            })
        },
        convertModel(data, type) {
            let model = Object.assign({}, emptyModel);
            type = type + '';
            if (data) {
                switch (type) {
                    case '1': //产品
                        model.Name = data.ProductName
                        model.Detail = data.ProductDetail;
                        model.Intro = data.ProductIntro;
                        model.Cover = data.Cover;
                        break;
                    case '2': //服务
                        model.Name = data.Name
                        model.Detail = data.CaseDetail;
                        model.Intro = data.CaseIntro;
                        model.Cover = data.Cover;
                        break;
                    case '3': //客户
                        model.Name = data.Name
                        model.Detail = data.CustomerIntro;
                        model.Intro = data.CustomerIntro;
                        model.Cover = data.Cover;
                        break;
                    default:
                        break
                }
            }

            return model;
        }
    },

};