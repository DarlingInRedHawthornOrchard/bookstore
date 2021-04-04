<template>
  <div class="header">
    <img src="@/assets/logo.png">
<!--    把Header的子组件都挂上来-->
    <HeaderSearch></HeaderSearch>
    <HeaderCart></HeaderCart>

<!--    通过v-if/else控制用户登录前后所展示的文字-->
    <span v-if="!user">你好，请<router-link to="/login">登录</router-link>
    免费<router-link to="/register">注册</router-link>
    </span>
    <span v-else>欢迎您，{{user,username}}, <a href="javascript:;" @click="logout">退出登录</a></span>
  </div>
</template>

<script>
//导入Header的子组件
import HeaderSearch from "@/components/HeaderSearch";
import HeaderCart from "@/components/HeaderCart";
import {mapState,mapMutations} from 'vuex'
export default {
  name: "Header",
  components: {HeaderCart, HeaderSearch},
  computed: {
    //user模块带有命名空间
    //把vuex的state数据映射到计算属性里面,
    ...mapState('user', [
        //将this.user映射为 this.$store.state.user.user
        'user'
    ])
  },
  methods: {
    //单击退出登录时，触发logout方法，即调用deleteUser方法
    logout() {
      this.deleteUser();
    }
  },
  //user模块带有命名空间
  ...mapMutations('user', [
      //将this.deleteUser映射为 this.$store.commit('user/deleteUser')
      //提交user/deleteUser mutation来删除在store中存储的用户信息
      'deleteUser'
  ])
}
</script>

<style scoped>

</style>