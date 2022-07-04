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
    search(){
      
    }
  },
};
</script>
