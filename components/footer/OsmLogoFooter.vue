<template>
    <nuxt-link :to="{ name: 'index' }" class="footer__logo">
      <nuxt-img v-show="$i18n.locale === 'ru'" src="/logo.svg" class="footer__object"/>
      <nuxt-img v-show="$i18n.locale === 'en'" src="/logo_eng.svg" class="footer__object"/>
    </nuxt-link>
</template>


<style lang="scss" scoped>
.footer {
    &__logo {
      display: block;
      font-size: 0;
      margin-bottom: rem(30);
      width: rem(187);
      flex-shrink: 0;

      @media all and (max-width: 1280px) {
        width: 187px;
      }
      @media all and (max-width: 840px) {
        width: 114px;
      }
    }
    &__object {
      pointer-events: none;
      width: 100%;
    }
}
</style>
