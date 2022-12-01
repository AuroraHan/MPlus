<template>
    <div :class="[ns.b()]" id="searchBarWrapper" ref="searchBarWrapper">
        <input type="text" ref="inputModel" @keyup.enter="submit" v-model="inputVal">
        <ul :class="[ns.e('container')]" v-show="(inputArr && inputArr.length)">
            <li v-for="(item) in inputArr" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick, reactive } from "vue"
import { useNamespace } from "@/hooks/use-namespace";
import { SelectItem } from './SearchBar'

const ns = useNamespace('search')

const inputModel = ref()
nextTick(() => {
    inputModel.value?.focus();
})

let inputVal = ref("")
let inputArr: Array<SelectItem> = reactive([])

//监听回车键
const submit = () => {
    let id = 0;
    inputArr.push({
        id: id++,
        title: inputVal.value
    })
    inputVal.value = ''
}
</script>

<style scoped lang="scss">
@include block(search) {
    position: absolute;
    top: 20%;
    left: 36%;

    @include element(container) {
        margin-top: 4px;
        max-height: 200px;
        overflow: auto;

        li {
            height: 50px;
            line-height: 50px;
            margin-bottom: 3px;
            cursor: pointer;
            color: rgb(36, 35, 35);
            border-radius: 4px;
            background-color: rgb(247, 243, 238);
            padding-left: 5px;
        }

        li:hover {
            background-color: #eee;
        }
    }

    input {
        width: 400px;
        height: 40px;
        border-radius: 5px;
        border-color: #E6A23C;
    }

    input:focus {
        outline: 0;
        border-color: #E6A23C;
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
    animation: searchInput 1s;
}
</style>