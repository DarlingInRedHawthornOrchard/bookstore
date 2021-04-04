<template>
  <div class="home">
    <HomeCategory></HomeCategory>
    <HomeScrollPic></HomeScrollPic>
    <HomeBooksHot></HomeBooksHot>
    <BooksNew></BooksNew>
  </div>
</template>

<script>
import HomeCategory from "@/components/HomeCategory";
import HomeScrollPic from "@/components/HomeScrollPic";
import HomeBooksHot from "@/components/HomeBooksHot";
import BooksNew from "@/components/BooksNew";
export default {
name: "Home",
  components: {BooksNew, HomeBooksHot, HomeScrollPic, HomeCategory}
}
</script>

<style scoped>

</style>