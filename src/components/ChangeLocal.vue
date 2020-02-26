<template>
<select v-model="$root.$i18n.locale" class="default-nav justify-content-center">
  <option class="change-lang navbar-nav main-menu text-white" v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang"> {{ $t('language') }} {{ lang }} </option>
</select>
</template>

<script>
export default {
  name: 'locale-changer',
  data() {
    return {
      langs: ['EN', 'NL', 'NO']
    }
  }
}
</script>

<style>

select:after {
  display: none;
};

option:after {
  display: none;
};
</style>
