<template>
<div class="main-container">

  <router-view></router-view>

  <!-- Navbar section -->
  <HeaderStartup />

  <!-- hero section -->
  <HeroStartup />

  <!-- service area  -->
  <CurveShape class="no-height">
    <template v-slot:bgcolor style="padding-top: 20px;">
      <path style="fill: #1f1f1f;
                    stroke-miterlimit:10;" d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z" />
    </template>
  </CurveShape>

  <div class="tabs-wrapper startup-tab section-space--mt_30 section-space--pb_120" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
            <h2 class="section-title font-weight--bold mb-15">{{ $t('about.heading1') }}<br>{{ $t('about.heading2') }}</h2>
          </div>
        </div>
      </div>
      <TabOne />
    </div>
  </div>

  <div id="team"> </div>
  <TeamOne />
  <TeamDev />
  <TeamCouncil />

  <div id="nodes"> </div>
  <PaymentPricingWrapper />

  <div id="bpsaa"> </div>
  <CarouselStartup />

  <FooterMain FooterStyle="bg_drak-footer" />

</div>
</template>

<script>
import HeaderStartup from '../components/HeaderStartup'
import HeroStartup from '../components/HeroStartup'
import CurveShape from '../components/CurveShape'
import TabOne from '../components/TabOne'
import TeamOne from '../components/TeamOne'
import CarouselStartup from '../components/CarouselStartup'
import FooterMain from '../components/FooterMain'
import TeamDev from '../components/TeamDev'
import TeamCouncil from '../components/TeamCouncil'
import PaymentPricingWrapper from '@/components/sections/PaymentPricingWrapper'

export default {
  name: 'app',
  components: {
    HeaderStartup,
    HeroStartup,
    CurveShape,
    TabOne,
    TeamOne,
    CarouselStartup,
    FooterMain,
    TeamDev,
    TeamCouncil,
    PaymentPricingWrapper
  }
}
</script>
