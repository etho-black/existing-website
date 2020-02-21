<template>
<div class="ht-tab-wrap">
  <b-tabs class="ht-tab-menu wow move-up">
    <b-tab :title="$t('about.features')" active>
      <!-- tab content one component -->
      <TabContentOne />
    </b-tab>
    <b-tab :title="$t('about.mission')">
      <!-- tab content two component -->
      <TabContentTwo />
    </b-tab>
  </b-tabs>
</div>
</template>

<script>
import TabContentOne from '../components/TabContentOne'
import TabContentTwo from '../components/TabContentTwo'

export default {
  name: 'TabOne',
  components: {
    TabContentOne,
    TabContentTwo
  }
};
</script>
