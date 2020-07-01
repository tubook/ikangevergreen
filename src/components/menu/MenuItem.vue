<template>
  <div>
    <transition name="slide-fade">
      <ul v-if="show">
        <li v-if="current.length" :key="0" @click="onpick()">
          <div style="flex:auto">返回</div>
        </li>
        <li
          v-for="(item, index) in lists"
          :key="index + 1"
          @click="onpick(item)"
        >
          <div style="flex:auto">{{ item.name }}</div>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    value: {
      type: Array,
      default: () => {}
    },
    dataList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      show: true,
      lists: this.dataList,
      current: this.value
    };
  },
  watch: {
    current() {
      const lastValue = [...this.value].pop();
      const current = this.find(lastValue);
      this.lists = lastValue
        ? current.length
          ? current
          : this.lists
        : this.dataList;
      this.$emit("input:value", this.current);
      this.show = false;
      setTimeout(() => (this.show = true), 0);
    }
  },
  methods: {
    find(value) {
      let data = [];
      return (function find(items, level) {
        if (!Array.isArray(items)) return [];
        items.forEach(item => {
          if (item.name === value && item.children) {
            data = item.children;
          } else {
            if (item.children) {
              return find(item.children, level++);
            }
          }
        });
        return data;
      })(this.dataList, 0);
    },
    onpick(item) {
      if (!item) {
        return this.current.pop();
      }
      if (this.value.includes(item.name)) {
        return false;
      }
      const isChildren = this.find(item.name).length;
      if (isChildren) {
        this.current.push(item.name);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  display: block;
  background-color: #fff;
}
li {
  list-style-type: none;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  cursor: pointer;
  &::after {
    content: ">";
    font-family: cursive;
    padding-right: 10px;
  }
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
