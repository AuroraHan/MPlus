<template>
    <div :class="[ns.b()]" id="searchBarWrapper" ref="searchBarWrapper">
        <input type="text" ref="inputModel">
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue"
import { useNamespace } from "@/hooks/use-namespace";

const ns = useNamespace('search')

const inputModel = ref()
nextTick(() => {
    console.log(inputModel)
    inputModel.value?.focus();
})
</script>

<style scoped lang="scss">
@include block(search) {
    position: absolute;
    top: 120px;
    left: 35%;

    input {
        width: 400px;
        height: 40px;
    }
}

@keyframes searchInput {
    from {
        transform: translateY(50px);
    }

    to {
        transform: translateY(0px);
    }
}

.searchInput {
    background-color: red;
    animation: searchInput 1s;
}
</style>