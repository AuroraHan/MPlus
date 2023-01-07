<!-- 虚拟列表 -->
<template>
    <!-- 可视区域的容器 -->
    <div class="container" ref="virtualList">
        <!-- 占位元素 -->
        <div class="phantom" :style="{ height: listHeight + 'px' }"></div>
        <!-- // 渲染区域 -->
        <div class="content" :style="{ transform: `translate3d(0, ${currentOffset}px, 0)` }">
            <div v-for="item in visibleData" :key="item.id"
                :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }" class="list-item">
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, computed, onMounted } from 'vue';

const virtualList = ref()

//起始索引
const start = ref(0);
// 结束索引
const end = ref(0);
//可视区域高度
const screenHeight = ref(0);
//偏移量
const currentOffset = ref(0);

const props = defineProps({
    //列表数据
    listData: {
        type: Array<{ id: number, value: string }>,
        default: () => []
    },
    //列表每项高度固定
    itemSize: {
        type: Number,
        default: 200
    }
})

onMounted(() => {
    screenHeight.value = virtualList.value.clientHeight;
    start.value = 0;
    end.value = start.value + visibleCount.value;
    virtualList.value.addEventListener('scroll', (event: Event) => {
        scrollEvent(event.target as Element)
    })
    // const observer = new IntersectionObserver(() => {
    //     console.log(virtualList.value, '6666')
    // })
    // observer.observe(virtualList.value)
})

const scrollEvent = (target: Element) => {
    const scrollTop = target.scrollTop;
    start.value = ~~(scrollTop / props.itemSize);
    end.value = start.value + visibleCount.value;
    currentOffset.value = scrollTop - (scrollTop % props.itemSize);
}

// 列表总高度
const listHeight = computed(() => {
    return props.listData.length * props.itemSize;
})

// 可显示的列表项数
const visibleCount = computed(() => {
    return Math.ceil(screenHeight.value / props.itemSize)
})

// 获取真实显示列表数据
const visibleData = computed(() => {
    return props.listData.slice(start.value, end.value);
})
</script>


<style scoped lang='scss'>
.container {
    position: relative;
    height: 90vh;
    overflow: auto;
}

.phantom {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
}

.content {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    text-align: center;
}

.list-item {
    padding: 10px;
    border: 1px solid #999;
}
</style>