<!-- 测试页面 -->
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
  <!-- <VirtualList :list-data="listData" :item-size="50"></VirtualList>
  <VirtualList :list-data="listData" :item-size="50"></VirtualList>
                                                              <div ref="btn" id="btn">ssss</div> -->
  <!-- <MyMessage></MyMessage> -->
</template>

<script setup lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue';
import MAvatar from "@/components/avatar/MAvatar.vue";
import MyImg from "@/myTest/lazy/MyImg.vue";
import MySlider from "@/components/slider/MSlider.vue";
import MyDropDown from "@/components/dropdown/MDropdown.vue";
import MyMessage from '@/components/Message/Message.vue';
import quikPick from '@/components/quik-pick/quik-pick.vue';
import { shuffle, elementIsVisibleInViewport, changeToChinese } from "@/util/tool"

import VirtualList from '@/components/virtualList/VirtualList.vue'
const listData = [] as Array<{ id: number, value: string }>

const btn = ref()

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

const quik = {
  options: [
    {
      label: "测试1",
      description: "测试1",
      keyboard: [],
      isSelection: true,
      children: [
        {
          label: "测试3",
          description: "测试3",
          keyboard: [],
          state: true,
          onDidSelectItem() { },
          onDidConfigure() { },
        },
        {
          label: "测试5",
          description: "测试5",
          keyboard: [],
          state: true,
          onDidSelectItem() { },
          onDidConfigure() { },
        }
      ],
      onDidSelectItem() { },
      onDidConfigure() { },
    },
    {
      label: "测试2",
      description: "测试2",
      keyboard: [],
      isSelection: false,
      children: [
        {
          label: "测试4",
          description: "测试4",
          keyboard: [],
          onDidSelectItem() { },
          onDidConfigure() { },
        }
      ],
      onDidSelectItem() { },
      onDidConfigure() { },
    }
  ]
}

const errorHandler = (e: Event) => {
  console.log(e);
};

const success = () => {
  console.log(1111);
};

const fail = () => {
  console.log(2222);
};

console.log(changeToChinese(1218911))
</script>
<style scoped lang='scss'></style>