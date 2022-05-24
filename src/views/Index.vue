<template>
  <div>
    <my-header></my-header>
    <div class="ck-slide">
      <ul class="ck-slide-wrapper">
        <li>
          <a href="product_details.html"><img src="../assets/itemCat/itemCat_banner1.png" alt=""></a>
        </li>
        <li style="display:none">
          <a href="product_details.html"><img src="../assets/itemCat/itemCat_banner2.png" alt=""></a>
        </li>
        <li style="display:none">
          <a href="product_details.html"><img src="../assets/itemCat/itemCat_banner3.png" alt=""></a>
        </li>
        <li style="display:none">
          <a href="product_details.html"><img src="../assets/itemCat/itemCat_banner4.png" alt=""></a>
        </li>
        <li style="display:none">
          名字:{{p1.name}}
        </li>
      </ul>
      <a href="javascript:;" class="ctrl-slide ck-prev">上一张</a> <a href="javascript:;"
                                                                   class="ctrl-slide ck-next">下一张</a>
      <div class="ck-slidebox">
        <div class="slideWrap">
          <ul class="dot-wrap">
            <li class="current"><em>1</em></li>
            <li><em>2</em></li>
            <li><em>3</em></li>
            <li><em>4</em></li>
            <li><em>5</em></li>
          </ul>
        </div>
      </div>
    </div>
    <table>
      <tr>
        <td>序号</td>
        <td>名字</td>
        <td>年龄</td>
      </tr>

      <div v-for="(item,i) in others">
        <tr>
          <td v-text="item.id"></td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
        </tr>

      </div>
    </table>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";

export default {
  name: "index",
  components: {MyHeader},
  data() {
    return {
      p1: {},
      p2: {},
      others: []
    }
  },
  props: [],
  methods: {},
  watch: {},
  computed: {},
  created() {
    this.axios.get('http://localhost:3000')
    .then(res => {
      this.p1 = res.data[0]
      this.p2 = res.data[1]
      this.others = res.data
    })
  }
}
</script>

<style scoped>
img {
  border: 0;
}

.ck-slide ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.ck-slide {
  position: relative;
  overflow: hidden;
}

.ck-slide ul.ck-slide-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin: 0;
  padding: 0;
}

.ck-slide ul.ck-slide-wrapper li {
  position: absolute;
  margin-top: 0px;
}

.ck-slide ul.ck-slide-wrapper li a {
  /*a标签是行内元素，宽高对a标签不起作用，这里必须添加line-height:0px;display:black，否则垂直滚动<li>之间会出现间隔*/
  line-height: 0px;
  display: block;
}

.ck-slide .ck-prev, .ck-slide .ck-next {
  position: absolute;
  top: 50%;
  z-index: 2;
  width: 35px;
  height: 70px;
  margin-top: -35px;
  border-radius: 3px;
  opacity: .15;
  background: red;
  text-indent: -9999px;
  background-repeat: no-repeat;
  transition: opacity .2s linear 0s;
}

.ck-slide .ck-prev {
  left: 5px;
  background: url(../assets/index/arrow-left.png) #000 50% no-repeat;
}

.ck-slide .ck-next {
  right: 5px;
  background: url(../assets/index/arrow-right.png) #000 50% no-repeat;
}

.ck-slidebox {
  position: absolute;
  left: 50%;
  bottom: 12px;
  z-index: 30;
}

.ck-slidebox ul {
  height: 20px;
  padding: 0 4px;
  border-radius: 8px;
}

.ck-slidebox ul li {
  float: left;
  height: 12px;
  margin: 4px 4px;
}

.ck-slidebox ul li em {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: #fff;
  text-indent: -9999px;
  cursor: pointer;
}

.ck-slidebox ul li.current em {
  background-color: #0AA1ED;
}

.ck-slidebox ul li em:hover {
  background-color: #0AA1ED;
}

.ck-slide {
  width: 1000px;
  overflow: hidden;
  margin: 20px auto 0px auto;
  display: block;
  height: 400px;
  border: 1px solid #dddddd;
}

.stair {
  margin: 26px auto 9px;
  width: 1000px;
  height: 40px;
  line-height: 25px;
  font-weight: bold;
  font-size: 24px;
  border-bottom: 1px solid #E8E8E8;
}

.stair span {
  position: relative;
  top: 5px;
  margin-right: 18px;
}

.stair:target {
  background: #e8e8e8;
  padding-top: 100px;
}

.lf1 {
  /*border:1px solid red;*/
  width: 1000px;
  height: 619px;
  margin: 0px auto;
}

.lf1 .lf1_top {
  height: 376px;
  margin-bottom: 8px;
  /*border:1px solid blue;*/
}

.lf1 .lf1_top .left {
  width: 611px;
  height: 376px;
  /*border:1px solid yellow;*/
  margin-right: 10px;
  background: #E8E8E8;
}

.lf1 .lf1_top .left span {
  position: relative;
  top: 35px;
  left: -19px;
}

.lf1 .lf1_top .left span img {
  width: 318px;
  height: 319px;
}

