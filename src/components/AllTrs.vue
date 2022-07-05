<template>
  <tbody>
    <tr>
      <td>{{ bookList.id }}</td>
      <td>{{ bookList.bookname }}</td>
      <td>{{ bookList.author }}</td>
      <td>{{ bookList.publisher }}</td>
      <td>
        <el-button @click="del(bookList.id)" type="danger">删除</el-button>
        <el-popover
          placement="right"
          title="图书信息"
          width="200"
          trigger="click"
          :content="info"
        >
          <el-button slot="reference" @click="getInfo(bookList.id)"
            >详情</el-button
          >
        </el-popover>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'MyTr',
  data() {
    return {
      info: '',
    };
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
      this.$nextTick(this.$parent.initBookList());
    },
    getInfo(id) {
      this.$axios({
        url: '/api/getbooks',
        params: { id },
      }).then((res) => {
        // this.info = JSON.stringify(res.data.data[0]);
        // console.log(res.data.data[0]);
        this.info=`书名: ${res.data.data[0].bookname}
        作者: ${res.data.data[0].author}
        出版社: ${res.data.data[0].author}
        `
      });
    },
  },
};
</script>
