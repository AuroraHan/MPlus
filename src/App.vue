<template>
  <MCard class="m-cont" shadow="hover">
    <template #header>
      <div class="head">头部内容头部内容头部内容</div>
    </template>
    默认内容
  </MCard>
</template>

<script setup lang="ts">
import MCard from "@/components/card/MCard.vue";
</script>

<style scoped lang="scss">
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
