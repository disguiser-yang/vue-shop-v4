<template>
  <div>
    <x-header :left-options="{showBack: true,backText:'返回'}" style="background-color:#ED5564;position:fixed;top:0px;left:0px;width:100%;z-index:11;">查看物流</x-header> 
    <div class='state'>
        <div class='state_img'>
            <div class='img_box'>
              <img src='../../assets/images/girl.jpg' />
            </div>
        </div>
        <div class='state_info'>
            <p class='state_info_st'>物流状态&nbsp;&nbsp;&nbsp;<span>已签收</span></p>
            <p>承运来源：顺丰速运</p>
            <p>运单编号：4548484678794</p>
            <p class='state_phone'>官方电话：<span>95533</span></p>
        </div>
    </div>

    <div class='deliver_person ' v-bind:class="{'delivery_drop_down': isDropDown, 'delivery_pull_up': isPullUp}">
        <div class='delivery_man'>
            <div class='delivery_man_photo'>
                <div class='img_box'>
                    <img src='../../assets/images/head.png'/>
                </div>
            </div>
            <div class='delivery_man_info'>
                <p>派送员</p>
                <p>王二小</p>
                <a href="tel:18780234139"><img class='phone'  src='../../assets/images/phone1.png'/></a>
                <a href='javascript:;' v-on:click='tog'><img class='arrow'  src='../../assets/images/arrow_right.png'/></a>
            </div>
        </div>
        <div class='delivery_hide_info'>
            <p>电话：<a href="tel:18780234139" style='display:inline-block;'>18780234139</a></p>
        </div>
    </div>

    <div class='delivery_info'>
        <ul class='delivery_info_ul'>
            <li>
                <b><i></b>
                <p>已签收，感谢你使用顺丰快递，期待下次为你服务</p>
                <p>2017-04-05 14:22:30</p>
            </li>
            <li>
                <b></b>
                <p>快件交给曹连湘，正在派送途中（联系电话：13922712587）</p>
                 <p>2017-04-05 14:22:30</p>
            </li>
            <li>
                <b></b>
                <p>正在派送途中,请您准备签收(派件人:曹连湘,电话:13922712587)</p>
                 <p>2017-04-05 14:22:30</p>
            </li>
            <li>
                <b></b>
                <p>快件到达 【成都总集散中心】</p>
                 <p>2017-04-05 14:22:30</p>
            </li>
            <li>
                <b></b>
                <p>快件在【成都双流集散中心】已装车，准备发往 【成都总集散中心】</p>
                 <p>2017-04-05 14:22:30</p>
            </li>
            <li>
                <b></b>
                <p>快件到达 【成都双流集散中心】</p>
                 <p>2017-04-05 14:22:30</p>
            </li>
            <li>
                <b></b>
                <p>快件在【成都市武侯区晋阳路营业点】已装车，准备发往 【成都双流集散中心</p>
                 <p>2017-04-05 14:22:30</p>
            </li>
            <li>
                <b></b>
                <p>顺丰速运 已收取快件</p>
                 <p>2017-04-05 14:22:30</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { Box, XHeader, Group, XButton, XInput, Toast } from 'vux'

export default {
  components: {
    XHeader,
    Group,
    XButton,
    XInput,
    Box,
    Toast
  },
  data: function () {
    return {
      isDropDown: false,
      isPullUp: false
    }
  },

  methods: {
    tog () {
      this.isDropDown = !this.isDropDown
      this.isPullUp = !this.isDropDown
    }
  }
}
</script>

