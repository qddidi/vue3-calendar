<template>
    <div class="tab">
        <div v-for="(item, index) in list" :class="{ active: cur == index }" @click="tabto(item, index)" :key="item">{{
                item.content
        }}
        </div>

    </div>
</template>

<script lang='ts' setup>
import { ref, toRef, watch } from 'vue'

const cur = ref(0)
type Props = {
    item: any
}
const Props = defineProps<Props>()
//列表
const list = toRef(Props, "item")

type Emits = {
    (event: 'tab', value: string): void
}

const emits = defineEmits<Emits>()

/**
 * 
 * @param {string} item  
 * @param {number} index 下标
 * @return void
 */
const tabto = (item: string, index: number) => {
    cur.value = index
    emits('tab', item)
}
watch(list, () => {
    emits('tab', list.value[0])
})

</script>
<style lang='less'>
.tab {
    display: flex;
    white-space: nowrap;
    overflow: scroll;
    background: #fff;
    height: 50px;
    align-items: center;

    div {
        padding: 0 8px;

    }

    .active {
        position: relative;
        color: #1070D1;
        font-size: 17px;
        font-weight: bolder;
    }

    .active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        width: 60%;
        border-top: 3px solid #1070D1;
        left: 20%;
    }
}
</style>