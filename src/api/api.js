import axios from 'axios'
import qs from 'qs'

let base = ''

const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }

export const requestLogin = params => { return axios.post(`${base}/mobile/index.php?act=login`, qs.stringify(params), config).then(res => res.data) }

export const requestGetHomeGoods = params => { return axios.get(`${base}/v1/home/goods`, params).then(res => res.data) }

export const requestGetGoodsComment = params => { return axios.get(`${base}/v1/home/goods/` + params + `/comment`, params).then(res => res.data) }

export const requestGetGoodsInfo = params => { return axios.get(`${base}/mobile/index.php?act=goods&op=goods_detail&goods_id=38` + params, params).then(res => res.data) }

export const requestGetGoodsDetail = params => { return axios.get(`${base}/mobile/index.php?act=goods&op=goods_detail&goods_id=38`, params).then(res => res.data) }

export const requestGetOrderList = params => { return axios.post(`${base}/mobile/index.php?act=member_order&op=order_list&page=10&curpage=1&` + qs.stringify(params)).then(res => res.data) }

export const requestGetOrderDetail = params => { return axios.post(`${base}/mobile/index.php?act=member_order&op=order_info&` + qs.stringify(params)).then(res => res.data) }
