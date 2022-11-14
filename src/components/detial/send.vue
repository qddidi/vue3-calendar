<template>
    <div class="send">
        <div class="btn">
            <input type="text" :value="props.modelValue" @input="changeVal">
            <span @click="send">发送</span>
        </div>
        <a :href="`tel:${props.tel}`" class="tel">
            <Icon name="phone" />
            <div class="call">打电话</div>
        </a>
    </div>
</template>

<script lang='ts' setup>
import { Icon } from 'vant'
type Props = {
    modelValue: string
    tel: string
}
const props = defineProps<Props>()
type Emits = {
    (e: 'update:modelValue', value: string): void,
    (e: 'send'): void
}
const emits = defineEmits<Emits>()
const changeVal = (e: any) => {
    emits('update:modelValue', e.target.value)
}
const send = () => {
    emits('send')

}
</script>
<style lang='less'>
.send {
    background: #fff;
    display: flex;
    padding: 10px;
    box-sizing: border-box;

    box-shadow: 0 0px 5px 0px lightgray;

    .btn {
        flex: 1;
        border-radius: 20px;
        background: #F0F0F0;
        height: 45px;
        display: flex;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;

        input {
            border: none;
            outline: none;
            background: transparent;
            flex: 1;
        }

        span {
            width: 50px;
            color: #fff;
            background: #1071D2;
            border-radius: 20px;
            text-align: center;
            padding: 4px 0px;
        }
    }

    .tel {
        width: 60px;
        justify-content: center;
        font-size: 30px;
        color: #1071D2;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .call {
            font-size: 12px;
        }
    }
}
</style>