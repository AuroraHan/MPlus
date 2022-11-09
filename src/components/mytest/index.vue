<!--  -->
<template>
  <div :class="[ns.b()]">
    <div :class="[ns.b('childer')]">
      <div :class="[ns.be('childer', 'font')]">字体</div>
    </div>
    <div :class="[ns.m('mod')]">modeify</div>
  </div>
  <div :class="[ns.b('main')]">
    <div :class="[ns.be('main', 'headImg')]" @click="addColor"></div>
    <div :class="[ns.be('main', 'describe')]">
      <div :class="[ns.bem('main', 'describe', 'top')]">上</div>
      <div :class="bottomCss">下</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from "vue";
import { useNamespace } from "@/hooks/use-namespace";

const ns = useNamespace("test");
console.log(ns.bm('main', 'ac'))

const bottomCss = ref([ns.bem('main', 'describe', 'bottom')])
const addColor = () => {
  bottomCss.value.push(ns.bm('main', 'ac'))
}


</script>
<style scoped lang="scss">
@include block(test-main) {
  background-color: aqua;
  width: 300px;
  height: 200px;
  display: flex;

  @include element(headImg) {
    width: 100px;
    background-color: crimson;
  }

  @include element(describe) {
    width: 200px;
    background-color: darksalmon;

    @include modifier(top) {
      height: 150px;
      background-color: forestgreen;
    }

    @include modifier(bottom) {
      height: 50px;
      background-color: gold;
    }
  }

  @include modifier(ac) {
    background-color: red;
  }
}

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
    height: 50px;
    background-color: $color-danger-pink;
  }
}
</style>
