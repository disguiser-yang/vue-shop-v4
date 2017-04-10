<template>
  <div>
      <x-header :left-options="{showBack: true,backText:'返回'}" style="background-color:#ED5564; position:fixed;top:0px;left:0px;width:100%;z-index:11;">订单详情</x-header> 
      <div class='recive_Info'>
          <div class='recive_info_icon'>
            <img src='../../assets/images/address.png'/>
          </div>
          <div class='recive_info_address'>
            <p class='person'>收货人：{{orderInfo.reciver_name}}<span class='number'>{{orderInfo.reciver_phone}}</span></P>
            <p class='addr'>收货地址：{{orderInfo.reciver_addr}}</P>
          </div>
      </div>
      <div class='item_list'>
         <div class='items' >
              
                <router-link :to="{ path: '/orderdetail',query: {id:12}}" style='display:block;'>
                    <div class='items_img' v-for='goodslist in orderInfo.goods_list'>
                        <div class='img'>
                            <div class='img_box'>
                                <img src='../../assets/images/girl.jpg'>
                            </div>    
                        </div>
                        <div class='head'>
                        <p>{{goodslist.goods_name}}</p>
                        </div>
                        <div class='price'>
                            <p class='pro_price'>{{goodslist.goods_price}}</p>
                         
                            <p class='number'>X{{goodslist.goods_num}}</p>
                        </div>
                    </div>
                </router-link>
                <div class='items_total'>
                    <p class='freight'>运费<span>￥{{orderInfo.shipping_fee}}</span></p>
                    <p class='pay'>实付款(含运费)<span>￥{{orderInfo.real_pay_amount}}</span></p>
                </div>
                <div class='contact'>
                  <div class='contact_buyer'>
                      <div class='contact_buyer_icon'>
                          <span>联系卖家</span>
                      </div>
                  </div>
                  <div class='contact_phone'>
                      <div class='contact_phone_icon'>
                          <span><a href="tel:18583662018">拨打电话</a></span>
                      </div>
                  </div>
                </div>
            </div>
            <div class='order_info'>
                <p>订单编号： {{orderInfo.order_sn}}</p>
                <p>支付编号： {{orderInfo.pay_sn}}</p>
                <p>创建时间： 2017-3-15 14:30:25</p>
                <p>付款时间： 2017-3-16 14:32:21</p>
            </div>
       
      </div>
  </div>
</template>

<script>
import {XHeader, XAddress, Group, Cell, XInput, XButton} from 'vux'
import {requestGetOrderDetail} from '../../api/api'
import {getSessionStore} from '../../common/js/utils'
export default{
  components: {
    XHeader,
    Group,
    XAddress,
    Cell,
    XInput,
    XButton
  },
  data () {
    return {
      items: [
      ],
      isCur: 0,
      orderInfo: ''
    }
  },
  created () {
    console.log(this.$route.query.id)
  },
  mounted () {
    this.getOderList()
  },
  methods: {
    getOderList () {
      requestGetOrderDetail({key: JSON.parse(getSessionStore('user')).key, order_id: this.$route.query.id}).then(data => {
        this.orderInfo = data.datas.order_info
      })
    }
  },
  computed: {
  }
}
</script>
<style scoped>
.recive_Info {
    margin-top:46px!important;
    display:flex;
    padding:10px 10px 10px 0px;
    background:#fff;
}
.recive_info_icon{

    position:relative;
    width:15%;
}
.recive_info_address{
    width:85%;
}
.recive_info_icon img{
    width:40px;
    display:block;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
}
.recive_info_address .person{
    font-size:14px;
    color:#676767;
}
.recive_info_address .person .number{
    float:right;
}
.recive_info_address .addr{
    font-size:14px;
    color:#676767;
}

.clearfix:after{
    content:'';
    display:block;
    clear:both;
    visibility:hidden;
}
li{
   list-style:none;
}
.tabbar{
    position:fixed;
    top:46px;
    width:100%;
    z-index:11;
    background:rgba(255,255,255,0.95);
}
.tabbar_ul{
    border-bottom:1px solid #e7e7e7;
}
.tabbar_ul li{
    float:left;
    width:20%;
    font-size:16px;
    text-align:center;
    line-height:44px;
}
.tabbar_ul li a{
    text-align:center;
    display:block;
    color:#3d4245;
    font-size:16px;
}
.tabbar_ul li a span{
    padding-bottom:9px;
}
.cur_a{
    color:#ff5000!important;
    border-bottom:3px solid #ff5000;
}
.content {
    position:relative;
    top:90px;
   
}
.content_all{
    width:100%;
}
.items{
    margin-bottom:10px;
    background:white;
    padding:10px 10px 0 10px;
}

.items_img{
    display:flex;
    padding:0  0  10px 0;
}
.items_img .img{
    width:30%;
    overflow:hidden;
}
.items_img .img .img_box{
    height:80px;
    width:80px;
}
.items_img .img .img_box img{
    width:80px;
    height:80px;
}
.items_img .head{
     width:50%;
}
.items_img .head p{
    font-size:16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:#3d4244;
}
.items_img .price{
     width:20%;
}
.items_img .price p.pro_price{
    font-size:14px;
    text-align:center;
    color:#3d4244;
}
.items_img .price p.maket_price{
    font-size:14px;
    text-align:center;
    text-decoration:line-through;
    color:#999999;
}
.items_img .price p.number{
    font-size:14px;
    text-align:center;
    color:#999999;
}
.items_total{
    font-size:14px;
    padding-bottom:10px;
    color:#3d4244;
    border-bottom:1px solid #e7e7e7;
}
.items_total span{
    float:right;
}
.items_total .pay{
    color:#666666;
    font-size:16px;
}
.items_total .pay span{
    color:#ff5500;
}
.contact{
     display:flex;
     padding:5px 0px;
}
.contact .contact_buyer{
    width:50%;
    
}
.contact_buyer_icon{
    height:40px;
    font-size:16px;
    position:relative;
    background:url(../../assets/images/contact.png) no-repeat 25% 50%;
    background-size:30px 30px;
    border-right:1px solid #e5e5e5;
}
.contact_buyer_icon span{
  top:50%;
  left:50%;
  transform:translate(-20%,-50%);
  position:absolute;
  color:#686868;
}
.contact .contact_phone{
    width:50%;
}
.contact_phone_icon{
    height:40px;
    font-size:16px;
    position:relative;
    background:url(../../assets/images/phone2.png) no-repeat 25% 50%;
    background-size:30px 30px;

}
.contact_phone_icon span a{
  color:#686868;
}
.contact_phone_icon span{
  top:50%;
  left:50%;
  transform:translate(-20%,-50%);
  position:absolute;
}
.order_info{
  font-size:14px;
  color:#9d9d9d;
  background:#fff;
  padding:10px;
}
.item_list{
     margin:10px 0px;
}
</style>
