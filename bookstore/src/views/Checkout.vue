<template>
  <div class="shopping">
    <table>
      <caption>商品结算</caption>
      <tr>
        <th></th>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>金额</th>
      </tr>
<!--      之后的每一行都是v-for遍历books中的每一行-->
      <tr v-for="book in books" :key="book.id">
        <td><img :src="book.imgUrl"></td>
        <td>
          <router-link :to="{name: 'book', params: {id: book.id}}" target="_blank">
            {{book.title}}
          </router-link>
        </td>
        <td>{{book.price | currency}}</td>
        <td>{{book.quantity}}</td>
        <td>{{cartItemPrice(book.id) | currency}}</td>
      </tr>
    </table>
    <p>
      <span><button class="pay" @click="pay">付款</button></span>
      <span>总价： {{cartTotalPrice | currency}}</span>
    </p>
  </div>
</template>

<script>
import {mapGetters, mapState, mapMutations} from 'vuex'

export default {
  name: "Checkout",
  data() {
    return {}
  },
  computed: {
    ...mapState('cart', {
      books: 'items'
    }),
    ...mapGetters('cart', [
        'cartItemPrice',
        'cartTotalPrice'
    ])
  },

  methods: {
    itemPrice(price, count) {
      return price * count
    },
    ...mapMutations('cart', [
        'setCartItems'
    ]),
    pay() {
      this.setCartItems({item: []})
      this.$msgBox.show({title: '付款成功'})  //弹出消息提示框
    }
  }
}
</script>

<style scoped>

</style>