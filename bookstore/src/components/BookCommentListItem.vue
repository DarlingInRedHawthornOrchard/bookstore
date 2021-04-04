<template>
  <div class="bookCommentListItem">
    <div>
      <span>{{item.username()}}</span>
<!--      过滤器formatTime,去除日期中的T, 2019-10-03T09:15:09-->
      <span>{{item.commentDate | formatTime}}</span>
    </div>
    <div>{{item.content}}</div>
  </div>
</template>

<script>
export default {
  name: "BookCommentListItem",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>