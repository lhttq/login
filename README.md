# 类新闻类移动端网页应用
### 开始
```
//运行
npm run serve
//编译
npm run build
```
### 使用库
```
vue
vue-router
//异步请求
axios
//缩略图处理
vue-preview
//ui库
mui
mintUI
layui
//时间日期处理类
moment
```
### 项目页面介绍
- 首页
    * 使用mui的header 和 底部tab
        + 底部tab除首页外其他页面为空
    * 使用mintUI的轮播图
    * 使用mui的九宫格布局
        + 新闻页面
            * 使用mui的列表
            * 使用moment的时间格式化
            * 新闻详情页面
                + 使用自定义的评论组件
        + 图片页面
            * 使用mui的分类滑动选项卡
            * 使用mui的图片懒加载
            * 图片详情
                + 使用vue-preview的缩略图
                + 使用自定义的图片组件
        + 商品页面
            * 自定义的商品详情页面
            * 使用弹性盒模型进行总体布局
---
## 注
该工程所有数据来原是自己写的node提供，[node工程地址](https://github.com/lhttq/hello)
### 由于node属于入门水平，代码仅仅提供数据使用
做了一些改变
