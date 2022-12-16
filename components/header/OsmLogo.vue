<template>
    <nuxt-link :to="localePath({ name: 'index' })" class="header__logo">
      <nuxt-img src="/logo.svg" class="header__object"/>
    </nuxt-link>
</template>


<style lang="scss" scoped>
.header {
    &__logo {
        display: block;
        width: rem(187);
        font-size: 0;
        @media all and (max-width: 1280px) {
            width: 187px;
        }
        @media all and (max-width: 840px) {
            width: 114px;
        }
    }
    &__object {
      width: 100%;
        pointer-events: none;
    }
}
</style>
