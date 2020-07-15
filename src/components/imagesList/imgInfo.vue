<template>
    <div class="imgInfo">
        <div class="title">
            <h3>标题</h3>
            <p>
                <span>发布时间：2020年7月14日</span>
                <span>点击次数：0次</span>
            </p>
        </div>
        <hr>
<!--        缩略图-->
        <div class="thumbnail">
            <vue-preview :slides="imgs" @close="handleClose" :fallback="'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg'"></vue-preview>
        </div>
<!--        内容-->
        <div class="pody">
            <p>这里时内容部分</p>
        </div>
<!--        评论区-->
        <div class="comment">
            <component-box></component-box>
        </div>
    </div>
</template>

<script>
    import comment from "@/components/tools/comment";
    import axios from "axios";
    import {Toast} from "mint-ui";
    export default {
        name: "imgInfo",
        data(){
            return{
                imgs:[],
            }
        },
        components: {
            'component-box':comment,
        },
        created(){
          this.getImg();
        },
        methods:{
            handleClose () {
                console.log('close event')
            },
            getImg:function () {
                axios
                    .get('/img.json').then((response)=>{
                    this.imgs = response.data;
                    this.imgs.forEach(item =>{
                        item.w = 600;
                        item.h = 400;
                        item.src = item.imgUrl;
                        item.msrc = item.imgUrl;
                    })
                    console.log(this.imgs);
                }).catch((err)=>{
                    console.log(err);
                    Toast("获取图片失败");
                })
            }
        }
    }
</script>

<style type="text/css" lang="less">
    .imgInfo{
        .title{
            h3{
                font-size: 20px;
                text-align: center;
            }
            p{
                color: #66CCFF;
                display: flex;
                justify-content: space-between;
            }
        }
        .thumbnail{
            div{
                div{
                    figure{
                        display: inline-block;
                        margin: 4px;
                        img{
                            height: 80px;
                            width: 80px;
                        }
                    }
                }
            }

        }
    }
</style>