<style scoped>
.state{
    display:flex;
    padding:10px;
    background:#fff;
    border-bottom:1px solid #dddddd;
    margin-top:46px;
}
.state_img{
    width:30%;
}
.img_box{
    width:80px;
    height:80px;
    overflow:hidden;
    border:1px solid #dddddd;
    padding:4px;
}
.img_box img{
    width:100%;
}
.state_info{
    width:70%;
    padding-left:10px;
}
.state_info p{
    font-size:14px;
    color:#999999;
}
.state_info_st span{
    color:#25ae5f;
}
.state_phone span{
    color:#58a8f7;
}
.deliver_person{
    background:#fff;
    margin-top:10px;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    overflow:hidden;
    height:82px;
}
.delivery_man{
    display:flex;
    background:#fff;
    padding:0 10px;
    align-items:center;
    height:82px;
}
.delivery_man_photo{
    width:20%;
}
.delivery_man .delivery_man_photo .img_box{
    width:60px;
    height:60px;
    overflow:hidden;
    padding:0px;
    border-radius:100%;
}
.delivery_man .delivery_man_photo div img{
    width:100%;
}
.delivery_man_info{
    width:80%;
    padding-left:10px;
    position:relative;
}
.delivery_man_info p{
    color:#999999;
    font-size:14px;
}
.delivery_man_info p:nth-child(2){
    color:#000000;
    font-size:16px;
}
.delivery_man_info .phone{
    position:absolute;
    width:40px;
    top:50%;
    right:50px;
    transform:translateY(-50%);
}
.delivery_man_info .arrow{
    position:absolute;
    width:30px;
    top:50%;
    right:0px;
    transform:translateY(-50%);
}
.delivery_drop_down{
    animation: dropdown 0.25s ease-out;
    animation-fill-mode:forwards;
}
@keyframes dropdown{
    from {height:82px}
    to {height:150px}
}
.delivery_pull_up{
    animation: pullup 0.25s ease-out;
    animation-fill-mode:forwards;
}
@keyframes pullup{
    from {height:150px}
    to {height:82px}
}
.delivery_drop_down .delivery_man .delivery_man_info .arrow{
    animation: arrowshift 0.25s ease-out;
    animation-fill-mode:forwards;
}
@keyframes arrowshift{
    from {
        transform:rotateZ(0deg);
        transform: translateY(-50%);
    }
    to {
        transform: translateY(-50%) rotateZ(90deg);
        transform-origin: center center;
    }
}
.delivery_pull_up .delivery_man .delivery_man_info .arrow{
    animation: arrowreturn 0.25s ease-out;
    animation-fill-mode:forwards;
}
@keyframes arrowreturn{
    from {
        transform: translateY(-50%) rotateZ(90deg);
        transform-origin: center center;
    }
    to {
        transform:rotateZ(0deg);
        transform: translateY(-50%);
       
    }
}
.delivery_hide_info{
    padding-left:10px;
    font-size:16px;
    color:#9a9a9a;
}
.delivery_hide_info p a{
    color:#9a9a9a;
}
.delivery_info{
    background:#fff;
    margin-top:10px;
    padding:10px 10px 20px 20px;
}
.delivery_info_ul{
       border-left:1px solid #ddd;
}
.delivery_info_ul li{
    list-style:none;
    position:relative;
    font-size:14px;
 
    margin:4px 0px;

}
.delivery_info_ul li:first-child b{
    width:16px;
    height:22px;
    display:block;
    background:#fff;
    left:-8px;
    top:0px;
    
    border-radius:0;
}
.delivery_info_ul li:first-child b i{
    width:12px;
    height:12px;
    background:#25ae5f;
    display:block;
    position:absolute;
    bottom:0px;
    border:2px solid #b9e5cc;
    border-radius:100%;

}
.delivery_info_ul li:first-child p{
    color:#2cb064;
    margin-left:25px;
  
    word-break:break-all;
    padding:2px 0px;
}
.delivery_info_ul li:first-child p:last-child{
    border-bottom:1px solid #dddddd;
}
.delivery_info_ul li b{
    width:11px;
    height:11px;
    background:#dddddd;
    display:block;
    position:absolute;
    left:-6px;
    top:8px;

    border-radius:100%;

}
.delivery_info_ul li p{
    margin-left:25px;

    word-break:break-all;
    padding:2px 0px;
    color:#999999;
}
.delivery_info_ul li p:last-child{
    border-bottom:1px solid #dddddd;
}
.delivery_info_ul li:last-child p:last-child{
    border:none;
}
.delivery_info_ul li span{
    
}
</style>
