<template>
  <div>
    <h3></h3>
<!--    循环渲染每个comments中每个item-->
    <BookCommentListItem v-for="comment in comments"
    :item="comment" :key="comment.id"></BookCommentListItem>
  </div>
</template>

<script>
import BookCommentListItem from "@/components/BookCommentListItem";
export default {
  name: "BookCommentList",
  data() {
    return {
      comments: [],
      message: ''
    }
  },
  components: {BookCommentListItem},
  //在created生命周期钩子中向服务端发起请求
  /*
  * 假设返回的数据结构如下：
  * [
  *   {
  *     'id': 1,
  *     'content': '本书是Vue.js详解版',
  *     'commentDate': '2019-11-12T00:14:30',
  *     'username': '张三',
  *     'book': 'null
  *   }
  * ]
  * */
  created() {
    this.message = ''
    let url = this.$route.path + '/comment'
    this.axios.get(url)
    .then(response => {
      if(response.status == 200){
        this.comments = response.data
        if(this.comments.length == 0){
          this.message = '当前没有任何评论'
        }
      }
    })
    .catch(error => alert(error))
  }
}
</script>

<style scoped>

</style>