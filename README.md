<p align="center">vue-music-webapp</p>
<p align="center">
  <a href="https://github.com/javion25/vue-music-webapp"><img src="https://img.shields.io/badge/npm-v5.6.0-blue.svg?maxAge=2592000" alt=""></a>
  <a href="https://github.com/vuejs/vue-cli"><img src="https://img.shields.io/badge/vue--cli-v3.1.0-blue.svg" alt="vue-cli"></a>
  <a href="https://github.com/vuejs/vue"><img src="https://img.shields.io/badge/vue-v2.5.17-blue.svg" alt="Vue"></a>
  <a href="https://github.com/javion25/vue-music-webapp/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"></a>
</p>

# vue-music-webapp

## 前言

最近时间比较空闲，打算接触接触不同方向的前端项目，所以计划做一个移动端的音乐webapp，锻炼自己的技术能力。

色彩风格参考网易云音乐pc端样式。
<!-- 主要可能会参考模仿安卓版的QQ音乐去做一个功能简化版的qq音乐。 -->

## 技术栈

vue + vue-router + vuex + axios&jsonp + eslint + webpack 

## 目录结构

...

## 页面

...

## 功能

...

## TODO

- [x] ~~引入fastclick，解决移动端300ms点击延迟~~ （Note: As of late 2015 most mobile browsers - notably Chrome and Safari - no longer have a 300ms touch delay, so fastclick offers no benefit on newer browsers, and risks introducing bugs into your application. Consider carefully whether you really need to use it.）
- [x] 通过jsonp跨域抓取QQ音乐相关信息
- [x] 轮播图组件设计（父容器视口，子容器列表，左右拖动，dots(点击滑动)，配置项（自动轮播，循环轮播，轮播间隔...））
- [x] 服务器代理获取数据
- [x] 歌单组件（滚动...）
- [x] vue-lazyload图片懒加载（vue-lazyload源码）
- [x] loading组件
- [x] keep-live
- [x] 歌手页-歌手数据处理（添加大写字母分类、排序）
- [ ] 歌手页-title滚动fixed、左侧字母联动、字母列表点击跳转
- [ ] 移动web适配（手淘flexible）
- [ ] 联系人列表（歌手页）

## 使用

`npm i`

`npm run serve`

111