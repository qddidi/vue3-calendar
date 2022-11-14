<template>
    <div class="headerItem">
        <div class="til">
            <span>{{ props.headerItem.publishname }}</span>
            <div>{{ props.headerItem.publishCatalogname }}</div>
        </div>
        <div class="tim">{{ props.headerItem.createTime }} | {{
                `${props.headerItem.publishCity}${props.headerItem.publishCountry == 'undefined' ? '' : props.headerItem.publishCountry}`
        }}</div>
    </div>
</template>

<script lang='ts' setup>
const props = defineProps(['headerItem'])
</script>
<style lang='less'>
.headerItem {
    padding: 10px;
    border-bottom: 1px solid lightgray;

    .til {
        font-size: 18px;
        font-weight: bolder;
        margin-bottom: 6px;
        display: flex;
        flex-wrap: wrap;

        div {
            background: #1070D4;
            color: #fff;
            border-radius: 20px;
            margin-left: 10px;
            padding: 5px 8px;
            font-size: 14px;
            font-weight: normal;
        }
    }

    .tim {
        color: gray;
        font-size: 14px;
    }
}
</style>