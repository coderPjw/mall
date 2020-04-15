import {
  request
} from 'network/request.js'

export function getHomeMultiData() {
  return request({
    url: '/home/swiperdata'
  })
}

export function getHomeNav() {
  return request({
    url: '/home/catitems',
  })
}

export function getHomeFloor() {
  return request({
    url: '/home/floordata',
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/goods/search',
    params: {
      cid: type,
      pagenum: page
    }
  })
}