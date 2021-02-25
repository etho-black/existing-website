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
            <li><a href="https://control.cloud.co.za/aff.php?aff=61" class="hover-style-link">{{ $t('footer.vps1') }}</a></li>
            <li><a href="https://m.do.co/c/3d164b7256f7" class="hover-style-link">{{ $t('footer.vps2') }}</a></li>
            <li><a href="https://www.vultr.com/?ref=7613496" class="hover-style-link">{{ $t('footer.vps3') }}</a></li>
            <li><a href="https://www.hetzner.com/" class="hover-style-link">{{ $t('footer.vps4') }}</a></li>
            <li><a href="https://contabo.com/" class="hover-style-link">{{ $t('footer.vps5') }}</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 footer-widget">
          <h6 class="footer-widget__title mb-20">{{ $t('footer.heading2') }}</h6>
          <ul class="footer-widget__list">
            <li><a href="whitepaper.pdf" class="hover-style-link">Whitepaper</a></li>
            <li><a href="https://github.com/etho-black/ethopay" class="hover-style-link">ETHOPay</a></li>
            <li><a href="https://explorer.ether1.org/" class="hover-style-link">{{ $t('footer.link6') }}</a></li>
            <li><a href="https://blocks.ether1.org/" class="hover-style-link">{{ $t('footer.link2') }}</a></li>
            <li><a href="https://docs.ether1.org" class="hover-style-link">{{ $t('footer.link4') }}</a></li>
            <li><a href="https://nodes.ether1.org" class="hover-style-link">{{ $t('footer.link5') }}</a></li>
            <li><a href="https://bitcointalk.org/index.php?topic=3725742.0" class="hover-style-link">{{ $t('footer.link7') }}</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 footer-widget">
          <h6 class="footer-widget__title mb-20">{{ $t('footer.heading3') }}</h6>
          <ul class="footer-widget__list">
            <li><a href="https://etho.black" class="hover-style-link">{{ $t('footer.enclave1') }}</a></li>
            <li><a href="https://etholabs.org" class="hover-style-link">{{ $t('footer.enclave3') }}</a></li>
          </ul>
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
