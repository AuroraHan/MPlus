<!-- 父组件 -->
<template>
  <Childeren
    :name="name"
    age="12"
    sc="ddd"
    @click="dainji"
    style="color: red"
  ></Childeren>
</template>

<script setup lang="ts">
import { ref, toRefs, onBeforeMount, onMounted } from "vue";
import Childeren from "@/myTest/attrs/Children.vue";

const name = ref("项目");
const dainji = () => {
  console.log("111");
};
</script>
<style scoped lang="scss"></style>
