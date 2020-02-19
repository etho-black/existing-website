<template>
<div class="footer-area-wrapper" :class="FooterStyle">
  <div class="footer-area section-space--ptb_90">
    <div class="container">
      <div class="row footer-widget-wrapper">
        <div class="col-lg-4 col-md-6 footer-widget">
          <div class="footer-widget__logo mb-30">
            <router-link to="/">
              <img src="../assets/img/logo/logo.svg" class="img-fluid logo-light" alt="logo">
            </router-link>
          </div>
          <ul class="footer-widget__list">
            <li><i class="fas fa-globe"></i> {{ $t('footer.location') }}</li>
            <li><a href="mailto:admin@ether1.org" class="hover-style-link">{{ $t('footer.email') }}</a></li>
            <li><a href="tel:888-700-3846" class="hover-style-link">+1.888.700.ETHO</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 footer-widget">
          <h6 class="footer-widget__title mb-20">{{ $t('footer.heading1') }}</h6>
          <ul class="footer-widget__list">
            <li><a href="#" class="hover-style-link">About us</a></li>
            <li><a href="#" class="hover-style-link">Before you go</a></li>
            <li><a href="#" class="hover-style-link">Online check in</a></li>
            <li><a href="#" class="hover-style-link">FAQ</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 footer-widget">
          <h6 class="footer-widget__title mb-20">{{ $t('footer.heading2') }}</h6>
          <ul class="footer-widget__list">
            <li><a href="#" class="hover-style-link">Pick up locations</a></li>
            <li><a href="#" class="hover-style-link">Terms of Payment</a></li>
            <li><a href="#" class="hover-style-link">Privacy Policy</a></li>
            <li><a href="#" class="hover-style-link">Where to Find Us</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 offset-lg-1 footer-widget">
          <div class="twitter-feed-slider">
            <div class="swiper-container twitter-feed-slider__container">
              <div class="swiper-wrapper twitter-feed-slider__wrapper">
                <div class="swiper-slide twitter-feed-slider__single">
                  <div class="tweet">
                    <div class="tweet__text">
                      "The ocean never ceases to amaze!" Feature: Ben Klea
                      <a href="https://t.co/jSRMsZAdPW" target="_blank">https://t.co/jSRMsZAdPW</a>
                      <a href="https://t.co/2iDReuyPMt" target="_blank">https://t.co/2iDReuyPMt</a>
                    </div>
                    <div class="tweet__info">
                      <h6 class="tweet__heading">Unsplash</h6>
                      <span class="tweet__date">May 07, 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-copyright-area border-top section-space--ptb_30">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-left">
          <span class="copyright-text">{{ $t('footer.copyright') }}</span>
        </div>
        <div class="col-md-6 text-center text-md-right">
          <ul class="list ht-social-networks solid-rounded-icon">
            <li class="item">
              <a href="https://www.facebook.com/Ether1Project/" target="_blank" class="social-link"> <i class="fab fa-facebook social-link-icon"></i> </a>
            </li>
            <li class="item">
              <a href="https://twitter.com/Ether1Official" target="_blank" class="social-link"> <i class="fab fa-twitter social-link-icon"></i> </a>
            </li>
            <li class="item">
              <a href="https://www.instagram.com/ether1official/" target="_blank" class="social-link"> <i class="fab fa-instagram social-link-icon"></i> </a>
            </li>
            <li class="item">
              <a href="https://github.com/Ether1Project" target="_blank" class="social-link"> <i class="fab fa-github social-link-icon"></i> </a>
            </li>
            <li class="item">
              <a href="https://play.google.com/store/apps/details?id=com.ether1.trust.wallet" target="_blank" class="social-link"> <i class="fab fa-android social-link-icon"></i> </a>
            </li>
          </ul>
          <ul class="list ht-social-networks solid-rounded-icon">
            <li class="item">
              <a href="https://t.me/Ether_1" target="_blank" class="social-link"> <i class="fab fa-telegram social-link-icon"></i> </a>
            </li>
            <li class="item">
              <a href="https://old.reddit.com/r/etho1/" target="_blank" class="social-link"> <i class="fab fa-reddit social-link-icon"></i> </a>
            </li>
            <li class="item">
              <a href="https://medium.com/@Ether1Official" target="_blank" class="social-link"> <i class="fab fa-medium social-link-icon"></i> </a>
            </li>
            <li class="item">
              <a href="https://www.youtube.com/c/ether1" target="_blank" class="social-link"> <i class="fab fa-youtube social-link-icon"></i> </a>
            </li>
            <li class="item">
              <a href="https://discordapp.com/invite/MFn9Tmz" target="_blank" class="social-link"> <i class="fab fa-discord social-link-icon"></i> </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FooterMain',
  props: ["FooterStyle"]
}
</script>
