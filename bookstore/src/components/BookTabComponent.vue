<template>
  <div class="tabComponent">
<!--    v-for循环渲染tabs中的元素-->
    <button v-for="tab in tabs" :key="tab.title"
    :class="['tab-button',{active: currentTab === tab.title}]">
      {{tab.displayName}}
    </button>

    <keep-alive>
      <component :is="currentTabComponent" :content="content" class="tab"></component>
    </keep-alive>
  </div>
</template>

<script>
import BookIntroduction from "@/components/BookIntroduction";
export default {
  name: "BookTabComponent",
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentTab: 'introduction',
      tabs: [
        {title: 'introduction', displayName: '图书介绍'},
        {title: 'comment', displayName: '图书评价'},
        {title: 'qa', displayName: '图书问答'}
      ]
    }
  },
  components: {
    BookIntroduction,
    'BookComment': () => import('./BookCommentList'),
    'BookQa': () => import('./BookQa')
  },
  computed: {
    currentTabComponent: function () {
      return 'book-' + this.currentTab
    }
  }
}
</script>

<style scoped>

</style>