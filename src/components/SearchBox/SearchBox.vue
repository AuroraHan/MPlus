<template>
    <div :class="ns.b()">

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNamespace } from "@/hooks/use-namespace"
const ns = useNamespace('navSear')
</script>

<style scoped lang="scss">

</style>