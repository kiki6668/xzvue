<template>
  <header id="top" class="fixed_nav">
    <div id="logo" class="lf">
      <img class="animated jello" src="../assets/header/logo.png" alt="logo"/>
    </div>
    <div id="top_input" class="lf">
      <input id="input" type="text" placeholder="请输入您要搜索的内容"/>
      <a href="search.html" class="rt"><img id="search" src="../assets/header/search.png" alt="搜索"/></a>
    </div>
    <div class="rt">
      <ul class="lf">
        <li><a href="favorites.html" title="我的收藏"><img class="care" src="../assets/header/care.png"
                                                       alt=""/></a><b>|</b></li>
        <li><a href="orders.html" title="我的订单"><img class="order" src="../assets/header/order.png"
                                                    alt=""/></a><b>|</b></li>
        <li><a href="cart.html" title="我的购物车"><img class="shopcar" src="../assets/header/shop_car.png"
                                                   alt=""/></a><b>|</b></li>
        <li><a href="help.html">帮助</a><b>|</b></li>
        <li><a href="login.html">登录</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style scoped>
/*通用*/
body {
  font: 12px "simhei", Arial, Helvetica, sans-serif;
  color: #666;
  margin: 0px;
  padding: 0px;
  background-color: #f5f5f5;
}
a,a:hover{
  text-decoration: none;
}
input:focus{
  outline: 0;
}
#nav a {
  color: #cccccc;
}
#nav a:hover{
  color: #b8b8b8;
}
#nav a:focus{
  color:#0aa1ed;
}
ul, li, p, h1, h2, h3, h4, h5, h6, dl, dt, dd {
  margin: 0px;
  padding: 0px;
  border: none;
  list-style: none;
}
input {
  border: none;
}
.lf {
  float: left;
}
.rt {
  float: right;
}
.clear {
  clear: both;
}
/*整体*/

#nav, #banner, #product, #welcome, #study, #gourmet, #nav_detail,#nav_order {
  /*border:1px solid red;*/
  width: 1000px;
  overflow: hidden;
  margin: 0px auto;
  display: block;
}
#nav_order{
  margin-top: 20px;
  margin-bottom: 10px;
  display:block;
}
/*页面顶部*/
.fixed_nav{
  background: #F5F5F5;
  position:fixed;
  z-index: 1000;
  top:0;
  left:0;
  right: 0;
  width: 1000px;
  height:60px;
  background: #F5F5F5;
  transition: all 0.1s;
  padding: 15px 3px 0;

}
#top{
  width: 1000px;
  display: block;
  margin: 0 auto 0;
  min-height: 50px;
}

#top_input {
  margin-left: 113px;
  position: relative;
}

#top_input #input {
  width: 409px;
  height: 36px;
  padding: 10px;
  outline:none;
  border: 1px solid #0AA1ED;
  background-color: #f5f5f5;
  box-sizing: border-box;
}
#top_input>a{
  position: absolute;
  top:0px;
  right:0px;
}
#top_input #search {
  width: 36px;
  height: 35px;
  position:relative;
  top: 0px;
  right: 0px;
}
#top .rt ul {
  text-align: center;
}

#top .rt ul li {
  float: left;
  padding: 2px 14px;
  line-height: 33px;
}

#top .rt ul li a {
  text-align: center;
}

#top .rt ul li img {
  vertical-align: middle;

}
#top .rt a{
  cursor: pointer;
  color: #808080;
}
#top .rt a:hover{
  color: #0aa1ed;
}
#top .rt ul li b {
  position: relative;
  top: 0;
  right: -11px;
  font-weight: inherit;
}

/*nav主导航*/
#nav {
  margin-top: 80px;
  font-size: 16px;
}

#nav ul li {
  margin-right: 40px;
  float: left;
}

.active {
  color: #0AA1ED;
}

/*分类搜索*/
.seek{
  width:97px;
  position: absolute;
  height:92px;
  top:1px;
  right:36px;
  z-index: 1000;
  cursor: pointer;
  background: transparent;
  text-align: center;
  color: #c3c3c3;
  font: 14px simhei;
  padding-top: 8px;

}
.actived{
  width:97px;
  height:26px;
  position: absolute;
  top:8px;
  right:0px;
}
.seek_content{
  position: absolute;
  top:36px;
  left:0px;
  width: 87px;
  text-align:left;
  background: -moz-linear-gradient(top, #f0f0f0 0%, #e0e0e0 100%);
  background: -webkit-linear-gradient(top, #f0f0f0 0%, #e0e0e0 100%);
  background: -o-linear-gradient(top, #f0f0f0 0%, #e0e0e0 100%);
  background: -ms-linear-gradient(top, #f0f0f0 0%, #e0e0e0 100%);
  background: linear-gradient(top, #f0f0f0 0%, #e0e0e0 100%);
  box-shadow: 0px 3px 6px #ccc;
  color: #0aa1ed;
  display: none;
  padding-left: 10px;
}
.clickhover{
  color: #0aa1ed;
}
.seek img{
  position: relative;
  top:-2px;
}
.seek_content>div{
  height:16px;
  margin-top: 5px;
  font: 12px simhei;

}
.seek_content>div:hover{
  background: -moz-linear-gradient(top, #25a7e9 0%, #0998df 100%);
  background: -webkit-linear-gradient(top, #25a7e9 0%, #0998df 100%);
  background: -o-linear-gradient(top, #25a7e9 0%, #0998df 100%);
  background: -ms-linear-gradient(top, #25a7e9 0%, #0998df 100%);
  background: linear-gradient(top, #25a7e9 0%, #0998df 100%);
  color:#fff;
}
.seek:after{
  content: "";
  display: block;
  clear: both;
}
.seek:focus{
  outline: none;
}
/*图片放大首页*/
#gourmet .food_detail img,#study_product_main,#aside_image,#aside_image2,#aside_image3,#study_product_vice1,#study_product_vice2,#mImg{
  cursor: pointer;
  -webkit-transition: 1s -webkit-transform;
  -moz-transition: 1s -moz-transform;
}

#gourmet .food_detail img:hover,#study_product_main:hover,#aside_image:hover,#aside_image2:hover,#aside_image3:hover,#study_product_vice1:hover,#study_product_vice2:hover,#mImg:hover{
  -webkit-transform: scale(1.1, 1.1);
  -webkit-transition: 1s -webkit-transform;
  -moz-transform: scale(1.1, 1.1);
  -moz-transition: 1s -moz-transform;
  transform: scale(1.1, 1.1);
  transition: 1s transform;
}

.acti{
  color: #0AA1ED !important;
}


</style>
