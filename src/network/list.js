import {
  request
} from "./request"

export function getLists(cid, page) {
  return request({
    url: '/goods/search',
    params: {
      cid,
      pagenum: page
    }
  })
}