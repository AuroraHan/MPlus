<!-- 自定义下拉列表 -->
<template>
    <div :class="[ns.b()]">
        <h2 @click="onShow">{{ title }}</h2>
        <ul :class="[ns.b('line')]" v-show="flag">
            <li v-for="(item, index) in props.optionData" :key="index" @click="onClickItem(item)">{{ item.title }}</li>
        </ul>
    </div>
    <div :class="ns.b('mask')" v-show="flag"></div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useNamespace } from "@/hooks/use-namespace";
const ns = useNamespace('dropdown')
interface optionType {
    title: string,
    id: number
}

const props = defineProps({
    width: {
        type: String,
        default: "400px"
    },
    size: {
        type: String,
        default: "16px"
    },
    optionData: {
        type: Array<optionType>,
        default: [
            { title: "请选择数据", id: 0 }
        ]
    }
})

//选中
const title = ref('')
title.value = props.optionData[0].title

//控制列表的显示与隐藏
const flag = ref(false)
const onShow = () => {
    flag.value = !flag.value
}

//点击item
const onClickItem = (e: optionType) => {
    title.value = e.title
    flag.value = !flag.value
}

</script>

<style scoped lang='scss'>
* {
    list-style: none;
}

@include block(dropdown) {
    width: v-bind(width);
    height: 400px;
    margin: 0 auto;
    cursor: pointer;
    user-select: none;
    position: relative;
    z-index: 15;

    &>h2 {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: v-bind('props.size');
        background-color: #ddd;
        text-align: center;
    }
}

@include block(dropdown-line) {
    width: 100%;
    height: auto;
    padding-inline-start: 0;

    &>li {
        width: 100%;
        height: 50px;
        margin: 10px 0;
        line-height: 50px;
        color: black;
        text-align: center;
        background-color: #eee;
        border-radius: 8px;
    }
}

@include block(dropdown-mask) {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
}
</style>