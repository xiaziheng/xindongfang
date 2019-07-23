<template>
  <header>
    <vuescroll :ops="ops" ref="vs" @handle-scroll="handleScroll">
      <nav :style="background">
        <ul>
          <li @click="goScroll('home')">
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
        <div class="conatinerTlt container" style=" margin-top: 130px;">
          <p class="title">
           {{$route.query.type==1? '产品':'业务'}}
            <span class="blueFont">介绍</span>
          </p>
        
          <p class="English">PRODUCT DESRIPTIONC</p>
            <span class="underLine"></span>
        </div>
      </div>
      <div class="note">
        <div class="container1">
          <div class="container" style="display: flex;">
           
            <div class="left">
              <h1>{{Details.ProductName}}</h1>
              <div v-html="Details.ProductDetail"></div>
            </div>
             <div class="right">
              <h3>综合业务案例</h3>
              <ul>
                <li v-for="(item,index) in service" :key="index" @click="openSecond(item.ID,2)">
                  {{item.Name}}
                </li>
              </ul>
              <h3 style="margin-top:20px">产品介绍</h3>
              <img style="width:100%" :src="iphead+company.Cover.Path" alt />
              <ul>
                <li v-for="(item,index) in product" :key="index" @click="openSecond(item.ID,1)">
                  {{item.ProductName}}
                </li>
              </ul>
            </div>
          </div>
        </div>
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
  .conatinerTlt {
    // width: 100%;
    // height: 38px;
     
    text-align: left;
    // background: rgba(138, 150, 163, 0.5);
    // text-align: left;
    // line-height: 44px;
    //   overflow: hidden;
    font-size: 25px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    // text-indent: 30px;
    // margin: 0 auto;
    // margin-top: 50px;
    margin-bottom: 40px;
    position: relative;
    // border-left: 6px solid rgb(25, 151, 232);
    .blueFont {
      color: rgb(25, 151, 232);
    }
    .English {
      font-weight: normal;
      font-size: 20px;
        // margin-top: 8px;
    }
    .underLine {
      // position: absolute;
      // bottom: -10px;
      width: 88px;  
      margin-top: 10px;
      display: block;
      // left: 0;
      // margin-left: -44px;
      height: 3px;
      background: #1485ef;
    }
    .title {
      // margin-left: -35px;
    }
  }

  .banner {
    // position: fixed;
    width: 100%;
    height: 300px;
    top: 0;
    left: 0;
    border: 0.1px solid #fff;
      background: rgb(242,242,242);
    img {
      height: 400px;
      width: 100%;
    
    }
  }
  .note {
    // padding-top: 340px;
    position: relative;
    z-index: 10;
    width: 100%;
    
  }
  .container1 {
    min-height: 800px;
    background: #fff;
  box-shadow: 0 0 6px #ccc;
    padding-top: 30px;
  }
  .container {
    
    width: 1000px;
    margin: 0 auto;
    .left {
      text-align: left;
       margin-right: 2%; 
       width: 66%;
       h1 {
        margin-bottom: 30px;
      }
    }
    .right {

      width: 32%;
      box-shadow: 5px 4px 9px #ccc;
      border: 1px solid #ccc;
      margin-bottom: 30px;
// border: 4px solid rgb(25, 151, 232);
      // border-radius: 8px;
      min-height: 100px;
      padding: 10px;
      background: #fff;
      text-align: left;
     img{
       height: 150px;
     }
          font-size: 15px;
      h3 {
        margin-bottom: 15px;
        font-size: 15px;
        // font-weight: normal;
        color: #1485ef;
        padding-bottom: 8px;
        border-bottom: 1px dotted #1485ef
      }
     ul{
            list-style-type: disc;
            li{
              list-style-type: disc;
              margin-left: 18px;
              font-size: 14px;
              line-height: 30px;
              cursor: pointer;
              &:hover{
                color: #1485ef;
                text-decoration: underline;
              }
            }
     }
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
  // background: #fff;
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
  width: 30px;
  height: 3px;
  background: #fff;
  bottom: 20px;
  left: 50%;
  margin-left: -15px;
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
  // color: rgb(25, 151, 232);
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
      width: 1090px;
    }
    // .bannerLb {
    //   width: 1280px;
    // }
  }
}
@media screen and (min-width: 1700px) {
  header {
    .container {
      width: 1090px;
    }
    // .bannerLb {
    //   width: 1560px;
    // }
  }
}
</style>
