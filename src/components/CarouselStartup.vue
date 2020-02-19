<template>
<div class="brand-logo-slider-area bg-gray section-space--pt_100 section-space--pb_60 startup-carousel">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center section-space--mb_30">
          <h2 class="font-weight--bold mb-15 wow move-up">
            <img src="../assets/img/bpsaa/logo.png" class="img-fluid" alt="brand logo">
            {{ $t('bpsaa.bpsaa') }}</h2>
          <span class="section-text wow move-up">{{ $t('bpsaa.desc') }}</span>
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
                    <a href="https://pirate.black/"><img src="../assets/img/bpsaa/pirate.png" class="img-fluid" alt="brand logo"></a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <a href="https://www.turtlenetwork.eu/"><img src="../assets/img/bpsaa/turtle.png" class="img-fluid" alt="brand logo"></a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <a href="https://sentinel.co/"><img src="../assets/img/bpsaa/sentinel.png" class="img-fluid" alt="brand logo"></a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-logo mb-0 wow move-up">
                    <img src="../assets/img/logo/logo2.svg" class="img-fluid" alt="brand logo" style="width: 255px; height: 127.5px;">
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
  name: 'CarouselStartup',
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
