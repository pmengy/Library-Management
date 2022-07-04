<template>
  <tbody>
    <tr>
      <td>{{ bookList.id }}</td>
      <td>{{ bookList.name }}</td>
      <td>{{ bookList.author }}</td>
      <td>{{ bookList.publisher }}</td>
      <td><button>删除</button></td>
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

  methods: {},
};
</script>

<style lang="scss" scoped></style>
