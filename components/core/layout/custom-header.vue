<template>
  <header class="header">
    <header-logo />
    <nav class="header__navigation">
      <nuxt-link
        v-for="link in navigationLinks"
        :key="link.to"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">

import HeaderLogo from '~/components/svg/header-logo.vue';

const {t} = useI18n();
const navigationLinks = [
  {
    to: '/',
    label: t('navigation.home'),
  },
  // {
  //   to: '/shop',
  //   label: t('navigation.shop')
  // },
  // {
  //   to: '/about',
  //   label: t('navigation.about')
  // },
  // {
  //   to: '/contact',
  //   label: t('navigation.contact')
  // }
];
</script>

<style scoped>

</style>
