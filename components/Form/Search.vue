<template>
  <div class="search" @click="onBodyClick">
    <input @keydown.enter="onSearchSubmit" type="text" ref="search-input" placeholder="Search" v-model="search">
    <font-awesome-icon icon="search" class="icon" @click="onSearchSubmit"/>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: '',
    }
  },
  methods: {
    onBodyClick() {
      this.$refs['search-input'].focus();
    },
    onSearchSubmit() {
      this.$emit('search', this.search);
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  .icon {
    &:hover {
      color: #E0750CF7;
    }

    margin-right: 10px;
  }

  margin-top: 8px;
  cursor: pointer;
  padding: 5px 5px;
  border-radius: 40px;
  height: 40px;
  width: 350px;
  display: flex;
  align-items: center;
  background: #ffffff;

  input {
    margin-left: 10px;
    width: 100%;
    border: none;

    &:active, &:focus-visible {
      border: none;
      outline: none;
    }
  }
}
</style>
