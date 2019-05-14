<template>
  <header>
      <nav>
          <ul>
              <li>
                  首页
              </li>
              <li>
                  产品介绍
              </li>
              <li>
                  业务介绍
              </li>
              <li>
                  关于我们
              </li>
              <li>
                  联系我们
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'header',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    header{
        width: 100%;
        height: 60px;
        ul{
            list-style: none;
            display: flex;
            width: 1000px;
            margin: 0 auto;
            li{
               font-size: 30px;
               width: 200px;
               text-align: center;
            }
        }
    }
</style>
