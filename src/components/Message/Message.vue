<template>
    <div :class="ns.b()">
        <div :class="ns.b('operation')">
            <div>导出图标成功</div>
            <div>图标部分</div>
        </div>
        <div :class="ns.b('display')">
            <div :class="ns.be('display', 'detail')">来源XXXX扩展做过
            </div>
            <button>查看报告</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNamespace } from "@/hooks/use-namespace"
const ns = useNamespace('message')
</script>

<style scoped lang="scss">
$ns: message;

@include block($ns) {
    width: 360px;
    background-color: #252526;
    padding: 8px;
    color: #fff;
}

@include block(#{$ns}-operation) {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 10px;
}

@include block(#{$ns}-display) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;

    &>button {
        background-color: #0e639c;
        color: #fff;
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 6px;
        cursor: pointer;
    }

    @include element(detail) {
        max-width: 280px;
    }
}
</style>