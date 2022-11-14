<template>
    <div class="infoitem" @click="todetail(item)" v-for="item in props.infolist" :key="item.id">
        <div class="til">{{ item.publishname }}</div>
        <div class="imgcontainer" v-if="getImgList(item.publishImage).length != 0">
            <div class="imgitem" v-for="img in getImgList(item.publishImage).slice(0, 3)" :key="img">
                <img :src="img" alt="">
            </div>
        </div>
        <span v-if="getImgList(item.publishImage).length == 0" class="content">{{ item.publishContent }}</span>
        <span class="follownum" v-if="item.tagValues">{{ item.tagValues }}</span>

    </div>
</template>

<script lang='ts' setup>
import getImgList from '@/utils/getimglist'
//获取列表
const props = defineProps(['infolist'])


//点击条目
const emits = defineEmits(['todetail'])
const todetail = (item: any) => {
    emits('todetail', item)
}
</script>
<style lang='less'>
.infoitem {
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10px;

    .til {
        font-size: 18px;
        font-weight: bolder;
        margin-bottom: 10px;
    }

    .imgcontainer {

        display: flex;

        flex-wrap: wrap;

        margin-bottom: 10px;

        .imgitem {

            width: 30%;
            height: 100px;
            border-radius: 10px;
            margin-right: 10px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

    }

    .follownum {

        background: #FFEEE6;
        color: #F07845;
        font-size: 13px;
        padding: 3px 5px;
        border-radius: 15px;

    }

    .content {
        color: #000;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        margin-bottom: 10px;
    }
}
</style>