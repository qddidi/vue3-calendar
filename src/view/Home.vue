<template>
  <div class="k_wrap">
    <div class="k_top">
      <div class="k_top_l">
        <div>我的资产</div>
        <div>3600000</div>
      </div>
      <div class="k_top_r">
        <div>最新收益<Icon name="arrow" /></div>
        <div>10.36</div>
      </div>
    </div>
    <div class="k_wrap_btm">
      <div class="k_good">
        <div class="k_good_item">
          <img src="" alt="" />
          产品
        </div>
        <div class="k_good_item"></div>
        <div class="k_good_item"></div>
        <div class="k_good_item"></div>
      </div>
      <div class="k_banner">
        <Swipe class="k_banner_inner" :autoplay="3000" :show-indicators="false">
          <SwipeItem>图1</SwipeItem>
          <SwipeItem>图2</SwipeItem>
          <SwipeItem>图3</SwipeItem>
          <!-- <SwipeItem><img @click="tourl(5)" src="./img/4banner.jpg" alt /></SwipeItem> -->
        </Swipe>
      </div>
      <div class="k_showpj">
        <div class="k_showpj_til">华泰证券-类固收产品</div>
        <div class="k_showpj_tips">
          <span>活期爆款</span>
          <span>收益稳健</span>
          <span>1年定期</span>
        </div>
        <div class="k_showpj_rate">4.00%</div>
        <div class="k_showpj_earn">年化收益率 | 1.2万起存</div>
        <div class="k_showpj_btn">立即买入</div>
        <div class="k_showpj_suggest">首次存入联系客服拿奖励</div>
      </div>

      <div class="k_managemoney">
        <div class="k_managemoney_til">闲钱理财</div>
        <div class="k_managemoney_item">
          <div class="kmi_til">稳健短债 | 诺德短债债券C</div>
          <div class="kmi_cont">
            <div class="kmi_cont_l">
              <div>2.36%</div>
              <div>近1月涨幅</div>
            </div>
            <div class="kmi_cont_m">
              <div>限时返现</div>
              <div>1万起购</div>
            </div>
            <div class="kmi_cont_r"><Icon name="arrow" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="k_wrap_info">
      <p class="kwb_til">
        基金销售服务由<span>通华财富</span>(上海)基金销售有限公司提供
      </p>
      <p class="kwb_info">
        本页面券商理财指的是证券公司及证券公司子公司发行的资产管理产品。本页面非任何法律文件，投资前请阅读基金合同、招募说明书等产品文件过往业绩不预示未来表现，市场有风险，投资需谨慎
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import "./Home.less";
import { Swipe, SwipeItem, Icon } from "vant";
</script>
