<template>
  <div>
<!--    如果loading为true的话，渲染Loading组件，否则挂载title-->
    <Loading v-if="loading"></Loading>
    <h3 v-else>{{title}}</h3>
<!--    如果books.length不为空，则把books赋给商品列表list-->
    <BookList :list="books" v-if="books.length"></BookList>
    <h1>{{message}}</h1>
<!--    使用Pagination组件实现分页功能-->
    <el-pagination
    :hide-on-single-page="true"
    @size-change="handleSizeChange"
    :page-sizes="[2, 10, 20, 40]"
    @current-change="handleCurrentChange"
    :current-page="pageNum"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
    </el-pagination>
<!--    上面的注释:
    :hide-on-single-page="true"                     //当只有一页时隐藏分页
    @size-change="handleSizeChange"                 //当pageSize改变时触发
    :page-sizes="[2, 10, 20, 40]"                   //设置每页条数的选项，可以每页显示2条、10条..
    @current-change="handleCurrentChange"           //当前页面发生改变触发
    :current-page="pageNum"                         //当前页数
    :page-size="pageSize"                           //每页显示的条数
    layout="total, sizes, prev, pager, next, jumper"//设置组件布局
    :total="total"                                  //总条数
-->
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import BookList from "@/components/BookList";
import Book from "@/views/Book";

export default {
  name: "Books",
  data() {
    return {
      title: '',
      books: [],
      message: '',
      loading: true,
      //分页组件
      total: 5, //总条数
      pageNum: 1, //当前页数
      pageSize: 2 //每页显示的条数
    }
  },
  //监听页面进入、修改和离开的功能
  beforeRouteEnter(to,from,next) {
    next(vm => {
      vm.title = to.meta.title
      let url = vm.setRequestUrl(to.fullPath)
      vm.getBooks(url,vm.pageNum, vm.pageSize)
      // next()
    })
  },
  beforeRouteUpdate(to,from,next){
    let url = this.setRequestHUrl(to.fullPath)
    this.getBooks(url, this.pageNum, this.pageSize)
    next()
  },
  components: {Book, BookList, Loading},
  methods: {
    getBooks(url) {
      this.message = ''
      //get请求增加两个参数pageNum和pageSize
      this.axios.get(url, {params: {pageNum, pageSize}})
      .then(response => {
        if(response.data.code == 200) {
          this.loading = false
          this.books = response.data.data
          this.total = response.data.total
          if(this.books.length === 0){
            if(this.$route.name === 'category'){
              this.message = '当前分类下没有图书'
            }else{
              this.message = '没有搜索到匹配的图书'
            }
          }
        }
      })
      .catch(error => alert(error))
    },
    //动态设置服务端数据接口的请求URL
    setRequestUrl(path) {
      let url = path
      if(path.indexOf('/category') != -1) {
        url = '/book' + url + '/page'
      }
      return url
    },
    //当修改了每页显示的条数时，重新请求数据
    handleSizeChange(selectedSize) {
      this.pageSize = selectedSize
      let url = this.setRequestUrl(this.$route.fullPath)
      this.getBooks(url, this.pageNum, this.pageSize)
    },
    //当用户切换而选择了某一页时，重新请求数据
    handleCurrentChange(currentPage) {
      this.pageNum = currentPage
      let url = this.setRequestUrl(this.$route.fullPath)
      this.getBooks(url, this.pageNum, this.pageSize)
    }
  }
}
</script>

<style scoped>

</style>