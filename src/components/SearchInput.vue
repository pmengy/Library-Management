<template>
  <div style="width: 15% margin: 10px;">
    <el-input v-model="input" placeholder="请输入书名" size="mini"></el-input>
    <el-button type="primary" @click="search" size="mini">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: 'MyInput',

  data() {
    return {
      input: '',
    };
  },

  mounted() {},

  methods: {
    searchBook() {
      this.$axios({
        url: '/api/getbooks',
        params: {
          bookname: this.input,
        },
      }).then((res) => {
        if (res.data.status !== 200) {
          return alert(res.data.msg);
        } else {
          this.$parent.bookList = res.data.data;
        }
      });
    },
    search() {
      if (this.input.length === 0) {
        return alert('Empty input');
      }
      this.searchBook();
    },
  },
};
</script>
