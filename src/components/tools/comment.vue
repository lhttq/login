<template>
    <div id="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea class="textarea" placeholder="尽情吐槽吧(最多评论120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="item in comment" :key="item.id">
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
                comment:[],
            }
        },
        created(){
            axios
                .get('/comment.json')
                .then(response => {
                    this.comment = response.data;
                    console.log(this.comment);

                })
                .catch((error) => { // 请求失败处理
                    Toast(this.err);
                    console.log(error);
                });
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
