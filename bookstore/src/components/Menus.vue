<template>
  <div class="menus">
    <ul>
<!--      router-view均在App.vue中指定-->
      <li>
        <router-link to="/home"></router-link>
      </li>
      <li>
        <router-link to="/newBooks">新书</router-link>
      </li>
<!--      下面三个与home和newBooks同理-->
      <li>
        <a href="javascript:;">特价书</a>
      </li>
      <li>
        <a href="javascipt:;">教材</a>
      </li>
      <li>
        <a href="javascript:;">视听教程</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menus"
}
</script>

<style scoped>

</style>