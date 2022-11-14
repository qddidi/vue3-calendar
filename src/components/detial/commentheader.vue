<template>
    <div class="itemreplay" v-for="item in replayList" :key="item.id">
        <div class="commentheader">
            <div class="header">
                <img :src="item.replayHeadImg" alt="">
            </div>
            <div class="right">
                <p>{{ item.replayNickName }}</p>
                <p>{{ item.createTime }}</p>
            </div>
        </div>
        <div class="content">{{ item.replyContent }}</div>
    </div>

</template>

<script lang='ts' setup>
import { toRef } from 'vue';
const props = defineProps(['replayList'])
const replayList = toRef(props, 'replayList')


</script>
<style lang='less'>
.itemreplay {
    margin-bottom: 25px;

    .content {
        margin-top: 10px;
    }

    .commentheader {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        .header {
            width: 40px;
            height: 40px;
            overflow: hidden;
            border-radius: 50%;
            margin-right: 5px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;

            }
        }

        .right {
            flex: 1;

            p {
                margin: 0;
                padding: 0;
            }

            p:nth-of-type(1) {
                font-size: 17px;
                font-weight: bolder;
                margin-bottom: 2px;
            }

            p:nth-of-type(2) {
                font-size: 14px;
                color: gray;

            }
        }
    }
}
</style>