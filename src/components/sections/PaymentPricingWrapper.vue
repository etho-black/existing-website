<template>
<div class="payment-staps-pricing_wrapper payment-pricing-table-bg">

  <!--========= Pricing  Table Area ===========-->
  <div class="pricing-table-area section-space--pb_120 position-relative" id="pricing">
    <div class="pricing-table-title-area position-relative section-table_gradeient">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title-wrapper text-center section-space--mb_60">
              <h2 class="section-title text-white font-width-light mb-15 wow move-up">{{ $t('nodes.heading1') }}</h2>
              <p class="text-white wow move-up">{{ $t('nodes.desc') }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="pricing-table-content-area">
      <div class="container">
        <!-- PricingTwo component -->
        <PricingTwo />
      </div>
    </div>

  </div>
  <!--========= Pricing  Table End ===========-->
</div>
</template>

<script>
import PricingTwo from '../pricingTwo'
export default {
  name: 'PaymentPricingWrapper',
  components: {
    PricingTwo
  },
  data() {
    return {
      delay: 300
    }
  },
}
</script>
