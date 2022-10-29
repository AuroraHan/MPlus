<template>
  <MCard shadow="hover" :class="[ns.b()]">
    <template #header>
      <div>
        头部内容头部内容头部内容内容头部内容头部内容内容头部内容头部内容内容头部内容头部内容
      </div>
    </template>
    默认内容
  </MCard>
  <MyTest></MyTest>
</template>

<script setup lang="ts">
import MCard from "@/components/card/MCard.vue";
import MyTest from "@/components/mytest/index.vue";
import { useNamespace } from "@/hooks/use-namespace";

const ns = useNamespace("main");
</script>

<style scoped lang="scss">
@include block(main) {
  width: 400px;
  height: 300px;
  border: 1px solid rgb(232, 226, 226);
  margin: 100px auto;
}
</style>
