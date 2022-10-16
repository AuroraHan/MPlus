<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div class="box">
    <h1 class="box-p">1212</h1>
  </div>
</template>

<style scoped lang="scss">
.box {
  .box-p {
    background-color: red;
  }
}
</style>
