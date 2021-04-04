<template>
  <div class="message">
    <h2>{{title}}</h2>
    <div>
      <div class="ok" @click="handleOk">{{ok}}</div>
      <div class="cancel" @click="handleCancel" v-if="cancel">{{cancel}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: [''],
  data() {
    return {
      //3个数据属性都没有值，稍后会给他们设置默认值
      title: '',
      ok: '',
      cancel: ''
    }
  }
}
</script>

<style scoped>

</style>