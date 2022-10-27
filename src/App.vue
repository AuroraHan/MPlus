<template>
  <MCard class="m-cont">
    <template #header>
      <div>头部内容头部内容头部内容</div>
    </template>
    默认内容
  </MCard>
</template>

<script setup lang="ts">
import MCard from "@/components/card/MCard.vue";
</script>

<style scoped lang="scss">
.m-cont {
  width: 300px;
  height: 300px;
  border: 1px solid rgb(232, 226, 226);
  margin: 100px auto;
}
</style>
