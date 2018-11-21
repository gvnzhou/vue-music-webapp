import axios from "axios";
import { commonParams, options } from "./config"
import jsonp from '@/common/jsonp'

export function getSinger() {
  const url = '/cgi-bin/musicu.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    data: JSON.stringify({"comm":{"ct":24,"cv":10000},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}})
  })

  return axios(url, {
    params: data
  })
}