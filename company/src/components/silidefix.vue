<template>
<div>
  <ul class="sildfixed">
    <li>
      <img src="../assets/ico1_23.png" alt>
      <div class="mask">
          客服电话：13133333333
      </div>
    </li>
    <li>
      <img src="../assets/ico1_24.png" alt>
      <div class="mask">
          <div class="title">
              微信公众号
          </div>
          <div class="qrcode">
              <img src="http://www.mingsen.com.cn/images/%E6%98%8E%E6%A3%AE%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7.png" alt="">
          </div>
      </div>
    </li>
    <li @click="toTop">
     <img src="../assets/ico1_25.png" alt>
    </li>
  </ul>
</div>

</template>
<script>
export default {
    data(){
        return {
            gotop:false
        }
    },
    methods:{
        toTop(){
            this.$emit('goTop',!this.gotop);
        }
    }
}
</script>

<style <style lang="less" scoped>
.sildfixed{
    position: fixed;
    z-index: 9999;
    bottom: 155px;
    right: 30px;
    width: 50px;
    cursor: pointer;
    li{
        width: 50px;
        height: 40px;
        line-height: 50px;
        border-radius: 8px;
        background: rgba(25,151,232,0.5);
        margin-top: 1px;
        position: relative;
        color: #fff;
        &:last-child{
            background: none;
        }
        &:hover{
            .mask{
                // display: block;
                opacity: 1;
                 right: 50px;
            }
        }
    }
    .mask{
        position: absolute;
        right: 0;
        line-height: 30px;
        top: 0;
        background:  rgba(25,151,232,0.5);
        opacity: 0;
        padding: 10px;
        border-radius: 8px;
        // display: none;
        transition: .5s all ease;
    }
}

</style>


