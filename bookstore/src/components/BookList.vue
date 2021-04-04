<template>
<!--  v-for循环渲染BookListItem-->
  <div v-for="book in list" :key="book.id">
    <BookListItem :item="book"></BookListItem>
  </div>
</template>

<script>
import BookListItem from "@/components/BookListItem";
export default {
  name: "BookList",
  props: {
    //list prop用来接收父组件传来的商品列表数据
    list: {
      type: Array,
      default: ()=> []
    }
  },
  components: {BookListItem}
}
</script>

<style scoped>

</style>