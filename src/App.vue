<template>
  <el-row :gutter="10">
    <!-- 左侧列 -->
    <el-col :span="6">
      <div :class="[ns.e('left')]">121</div>
    </el-col>

    <!-- 中间列 -->
    <el-col :span="12">
      <div :class="[ns.e('content')]">
        <!-- <MySlider :on-success="success" :onFail="fail"></MySlider> -->
        <!-- <MyDropDown :option-data="dropData.dropArr" width="300px" size="18px"></MyDropDown> -->
      </div>
    </el-col>

    <!-- 右侧列 -->
    <el-col :span="6">
      <div :class="[ns.e('right')]">12</div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import MySlider from "@/components/slider/MSlider.vue";
import MyDropDown from "@/components/dropdown/MDropdown.vue"
import { useNamespace } from "@/hooks/use-namespace";
import useSeach from "@/hooks/use-Search/index"

const ns = useNamespace("main");

//全局搜索
const { openSeachBar, closeSeachBar } = useSeach
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'k') {
      openSeachBar();
    }
  })
})

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

const success = () => {
  console.log(1111);
};

const fail = () => {
  console.log(2222);
};
</script>

<style scoped lang="scss">
@include block(main) {
  @include element(left) {
    background-color: #f8e3c5;
    height: 70vh;
  }

  @include element(content) {
    background-color: darkorange;
    height: 100vh;
  }

  @include element(right) {
    background-color: #d1edc4;
    height: 70vh;
  }
}
</style>
