<template>
    <div class="k-brd5zb">
        <Tab @tab="getitem" :item="itemList" />
        <div class="k-brd5zb-list">
            <InfoItem :infolist="infolist" @todetail="todetail" />
        </div>
        <div class="add" @click="push">
            <img src="../assets/home/add.png" alt="">
        </div>
    </div>
</template>

<script lang='ts' setup>
import { Toast } from 'vant'
import { ref, onUnmounted } from 'vue'
import Tab from '@/components/home/tab.vue'
import InfoItem from '@/components/home/infoItem.vue'
import './Home.less'
import $http from '@/http'
import home from "@/store"
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const homeStore = home()
const route = useRoute()
//获取参数信息
//homeStore.getquery(route.query)

//tab列表
const itemList = ref<any>([])
const getpPushList = async () => {
    const { code, data } = await $http.cataloglist({})
    itemList.value = data
    homeStore.$patch({
        itemList: data
    })
    const tempdata = JSON.parse(JSON.stringify(data))
    console.log(tempdata);

    tempdata.unshift({ id: "", parentId: "0", weight: 1, content: "新鲜事" })
    itemList.value = tempdata
}

getpPushList()

//所有商品列表
const infolist = ref<any>([])
const page = ref(0)
const getInfoList = async (publishParentId: number) => {
    const { code, data } = await $http.publishinfolist({
        publishParentId,
        page: page.value,
        locationX: homeStore.locationX,
        locationY: homeStore.locationY,
    })
    if (code != "0000") return
    infolist.value.push(...data)
}

//tab切换
let tabid
const getitem = (item: any) => {
    page.value = 1
    infolist.value = []
    getInfoList(item.id)
}

//详情
const todetail = (item: any) => {


    router.push(`/detail?id=${item.id}`)
}
//发布
const push = () => {
    router.push(`/push`)
}
//监听滚动到底部进行监听
const handleEvent = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (scrollTop + windowHeight >= (scrollHeight)) {   //考虑到滚动的位置一般可能会大于一点可滚动的高度，所以这里不能用等于
        page.value++

    }

}
window.addEventListener('scroll', handleEvent)
//离开销毁
onUnmounted(() => {
    window.removeEventListener('scroll', handleEvent)
})

const getInfoFromApp = async (item: any) => {
    homeStore.getquery(item)


}

window.getInfoFromApp = getInfoFromApp;
// getInfoFromApp({
//     userid: 2430492,
//     lng: 121.594161,
//     lat: 31.211537,
//     telphone: '50lk7uXqbU0tcZGBH2/vdA==',
//     version: 11,
//     fromapp: '',
//     frommodel: ''
// });
</script>
<style lang='less'>
.k-brd5zb {
    min-height: 100vh;
    background: #f5f5f5;

    .k-brd5zb-list {
        padding: 10px;
        box-sizing: border-box;
    }
}
</style>