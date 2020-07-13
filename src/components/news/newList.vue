<template>
    <div id="newlist">
        <ul class="mui-table-view">
            <li v-for="n in news" :key="n.id" class="mui-table-view-cell mui-media">
                <router-link :to="'/HomeContainer/newsDetail/' + n.id">
                    <img class="mui-media-object mui-pull-left" :src="n.imgUrl">
                    <div class="mui-media-body">
                         <h1>{{n.title}}</h1>
                        <p class='mui-ellipsis'><span>发布时间：{{n.time | dateFormat }}</span>
                        <span>点击：{{n.click}}</span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    import {Toast} from "mint-ui";
    export default {
        name: "newList",
        data(){
            return{
                news:[],
                success:"请求成功",
                err:"请求失败",
            }
        },
        created(){
            axios
                .get('/news.json')
                .then(response => {
                    this.news = response.data.msg;
                    console.log(this.news);

                })
                .catch((error) => { // 请求失败处理
                    Toast(this.err);
                    console.log(error);
                });
        },

    }
</script>

<style scoped type="text/css" lang="less">
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }

    }
</style>
