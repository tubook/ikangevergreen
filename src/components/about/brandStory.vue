<template>
  <div>
    <el-button>按钮</el-button>
    <el-DatePicker></el-DatePicker>
    <div class="p20">
      <h3 class="">爱康君安 保驾幸福 守护健康</h3>
      <p>IKANG EVERGREEN HAPPINESS PROTECT HEALTH</p>
    </div>
    <dl class="graphic p20">
      <dt class="graphic__picture">
        <img src="https://unsplash.it/460/275/?random" alt="" />
      </dt>
      <dd class="pl10">
        健康管理就是为幸福提供一份切实有力的保险，为享受“成功红利”提供保障。爱康君安致力于将国际前沿的预防医疗以及整合医疗模式引入中国，以卓越的医学团队与检测设备，提供从高端体检、防癌筛查到出国就诊、私人医生等的健康服务，全方位精细化管理高端人士及家人的健康，帮助他们尽享生命的收获。
      </dd>
    </dl>
  </div>
</template>
<style lang="scss">
.graphic {
  text-align: left;
  @include mq($large) {
    display: flex;
  }
  .graphic__picture {
    img {
      @include mq($small) {
        width: 100%;
      }
    }
  }
}
</style>
