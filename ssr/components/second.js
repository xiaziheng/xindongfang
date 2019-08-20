import vuescroll from "vuescroll";
import silidefix from "./silidefix";
import footerPage from "./footer";
const emptyModel = {
    Name: "",
    Detail: "",
    Intro: "",
    Cover: { Path: "" }
};
export default {
    name: "headerPag",
    props: {
        info: {
            type: Object,
            require: true
        },
        model: {
            type: Object,
            require: true
        },
        type: {
            type: String,
            require: true
        }
    },
    data() {
        return {
            iphead: "",
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
            background: "background:#1997e8",
            lunbo: [],
            product: [],
            service: [],
            Details: emptyModel,
            FixedName: false,
            PageInfo: {
                Name: "产品",
                EnglishName: "PRODUCT"
            }
        };
    },

    components: {
        vuescroll,
        silidefix,
        footerPage
    },
    computed: {},

    created() {
        this.company = this.info.company[0];
        this.customer = this.info.customer;
        this.lunbo = this.info.lunbo;
        this.product = this.info.product;
        this.service = this.info.service;

        this.Details = this.convertModel(this.model, this.type);
        this.initPage();
    },

    methods: {
        initPage() {
            let type = this.type;
            type = type + "";
            switch (type) {
                case "1":
                    this.PageInfo.Name = "产品";
                    this.PageInfo.EnglishName = "PRODUCT";
                    break;
                case "2":
                    this.PageInfo.Name = "业务";
                    this.PageInfo.EnglishName = "BUSINESS";
                    break;
                case "3":
                    this.PageInfo.Name = "客户";
                    this.PageInfo.EnglishName = "Customer";
                    break;
                default:
                    break;
            }
        },
        handleScroll(vertical) {
            let height = window.scrollY;
            if (height > 320) {
                this.background = "background:#1997e8";
            } else {
                this.background = "background:none";
            }
        },
        goTop() {
            let docHeight = 0;
            window.scrollTo({ top: docHeight, behavior: "smooth" });
        },
        goScroll(id) {
            this.$router.push({ path: "/", query: { id: id } });
        },
        openSecond(id, type) {
            // this.$router.push({ path: "/second", query: { id: id, type: type } });
            let reg = /id=(.*?)&(type=\d+)/;
            let href = window.location.href;
            if (reg.test(href)) {
                window.location.href = href
                    .replace(RegExp.$1, id)
                    .replace(RegExp.$2, "type=" + type);
            }
        },
        getList() {
            this.$axios.get("/api/home1/index").then(res => {
                let data = res.data;
                this.customer = data.customer;
                this.lunbo = data.lunbo;
                this.product = data.product;
                this.service = data.service;
            });
        },
        getDetail(cb) {
            let query = this.$route.query;
            let params = {
                id: query.id,
                type: query.type
            };
            this.$axios.get("/api/home1/Details", { params }).then(res => {
                this.Details = this.convertModel(res.data.Data, query.type);
                this.company = res.data.CompanyInfo;
                cb();
            });
        },
        convertModel(data, type) {
            let model = Object.assign({}, emptyModel);
            // type = type + "";
            if (data) {
                switch (type) {
                    case "1": //产品
                        model.Name = data.ProductName;
                        model.Detail = data.ProductDetail;
                        model.Intro = data.ProductIntro;
                        model.Cover = data.Cover;
                        break;
                    case "2": //服务
                        model.Name = data.Name;
                        model.Detail = data.CaseDetail;
                        model.Intro = data.CaseIntro;
                        model.Cover = data.Cover;
                        break;
                    case "3": //客户
                        model.Name = data.Name;
                        model.Detail = data.CustomerIntro;
                        model.Intro = data.CustomerIntro;
                        model.Cover = data.Cover;
                        break;
                    default:
                        break;
                }
            }

            return model;
        }
    }
};