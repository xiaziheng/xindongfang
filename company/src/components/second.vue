<template>
  <header>
    <vuescroll :ops="ops" ref="vs" @handle-scroll="handleScroll">
      <nav :style="background">
        <ul>
          <li>
            <!-- <img class="nav-logo" src="../assets/logo.png" alt>  -->
            北京德瑞芯科技有限公司
          </li>
          <li @click="goScroll('home')">
            <a href="javascript:;">
              <span>首页</span>
            </a>
          </li>
          <li @click="goScroll('product')">
            <a href="javascript:;">
              <span>产品介绍</span>
            </a>
          </li>
          <li @click="goScroll('professional')">
            <a href="javascript:;">
              <span>业务介绍</span>
            </a>
          </li>
          <li @click="goScroll('about')">
            <a href="javascript:;">
              <span>关于我们</span>
            </a>
          </li>
          <li @click="goScroll('contact')">
            <a href="javascript:;">
              <span>联系我们</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="banner">
        <img src="http://106.12.9.12/api/File/GetFile/c3de532f-6975-422c-bff1-4d5a6c29d24b" alt>
      </div>
      <div class="note">
          <div class="container" v-html="company.CompanyIdea"></div>
      </div>
      <footer-page :footercode="company"></footer-page>
    </vuescroll>
    <silidefix @goTop="goTop" :servephone="company.CompanyPhone" :servewx="company.QRCode"></silidefix>
  </header>
</template>

<script src="./second.js">

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

header {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .banner{
      position: fixed;
      width: 100%;
      height: 400px;
      top: 0;
      left: 0;
      img{
          height: 400px;
          width: 100%;
      }
  }
  .note{
      padding-top: 400px;
      position: relative;
      z-index: 10;
      width: 100%;
    .container{
        background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 60%, #fff), linear-gradient(70deg, #dbedff 32%, #ebfff0);
        min-height: 800px;
    }
  }
  nav {
    position: fixed;
    // top: -560px;
    top: 0;
    z-index: 15000;
    width: 100%;
    // background: #1997e8;
    background: none;
    ul {
      list-style: none;
      display: flex;
      //   width: 900px;
      margin: 0 auto;
      height: 80px;
      overflow: hidden;
      justify-content: center;
      li {
        font-size: 18px;
        width: 200px;
        height: 80px;
        line-height: 80px;
        color: #fff;
        text-align: center;
      }
    }
    .nav-logo {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 20px;
      left: 20px;
    }
  }
}
nav ul li {
  position: relative;
  &:first-child {
    background: none !important;
  }
}
nav ul li:hover {
  background: #fff;
}
nav ul li a {
  color: #fff;
  text-decoration: none;
  display: block;
  // padding:10px 0;
}
nav ul li span {
  display: block;
}
nav ul li a:before {
  content: "";
  position: absolute;
  width: 60px;
  height: 3px;
  background: #1997e8;
  bottom: 0;
  left: 50%;
  margin-left: -30px;
  opacity: 0;
  -webkit-transform: translate3d(0, -40px, 0);
  transform: translate3d(0, -40px, 0);
  -webkit-transition: -webkit-transform 0s 0.3s, opacity 0.2s;
  transition: transform 0s 0.3s, opacity 0.2s;
}
nav ul li a:hover::before {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform 0.5s, opacity 0.1s;
  transition: transform 0.5s, opacity 0.1s;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
nav ul li a:hover span {
  color: rgb(25, 151, 232);
  -webkit-animation: anim-francisco 0.3s forwards;
  animation: anim-francisco 0.3s forwards;
}
// 导航动画
@keyframes anim-francisco {
  50% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  51% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes anim-francisco {
  50% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  51% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@media screen and (min-width: 1400px) {
  header {
    .container {
      width: 1280px;
    }
    .bannerLb {
      width: 1280px;
    }
  }
}
@media screen and (min-width: 1700px) {
  header {
    .container {
      width: 1560px;
    }
    .bannerLb {
      width: 1560px;
    }
  }
}
</style>
