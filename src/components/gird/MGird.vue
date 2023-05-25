<template>
    <div :class="[ns.b()]">
        <div :class="ns.e('mesh')" v-for="(index) in 9">
            <img :src="img" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@/hooks/use-namespace";
const ns = useNamespace("gird");

const props = withDefaults(defineProps<{
    img: string
}>(), {
    img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
})

</script>

<style scoped lang="scss">
@import './MGird.scss'
</style>