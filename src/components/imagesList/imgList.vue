<template>
    <div class="imgList">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a v-for="item in imgs" :key="item.id" :class="['mui-control-item',item.id==0?'mui-active':'']" to="/HomeContainer/imgList" data-wid="tab-top-subpage-1.html">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <ul>
            <router-link v-for="item in list" :key="item.id" to="/HomeContainer/imgInfo" tag="li">
                <img class="img" v-lazy="item.imgUrl">
                <div class="info">
                    <div class="info-title">
                        <h1>{{item.title}}</h1>
                    </div>
                    <div class="info-body">
                        {{item.abstract}}
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'
    import axios from "axios";
    import {Toast} from "mint-ui";
    export default {
        name: "imgList",
        data(){
            return{
                imgs:[],
                list:[]
            }
        },
        created(){
           this.getImgClass();
            this.getImg();
        },
        mounted () {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getImgClass:function() {
                axios
                    .get('/classily.json').then((response)=>{
                        this.imgs = response.data;
                    console.log(this.imgs);
                }).catch((err)=>{
                    console.log(err);
                    Toast("请求失败");
                });
            },
            getImg:function () {
                axios
                    .get('/img.json').then((response)=>{
                        this.list = response.data;
                    console.log(this.list);
                }).catch((err)=>{
                    console.log(err);
                    Toast("获取图片失败");
                })
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    *{
        touch-action: pan-y;
    }

    .imgList{
        .mui-slider{
            z-index: 0;
        }
        ul{
            list-style: none;
            margin: 10px;
            li{
                background-color: #ccc;
                text-align: center;
                margin: 10px;
                box-shadow: 0 0 10px #ccc;
                position: relative;
                .img{
                    width: 100%;
                    height: 300px;
                    vertical-align: middle;
                }
                image[lazy="loading"] {
                    width: 40px;
                    height: 300px;
                    margin: auto;
                }
                .info{
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                    background-color: rgba(0, 0, 0,.5);
                    color: white;
                    max-height: 84px;
                    text-align: left;
                    z-index: 0;
                    .info-title{
                        h1{
                            font-size: 16px;
                        }
                    }
                    .info-body{
                       font-size: 14px;
                    }
                }
            }
        }
    }
</style>
