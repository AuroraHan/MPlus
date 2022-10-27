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
defineProps({
  shadow: {
    type: String,
    value: ["always", "hover", "never"],
    default: "always",
  },
});
</script>
<style scoped lang="scss">
$shadow-always: 0px 0px 5px 3px #f4eded;
$shadow-never: none;

.m-content {
  &:hover {
    box-shadow: $shadow-always;
  }
  .m-content__head {
    border-bottom: 1px solid red;
  }
}
</style>
