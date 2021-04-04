<template>
  <div class="category">
    <h3>图书分类</h3>
    <div v-for="category in categories" :key="category.id"></div>
    <h5>{{category.name}}</h5>
<!--    children里面每个元素为child,展示child.id-->
    <router-link v-for="child in category.children" :key="child.id" :to="'/category' + child.id">
      {{child.name}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeCategory",
  data() {
    return {
      categories: []
    };
  },
  //在created生命周期钩子中向服务器请求所有分类数据
  //服务端提供的该数据接口如下: http://111.229.37.167/api/category
  /*
  * 假设接口返回的数据结构是categories：
  * [
  *  {
  *    'id': 1,
  *    'name': 'Java EE',
  *    'root': true,
  *    'parentId': null,
  *    'children': [
  *        {
  *          'id': 3,
        *    'name': 'Servelet',
        *    'root': false,
        *    'parentId': 1,
        *    'children': []
  *        }
  *    ]
  *  }
  * ]
  * */
  created() {
    this.axios.get('/category')
    .then(response => {
      if(response.status == 200) {
        this.categories = response.data
      }
    })
    .catch(error => {alert(error)})
  }
}
</script>

<style scoped>

</style>