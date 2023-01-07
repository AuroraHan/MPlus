<template>
  <!-- <MAvatar
    size="100px"
    shape="square"
    src="https://empty"
    @error="errorHandler"
  >
    <img
      src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
    />
  </MAvatar> -->
  <!-- <MyImg></MyImg> -->
  <!-- <MySlider :on-success="success" :onFail="fail"></MySlider> -->
  <!-- <MyDropDown :option-data="dropData.dropArr" width="300px" size="18px"></MyDropDown> -->
  <!-- <button @click="openSeachBar">显示搜索框</button>
  <button @click="closeSeachBar">隐藏搜索框搜索框</button> -->
  <VirtualList :list-data="listData" :item-size="50"></VirtualList>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import MAvatar from "@/components/avatar/MAvatar.vue";
import MyImg from "@/myTest/lazy/MyImg.vue";
import MySlider from "@/components/slider/MSlider.vue";
import MyDropDown from "@/components/dropdown/MDropdown.vue";
import VirtualList from '@/components/virtualList/VirtualList.vue'
import { useNamespace } from "@/hooks/use-namespace";
import useSeach from "@/hooks/use-Search/index"

const ns = useNamespace("main");

//全局搜索
const { openSeachBar, closeSeachBar } = useSeach
onMounted(() => {
  // window.addEventListener('keydown', (e) => {
  //   if (e.altKey && e.key === 'k') {
  //     openSeachBar();
  //   }
  // })
})

const listData = [] as Array<{ id: number, value: string }>

for (let i = 1; i <= 1000; i++) {
  listData.push({ id: i, value: '字符内容' + i })
}

const state = reactive({
  url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
});

const dropData = reactive({
  dropArr: [
    { title: "测试列表1", id: 0 },
    { title: "测试列表2", id: 0 },
    { title: "测试列表3", id: 0 },
    { title: "测试列表4", id: 0 }

  ]
})

const errorHandler = (e: Event) => {
  console.log(e);
};

const success = () => {
  console.log(1111);
};

const fail = () => {
  console.log(2222);
};
</script>

<style scoped lang="scss">
@include block(main) {
  width: 400px;
  height: 300px;
  border: 1px solid rgb(232, 226, 226);
  margin: 100px auto;
}
</style>
