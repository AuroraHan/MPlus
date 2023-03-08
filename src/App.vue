<template>
  <div :class="ns.b()">
    <div :class="ns.e('left')">left</div>
    <div :class="ns.e('middle')">
      <router-view></router-view>
    </div>
    <div :class="ns.e('right')">right</div>
  </div>
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
$ns: main;

@include block($ns) {
  display: flex;
  width: 100%;
  height: 400px;

  @include element(left) {
    width: 200px;
    background-color: chartreuse;
    flex-shrink: 0;
  }

  @include element(middle) {
    width: 100%;
    flex: 1;
  }

  @include element(right) {
    width: 200px;
    background-color: rgb(34, 216, 216);
    flex-shrink: 0;
  }
}
</style>
