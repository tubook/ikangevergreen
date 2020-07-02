<template>
  <div class="menu">
    <menu-item :value="value" :dataList="items" />
  </div>
</template>
<script>
import MenuItem from "./MenuItem";
export default {
  name: "Menu",
  components: { MenuItem },
  data() {
    return {
      value: [],
      items: [
        {
          name: "首页",
          path: "/",
          children: [{ name: "首页", path: "/" }]
        },
        {
          name: "关于君安",
          path: "/",
          children: [
            {
              name: "品牌故事",
              path: "",
              children: [
                {
                  name: "品牌理念1",
                  path: ""
                },
                {
                  name: "核心优势2",
                  path: ""
                },
                {
                  name: "爱康创始人3",
                  path: ""
                }
              ]
            },
            {
              name: "品牌理念",
              path: ""
            },
            {
              name: "核心优势",
              path: ""
            },
            {
              name: "爱康创始人",
              path: ""
            },
            {
              name: "院长致辞",
              path: ""
            },
            {
              name: "医学专家",
              path: ""
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.menu {
  position: fixed;
  right: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background-color: #fff;
  display: none;
  &:before {
    content: "";
    left: 0;
    top: 0;
    position: fixed;
    width: calc(100% - 200px);
    height: 100%;
    border-radius: 1px;
    background-color: #000000;
    opacity: 0.6;
  }
}
</style>
