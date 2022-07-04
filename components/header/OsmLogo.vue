<template>
    <nuxt-link :to="{ name: 'index' }" class="header__logo">
        <object :data="require(`~/assets/img/logo.svg`)" width="100%" class="header__object" />
    </nuxt-link>
</template>


<style lang="scss" scoped>
.header {
    &__logo {
        display: block;
        width: rem(187);
        font-size: 0;
        @media all and (max-width: 1440px) {
            width: 187px;
        }
        @media all and (max-width: 840px) {
            width: 114px;
        }
    }
    &__object {
        pointer-events: none;
    }
}
</style>