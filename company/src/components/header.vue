<template>
  <header>
    <vuescroll :ops="ops" ref="vs" @handle-scroll="handleScroll">
      <nav :style="background">
        <ul>
          <li>
            <!-- <img class="nav-logo" src="../assets/logo.png" alt>  -->
            陕西德瑞慧达科技有限公司
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
              <span>公司介绍</span>
            </a>
          </li>
          <li @click="goScroll('contact')">
            <a href="javascript:;">
              <span>联系我们</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="bannerLb">
        <div class="bannerTop">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in lunbo" :key="index">
              <a :href="item.JumpUrl" target="_blank">
                <img :src="iphead+item.Cover.Path" alt />
              </a>
            </swiper-slide>
          </swiper>
          <div class="leftBtn swiper-button-prev">
            <i class="el-icon-arrow-left"></i>
          </div>
          <div class="rightBtn swiper-button-next">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="containerBox">
        <div class>
          <div class="conatinerTlt container" id="product">
            <span class="title">
              产品
              <span class="blueFont">介绍</span>
            </span>
            <span class="underLine"></span>
            <p class="English">PRODUCT DESRIPTIONC</p>
          </div>
          <ul class="containerList container">
            <li
              class="clearfloat"
              v-for="(item,index) in product"
              :key="index"
              @click="openSecond(item.ID,1)"
            >
              <!-- <a class="clearfloat" :href="'/#/second?id='+item.ID+'&'" target="_blank"> -->
              <div class="hover clearfloat">
                <div class="fl">
                  <a href="javascript:;">
                    <img :src="iphead+item.Cover.Path" :alt="item.ProductName" />
                  </a>
                </div>
                <div class="fr">
                  <p class="frF1">型号：{{item.ProductCode}}</p>
                  <div class="frfonts" v-html="item.ProductName"></div>
                </div>
              </div>

              <!-- </a> -->
            </li>
            <li class="clearfloat" v-if="product.length%3==2"></li>
          </ul>
          <div style="background:#f2f3f4;padding:1px 0 100px">
            <div class="conatinerTlt container" id="professional">
              <span class="title">
                业务
                <span class="blueFont">介绍</span>
              </span>
              <span class="underLine"></span>
              <p class="English">BUSINESS DESRIPTIONC</p>
            </div>
            <!-- <ul class="containerList2 container">
              <li v-for="(item,index) in service" :key="index" @click="openSecond(item.ID,2)">
                <div class="hover_overlay"></div>
                <div class="note">
                  <span>{{item.Name}}</span>
                  <span v-html="item.CaseIntro"></span>
                </div>

                <img class="imgBox" :src="iphead+item.Cover.Path" alt />
              </li>
            </ul>-->
            <div
              class="containerList3 container"
              v-for="(item,index) in service"
              :key="index"
              @click="openSecond(item.ID,2)"
            >
              <div class="aboutNote">
                <p class="titleAbout">{{item.Name}}</p>
                <p class="noteAbout" v-html="item.CaseIntro"></p>
              </div>
              <div class="aboutImg">
                <img :src="iphead+item.Cover.Path" :alt="item.Name" />
              </div>
            </div>
          </div>
          <div id="about" :style="'background-image:url('+iphead+company.Cover.Path+'); '">
            <div class="conatinerTlt container">
              <span class="title">公司介绍</span>
              <span class="underLine"></span>
              <p class="English" style="margin-left:-35px;">Company Introduction</p>
            </div>
            <div class="containerListAbout container">
              <div class="aboutNote1" style="margin-top:70px;">
                <div v-html="company.CompanyIdea"></div>
              </div>
            </div>
          </div>

          <ul class="containerList4 container" id="contact">
            <li>
              <i class="icon el-icon-tickets"></i>
              <div>{{company.CompanyName || ''}}</div>
            </li>
            <li>
              <i class="icon el-icon-message"></i>
              <div>{{company.CompanyMailbox || ''}}</div>
            </li>
            <li>
              <i class="icon el-icon-location-outline"></i>
              <div>{{company.CompanyAddr || ''}}</div>
            </li>
            <li>
              <i class="icon el-icon-phone-outline"></i>
              <div>电话：{{(company.CompanyPhone || '').split(',')[0]}}</div>
            </li>
          </ul>
        </div>
        <MapNote style="margin-top:center;" :mapadd="company.CompanyLocal"></MapNote>
        <footer-page :footercode="company"></footer-page>
      </div>
    </vuescroll>
    <silidefix @goTop="goTop" :servephone="company.CompanyPhone" :servewx="company.QRCode"></silidefix>
  </header>
</template>

