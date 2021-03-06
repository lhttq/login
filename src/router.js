import VueRouter from "vue-router";
import HomeContainer from "@/components/HomeContainer";
import MemberContainer from "@/components/MemberContainer";
import CartContainer from "@/components/CartContainer";
import SearchContainer from "@/components/SearchContainer";
import newList from "@/components/news/newList";
import imgList from "@/components/imagesList/imgList";
import newsDetail from "@/components/news/newsDetail";
import imgInfo from "@/components/imagesList/imgInfo";
import goodsList from "@/components/goods/goodsList";

var router = new VueRouter({
    routes:[
        {path:'/',component: HomeContainer},
        {path:'/HomeContainer',component:HomeContainer},
        {path:'/MemberContainer',component:MemberContainer},
        {path: '/CartContainer',component: CartContainer},
        {path: '/SearchContainer',component: SearchContainer},
        {path:'/HomeContainer/NewList',component:newList},
        {path:'/HomeContainer/imgList',component:imgList},
        {path: '/HomeContainer/newsDetail/:id',component: newsDetail},
        {path: '/HomeContainer/imgList',component: imgList},
        {path: '/HomeContainer/imgInfo',component: imgInfo},
        {path: '/HomeContainer/goodsList',component: goodsList},
    ],
    linkActiveClass:'mui-active',
});
export default router
