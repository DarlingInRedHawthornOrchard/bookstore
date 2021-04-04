<template>
  <div class="book">
    <img :src="book.bingImgUrl">
    <div>
      <div class="bookInfo">
        <h3>{{book.title}}</h3>
        <p>{{book.slogan}}</p>
        <p>
          <span>作者： {{book.author}}</span>
          <span>出版社： {{book.bookConcern}}</span>
          <span>出版日期： {{book.publishDate}}</span>
        </p>
        <p>
          <span class="factPrice">
            {{book.price | factPrice(book.discount) | currency}}
          </span>
          <span class="discount">
            [{{book.discount | formatDiscount}}]
          </span>
          <span>[ 定价 <i class="price">{{book.price | currency}}</i> ]</span>
        </p>
      </div>
      <div class="addCart">
        <AddSubtractButton :quantity="quantity" @updateQuantity="handleUpdate"></AddSubtractButton>
        <button class="addCartButton" @click="addCart(book)">加入购物车</button>
      </div>
    </div>
    <BookTabComponent :content="book.detail"></BookTabComponent>
  </div>
</template>

<script>
import AddSubtractButton from "@/components/AddSubtractButton";
import BookTabComponent from "@/components/BookTabComponent";
import {mapActions} from 'vuex'
export default {
  name: "Book",
  data() {
    return {
      book: {},
      quantity: 0
    }
  },
  components: {BookTabComponent, AddSubtractButton},
  created() {
    this.axios.get(this.$route.fullPath)
    .then(response => {
      if(response.status == 200){
        this.book = response.data
      }
    })
    .catch(error => {alert(error)})
  },
  methods: {
    //子组件AddSubtractButton的自定义事件updateQuantity的处理函数
    handleUpdate(value) {
      this.quantity = value
    },
    factPrice(price,discount) {
      return price * discount
    },
    addCart(book) {
      let quantity = this.quantity
      if(quantity === 0){
        quantity = 1
      }
      let newItem = {...book, price: this.factPrice(book.price, book.disconnect)}
      this.addProductToCart({...newItem, quantity})
      this.$router.push('/cart')  //嗲用了addCart方法，跳转至购物车
    },
    ...mapActions('cart', [
        //将this.addProductToCart映射为this.$store.dispath('cart/addProductToCart')
        'addProductToCart'
    ])
  },
  filters: {
    //格式化折扣数据
    formatDiscount(value) {
      if(value) {
        let strDigits = value.toString().substring(2)
        strDigits += '折' //把value=0.95 过滤为 '95折',从下标2开始
        return strDigits
      }else{
        return value
      }
    }
  }
}
</script>

<style scoped>

</style>