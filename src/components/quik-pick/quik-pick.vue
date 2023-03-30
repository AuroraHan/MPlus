<template>
    <div :class="ns.b()">
        <input type="text" v-model="searchKey" placeholder="请输入" @input="onInput">
        <div :class="ns.e('list')">
            <!--  -->
            <template v-if="isSel">
                <div :class="[ns.b('item'), isMove === index ? ns.b('item-enter') : '']" v-for="(item, index) in pickList"
                    :key="index" @mouseenter="onEnter(item, index)" @mouseleave="onLeave(item, index)"
                    @click="onClickItem(item, index)">
                    <div :class="ns.be('item', 'left')">
                        <div :class="ns.bem('item', 'left', 'label')">{{ item.label }}</div>
                        <div :class="ns.bem('item', 'left', 'desc')">{{ item.description }}</div>
                    </div>
                    <div :class="ns.be('item', 'right')">
                        <div :class="ns.bem('item', 'right', 'key')" v-for="(i, index) in item.keyboard">{{ i }}</div>
                        <div :class="isMove === index ? [ns.bem('item', 'right', 'icon')] : ''"
                            @click="onSetting($event, item)"></div>
                    </div>
                </div>
            </template>
            <template v-if="!isSel">
                {{ checkedNames }}
                <div v-for="(e, index) in selectList" :key="index">
                    <input type="checkbox" :value="e.label" v-model="e.state">
                    <label for="jack">Jack{{ e.label }}</label>
                </div>
            </template>
            <div :class="ns.b('no-data')" v-if="pickList && pickList.length == 0">没有匹配命令</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, PropType, onMounted } from 'vue';
import { useNamespace } from "@/hooks/use-namespace";
import { QuickPickItemOptions, QuickPickOptions } from './quik-pick.type';
import _ from "lodash";

const ns = useNamespace('quick-pick')

const props = defineProps({
    options: {
        type: Object as PropType<QuickPickOptions>,
        required: true,
    },
})

const isSel = ref(true)

// 列表数组
const pickList = ref(props.options.options)

// 多项选择列表
const selectList = ref()
const checkedNames = ref([])

//搜索框关键字
const searchKey = ref()

// 输入框触发
const onInput = _.debounce(function () {
    props.options.onDidInput && props.options.onDidInput(searchKey.value, setItemOptions)
}, 500)

// 点击item
const onClickItem = (item: QuickPickItemOptions, index: number) => {
    if (item.children && item.children.length > 0) {
        if (item.isSelection) {
            isSel.value = !isSel.value
            selectList.value = item.children
        } else {
            pickList.value = item.children
        }

    } else {
        item.onDidSelectItem(item)
    }
}

// 点击设置按钮
const onSetting = (e: Event, item: QuickPickItemOptions) => {
    e.stopPropagation()
    item.onDidConfigure()
}

const isMove = ref(-1)
//鼠标移上
const onEnter = (item: QuickPickItemOptions, index: number) => {
    isMove.value = index
}

//鼠标离开
const onLeave = (item: QuickPickItemOptions, index: number) => {
    isMove.value = -1
}

const setItemOptions = (options: QuickPickItemOptions[]) => {
    pickList.value = options
}
</script>

<style scoped lang="scss">
@import './quik-pick.scss';
</style>