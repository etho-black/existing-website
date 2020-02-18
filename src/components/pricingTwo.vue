<template>
<div class="row pricing-table-two">
  <div class="col-md-6 col-lg-4 pricing-table pricing-table--popular wow move-up">
    <div class="pricing-table__inner">
      <div class="pricing-table__header">
        <div class="pricing-table__image">
          <img src="../assets/img/pricing/aeroland-pricing-image-06.png" class="img-fluid" alt="Pricing Thumb">
        </div>
        <h5 class="pricing-table__title">Service Node</h5>
        <div class="pricing-table__price-wrap">
          <h6 class="price">5000 ETHO</h6>
        </div>
      </div>
      <h5 class="pricing-table__title">Service Node {{ $t('nodes.requirements') }}:</h5>
      <div class="pricing-table__body">
        <ul class="pricing-table__list text-left">
          <li>20 GB {{ $t('nodes.storage') }}</li>
          <li>1 GB {{ $t('nodes.ram') }}</li>
          <li> {{ $t('nodes.ip') }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-4 pricing-table pricing-table--popular wow move-up">
    <div class="pricing-table__inner">
      <div class="pricing-table__header">
        <div class="pricing-table__image">
          <img src="../assets/img/pricing/aeroland-pricing-image-06.png" class="img-fluid" alt="Pricing Thumb">
        </div>
        <h5 class="pricing-table__title">Master Node</h5>
        <div class="pricing-table__price-wrap">
          <h6 class="price">15000 ETHO</h6>
        </div>
      </div>
      <h5 class="pricing-table__title">Master Node {{ $t('nodes.requirements') }}:</h5>
      <div class="pricing-table__body">
        <ul class="pricing-table__list text-left">
          <li>40 GB {{ $t('nodes.storage') }}</li>
          <li>2 GB {{ $t('nodes.ram') }}</li>
          <li>{{ $t('nodes.ip') }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-4 pricing-table pricing-table--popular wow move-up">
    <div class="pricing-table__inner">
      <div class="pricing-table__header">
        <div class="pricing-table__image">
          <img src="../assets/img/pricing/aeroland-pricing-image-06.png" class="img-fluid" alt="Pricing Thumb">
        </div>
        <h5 class="pricing-table__title">Gatewat Node</h5>
        <div class="pricing-table__price-wrap">
          <h6 class="price" id="sn">30000 ETHO</h6>
        </div>
      </div>
      <h5 class="pricing-table__title">Gateway Node {{ $t('nodes.requirements') }}:</h5>
      <div class="pricing-table__body">
        <ul class="pricing-table__list text-left">
          <li>80 GB {{ $t('nodes.storage') }}</li>
          <li>4 GB {{ $t('nodes.ram') }}</li>
          <li>{{ $t('nodes.ip') }}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'pricingTwo',
  data() {
    return {}
  },
  methods: {
    getMarkers: function() {
    },
    created() {
      this.getMarkers()
    }
  },
}
</script>
