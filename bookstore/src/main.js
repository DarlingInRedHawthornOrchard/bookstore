//全局挂载
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
//路由以及状态管理
import router from './router'
import store from './store'

//axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios) //安装插件

//全局注册过滤器
import {currency,factPrice} from "@/utils/filters";
Vue.filter('currency', currency)
Vue.filter('factPrice', factPrice)
Vue.filter('formatTime', formatTime)

//引入vue-msgbox插件
import msgBox from './plugin/vue-msgbox'
Vue.use(msgBox) //安装插件

//引入Pagination组件和所需样式，并安装该插件
import {Pagination} from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Pagination)

axios.defaults.baseURL = '/api'

// createApp(App).use(store).use(router).mount('#app')

//直接new的话实例默认是vm
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')