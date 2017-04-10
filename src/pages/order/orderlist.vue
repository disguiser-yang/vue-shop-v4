<template>
  <div>
      <x-header :left-options="{showBack: true,backText:'返回'}" style="background-color:#ED5564; position:fixed;top:0px;left:0px;width:100%;z-index:11;">我的订单</x-header> 
      <div class='tabbar'>
        <ul class='tabbar_ul clearfix'>
            <li v-for='(item, index) in items' ><a href='javascript:;' v-on:click='isCur=index'><span v-text='item.name' :class='{cur_a:isCur===index}'></span></a></li>
        </ul>
      </div>
      <div class='content'>
        <div class='content_all' v-show='isCur===0'>

            <div class='items' v-for='item in this.orderGroupList'>
                <div class='items_title'>
                    <div class='items_title_sn'>订单号: &nbsp;&nbsp;{{item.order_list[0].order_sn}}
                    </div>
                    <div class='items_title_status'>{{item.order_list[0].state_desc}}
                    </div>
                </div>
                <router-link :to="{ path: '/orderdetail',query: {id:item.order_list[0].order_id}}" style='display:block'>
                    <div class='items_img' v-for='list in item.order_list[0].extend_order_goods'>
                        <div class='img'>
                            <div class='img_box'>
                                <img src='../../assets/images/girl.jpg'>
                            </div>    
                        </div>
                        <div class='head'>
                        <p>{{list.goods_name}}</p>
                        </div>
                        <div class='price'>
                            <p class='pro_price'>{{list.goods_price}}</p>
                         
                            <p class='number'>X{{list.goods_num}}</p>
                        </div>
                    </div>
                </router-link>
                <div class='items_total'>
                    <p>共{{item.order_list.totalNumber}}件商品 合计：{{item.order_list.totalPrice + parseFloat(item.order_list[0].shipping_fee)}}元(含运费{{item.order_list[0].shipping_fee}}元)</p>
                 
                </div>
                <div class='items_option' >
                    <a href='javascript:;' :attr='button' v-on:click='clickBtn(button)' v-for='button in item.order_list.btn_state.text'>{{button}}</a>
                </div>
            </div>
            
        </div>
        <div class='content_pay' v-show='isCur===1'>
             <div class='items' v-for='item in this.orderGroupList'   v-if="item.order_list[0].state_desc==='待付款'">
                <div class='items_title'>
                    <div class='items_title_sn'>订单号: &nbsp;&nbsp;{{item.order_list[0].order_sn}}
                    </div>
                    <div class='items_title_status'>{{item.order_list[0].state_desc}}
                    </div>
                </div>
                <router-link :to="{ path: '/orderdetail',query: {id:item.order_list[0].order_id}}" style='display:block'>
                    <div class='items_img' v-for='list in item.order_list[0].extend_order_goods'>
                        <div class='img'>
                            <div class='img_box'>
                                <img src='../../assets/images/girl.jpg'>
                            </div>    
                        </div>
                        <div class='head'>
                        <p>{{list.goods_name}}</p>
                        </div>
                        <div class='price'>
                            <p class='pro_price'>{{list.goods_price}}</p>
            
                            <p class='number'>X{{list.goods_num}}</p>
                        </div>
                    </div>
                </router-link>
                <div class='items_total'>
                   <p>共{{item.order_list.totalNumber}}件商品 合计：{{item.order_list.totalPrice + parseFloat(item.order_list[0].shipping_fee)}}元(含运费{{item.order_list[0].shipping_fee}}元)</p>
                </div>
                <div class='items_option' >
                    <a href='javascript:;' v-for='button in item.order_list.btn_state.text'>{{button}}</a>
   
                </div>
            </div>
            
        </div>
        <div class='content_send' v-show='isCur===2'>
                 <div class='items' v-for='item in this.orderGroupList'   v-if="item.order_list[0].state_desc==='待发货'">
                <div class='items_title'>
                    <div class='items_title_sn'>订单号: &nbsp;&nbsp;{{item.order_list[0].order_sn}}
                    </div>
                    <div class='items_title_status'>{{item.order_list[0].state_desc}}
                    </div>
                </div>
                <router-link :to="{ path: '/orderdetail',query: {id:item.order_list[0].order_id}}" style='display:block'>
                    <div class='items_img' v-for='list in item.order_list[0].extend_order_goods'>
                        <div class='img'>
                            <div class='img_box'>
                                <img src='../../assets/images/girl.jpg'>
                            </div>    
                        </div>
                        <div class='head'>
                        <p>{{list.goods_name}}</p>
                        </div>
                        <div class='price'>
                            <p class='pro_price'>{{list.goods_price}}</p>
            
                            <p class='number'>X{{list.goods_num}}</p>
                        </div>
                    </div>
                </router-link>
                <div class='items_total'>
                   <p>共{{item.order_list.totalNumber}}件商品 合计：{{item.order_list.totalPrice + parseFloat(item.order_list[0].shipping_fee)}}元(含运费{{item.order_list[0].shipping_fee}}元)</p>
                </div>
                <div class='items_option' >
          
                        <a href='javascript:;'v-for='button in item.order_list.btn_state.text'>{{button}}</a>
    
                </div>
            </div>
        </div>
        <div class='content_receive' v-show='isCur===3'>
                 <div class='items' v-for='item in this.orderGroupList'   v-if="item.order_list[0].state_desc==='待收货'">
                <div class='items_title'>
                    <div class='items_title_sn'>订单号: &nbsp;&nbsp;{{item.order_list[0].order_sn}}
                    </div>
                    <div class='items_title_status'>{{item.order_list[0].state_desc}}
                    </div>
                </div>
                <router-link :to="{ path: '/orderdetail',query: {id:item.order_list[0].order_id}}" style='display:block'>
                    <div class='items_img' v-for='list in item.order_list[0].extend_order_goods'>
                        <div class='img'>
                            <div class='img_box'>
                                <img src='../../assets/images/girl.jpg'>
                            </div>    
                        </div>
                        <div class='head'>
                        <p>{{list.goods_name}}</p>
                        </div>
                        <div class='price'>
                            <p class='pro_price'>{{list.goods_price}}</p>
            
                            <p class='number'>X{{list.goods_num}}</p>
                        </div>
                    </div>
                </router-link>
                <div class='items_total'>
                    <p>共{{item.order_list.totalNumber}}件商品 合计：{{item.order_list.totalPrice + parseFloat(item.order_list[0].shipping_fee)}}元(含运费{{item.order_list[0].shipping_fee}}元)</p>
                </div>
                <div class='items_option' >
                    <a href='javascript:;' v-for='button in item.order_list.btn_state.text'>{{button}}</a>
   
                </div>
            </div>
        </div>
        <div class='content_evaluate' v-show='isCur===4'>
            5
        </div>
      </div>
  </div>
