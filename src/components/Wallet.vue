<template>
<div class="section-space--mt_80">
  <div class="row">
    <div class="col-lg-7">
      <div class="tab-history-image img-fluid">
        <img src="../assets/img/other/Mockup.png" style="width: 250px; height: 500px; padding-top: 0px; margin-left: 30%" />
      </div>
    </div>
    <div class="col-lg-5">
      <div class="tab-content-inner">
        <div class="heading mb-30">The Ether-1 Mobile Wallet allows users to securely store their $ETHO, $ATH & $XERO on their iOS/iPadOS device. <br> <br> Users can transact $ETHO, $ATH, $EGEM & $XERO between each other quickly and discretely by using their address or QR code. Users can also store their $ETHO, $ATH, $EGEM & $XERO and view their current holdings in the currency of their choice.</div>
        <div class="tab-button mb-30">
          <a href="https://apps.apple.com/za/app/nextshore-ether-1-wallet/id1521802485" class="ht-btn ht-btn-md">iOS Version </a>
          <a href="https://play.google.com/store/apps/details?id=app.web.nextshore_ether1" style="margin-left: 5px;" class="ht-btn ht-btn-md">Android Version</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Wallet'
};
</script>

<style>
#bar {
  animation: upload 5s ease-in infinite;
  transform-origin: center;
  transform-box: fill-box;
  opacity: 1;
}


@keyframes upload {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
