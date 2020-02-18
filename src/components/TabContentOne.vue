<template>
<div class="tab-history-wrap section-space--mt_80">
  <div class="row">
    <div class="col-lg-7">
      <div class="tab-history-image">
        <img src="../assets/img/banners/aeroland-tab-content-image-04.png" alt="" class="img-fluid">
      </div>
    </div>
    <div class="col-lg-5">
      <div class="tab-content-inner">
        <div class="heading mb-30">{{$t('about.feat-content.desc')}}</div>
        <ul class="check-list green-check-list section-space--mb_50">
          <li class="list-item">{{$t('about.feat-content.item1')}} </li>
          <li class="list-item">{{$t('about.feat-content.item2')}} </li>
          <li class="list-item">{{$t('about.feat-content.item3')}} </li>
          <li class="list-item">{{$t('about.feat-content.item4')}} </li>
        </ul>
        <div class="tab-button mb-30">
          <a href="#" class="ht-btn ht-btn-md">{{$t('about.feat-content.button')}} </a>
        </div>
        <h6 class="sub-heading">{{$t('about.feat-content.news')}} <a href="#" class="hover-style-link hover-style-link--green">{{$t('about.feat-content.learn')}}</a></h6>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabContentOne'
};
</script>
