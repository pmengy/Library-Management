<template>
  <section style="width: 15%">
    <el-input
      size="mini"
      placeholder="请输入书名"
      v-model="bookname"
    ></el-input>
    <el-input size="mini" placeholder="请输入作者" v-model="author"></el-input>
    <el-input
      size="mini"
      placeholder="请输入出版社"
      v-model="publisher"
    ></el-input>
    <el-button type="primary" @click="addBook">添加</el-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bookname: '',
      author: '',
      publisher: '',
    };
  },

  mounted() {},

  methods: {
    addBook() {
      if (
        this.bookname.length === 0 ||
        this.author.length === 0 ||
        this.publisher.length === 0
      ) {
        return alert('Please enter a book name or author or publisher name.');
      }
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          bookname: this.bookname,
          author: this.author,
          publisher: this.publisher,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.status !== 201) {
          return alert(res.data.msg);
        } else {
          alert(res.data.msg);
          this.$nextTick(() => {
            this.$parent.initBookList();
          });
          this.bookname = '';
          this.author = '';
          this.publisher = '';
        }
      });
    },
  },
};
</script>
