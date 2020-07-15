<template>
    <div class="goodlist">
       <div class="goods-item">
           <img src="https://img12.360buyimg.com/n1/s450x450_jfs/t1/138555/15/2677/576408/5f082d28Effd5fd5d/181e4288450ac029.png" alt="">
           <h1 class="title">小米10</h1>
           <div class="goods-info">
               <p class="price">
                   <span class="new">￥999</span>
                   <span class="old">￥1299</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩余60件</span>
               </p>
           </div>
       </div>
        <div class="goods-item">
            <img src="https://img12.360buyimg.com/n1/s450x450_jfs/t1/138555/15/2677/576408/5f082d28Effd5fd5d/181e4288450ac029.png" alt="">
            <h1 class="title">小米10 5G游戏手机【至高12期分期0首付】 蜜桃金 8G+256G【白条12期0首付】</h1>
            <div class="goods-info">
                <p class="price">
                    <span class="new">￥999</span>
                    <span class="old">￥1299</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img12.360buyimg.com/n1/s450x450_jfs/t1/138555/15/2677/576408/5f082d28Effd5fd5d/181e4288450ac029.png" alt="">
            <h1 class="title">小米10</h1>
            <div class="goods-info">
                <p class="price">
                    <span class="new">￥999</span>
                    <span class="old">￥1299</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodsList"
    }
</script>

<style type="text/css" lang="less" scoped>
    .goodlist{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item{
            margin-top: 7px;
            width: 49%;
            border: 1px solid #d0d0d0;
            box-shadow: 2px 2px 15px #ccc;
            min-height: 236px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%;
            }
            .title{
                font-size: 16px;
            }
            .goods-info{
                font-size: 14px;
                background-color: #ccc;
                .new{
                    color: #df3f32;
                    font-weight: bold;
                }
                .old{
                    font-size: 12px;
                    text-decoration: line-through;
                    margin: 10px;
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
