<!--  -->
<template>
  <div class="m-content">
    <div class="m-content__head">
      <slot name="header"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
</script>
<style scoped lang="scss">
.m-content {
  .m-content__head {
    border-bottom: 1px solid red;
  }
}
</style>
