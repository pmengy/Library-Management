<template>
  <tbody>
    <tr>
      <td>{{ bookList.id }}</td>
      <td>{{ bookList.bookname }}</td>
      <td>{{ bookList.author }}</td>
      <td>{{ bookList.publisher }}</td>
      <td><button @click="del(bookList.id)">删除</button></td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'MyTr',
  data() {
    return {};
  },
  props: {
    bookList: {
      type: Object,
      default: () => ({}),
    },
  },

  mounted() {},

  methods: {
    delBook(id) {
      this.$axios({
        url: '/api/delbook',
        params: { id },
      }).then((res) => {
        if (res.data.code !== 200) {
          return alert(res.data.msg);
        } else {
          alert(res.data.msg);
        }
      });
    },
    del(id) {
      this.delBook(id);
      this.$parent.initBookList();
    },
  },
};
</script>

