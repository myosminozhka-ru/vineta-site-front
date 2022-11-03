<template>
    <nuxt-link :to="{ name: 'index' }" class="footer__logo">
        <object :data="require(`~/assets/img/logo.svg`)" width="100%" class="footer__object" />
    </nuxt-link>
</template>


<style lang="scss" scoped>
.footer {
    &__logo {
        display: block;
        font-size: 0;
        margin-bottom: rem(30);
    }
    &__object {
        pointer-events: none;
    }
}
</style>