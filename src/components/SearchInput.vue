<template>
  <div>
    <input v-model="input" placeholder="请输入书名" />
    <button @click="search">搜索</button>
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
      this.searchBook();
    },
  },
};
</script>
