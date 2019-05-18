<template>
  <header>
    <vuescroll :ops="ops" ref="vs">
      <nav>
        <img class="nav-logo" src="../assets/logo.png" alt>
        <ul>
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
        
          <li @click="goScroll('contact')">
            <a href="javascript:;">
              <span>联系我们</span>
            </a>
          </li>
            <li @click="goScroll('about')">
            <a href="javascript:;">
              <span>关于我们</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="bannerLb">
        <div class="bannerTop">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <img
                src="https://nwzimg.wezhan.cn/contents/sitefiles2030/10150395/images/7003426.png"
                alt
              >
            </swiper-slide>
            <swiper-slide>
              <img
                src="https://nwzimg.wezhan.cn/contents/sitefiles2030/10150395/images/7003426.png"
                alt
              >
            </swiper-slide>
            <swiper-slide>
              <img
                src="https://nwzimg.wezhan.cn/contents/sitefiles2030/10150395/images/7003426.png"
                alt
              >
            </swiper-slide>
            <swiper-slide>
              <img
                src="https://nwzimg.wezhan.cn/contents/sitefiles2030/10150395/images/7003426.png"
                alt
              >
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="containerBox">
        <div class="container">
          <div class="conatinerTlt" id="product">产品介绍</div>
          <ul class="containerList">
            <li>
              <div class="fl">
                <a href="#">
                  <img src="../assets/photo1.jpg" alt>
                </a>
              </div>
              <div class="fr">
                <p class="frF1">产品一</p>
                <div class="frfonts">
                  2011年，我们把奶茶利用咖啡的卡布奇诺的制做方法
                  <br>将奶茶中的奶与茶分离，创新制作而成全新的奶盖茶，风靡全球。
                  <br>2018年，我们再次创新，把奶盖与烘焙制法结合。
                  <br>创新而制成雪浮蕾——即最高级的奶盖
                  <br>口感轻盈灵动 造型丰富多变 搭配充满美感
                  <br>被誉为奶茶皇冠最顶上的明珠！
                </div>
              </div>
            </li>
            <li>
              <div class="fl">
                <a href="#">
                  <img src="../assets/photo1.jpg" alt>
                </a>
              </div>
              <div class="fr">
                <p class="frF1">产品一</p>
                <div class="frfonts">
                  2011年，我们把奶茶利用咖啡的卡布奇诺的制做方法
                  <br>将奶茶中的奶与茶分离，创新制作而成全新的奶盖茶，风靡全球。
                  <br>2018年，我们再次创新，把奶盖与烘焙制法结合。
                  <br>创新而制成雪浮蕾——即最高级的奶盖
                  <br>口感轻盈灵动 造型丰富多变 搭配充满美感
                  <br>被誉为奶茶皇冠最顶上的明珠！
                </div>
              </div>
            </li>
            <li>
              <div class="fl">
                <a href="#">
                  <img src="../assets/photo1.jpg" alt>
                </a>
              </div>
              <div class="fr">
                <p class="frF1">产品一</p>
                <div class="frfonts">
                  2011年，我们把奶茶利用咖啡的卡布奇诺的制做方法
                  <br>将奶茶中的奶与茶分离，创新制作而成全新的奶盖茶，风靡全球。
                  <br>2018年，我们再次创新，把奶盖与烘焙制法结合。
                  <br>创新而制成雪浮蕾——即最高级的奶盖
                  <br>口感轻盈灵动 造型丰富多变 搭配充满美感
                  <br>被誉为奶茶皇冠最顶上的明珠！
                </div>
              </div>
            </li>
          </ul>
          <div class="conatinerTlt" id="professional">业务介绍</div>
          <ul class="containerList2">
            <li>
              <div class="hover_overlay"></div>
              <div class="note">
                <span>业务一</span>
                <span>
                  风靡海外的可丽饼，煎好的饼皮卷上打发好的鲜奶油
                  <br>搭配鲜美水果或者浓郁巧克力
                  <br>一起品尝颜值与美味兼备的可丽饼！
                </span>
              </div>

              <img class="imgBox" src="../assets/photo1.jpg" alt>
            </li>
            <li>
              <div class="hover_overlay"></div>
              <div class="note">
                <span>业务一</span>
                <span>
                  风靡海外的可丽饼，煎好的饼皮卷上打发好的鲜奶油
                  <br>搭配鲜美水果或者浓郁巧克力
                  <br>一起品尝颜值与美味兼备的可丽饼！
                </span>
              </div>

              <img class="imgBox" src="../assets/photo1.jpg" alt>
            </li>
            <li>
              <div class="hover_overlay"></div>
              <div class="note">
                <span>业务一</span>
                <span>
                  风靡海外的可丽饼，煎好的饼皮卷上打发好的鲜奶油
                  <br>搭配鲜美水果或者浓郁巧克力
                  <br>一起品尝颜值与美味兼备的可丽饼！
                </span>
              </div>

              <img class="imgBox" src="../assets/photo1.jpg" alt>
            </li>
            <li>
              <div class="hover_overlay"></div>
              <div class="note">
                <span>业务一</span>
                <span>
                  风靡海外的可丽饼，煎好的饼皮卷上打发好的鲜奶油
                  <br>搭配鲜美水果或者浓郁巧克力
                  <br>一起品尝颜值与美味兼备的可丽饼！
                </span>
              </div>

              <img class="imgBox" src="../assets/photo1.jpg" alt>
            </li>
          </ul>
          <div class="conatinerTlt" id="contact">联系我们</div>
          <ul class="containerList4">
            <li>
              <i class="icon el-icon-tickets"></i>
              <div>集团</div>
            </li>
            <li>
              <i class="icon el-icon-message"></i>
              <div>邮箱</div>
            </li>
            <li>
             <i class="icon el-icon-location-outline"></i>
              <div>唐山市路北区建设大街33号北区建设大街33号</div>
            </li>
            <li>
              <i class="icon el-icon-phone-outline"></i>
              <div>电话</div>
            </li>
          </ul>
          <div class="conatinerTlt" id="about">关于我们</div>
          <ul class="containerList3">
            <li>
              <img src="../assets/photo1.jpg" alt>
              <div>关于我们标题一</div>
              <p>阐述一</p>
              <p>阐述二</p>
            </li>
            <li>
              <img src="../assets/photo1.jpg" alt>
              <div>关于我们标题二</div>
              <p>阐述一</p>
              <p>阐述二</p>
            </li>
            <li>
              <img src="../assets/photo1.jpg" alt>
              <div>关于我们标题三</div>
              <p>阐述一</p>
              <p>阐述二</p>
            </li>
            <li>
              <img src="../assets/photo1.jpg" alt>
              <div>关于我们标题四</div>
              <p>阐述一</p>
              <p>阐述二</p>
            </li>
            <li>
              <img src="../assets/photo1.jpg" alt>
              <div>关于我们标题五</div>
              <p>阐述一</p>
              <p>阐述二</p>
            </li>
          </ul>

          <MapNote></MapNote>
        </div>
      </div>
    </vuescroll>
    <silidefix @goTop="goTop"></silidefix>
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
    background: #fff;
    width: 100%;
    //   position: relative;
    height: 100%;
    z-index: 10;
  }
  .container {
    width: 1000px;
    height: auto;
    background: #fff;
    // overflow: hidden;
    margin: 0 auto;
    .containerList4 {
      width: 1000px;
      margin: 0 auto;
      overflow: hidden;
      margin-top: 40px;
      margin-bottom: 50px;
      background: #fff;
      li {
        width: 200px;
        
        margin-right: 50px;
        float: left;
        background: #fff;
        cursor: pointer;
        .icon {
          
          font-size: 60px;
          margin: 10px auto;
          display: block;
          background: #fff;
        }
        div {
          width: 100px;
          line-height: 18px;
          font-size: 13px;
          color: #666;
          text-align: center;
          margin: 0 auto;
        }
        &:hover{
            .icon{
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
      width: 1000px;
      height: auto;
      margin: 0 auto;
      overflow: hidden;
      li {
        width: 160px;
        height: 210px;
        overflow: hidden;
        float: left;
        margin-right: 40px;
        text-align: center;
        img {
          width: 100px;
          height: 100px;
          display: block;
          margin: 25px auto 0;
          background: #fff;
        }
        p {
          width: 160px;
          font-size: 12px;
          color: #666;
          line-height: 20px;
          height: 20px;
          overflow: hidden;
        }
        div {
          font-size: 13px;
          color: #000;
          margin-top: 15px;
        }
      }
      li:last-child {
        margin-right: 0;
      }
      li:first-child {
        margin-left: 20px;
      }
    }
    .containerList2 {
      width: 1000px;
      height: auto;
      margin: 0 auto;
      overflow: hidden;
      background: #fff;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        width: 480px;
        height: 350px;
        background: #fff;
        position: relative;
        margin-top: 20px;
        span:nth-child(1) {
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 18px;
          color: #fff;
          text-align: left;
          text-indent: 20px;
          display: block;
          font-weight: bold;
          margin-top: 8px;
        }
        span:nth-child(2) {
          width: 400px;
          line-height: 20px;
          font-size: 12px;
          color: #fff;
          text-align: left;
          display: block;
          margin-left: 20px;
        }
        .imgBox {
          width: 100%;
          height: 100%;
          display: block;
          //   margin: 15px 0;
          background: #fff;
          transition: .7s all ease;
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
      height: 80px;
      background: #dfdfdf;
      text-align: left;
      line-height: 80px;
      //   overflow: hidden;
      font-size: 25px;
      color: #000;
      font-weight: bold;
      text-indent: 30px;
      margin: 20px auto;
    }
    .containerList {
      width: 1000px;
      height: auto;
      margin: 0 auto;
      //   overflow: hidden;
      background: #fff;
      li {
        width: 1000px;
        height: 240px;
        // overflow: hidden;
        background: #fff;
        margin-top: 10px;
        transition: 0.5s all ease;
        &:hover {
          transform: scale(1.2);
          img {
            -webkit-animation: icon-bounce 0.5s alternate;
            -moz-animation: icon-bounce 0.5s alternate;
            -o-animation: icon-bounce 0.5s alternate;
            animation: icon-bounce 0.5s alternate;
          }
        }
        .fl {
          width: 260px;
          height: 240px;
          float: left;
          background: #fff;
          a {
            display: block;
            width: 260px;
            height: 200px;
            // overflow: hidden;
            margin-left: 30px;
            margin-top: 20px;
            img {
              display: block;
              width: 200px;
              height: 200px;
              background: #fff;
              border-radius: 4px;
            }
          }
        }
        .fr {
          width: 600px;
          height: 240px;
          float: left;
          background: #fff;
          margin-left: 140px;
          .frF1 {
            width: 600px;
            height: 40px;
            font-size: 20px;
            color: #000;
            text-align: left;
            line-height: 40px;
            margin-top: 10px;
            font-weight: bold;
            float: left;
          }
          .frfonts {
            width: 600px;
            height: auto;
            overflow: hidden;
            font-size: 13px;
            color: #666;
            line-height: 20px;
            text-align: left;
            float: left;
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
  }
  nav {
    position: fixed;
    // top: -560px;
    top: 0;
    z-index: 15;
    width: 100%;
    background: #1997e8;
    ul {
      list-style: none;
      display: flex;
    //   width: 900px;
    //   margin: 0 auto;
    margin-left: 170px;
      height: 80px;
      overflow: hidden;
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
      width: 150px;
      height: 40px;
      position: absolute;
      top: 20px;
      left: 20px;
    }
  }
  .bannerLb {
    width: 1000px;
    // height: 450px;
    // overflow: hidden;
    margin: 0 auto;
    margin-top: 120px;
    // background:orange;
    // position: relative;
    .bannerTop {
      width: 100%;
      height: 560px;
      //   overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        // background:blue;
        display: block;
        float: left;
        border-radius: 8px;
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
  background: #d8761e;
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
  color: #000;
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
</style>
