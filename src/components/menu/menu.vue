<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      
      <div class="menu-header" style='background:rgb(237, 85, 100);'>
        <!-- <img class="menu-avatar" src=""
          alt=""> -->
        <!--<div class="menu-title">
          <blur :blur-amount=40 :url="url">
            <p class="center"><img :src="url"></p>
          </blur>
        </div>-->
        <div class='menu_photo'>
          <img src='../../assets/images/girl.jpg' alt='head' />
        </div>
        <div class='menu-info'>
          <div class='menu_info_name'>
            <i></i>lily smith
          </div>
          <div class='menu_info_phone'>
            <i></i>
            18755484203
          </div>
        </div>
      </div>
     
      <scroller lock-x scrollbar-y  >
          <div class='scroller_ul'>
            <ul>
              <li>
                <router-link :to="{ path: '/orderlist' }">
                   <a href='javascript:;' ><i class='icon icon_order'></i>我的订单</a>
                </router-link>
              </li>
              <li>
                <router-link :to="{ path: '/address' }">
                   <a href='javascript:;' ><i class='icon icon_location'></i>地址管理</a>
                </router-link>
              </li>
              <li>
                 <router-link :to="{ path: '/cart' }">
                    <a href='javascript:;' ><i class='icon icon_cart'></i>我的购物车</a>
                </router-link>
              </li>
              <li>
                <a href='javascript:;' ><i class='icon icon_setting'></i>设置</a>
              </li>
      
            </ul>
            
          </div>
      </scroller>

    </div>
    <div class="menu-other">

    </div>
  </div>
</template>

<script>
import {Blur, Scroller} from 'vux'
export default{
  components: {
    Blur,
    Scroller
  },
  name: 'v-menu',
  props: {
    show: {
      type: Boolean
    }
  },
  data () {
    return {
      url: 'http://img.ivsky.com/img/tupian/pre/201606/30/pexels_photo_48730.jpg'
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

@import 'menu.styl'

.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.menu-header{
  height: 200px!important;
  position: relative;
}
.menu-list{
  /*background-color:rgba(0,0,0,0.8)!important;*/
}
.menu_photo{
  width:90px;
  height: 90px;
  border:2px solid white;
  border-radius:50%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-80%);
  overflow:hidden;
}
.menu_photo img{
  width:100%;
  height:100%;
}
.menu-info{
  padding-left: 3.5rem;
  position: absolute;
  bottom:0.5rem;
  left:0rem;
}
.menu_info_name{
  font-size: 0.7rem;
  color:#fff;
  display: flex;
  align-items:center;
}
/*.menu_info div i{
  display: block;
  width:20px;
  height: 20px;
  padding-right: 0.2rem;
}*/
.menu_info_name i{
  display: block;
  width:20px;
  height: 20px;
  padding-right: 0.2rem;
  background:url(../../assets/images/head_icon.png) no-repeat;
  background-size: contain;
}
.menu_info_phone{
  font-size: 0.7rem;
  text-align: center;
  color:#fff;
  display: flex;
  align-items:center;
}
.menu_info_phone i{
  display: block;
  width:20px;
  height: 20px;
  padding-right: 0.2rem;
  background:url(../../assets/images/phone.png) no-repeat;
  background-size: contain;
}
.scroller_ul ul{
  padding-left:0.5rem;
}
.scroller_ul ul li{
  list-style-type:none;
  height: 46px;
  display: flex;
  align-items: center;
  /*border-bottom: 1px solid dimgray;*/
  
  
}
@keyframes moveaction{
  from{
    left:-200px;
  }
  70%{
    left:12px
  }
  to{
    left:10px;
  }
}
.show .scroller_ul ul li:first-child{
  position:absolute;
  top:10px;
  animation:moveaction 0.3s ease-in-out;
  animation-fill-mode: forwards;
}

.show .scroller_ul ul li:nth-child(2){
  position:absolute;
  top:50px;
  animation:moveaction 0.4s ease-in-out;
  animation-fill-mode: forwards;
}
.show .scroller_ul ul li:nth-child(3){
  position:absolute;
  top:90px;
  animation:moveaction 0.5s ease-in-out;
  animation-fill-mode: forwards;
}
.show .scroller_ul ul li:nth-child(4){
  position:absolute;
  top:130px;
  animation:moveaction 0.6s ease-in-out;
  animation-fill-mode: forwards;
}
.scroller_ul ul li a{
  color:#fff;
}
a{
  display:flex;
  align-items:center;
  font-size: 0.8rem;
}
.icon{
  width:30px;
  height:30px;
}
.icon_order{
  background:url(../../assets/images/order.png)  no-repeat center;
  background-size: contain;
}
.icon_location{
  background:url(../../assets/images/location.png)  no-repeat center;
  background-size: contain;
}
.icon_cart{
  background:url(../../assets/images/cart2.png)  no-repeat center;
  background-size: contain;
}
.icon_setting{
  background:url(../../assets/images/setting.png)  no-repeat center;
  background-size: contain;
}
</style>
