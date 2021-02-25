<template>
<div class="brand-logo-slider-area section-space--pt_100 section-space--pb_60 startup-carousel">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center section-space--mb_30">
          <h2 class="font-weight--bold mb-15 wow move-up">
            {{ $t('swaps.heading1') }}</h2>
          <span class="section-text wow move-up">{{ $t('swaps.desc') }}</span>
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
                    <a href="https://pancakeswap.info/token/0x0e900aa6ed4244c43d597e6d2f8fb3994303ed99">
                      <img src="../assets/img/swaps/pancakeswap.png" class="img-fluid" alt="brand logo" style="width: 255px; margin-top: 40px">
                    </a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <a href="https://info.honeyswap.org/token/0xb17d999e840e0c1b157ca5ab8039bd958b5fa317">
                      <img src="../assets/img/swaps/honeyswap.jpg" class="img-fluid" alt="brand logo" style="width: 255px; height: 140px; margin-top: 40px">
                    </a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <a href="https://info.uniswap.org/token/0x99676c9fA4c77848aEb2383fCFbD7e980dC25027">
                      <img src="../assets/img/swaps/uniswap.png" class="img-fluid" alt="brand logo" style="width: 255px; margin-top: 40px">
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
