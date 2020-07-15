<template>
    <div id="detail">
        <h3 class="title">New Detail---{{this.id}}</h3>
        <p class="content"><span>发表时间：</span><span>点击次数：</span></p>
        <p></p>
        <component-box></component-box>
    </div>
</template>

<script>
    import comment from "@/components/tools/comment";

    export default {
        name: "newsDetail",
        data(){
            return{
                id:this.$route.params.id,
            }
    },
        components: {
            'component-box':comment,
        },
    }
</script>

<style type="text/css" lang="less" scoped>
    #detail {
        background-color: #f3f3f3;
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
        }
        .content {
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
