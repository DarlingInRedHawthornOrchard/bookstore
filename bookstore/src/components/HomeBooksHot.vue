<template>
  <div class="bookRecommend">
    <h3>热门推荐</h3>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="'/book/' + book.id">
          {{book.title}}
          <span>{{book.price | factPrice(book.discount) | currency}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "HomeBooksHot",
  data() {
    return {
      books: []
    }
  },
  created() {
    //books这个数组从后台请求
    /*
    * 假设返回的数据结构如下：
    * [
      * {
      *   'id': 1,
      *   'title': 'VC++深入详解',
      *   'author': '孙鑫',
      *   'price': 168.0,
      *   'discount': 0.95,
      *   'imgUrl': '/api/img/vc++big.jpg',
      *   'bookConcern': null,
      *   'publishDate': null,
      *   'brief': null
      * }
    * ]
    * */
    this.axios.get('/book/hot')
    .then(response => {
      if(response.status == 200){
        this.books = response.data
      }
    })
    .catch(error => alert(error))
  }
}
</script>

<style scoped>

</style>