<template>
  <div style="padding: 20px">
    <div style="display: flex">
      <SearchBook></SearchBook>
      <AddFormVue></AddFormVue>
    </div>
    <table class="pure-table pure-table-bordered">
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
      this.bookList = res.data;
    },
  },
  components: { AllTrs, SearchBook, AddFormVue },
  created() {
    this.initBookList();
  },
};
</script>
<style>
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 10px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

.pure-table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;
}

.pure-table caption {
  color: #000;
  font: italic 85%/1 arial, sans-serif;
  padding: 1em 0;
  text-align: center;
}

.pure-table td,
.pure-table th {
  border-left: 1px solid #cbcbcb;
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: 0.5em 1em;
}

.pure-table thead {
  background-color: #e0e0e0;
  color: #000;
  text-align: left;
  vertical-align: bottom;
}

.pure-table td {
  background-color: transparent;
}

.pure-table-bordered td {
  border-bottom: 1px solid #cbcbcb;
}

.pure-table-bordered tbody > tr:last-child > td {
  border-bottom-width: 0;
}
el-input {
  margin-right: 10px !important;
}
</style>
