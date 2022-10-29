<template>
  <div :class="[ns.b('content'), ns.is(`${shadow}-shadow`)]">
    <div :class="[ns.e('head')]">
      <slot name="header"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import { useNamespace } from "@/hooks/use-namespace";

const ns = useNamespace("card");

defineProps({
  shadow: {
    type: String,
    value: ["always", "hover", "never"],
    default: "always",
  },
});
</script>
<style lang="scss">
$shadow-always: 0px 0px 5px 3px #f4eded;
$shadow-never: none;

@include block(card-content) {
  @include when(hover-shadow) {
    &:hover,
    &:focus {
      box-shadow: $shadow-always;
    }
  }

  @include when(always-shadow) {
    box-shadow: $shadow-always;
  }
}

@include block(card) {
  @include element(head) {
    border-bottom: 1px solid red;
  }
}
</style>
