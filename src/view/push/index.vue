<template>
    <div class="push">
        <div class="edit">

            <div class="til">
                <input type="text" v-model="info.publishname" placeholder="填写标题更容易引起关注">
            </div>
            <div class="goodinfo">
                <textarea name="" v-model="info.publishContent" placeholder="详细介绍一下吧" id="" cols="30"
                    rows="8"></textarea>
            </div>
            <div class="checkimage">
                <div class="list">

                    <Uploader multiple v-model="fileList" :after-read="afterRead">
                        <img class="uploadimg" src="../../assets/upload.png" alt="">
                    </Uploader>
                </div>
            </div>

            <span v-if="!info.publishParentname" @click="show = true" class="selecttype"><span>+</span>
                选择发布类别</span>
            <span v-else class="selecttype">{{ `${info.publishParentname} | ${info.publishCatalogname}` }}</span>
        </div>
        <div class="lxfs">
            <div class="til">留下联系方式,方便联系您</div>
            <Field label="姓名" :rules="[{ required: true, message: '请输入您的姓名' }]" v-model="info.publishName"
                placeholder="请输入您的姓名" required label-width="50" />
            <Field label="电话" required :rules="[
                {
                    validator: (val) => /(?:0|86|\+86)?1[3-9]\d{9}/.test(val),
                    message: '请输入您的电话',
                },
            ]" type="number" v-model="info.publishTelphone" label-width="50" placeholder="请输入您的电话" />
            <Field label="地址" @click="addressshow = true" required label-width="50" readonly
                :rules="[{ required: true, message: '请输入您的地址' }]" v-model="addresstext" placeholder="请选择您的地址" />
        </div>
        <div class="tips">填完信息方便大家联系到你</div>
        <div class="btn" @click="send">
            <Button :disabled="!isSub" type="primary" round style="width:80%;margin:0 auto">立即发布</Button>
        </div>
        <Popup @close="show = false" v-model:show="show" round position="bottom">
            <Cascader v-model="typeValue" :field-names="fieldNames" title="请选择类目" :options="options"
                @close="show = false" @finish="onFinish" />
        </Popup>
        <Popup v-model:show="addressshow" round position="bottom">
            <Area @cancel="addressshow = false" @confirm="confirm" title="请选择地址" :area-list="areaList" />
        </Popup>

    </div>
</template>

<script lang='ts' setup>
import { Field, Uploader, Cascader, Popup, Area, Dialog } from 'vant'
import { reactive, ref, computed } from 'vue'
import { Button } from "kitty-ui"
import home from '@/store'
import { areaList } from '@vant/area-data';
import $http from '@/http';
import router from '@/router';
const homeStore = home()
const fileList = ref<any>([])
const info = reactive<any>({
    publishTelphone: '',
    publishProvince: '',
    publishCity: '',
    publishCountry: '',
    publishContent: '',
    publishname: '',
    publishParentId: '',
    publishParentname: '',
    publishCatalogId: '',
    publishCatalogname: '',
    locationX: homeStore.locationX,
    locationY: homeStore.locationY,
    publishImageList: []
})
const isSub = computed(() => {
    return info.publishContent && info.publishTelphone && info.publishProvince && info.publishCity && info.publishname
})
const afterRead = (file: any) => {
    console.log(fileList);
}
//选择类别
const show = ref(false)
const typeValue = ref('')
const options = homeStore.itemList


const fieldNames = {
    text: 'content',
    value: 'id'
}

const onFinish = (res: any) => {
    console.log(res);
    info.publishParentId = res.selectedOptions[0].id
    info.publishParentname = res.selectedOptions[0].content
    info.publishCatalogId = res.selectedOptions[1].id
    info.publishCatalogname = res.selectedOptions[1].content


    show.value = false

}

//地址选择
const addressshow = ref(false)
const addresstext = ref('')
const confirm = (address: any) => {
    console.log(address);
    info.publishProvince = address[0].name
    info.publishCity = address[1].name
    info.publishCountry = address[2].name
    addresstext.value = info.publishProvince + info.publishCity + info.publishCountry
    addressshow.value = false

}

//发布
const send = async () => {
    fileList.value.forEach((item: any) => {
        info.publishImageList.push(item.content.split(',')[1])
    });
    const { code } = await $http.savepublishinfo(info)
    if (code == '0000') {
        Dialog.alert({
            title: '发送成功',
        }).then(() => {
            router.replace('/')
        });
    }
}
</script>
<style lang='less'>
.push {

    background: #f5f5f5;
    min-height: 100vh;
    padding-bottom: 50px;

    .edit {
        background: #fff;
        padding: 10px;

        .til {
            padding: 10px;
            border-bottom: 1px solid lightgray;

            input {
                border: none;
                outline: none;
                background: transparent;
                flex: 1;
            }
        }

        .checkimage {}

        .goodinfo {

            padding: 10px;

            textarea {
                border: none;
                outline: none;
                background: transparent;
                width: 100%;
            }
        }

        .checkimage {
            margin-bottom: 10px;
        }

        .selecttype {
            background: #DDEEFF;
            padding: 5px 10px;
            border-radius: 20px;
            color: #3C8EE2;
            font-size: 16px;


            span {
                font-size: 18px;
            }

        }
    }

    .lxfs {
        background: #fff;
        margin-top: 15px;
        padding: 10px;

        .til {
            font-size: 18px;
            margin-bottom: 10px;
        }
    }

    .tips {
        text-align: center;
        margin-top: 20px;
        font-size: 14px;
    }

    .btn {
        text-align: center;
        background: #fff;
        padding: 10px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
    }

    .uploadimg {
        width: 80px;
        height: 80px;
    }

}
</style>