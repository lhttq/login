//引入vue
import Vue from 'vue'
import App from './App.vue'
//导入路由相关组件
import VueRouter from "vue-router"
//导入mui相关组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//导入layui相关样式
import 'layui-src/build/css/layui.mobile.css';

import moment from 'moment';
//导入axios模块
import axios from 'axios';
//导入路由模块
import router from "@/router";
//导入mintUI相关组件
import mintUi from 'mint-ui'
// import { Header,Swipe, SwipeItem,Button} from 'mint-ui';
import 'mint-ui/lib/style.css'
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// 引入vue-photoswipe模块
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(mintUi);
//vue跨域配置
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api';  //关键代码
Vue.config.productionTip = false;
//定义全局的时间过滤器
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(pattern);
});
new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
