<template>
  <div class="bookListItem">
    <div>
      <img :src="item.bigImgUrl">
    </div>
    <p class="title">
<!--      target='_blank' 表示开启一个新的标签页打开目标页面，target属性是a标签独有-->
      <router-link :to="{name: 'book', params: {id: item.id}}" target="_blank">
        {{item.title}}
      </router-link>
    </p>
    <p>
      <span>{{item.author}}</span>
      <span>{{item.publishDate}}</span>
      <span>{{item.bookConcern}}</span>
    </p>
    <p>
      {{item.brief}}
    </p>
    <p>
      <button class="addCarButton" @click="addCartItem(item)">
        加入购物车
      </button>
    </p>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
export default {
  name: "BookListItem",
  props: {
    item: {
      type: Object,
      default: () => {

      }
    }
  },
  methods: {
    ...mapActions('cart', {
      //将this.addCart()映射为this.$store.commit('cart/addProductToCart')
      addCart: 'addProductToCart'
    }),
    //只显示实际价格
    factPrice(price,discount) {
      return price * discount
    },
    addCartItem(item) {
      let quantity = 1
      let newItem = {
        ...item,
        price: this.factPrice(item.price, item.disconnect),
        quantity
      }
      this.addCart(newItem) //添加商品至购物车
      this.$router.push('/cart')  //添加完毕后，路由跳转到购物车页面
    }
  }
}
</script>

<style scoped>

</style>