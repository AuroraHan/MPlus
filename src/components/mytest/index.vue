<!--  -->
<template>
  <div :class="[ns.b()]">
    <div :class="[ns.b('childer')]">
      <div :class="[ns.be('childer', 'font')]">字体</div>
    </div>
    <div :class="[ns.m('mod')]">modeify</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import { useNamespace } from "@/hooks/use-namespace";

const ns = useNamespace("test");
</script>
<style scoped lang="scss">
@include block(test) {
  width: 200px;
  height: 200px;
  background-color: pink;
  @include block(test-childer) {
    width: 100px;
    height: 100px;
    background-color: $border-color-darker;
    @include element(font) {
      font-size: 30px;
    }
  }

  @include modifier(mod) {
    width: 100px;
    height: 200px;
    background-color: $color-danger-pink;
  }
}
</style>
