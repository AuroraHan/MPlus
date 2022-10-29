<!-- avatar组件 -->
<template>
  <span :class="avatarClass">
    <img v-if="src && !hasLoadError" :src="src" @error="handleError" />
    <slot v-else></slot>
  </span>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { AvatarSizeMap } from "./type";
import { useNamespace } from "@/hooks/use-namespace";

const ns = useNamespace("avatar");

const props = defineProps({
  //大小
  size: {
    type: String,
    values: AvatarSizeMap,
    default: AvatarSizeMap.default + "px",
  },
  // 形状
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle",
  },
  //图片路径
  src: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["error"]);

//图片是否加载错误
const hasLoadError = ref(false);
watch(
  () => props.src,
  () => (hasLoadError.value = false)
);

function handleError(e: Event) {
  hasLoadError.value = true;
  emits("error", e);
}

//添加基本样式
const avatarClass = computed(() => {
  const { shape } = props;
  const classList = [ns.b()];
  if (shape) classList.push(ns.m(shape));
  return classList;
});
</script>

<style scoped lang="scss">
$avatar-border-radius: 5px;
$avatar-bg-color: #c0c4cc;

@include block(avatar) {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  color: white;
  background-color: $avatar-bg-color;
  width: v-bind("props.size");
  height: v-bind("props.size");
  font-size: 14px;

  > img {
    display: block;
    height: 100%;
  }

  @include modifier(circle) {
    border-radius: 50%;
  }

  @include modifier(square) {
    border-radius: $avatar-border-radius;
  }
}
</style>
