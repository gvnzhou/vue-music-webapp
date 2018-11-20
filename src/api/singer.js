import axios from "axios";
import { commonParams } from "./config"

export function getSinger() {
  const url = ''
  const data = Object.assign({}, commonParams, {
    
  })

  return axios.get(url, {
    params: data
  })
}