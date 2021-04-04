<template>
  <div id="app">
    <Header/>
    <Menus/>
<!--    路由渲染组件-->
    <router-view></router-view>
  </div>
  <router-view/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<script>
//  导入页面级组件所共有的组件，即Header和Menus每个视图组件都拥有
import Header from "@/components/Header";
import Menus from "@/components/Menus";

export default {
  components: {
    Header,
    Menus
  }
}

</script>
