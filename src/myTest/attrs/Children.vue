<!-- 子组件 -->
<template>
  <div>
    <h1>子组件</h1>
    {{ name }}
  </div>
  <div v-bind="$attrs">{{ $attrs }}</div>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
const props = defineProps({
  name: {
    type: String,
  },
});

const attrs = useAttrs();
console.log(attrs);
</script>
<style scoped lang="scss"></style>
