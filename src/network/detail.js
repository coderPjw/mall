import {
  request
} from "./request"

export function getGoodsDetail(goods_id) {
  return request({
    url: '/goods/detail',
    params: {
      goods_id
    }
  })
}