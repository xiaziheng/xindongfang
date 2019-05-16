<template>
  <header>
    
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
    <vuescroll :ops="ops" ref="vs">
    <nav>
      <img class="nav-logo" src alt>
      <ul>
        <li @click="goScroll('home')">首页</li>
        <li  @click="goScroll('product')">产品介绍</li>
        <li  @click="goScroll('professional')">业务介绍</li>
        <li  @click="goScroll('about')">关于我们</li>
        <li @click="goScroll('contact')">联系我们</li>
      </ul>
    </nav>
    <div class="containerBox">
         <div class="container">
      <div class="conatinerTlt" id="product" >产品介绍</div>
      <ul class="containerList">
        <li>
          <div class="fl">
            <a href="#">
              <img src alt>
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
            <img src alt>
            <img src alt>
            <img src alt>
            <img src alt>
            <img src alt>
          </div>
        </li>
        <li>
          <div class="fl">
            <a href="#">
              <img src alt>
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
            <img src alt>
            <img src alt>
            <img src alt>
            <img src alt>
            <img src alt>
          </div>
        </li>
        <li>
          <div class="fl">
            <a href="#">
              <img src alt>
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
            <img src alt>
            <img src alt>
            <img src alt>
            <img src alt>
            <img src alt>
          </div>
        </li>
      </ul>
      <div class="conatinerTlt" id="professional">业务介绍</div>
      <ul class="containerList2">
        <li>
          <span>业务一</span>
          <span>
            风靡海外的可丽饼，煎好的饼皮卷上打发好的鲜奶油
            <br>搭配鲜美水果或者浓郁巧克力
            <br>一起品尝颜值与美味兼备的可丽饼！
          </span>
          <img class="imgBox" src alt>
          <div>
            <img src alt>
            <img src alt>
            <img src alt>
          </div>
        </li>
        <li>
          <span>业务二</span>
          <span>
            风靡海外的可丽饼，煎好的饼皮卷上打发好的鲜奶油
            <br>搭配鲜美水果或者浓郁巧克力
            <br>一起品尝颜值与美味兼备的可丽饼！
          </span>
          <img class="imgBox" src alt>
          <div>
            <img src alt>
            <img src alt>
            <img src alt>
          </div>
        </li>
        <li>
          <span>业务一</span>
          <span>
            风靡海外的可丽饼，煎好的饼皮卷上打发好的鲜奶油
            <br>搭配鲜美水果或者浓郁巧克力
            <br>一起品尝颜值与美味兼备的可丽饼！
          </span>
          <img class="imgBox" src alt>
          <div>
            <img src alt>
            <img src alt>
            <img src alt>
          </div>
        </li>
        <li>
          <span>业务二</span>
          <span>
            风靡海外的可丽饼，煎好的饼皮卷上打发好的鲜奶油
            <br>搭配鲜美水果或者浓郁巧克力
            <br>一起品尝颜值与美味兼备的可丽饼！
          </span>
          <img class="imgBox" src alt>
          <div>
            <img src alt>
            <img src alt>
            <img src alt>
          </div>
        </li>
      </ul>
      <div class="conatinerTlt" id="about">关于我们</div>
      <ul class="containerList3">
        <li>
          <img src alt>
          <div>关于我们标题一</div>
          <p>阐述一</p>
          <p>阐述二</p>
        </li>
        <li>
          <img src alt>
          <div>关于我们标题二</div>
          <p>阐述一</p>
          <p>阐述二</p>
        </li>
        <li>
          <img src alt>
          <div>关于我们标题三</div>
          <p>阐述一</p>
          <p>阐述二</p>
        </li>
        <li>
          <img src alt>
          <div>关于我们标题四</div>
          <p>阐述一</p>
          <p>阐述二</p>
        </li>
        <li>
          <img src alt>
          <div>关于我们标题五</div>
          <p>阐述一</p>
          <p>阐述二</p>
        </li>
      </ul>
      <div class="conatinerTlt" id="contact">联系我们</div>
      <ul class="containerList4">
        <li>
          <img src alt>
          <div>集团</div>
        </li>
        <li>
          <img src alt>
          <div>邮箱</div>
        </li>
        <li>
          <img src alt>
          <div>唐山市路北区建设大街33号北区建设大街33号</div>
        </li>
        <li>
          <img src alt>
          <div>电话</div>
        </li>
      </ul>
    </div>
    </div>
       </vuescroll>
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
  .containerBox{
      margin-top: 560px;
      background: #fff;
      width: 100%;
      position: relative;
      height: 100%;
      z-index: 10;
  }
  .container {
    width: 1000px;
    height: auto;
    background: orangered;
    overflow: hidden;
    margin: 0 auto;
    .containerList4 {
      width: 1000px;
      height: 160px;
      margin: 0 auto;
      overflow: hidden;
      background: greenyellow;
      li {
        width: 200px;
        height: 160px;
        margin-right: 50px;
        float: left;
        background: hotpink;
        img {
          width: 80px;
          height: 80px;
          margin: 10px auto;
          display: block;
          background: purple;
        }
        div {
          width: 100px;
          height: 80px;
          line-height: 18px;
          font-size: 13px;
          color: #666;
          text-align: center;
          margin: 0 auto;
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
          background: greenyellow;
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
      overflow: hidden;
      background: green;
      li {
        width: 500px;
        float: right;
        height: 400px;
        background: hotpink;
        span:nth-child(1) {
          width: 500px;
          height: 30px;
          line-height: 30px;
          font-size: 18px;
          color: #000;
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
          color: #666;
          text-align: left;
          display: block;
          margin-left: 20px;
        }
        .imgBox {
          width: 400px;
          height: 200px;
          display: block;
          margin: 15px auto 0;
          background: greenyellow;
        }
        div {
          width: 400px;
          height: 70px;
          background: orange;
          overflow: hidden;
          margin: 10px auto 0;
          img {
            width: 60px;
            height: 60px;
            background: #fff;
            border: 1px solid #ccc;
            display: block;
            float: left;
            margin-right: 80px;
          }
          img:first-child {
            margin-left: 28px;
          }
          img:last-child {
            margin-right: 0;
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
      background: orchid;
      text-align: center;
      line-height: 80px;
      overflow: hidden;
      font-size: 25px;
      color: #000;
      font-weight: bold;
    }
    .containerList {
      width: 1000px;
      height: auto;
      overflow: hidden;
      background: palevioletred;
      li {
        width: 1000px;
        height: 240px;
        overflow: hidden;
        background: orangered;
        margin-top: 10px;
        .fl {
          width: 260px;
          height: 240px;
          float: left;
          background: blue;
          a {
            display: block;
            width: 260px;
            height: 200px;
            overflow: hidden;
            margin-left: 30px;
            margin-top: 20px;
            img {
              display: block;
              width: 200px;
              height: 200px;
              background: orange;
            }
          }
        }
        .fr {
          width: 600px;
          height: 240px;
          float: left;
          background: orangered;
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
            background: yellow;
            margin-top: 12px;
          }
        }
      }
    }
  }
  nav {
    position: absolute;
    top: -560px;
    z-index: 15;
    width: 100%;
    ul {
      list-style: none;
      display: flex;
      width: 900px;
      margin: 0 auto;
      height: 80px;
      overflow: hidden;
      li {
        font-size: 22px;
        width: 200px;
        height: 80px;
        line-height: 80px;
        color: #fff;
        text-align: center;
      }
    }
    .nav-logo {
      width: 150px;
      height: 60px;
      background: orange;
      position: absolute;
      top: 10px;
      left: 20px;
    }
  }
  .bannerLb {
      position: fixed;
      top: 0;

    width: 100%;
    height: 560px;
    overflow: hidden;
    // background:orange;
    // position: relative;
    .bannerTop {
      width: 100%;
      height: 560px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        // background:blue;
        display: block;
        float: left;
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

</style>
