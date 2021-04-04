<template>
  <div>
    <p>{{content}}</p>
  </div>
</template>

<script>
//图书介绍，用于接收父组件传来的图书内容
export default {
  name: "BookIntroduction",
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>