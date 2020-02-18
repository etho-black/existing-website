<template>
<div class="tab-mission-wrap section-space--mt_60">
  <div class="row align-items-center">
    <div class="col-lg-7">
      <div class="tab-mission-image">
        <img src="../assets/img/banners/aeroland-tab-content-image-05.png" alt="" class="img-fluid">
      </div>
    </div>
    <div class="col-lg-5">
      <div class="tab-content-inner">
        <h4 class="font-weight--light" style="">{{$t('about.missions.heading1')}}<br>{{$t('about.missions.heading2')}}</h4>
        <p class="dec section-space--mt_40 section-space--mb_40">{{$t('about.missions.body')}} </p>
        <div class="tab-button section-space--mb_40">
          <a href="#" class="ht-btn ht-btn-md">{{$t('about.missions.button')}} </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabContentTwo'
};
</script>
