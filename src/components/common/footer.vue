<template>
  <footer class="footer">
    <div class="wrapper ui-cell">
      <div class="branch">
        <dl class="branch-info">
          <dt>{{ $t("branchs.title") }}</dt>
          <dd
            v-for="(item, index) in $t('branchs.items')"
            :key="index"
            class="branch-item"
          >
            {{ item }}
          </dd>
        </dl>
      </div>
      <div class="gasket"></div>
      <div class="contact">
        <dl class="consumer-hotline">
          <dt>客服热线</dt>
          <dd class="phone">400-098-6600</dd>
        </dl>
        <dl class="wechat">
          <dt class="wechat__title">爱康官方微信</dt>
          <dd class="qrcode">
            <img width="80" src="https://unsplash.it/160/160/?random" alt="" />
          </dd>
          <dd class="wechat-mobile">
            <h4 class="wechat__title">爱康官方微信</h4>
            <p>{{ $t("copyright")[0] }}</p>
            <p>{{ $t("copyright")[1] }}</p>
            <p>{{ $t("record") }}</p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="copyright">
      <p>{{ $t("copyright")[0] + "" + $t("copyright")[1] }}</p>
      <p>{{ $t("record") }}</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.footer {
  background-color: #222222;
  padding-top: 16px;
  padding-bottom: 23px;
  @include mq($desktop) {
    color: #b2b6ba;
    padding-bottom: 45px;
    padding-top: 54px;
  }
  .gasket {
    width: 1px;
    height: 167px;
    background-color: #403b39;
    margin-right: 104px;
    margin-left: 122px;
    @include mq($mobile) {
      display: none;
    }
  }
  .branch {
    width: 608px;
    @include mq($mobile) {
      display: none;
    }
    &-info {
      display: block;
    }
    &-item {
      color: #b2b6ba;
      font-size: 12px;
      line-height: 22px;
      text-transform: uppercase;
    }
  }
  .contact {
    display: flex;
    flex-direction: row-reverse;
    @include mq($mobile) {
      display: block;
      padding-left: 16px;
      padding-right: 16px;
      flex: 1;
    }
  }
  .copyright {
    @include mq($mobile) {
      display: none;
    }
    text-align: center;
    padding-top: 34px;
    p {
      color: #999999;
      font-size: 12px;
      line-height: 20px;
    }
  }
  .wechat {
    dt {
      padding-bottom: 10px;
    }
    &-mobile {
      display: none;
      color: #999999;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      padding-left: 10px;
    }
    @include mq($mobile) {
      display: flex;
      dt {
        display: none;
      }
      &-mobile {
        display: block;
      }
    }
    &__title {
      color: #d7d7d7;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 2px;
    }
    &-qrcode {
      width: 80px;
      height: 80px;
      background-color: #fff;
    }
  }

  .consumer-hotline {
    margin-bottom: 12px;
    @include mq($desktop) {
      margin-left: 83px;
    }
    dt {
      height: 20px;
      color: #d7d7d7;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }
    .phone {
      color: #d7d7d7;
      font-size: 26px;
      font-weight: 400;
      @include mq($mobile) {
        color: #b58244;
        font-size: 20px;
      }
    }
  }
}
</style>
<i18n>
{
  "cn":{
    "copyright":["@2004-2020爱康君安","ikangevergreen.com版权所有"],
    "record":"京ICP备041625号",
    "branchs":{
      "title":"君安全国分院",
      "items":["北京:北京市朝阳区建国门外大街乙12号LG双子座大厦2层 电话:400 098 6600-1"]
      },
    "hello":"您好！"
  },
  "en": {
    "copyright":["@2004-2020爱康君安","ikangevergreen.com版权所有"],
    "branchs":{
      "title":"dasdsad",
        "items":["Beijing:LG Plaza Twin Towers, 2nd Floor, 12B Jianguo Men Wai Avenue, Tel: 400 098 6600-1 Beijing 100022"]
    },
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
