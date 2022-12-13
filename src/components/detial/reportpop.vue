
<template>
    <div class="k-353ovx">
        <Popup @click-overlay="emits('close')" v-model:show="show" position="bottom">
            <div class="popcont">
                <div class="label">请选择举报类型</div>
                <RadioGroup v-model="radio" direction="horizontal">
                    <Radio :name="item.id" v-for="item in radioList" :key="item.id">{{ item.content }}</Radio>

                </RadioGroup>
                <div class="label">请输入详细原因</div>
                <Field v-model="message" rows="2" autosize type="textarea" maxlength="50" placeholder="请输入举报原因"
                    show-word-limit />
            </div>
            <div class="btn" @click="report">确认</div>
        </Popup>
    </div>
</template>
<script lang="ts" setup>

import { Field, Icon, Popup, RadioGroup, Radio, Button, Toast } from "vant";
import { ref, useAttrs } from "vue";
import $http from "@/http";
import home from '@/store'
const homeStore = home()
const serchText = ref('')
const show = ref(true)
const radio = ref('')
const radioList = ref<any>([])
const message = ref('')
const $attrs: any = useAttrs()
const emits = defineEmits(['close'])
const report = async () => {
    const result = await $http.tocomplaint({
        "beComplaintUserId": $attrs.floorMaster.id,

        "friendId": $attrs.fid,

        "complaintTagId": radio.value,

        "complaintContent": message.value,
        type: 2
    })
    if (result.code == '0000') {
        Toast('投诉成功')
        emits('close')
    }
}
const gettag = async () => {
    const result = await $http.complainttag({})
    radioList.value = result.data
}
gettag()
</script>
<style lang="less">
.k-353ovx {
    font-size: 16px;

    .popcont {
        padding: 10px;

        .label {
            font-size: 14px;
            margin: 15px 0;
        }


    }

    .btn {
        background: #1989FA;
        width: 100%;
        margin: 0 auto;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
        padding: 10px;
    }

    .van-radio {
        margin-bottom: 10px;
    }
}
</style>
  