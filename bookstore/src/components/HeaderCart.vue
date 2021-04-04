<template>
  <div class="headerCart">
    <a href="javascript:;" @click.prevent="handleCart">
      <span>购物车{{cartItemsCount}}</span>
    </a>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "HeaderCart",
  components: {},
  computed: {
    //cart模块带有命名空间
    ...mapGetters('cart', {
      //Vuex的store中定义的一个getter，得到购物车中商品的数量
      //将this.cartItemsCount映射为this.$store.getters['cart/itemsCount']
      cartItemsCount: 'itemsCount'
    })
  },
  methods: {
    handleCart() {
      this.$router.push('/cart') //单击购物车跳转至购物车页面cart
    }
  }
}
</script>

<style scoped>

</style>