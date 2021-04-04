<template>
  <div class="booksNew">
    <h3>新书上市</h3>
    <div class="book" v-for="book in books" :key="book.id">
      <figure>
<!--        上面图片下面-->
        <router-link :to="'/book/' + book.id">
          <img :src="book.imgUrl">
          <figcaption>
            {{book.title}}
          </figcaption>
        </router-link>
      </figure>
      <p>
<!--        左边是实际价格，右边是原价-->
        {{ book.price | factPrice(book.disconnect) | currency }}
        <span>{{book.price | currency}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BooksNew"
}
</script>

<style scoped>

</style>