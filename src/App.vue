<template>
  <MCard class="m-cont" shadow="hover">
    <template #header>
      <div class="head">头部内容头部内容头部内容</div>
    </template>
    默认内容
  </MCard>
  <div :class="[ns.b()]">
    <div :class="[ns.b('childer')]"></div>
    <div :class="[ns.b('childer')]"></div>
  </div>
</template>

<script setup lang="ts">
import MCard from "@/components/card/MCard.vue";
import { useNamespace } from "@/hooks/use-namespace";

const ns = useNamespace("main");
</script>

<style scoped lang="scss">
@include block(main) {
  width: 200px;
  height: 200px;
  background-color: pink;
  @include block(main-childer) {
    width: 100px;
    height: 100px;
    background-color: $border-color-darker;
  }
}

.m-cont {
  width: 400px;
  height: 300px;
  border: 1px solid rgb(232, 226, 226);
  margin: 100px auto;
  .head {
    height: 100px;
  }
}
</style>
