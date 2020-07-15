<template>
    <div id="home">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for=" item in img" :key="item.img"><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/HomeContainer/NewList">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"></span>
                    <div class="mui-media-body">新闻</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/HomeContainer/imgList">
                    <span class="mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/HomeContainer/goodsList">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                    <div class="mui-media-body">购物</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import axios from 'axios';
    export default {
        name: "home",
        data(){
            return{
                img:[],
                success:"请求成功",
                err:"请求失败",
            }
        },
        created(){
            axios
                .get('/imgUrl.json')
                .then(response => {
                    this.img = response.data;
                    console.log(this.img);
                })
                .catch((error) => { // 请求失败处理
                    Toast(this.err);
                    console.log(error);
                });
            },
    }
</script>

<style scoped type="text/css" lang="less">
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: yellow;
            }
            &:nth-child(2){
                background-color: #2ac845;
            }
            &:nth-child(3){
                background-color: blueviolet;
            }
            img{
                height: 100%;
                width: 100%;
            }
        }
    }
</style>
