import {
  request
} from "./request"

export function getLists(cid, page, query) {
  return request({
    url: '/goods/search',
    params: {
      cid,
      pagenum: page,
      query
    }
  })
}