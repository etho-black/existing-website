<template>
<div class="team-member-wrapper section-space--pt_120 section-space--pb_60">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title text-center section-space--mb_60">
          <h2 class="font-weight--light mb-15">{{ $t('team.dev.heading1') }}</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="grid-item">
          <div class="ht-team-member text-center">
            <div class="team-image">
              <img class="img-fluid" src="../assets/img/team/avatar-01.png" alt="">
            </div>
            <div class="team-info text-center">
              <h5 class="name">{{ $t('team.dev.exlo') }}</h5>
              <div class="position">{{ $t('team.dev.exlo-role') }}</div>
              <div class="social-networks">
                <div class="inner">
                  <a href="#" class=" hint--bounce hint--top  hint--primary" aria-label="Github"><i class="fab fa-github"></i>
                  </a>
                  <a href="#" class=" hint--bounce hint--top hint--primary" aria-label="Twitter"><i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
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
  name: 'TeamDev',
}
</script>
