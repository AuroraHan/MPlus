<template>
  <!-- <MCard shadow="hover" :class="[ns.b()]">
    <template #header>
      <div>
        头部内容头部内容头部内容内容头部内容头部内容内容头部内容头部内容内容头部内容头部内容
      </div>
    </template>
    默认内容
  </MCard> -->
  <MAvatar size="100px" shape="square" :src="state.url"></MAvatar>
  <br />
  <MAvatar shape="circle">User</MAvatar>
  <br />
  <MAvatar
    size="100px"
    shape="square"
    src="https://empty"
    @error="errorHandler"
  >
    <img
      src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
    />
  </MAvatar>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import MCard from "@/components/card/MCard.vue";
import MyTest from "@/components/mytest/index.vue";
import MAvatar from "@/components/avatar/MAvatar.vue";
import { useNamespace } from "@/hooks/use-namespace";

const ns = useNamespace("main");

const state = reactive({
  url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
});

const errorHandler = () => true;
</script>

<style scoped lang="scss">
@include block(main) {
  width: 400px;
  height: 300px;
  border: 1px solid rgb(232, 226, 226);
  margin: 100px auto;
}
</style>
