<template>
<div class="brand-logo-slider-area section-space--pt_100 section-space--pb_60 startup-carousel">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center section-space--mb_30">
          <h2 class="font-weight--bold mb-15 wow move-up">
            {{ $t('exchanges.heading1') }}</h2>
          <span class="section-text wow move-up">{{ $t('exchanges.desc') }}</span>
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
                    <a href="https://cryptowolf.eu/">
                      <img src="../assets/img/exchanges/cw.png" class="img-fluid" alt="brand logo" style="width: 175px; height: 50px; margin-top: 40px">
                    </a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <a href="https://mercatox.com/?referrer=467736">
                      <img src="../assets/img/exchanges/merc.png" class="img-fluid" alt="brand logo" style="width: 255px; height: 50px; margin-top: 40px">
                    </a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <a href="https://graviex.net/signup?ref=9e850883e0016283f7b75f8f">
                      <img src="../assets/img/exchanges/graviex.png" class="img-fluid" alt="brand logo" style="width: 150px; height: 127.5px;">
                    </a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <a href="https://app.stex.com?ref=fallengravity">
                      <img src="../assets/img/exchanges/stex.svg" class="img-fluid" alt="brand logo" style="width: 255px; height: 127.5px;">
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
  name: 'exchanges',
  data() {
    return {
      swiperOption: {
        speed: 800,
        loop: true,
        autoplay: true,
        slidesPerView: 4,
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
