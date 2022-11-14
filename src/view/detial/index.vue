<template>
  <div class="k-40kum0">
    <div class="cont">
      <Headeritem :headerItem="info" />
      <div class="info">
        {{ info.publishContent }}
      </div>
      <div class="imgcont">
        <img v-for="item in getImgList(info.publishImage)" :key="item" :src="item" alt="">
      </div>
      <span class="follownum">{{ info.tagValues }}</span>
    </div>
    <div class="comment">
      <div class="nocomment" v-if="replayList.length == 0">
        <img src="../../assets/no.png" alt="">
      </div>
      <div class="commontList">
        <commentHeader :replayList="replayList" />
      </div>
    </div>
    <div class="send">
      <Send @send="send" :tel="info.publishTelphone" v-model="content" />
    </div>

  </div>
</template>

<script lang='ts' setup>
import Headeritem from '@/components/detial/headerItem.vue'
import Send from '@/components/detial/send.vue'
import $http from '@/http';
import { ref, onUnmounted } from 'vue'
import { useRoute } from 'vue-router';
import home from "@/store"
import { Toast, Dialog } from "vant"
import getImgList from '@/utils/getimglist'
import commentHeader from "@/components/detial/commentheader.vue"
const homeStore = home()
const route = useRoute()
const id = route.query.id
//获取详细信息
const info = ref<any>({})
const getDetailInfo = async () => {
  const { code, data } = await $http.publishinfodetail({
    id,
    userId: homeStore.uid
  })
  info.value = data || {}
}
getDetailInfo()
//获取评论列表
let isrequest = true
const replayList = ref<any>([])
const page = ref(1)
const getreplylist = async () => {
  const { code, data } = await $http.replyinfolist({
    page: page.value,
    freePushId: id
  })
  if (code != '0000') return
  if (data.length < 10) isrequest = false
  replayList.value.push(...data)

}
getreplylist()
//提交评论

const content = ref('')
const send = async () => {
  const { code } = await $http.savereplyinfo({
    userId: homeStore.uid,
    freePushId: id,
    replyType: 1,
    replyContent: content.value
  })


  if (code == '0000') {
    content.value = ''
    replayList.value = []
    page.value = 1
    Dialog.alert({
      title: '发送成功',
    }).then(() => {
      getreplylist()
    });

  }

}

//监听滚动到底部进行监听
const handleEvent = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (scrollTop + windowHeight >= (scrollHeight)) {   //考虑到滚动的位置一般可能会大于一点可滚动的高度，所以这里不能用等于
    if (!isrequest) return
    page.value++
    getreplylist()
  }

}
window.addEventListener('scroll', handleEvent)
//离开销毁
onUnmounted(() => {
  window.removeEventListener('scroll', handleEvent)
})
</script>
<style lang='less'>
.k-40kum0 {
  padding-bottom: 80px;
  min-height: 100vh;
  background: #f5f5f5;

  .cont {
    padding: 10px;
    background: #fff;

    .follownum {
      background: #FFEEE6;
      color: #F07845;
      font-size: 13px;
      padding: 3px 5px;
      border-radius: 15px;
      display: inline-block;
      margin-top: 10px;
    }

    .imgcont {
      display: flex;
      flex-wrap: wrap;

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
  }

  .comment {
    background: #fff;
    margin-top: 15px;
    padding-top: 10px;

    .nocomment {
      text-align: center;
      padding: 20px;
      color: gray;
      text-align: center;

      img {
        width: 90%;
      }
    }

    .commontList {
      padding: 10px;
    }
  }

  .info {
    padding: 10px 3px;
    line-height: 20px;
    color: gray;
  }

  .send {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }
}
</style>