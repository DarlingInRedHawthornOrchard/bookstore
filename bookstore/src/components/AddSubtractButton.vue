<template>
  <div class="addSubtractButton">
    <input v-model="quantity" type="number">
    <div>
      <a class="add" href="javascript:;" @click="handleAdd">+</a>
      <a class="sub" href="javascript:;" @click="handleSubstract"
      :class="{disabled: quantity === 0, actived: quantity > 0}">
        -
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddSubtractButton",
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    //处理加 减操作
    handleAdd() {
      this.quantity++
      this.$emit('updateQuantity', this.quantity)
    },
    handleSubstract() {
      this.quantity--
      this.$emit('updateQuantity', this.quantity)
    }
  }
}
</script>

<style scoped>

</style>