<template>
    <div id="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea v-model="comment" class="textarea" placeholder="尽情吐槽吧(最多评论120字)" maxlength="120"></textarea>
        <mt-button @click="setComment" type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="item in comments" :key="item.id">
                <div class="cmt-title">
                    <span>{{item.title}}</span>
                    <span>发表时间：{{item.time | dateFormat}}</span>
                </div>
                <div class="cmt-body">
                    <p>{{item.body}}</p>
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    import axios from "axios";
    import {Toast} from "mint-ui";

    export default {
        name: "comment",
        data(){
            return{
                comment:'',
                comments:[],
            }
        },
        created(){
            this.getComment();
        },
        methods:{
            getComment:function () {
                axios
                    .get('/comment.json')
                    .then(response => {
                        this.comments = response.data;
                        console.log(this.comments);

                    })
                    .catch((error) => { // 请求失败处理
                        Toast(this.err);
                        console.log(error);
                    });
            },
            setComment:function () {
                if(this.comment == ""){
                    Toast('评论不能为空');
                    return;
                }
                let comment = {
                    "id":this.comments[this.comments.length - 1].id++,
                    "title": "第一楼：匿名用户",
                    "time":new Date(),
                    "body": this.comment
                }
                this.comments.unshift(comment);
                axios
                    .post('/setComment.json',this.comments)
                    .then(response => {
                        this.comments = response.data;
                        console.log(this.comments);
                    })
                    .catch((error) => { // 请求失败处理
                        Toast(this.err);
                        console.log(error);
                    });
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    #comment{
        .cmt-list{
            padding: 4px;
            .cmt-item{
                .cmt-title{
                    background-color: #ccc;
                    font-size: 16px;
                    line-height: 30px;
                }
                .cmt-body{
                    p{
                        font-size: 14px;
                        line-height: 30px;
                        text-indent: 2rem;

                    }
                }
            }
        }

    }

</style>