<script src="./header.js">
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
header {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .containerBox {
    //   margin-top: 560px;
    // background: #fff;
    width: 100%;
    //   position: relative;
    height: 100%;
    z-index: 10;
  }
  .container {
    width: 1000px;
    height: auto;
    // overflow: hidden;
    margin: 0 auto;
  }
  .containerList4 {
    width: 1000px;
    margin: 0 auto;
    // overflow: hidden;
    margin-top: 40px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;

    //   background: #fff;
    li {
      // width: 200px;

      margin-right: 50px;
      float: left;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #000;
      // background: #fff;
      cursor: pointer;
      position: relative;
      .icon {
        font-size: 60px;
        margin: 10px auto;
        display: block;
        //   background: #fff;
      }
      div {
        // width: 100%;
        line-height: 18px;
        font-size: 13px;
        color: #666;
        text-align: center;
        margin: 0 auto;
        position: absolute;
        bottom: -30px;
        font-weight: bold;
        white-space: nowrap;
        transform: translateX(-50%);
        left: 50%;
      }
      &:hover {
        border: 1px solid #1485ef;
        .icon {
          color: #1485ef;
          -webkit-animation: icon-bounce 0.5s alternate;
          -moz-animation: icon-bounce 0.5s alternate;
          -o-animation: icon-bounce 0.5s alternate;
          animation: icon-bounce 0.5s alternate;
        }
      }
    }
    li:last-child {
      margin-right: 0;
    }
    li:first-child {
      margin-left: 25px;
    }
  }
  .containerList3 {
    width: 100%;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    position: relative;
    margin-bottom: 80px;

    // -webkit-box-shadow: 0 0 6px #ccc;
    // box-shadow: 0 0 6px #ccc;
    cursor: pointer;
    &:hover .aboutNote {
      transform: scale(1.1);
    }
    //   background: #000;
    .aboutImg {
      width: 50%;
      height: 300px;
      position: absolute;
      right: 0;
      top: 0;
      transition: 0.7s all ease;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .aboutNote {
      width: 50%;
      height: 300px;
      position: absolute;
      left: 0;
      top: 0;
      background: #fff;
      transition: 0.7s all ease;
      // color: #ccc;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      text-align: left;

      .titleAbout {
        margin: 55px 55px 0 55px;
        font-size: 22px;
        padding-bottom: 10px;
        border-bottom: 1px dashed #ccc;
        color: #000;
      }
      .noteAbout {
        margin: 20px 55px 0 55px;
        max-height: 150px;
        overflow: hidden;
      }
    }
    // &:hover {
    //   .aboutImg {
    //     right: 50%;
    //   }
    //   .aboutNote {
    //     left: 50%;
    //   }
    // }
  }
  .containerList2 {
    width: 100%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    //   background: #fff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      width: 31%;
      height: 300px;
      // background: #fff;
      position: relative;
      margin-top: 20px;
      span:nth-child(1) {
        // width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        color: #fff;
        text-align: left;
        text-indent: 22px;
        display: block;
        font-weight: bold;
        margin-top: 8px;
      }
      span:nth-child(2) {
        // width:100%;
        line-height: 20px;
        font-size: 14px;
        color: #fff;
        text-align: left;
        display: block;
        margin-left: 20px;
        margin-right: 20px;
      }
      .imgBox {
        width: 100%;
        height: 100%;
        display: block;
        //   margin: 15px 0;
        background: #fff;
        transition: 0.7s all ease;
      }

      .hover_overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        opacity: 0;
        visibility: hidden;
        background: #1485ef;
        -webkit-transform: perspective(500px) rotateX(90deg);
        -ms-transform: perspective(500px) rotateX(90deg);
        -o-transform: perspective(500px) rotateX(90deg);
        transform: perspective(500px) rotateX(90deg);
        transform-style: preserve-3d;
        transition: all 0.7s;
      }
      .note {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        text-align: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.7s;
      }
      &:hover {
        //   .imgBox{
        //       transform: scale(1.5);
        //   }
        .hover_overlay {
          transform: perspective(900px) rotateX(0deg);
          transform-style: preserve-3d;
          visibility: visible;
          opacity: 0.8;
        }
        .note {
          visibility: visible;
          opacity: 1;
        }
      }
    }
    li:nth-child(odd) {
      float: left;
    }
  }
  .conatinerTlt {
    width: 100%;
    // height: 38px;
    text-align: center;
    // background: rgba(138, 150, 163, 0.5);
    // text-align: left;
    // line-height: 44px;
    //   overflow: hidden;
    font-size: 25px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    text-indent: 30px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 40px;
    position: relative;
    // border-left: 6px solid rgb(25, 151, 232);
    .blueFont {
      color: rgb(25, 151, 232);
    }
    .English {
      font-weight: normal;
      font-size: 20px;
    }
    .underLine {
      position: absolute;
      bottom: -10px;
      width: 88px;
      left: 50%;
      margin-left: -44px;
      height: 3px;
      background: #1485ef;
    }
    .title {
      margin-left: -35px;
    }
  }
  #about {
    height: 420px;
    width: 100%;
    border: 0.1px solid #fff;
    background-size: cover;
    color: #fff;
    span {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
  .containerList {
    width: 100%;
    height: auto;
    margin: 0 auto;
    //   overflow: hidden;
    //   background: #fff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 31%;
      height: auto;
      margin-bottom: 90px;
      // height: 240px;
      // overflow: hidden;
      // background: #fff;
      margin-top: 10px;

      .hover {
        transition: 0.5s all ease;
        box-shadow: 0 0 6px #ccc;
        height: 100%;
        padding: 12px;
      }
      &:hover .hover {
        transform: scale(1.1);
      }
      .fl {
        // width: 26%;
        //   height: 240px;
        // float: left;
        //   background: #fff;
        a {
          display: block;
          width: 100%;
          min-height: 210px;
          // overflow: hidden;
          // margin-left: 30px;
          img {
            display: block;
            width: 100%;
            //   height: 200px;
            background: #fff;
            border-radius: 4px;
          }
        }
      }
      .fr {
        // width: 60%;
        //   height: 240px;
        // float: left;
        //   background: #fff;
        // margin-left: 110px;
        .frF1 {
          width: 100%;
          // height: 40px;
          font-size: 24px;
          color: #6834e6;
          text-align: center;
          line-height: 40px;
          margin-top: 10px;
          // font-weight: bold;
        }
        .frfonts {
          width: 100%;
          font-size: 20x;
          color: #6834e6;
          line-height: 20px;
          text-align: center;
          float: left;
          max-height: 100px;
          overflow: hidden;
        }
        img {
          float: left;
          width: 45px;
          height: 45px;
          display: block;
          margin-left: 8px;
          background: #fff;
          margin-top: 12px;
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
        &:first-child {
          width: 250px;
        }
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
  .bannerLb {
    // width: 1000px;
    width: 100%;
    // height: 420px;
    min-height: 300px;
    overflow: hidden;
    margin: 0 auto;
    // margin-top: 120px;
    // background:orange;
    // position: relative;
    .bannerTop {
      width: 100%;
      //   height: 560px;
      //   overflow: hidden;
      position: relative;
      .leftBtn {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        // background: rgba(204, 204, 204, 0.5);
        background: none;
        position: absolute;
        left: 20px;
        top: 50%;
        margin-top: -25px;
        line-height: 50px;
        color: #fff;
        z-index: 1000;
        cursor: pointer;
        font-size: 25px;
        outline: none;
        i {
          font-size: 60px;
        }
        &:hover {
          color: rgb(25, 151, 232);
        }
      }
      .rightBtn {
        outline: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        // background: rgba(204, 204, 204, 0.5);
        background: none;
        font-size: 25px;
        position: absolute;
        right: 20px;
        top: 50%;
        margin-top: -25px;
        line-height: 50px;
        color: #fff;
        z-index: 1000;
        cursor: pointer;
        i {
          font-size: 60px;
        }
        &:hover {
          color: rgb(25, 151, 232);
        }
      }
      img {
        width: 100%;
        max-width: 1920px;
        // height: 420px;
        // background:blue;
        background: #ccc;
        display: block;
        float: left;
        // border-radius: 8px;
      }
    }
    .bannerBtn {
      width: 210px;
      height: 40px;
      position: absolute;
      bottom: 5px;
      left: 50%;
      margin-left: -105px;
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #666;
        text-align: center;
        font-size: 12px;
        color: #fff;
        overflow: hidden;
        line-height: 20px;
        margin: 10px 15px;
      }
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
/* 抖动动画 */
@keyframes icon-bounce {
  0%,
  100% {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  50% {
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  75% {
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  85% {
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
}
@-webkit-keyframes icon-bounce {
  0%,
  100% {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  50% {
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  75% {
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  85% {
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
}
@-moz-keyframes icon-bounce {
  0%,
  100% {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  50% {
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  75% {
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  85% {
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
}
@-o-keyframes icon-bounce {
  0%,
  100% {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  50% {
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  75% {
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  85% {
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
}
@media screen and (min-width: 1300px) {
  header {
    .container {
      width: 1090px;
    }
    nav ul {
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
    nav ul {
      width: 1090px;
    }
    #about {
      height: 618px;
    }

    .bannerLb {
      height: 618px;
      .bannerTop {
        img {
          height: 618px;
        }
      }
    }

    // .bannerLb {
    //   width: 1560px;
    // }
  }
}
</style>
