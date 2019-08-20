<template>
  <div>
    <div class="footer">
      <ul>
        <li>
          <div class="title">联系我们</div>
          <div class="list">地址：{{footercode.CompanyAddr}}</div>
          <div class="list">邮编：{{footercode.CompanyAddr}}</div>
          <div class="list">邮件：{{footercode.CompanyMailbox}}</div>
        </li>
        <li>
          <div class="title">客服热线</div>
          <div
            class="title"
            style="font-size:16px; font-weight:normal; color:#c8c9ce;"
          >{{footercode.CompanyPhone}}</div>
        </li>
        <li>
          <img :src="iphead+footercode.QRCode.Path" alt />
        </li>
      </ul>
    </div>
    <div class="footerUnder">
      <span>Copyright 2019 deruixin.com.cn, 粤ICP备09182051号 Powered by DRX</span>
      <span style="margin-left:50px">法律声明 | 隐私条款</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iphead: "",
      gotop: false
    };
  },
  methods: {
    toTop() {
      this.$emit("goTop", !this.gotop);
    }
  },
  props: ["footercode"]
};
</script>
<style lang="less" scoped>
.footer {
  height: 280px;
  background: rgb(38, 39, 40);
  width: 100%;
  position: relative;
  z-index: 10;
  ul {
    width: 800px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    li {
      margin-top: 50px;
      word-break: break-all;
      color: #fff;
      .title {
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: bold;
      }
      .list {
        font-size: 14px;
        color: #c8c9ce;
      }
    }
  }
}
.footerUnder {
  font-size: 12px;
  color: #fff;
  padding: 18px 0;
  text-align: center;
  background-color: #1a1818;
}
// @media screen and (min-width: 1400px) {
//    .footer {
//         ul{
//             width: 1280px;
//         }
//    }

// }
// @media screen and (min-width: 1700px) {
//    .footer{
//         ul{
//             width: 1560px;
//         }
//    }
// }
</style>


