<template>
  <h1>主页面</h1>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useNamespace } from "@/hooks/use-namespace";
import useSeach from "@/hooks/use-Search/index";
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
</script>

<style scoped lang="scss">

</style>