</template>

<script>
import {XHeader, XAddress, Group, Cell, XInput, XButton} from 'vux'
import {requestGetOrderList} from '../../api/api'
import {getSessionStore, getLocalTime} from '../../common/js/utils'
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
          {name: '全部'},
          {name: '待付款'},
          {name: '待发货'},
          {name: '待收货'},
          {name: '待评价'}
      ],
      isCur: 0,
      orderGroupList: ''
    }
  },
  mounted () {
    this.getOderList()
    console.log(getLocalTime(1177824835))
  },
  methods: {
    getOderList () {
      requestGetOrderList({key: JSON.parse(getSessionStore('user')).key}).then(data => {
        this.orderGroupList = this.orderListFormat(data.datas.order_group_list)
        console.log(this.orderGroupList)
      })
    },
    clickBtn (btnText) {
      switch (btnText) {
        case '取消订单':
          this.$router.push({path: '/cart'})
          break
        case '立即付款':
          this.$router.push({path: '/login'})
          break
        case '查看物流':
          this.$router.push({path: '/delivery'})
          break
        case '延长收货':
          this.$router.push({path: '/cart'})
          break
        case '确认收货':
          this.$router.push({path: '/cart'})
          break
        default:
          console.log(btnText)
      }
    },
    orderListFormat (objList) {
      for (let i = 0; i < objList.length; i++) {
        objList[i].order_list.totalPrice = 0
        objList[i].order_list.totalNumber = 0
        if (objList[i].order_list[0].order_state === '10') {
          objList[i].order_list.btn_state = {state: '未付款', text: ['取消订单', '立即付款']}
        } else if (objList[i].order_list[0].order_state === '20') {
          objList[i].order_list.btn_state = {state: '待发货', text: ['取消订单']}
        } else if (objList[i].order_list[0].order_state === '30') {
          objList[i].order_list.btn_state = {state: '待收货', text: ['延长收货', '查看物流', '确认收货']}
        }
        for (let j = 0; j < objList[i].order_list[0].extend_order_goods.length; j++) {
          objList[i].order_list.totalPrice += parseFloat(objList[i].order_list[0].extend_order_goods[j].goods_price)
          objList[i].order_list.totalNumber += parseFloat(objList[i].order_list[0].extend_order_goods[j].goods_num)
        }
      }
      return objList
    }
  },
  computed: {
  }
}
</script>
<style scoped>
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
.items_title{
    display:flex;
    width:100%;
    
}
.items_title .items_title_sn{
    width:70%;
    font-size:14px;
    color:#43484a;
}
.items_title_status{
    width:30%;
    font-size:14px;
    color:#ff5500;
    text-align:right;
}
.items_img{
    display:flex;
    padding:10px 0px;
    width:100%;
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
    text-align:right;
    color:#3d4244;
    border-bottom:1px solid #e7e7e7;
}
.items_option {
    display:flex;
    justify-content:flex-end;
}
.items_option a{
    margin:5px;
    border:1px solid #9d9d9d;
    border-radius:20px;
    font-size:16px;
    padding:4px 10px;
    color:#3d4244;
}
.items_option a:last-child{
    color:#ff5804;
    border:1px solid #ff5804;
}
</style>
