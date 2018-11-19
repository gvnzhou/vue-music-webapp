// vue.config.js
module.exports = {
  devServer: {
    // proxy: 'https://c.y.qq.com'
    proxy: {
      '/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg': {
        target: 'https://c.y.qq.com'
      },
      '/cgi-bin/musicu.fcg': {
        target: 'https://u.y.qq.com'
      }
    }
  }
}