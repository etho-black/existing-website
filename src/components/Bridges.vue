<template>
<div class="brand-logo-slider-area section-space--pt_100 section-space--pb_60 startup-carousel">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center section-space--mb_30">
          <h2 class="font-weight--bold mb-15 wow move-up">
            {{ $t('bridges.heading1') }}</h2>
          <span class="section-text wow move-up">{{ $t('bridges.desc') }}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="brand-logo-slider__container-area">
          <div class="swiper-container brand-logo-slider__container">
            <div class="swiper-wrapper brand-logo-slider__wrapper">
              <swiper :options="swiperOption">
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <a href="https://honeyswap.ether1.org">
                      <img src="../assets/img/bridges/xdai.jpg" class="img-fluid" alt="brand logo" style="width: 255px; height: 80px; margin-top: 40px">
                    </a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <a href="https://bsc.ether1.org/">
                      <img src="../assets/img/bridges/bsc.svg" class="img-fluid" alt="brand logo" style="width: 255px; margin-top: 40px">
                    </a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <a href="https://eth.ether1.org/">
                      <img src="../assets/img/bridges/eth.png" class="img-fluid" alt="brand logo" style="width: 255px; margin-top: 40px">
                    </a>
                  </div>
                </div>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'swaps',
  data() {
    return {
      swiperOption: {
        speed: 0,
        loop: false,
        autoplay: false,
        slidesPerView: 3,
        spaceBetween: 50,
        breakpoints: {
          991: {
            slidesPerView: 3
          },

          767: {
            slidesPerView: 2
          },
          575: {
            slidesPerView: 1
          }
        }
      }
    }
  }
}
</script>