.lf1 .lf1_top .left .left_pro {
  width: 245px;
  height: 232px;
  padding: 5px;
  text-align: left;
  /*border: 1px solid #ddd;*/
  margin-top: 68px;
  margin-left: 36px;
}

/*上方右侧*/
.lf1 .lf1_top .right span img {
  width: 292px;
  height: 232px;
}

.lf1 .lf1_top span {
  position: relative;
  top: -150px;
  left: 63px;
}

.lf1 .lf1_top .right .right_pro {
  width: 253px;
  height: 232px;
  padding: 4px;
  text-align: left;
  /*border: 1px solid #ddd;*/
  margin-top: 39px;
  margin-left: 25px;
}

.top_ys1 {
  color: #333333;
  font-size: 32px;
  margin-bottom: 12px;
  font-weight: lighter;
}

.top_ys2 {
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: lighter;
}

.bottom_ys2 {
  /*margin-top: 8px;*/
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: lighter;
  color: #000;
}

.top_ys3 {
  margin-bottom: 12px;
  font-weight: bold;
  color: #0AA1ED;
  font-size: 24px;
}

.bottom_ys3 {
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  color: #0AA1ED;
}

.top_ys4 {
  width: 132px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}

.bottom_ys4 {
  width: 100px;
  height: 24px;
  line-height: 24px;
  font-size: 24px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-size: 12px;
  margin: 0px auto;
}

.color_2 {
  background-color: #0aa1ed;
  border-radius: 2px;
}

.color_2:hover {
  background: -moz-linear-gradient(top, #25a7e9 0%, #0998df 100%);
  background: -webkit-linear-gradient(top, #25a7e9 0%, #0998df 100%);
  background: -o-linear-gradient(top, #25a7e9 0%, #0998df 100%);
  background: -ms-linear-gradient(top, #25a7e9 0%, #0998df 100%);
}

.color_1 {
  background-color: #E89AA8;
  border-radius: 2px;
}

.color_1:hover {
  background: -moz-linear-gradient(top, #dc929f 0%, #d67989 100%);
  background: -webkit-linear-gradient(top, #dc929f 0%, #d67989 100%);
  background: -o-linear-gradient(top, #dc929f 0%, #d67989 100%);
  background: -ms-linear-gradient(top, #dc929f 0%, #d67989 100%);
}

.top_ys4 a, .bottom_ys4 a {
  color: #fff !important;
}

.lf1 .lf1_top .right {
  width: 375px;
  height: 376px;
  /*border:1px solid yellow;*/
  background: #E8E8E8;
  overflow: hidden;
}

.lf1 .lf1_bottom {
  height: 233px;
  /*border:1px solid red;*/
}

.lf1 .lf1_bottom .item_cat {
  width: 366px;
  height: 233px;
  margin-right: 20px;
  /*border:1px solid deeppink;*/
  background: #E8E8E8;
}

/*分类头部*/
.cat_header {
  width: 355px;
  height: 35px;
  line-height: 35px;
  padding-left: 11px;
}

.cat_header span {
  font-size: 16px;
  color: #fff;
  margin-right: 9px;
}

.cat_header span img {
  position: relative;
  top: 3px;
}

.lf1 .lf1_bottom .item_msg {
  width: 198px;
  height: 233px;
  /*border:1px solid darkblue;*/
  margin-right: 5.19px;
  background: #E8E8E8;
  box-sizing: border-box;
  text-align: center;
  /*padding-top: 29px;*/
}

/*分类具体内容*/
.item_cat_all {
  width: 366px;
  height: 198px;
  /*border:1px solid deeppink;*/
  padding-left: 12px;
}

.item_cat_all p {
  margin-top: 17px;
  margin-bottom: 9px;
  color: #62B5EC;
}

.item_cat_all ul {
  width: 366px;
  height: 20px;
}

.item_cat_all ul li {
  float: left;
  margin-right: 10px;
}

.item_cat_all ul li a {
  color: #0aa1ed;
}

.item_cat_all ul li a:hover {
  color: #0a7eb8;
}

.item_color ul li a {
  color: #E89aa8;
}

.item_color ul li a:hover {
  color: #c66a7a;
}

.item_color p {
  color: #E8B0B9;
}

.left_ys1 {
  margin-top: 52px;
  margin-left: 45px;
}

.left_ys2 {
  width: 148px;
  height: 230px;
  margin-top: 76px;
  /* margin-left: 12px; */
}

.left_ys2 img {
  width: 130px;
  height: 230px;
}

.right_ys {
  text-align: left;
  /*border: 1px solid #ddd;*/
  margin-top: 77px;
}

.price_ys3 {
  font-size: 16px;
  color: #E89AA8;
}

span img, .item_msg img, .lf1_top img, .lf1_bottom img {
  cursor: pointer;
  -webkit-transition: 1s -webkit-transform;
  -moz-transition: 1s -moz-transform;
}

span img:hover, .item_msg img:hover, .lf1_top img:hover, .lf1_bottom img:hover {
  -webkit-transform: scale(1.1, 1.1);
  -moz-transition: 1s -moz-transform;
}
</style>
