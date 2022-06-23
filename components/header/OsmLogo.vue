<template>
    <nuxt-link :to="{ name: 'index' }" class="header__logo">
        <object :data="require(`~/assets/img/logo.svg`)" width="100%" class="header__object" />
    </nuxt-link>
</template>


<style lang="scss" scoped>
.header {
    &__logo {
        display: block;
        width: vw(187);
        font-size: 0;
        @media all and (max-width: 1024px) {
            width: 187px;
        }
        @media all and (max-width: 640px) {
            width: 114px;
        }
    }
    &__object {
        pointer-events: none;
    }
}
</style>