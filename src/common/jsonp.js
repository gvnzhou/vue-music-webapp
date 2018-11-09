import jsonp from 'jsonp'

export default function (url, data, opts) {
  return new Promise(function (resolve, reject) {
    // 拼接url
    url += (url.indexOf('?') < 0 ? '?' : '&') +  dataSpread(data)
    
    jsonp(url, opts, function (err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

function dataSpread (data) {
  let str = ''
  Object.keys(data).forEach(key => {
    let value = data[key] !== undefined ? data[key] : ''
    str += `&${key}=${encodeURIComponent(value)}`
  })
  return str ? str.substring(1) : ''
}