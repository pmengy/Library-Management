<template>
  <div>
    <SearchBook></SearchBook>
    <AddFormVue></AddFormVue>
    <table>
      <thead>
        <th>序号</th>
        <th>书名</th>
        <th>作者</th>
        <th>出版社</th>
        <th>操作</th>
      </thead>
      <AllTrs v-for="item in bookList" :key="item.id" :bookList="item"></AllTrs>
    </table>
  </div>
</template>

<script>
import AllTrs from './components/AllTrs.vue';
import SearchBook from './components/SearchInput.vue';
import AddFormVue from './components/AddForm.vue';
export default {
  data() {
    return {
      bookList: [],
    };
  },
  methods: {
    async initBookList() {
      const { data: res } = await this.$axios.get('/api/getbooks');
      console.log(res.data);
      this.bookList = res.data;
    },
  },
  components: { AllTrs, SearchBook, AddFormVue },
  created() {
    this.initBookList();
  },
};
</script>
