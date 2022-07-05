<template>
    <nuxt-link :to="{name: 'index'}" class="category">
        <div class="category__background">
            <img :src="require('~/assets/img/cat.jpg')" alt="">
        </div>
        <div class="category__name">Лодки и катера</div>
    </nuxt-link>
</template>

<style lang="scss" scoped>
.category {
    position: relative;
    &__background {
        height: rem(282);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    &__name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: rem(30);
        font-style: normal;
        font-weight: 600;
        font-size: rem(20);
        line-height: 140%;
        color: #FFFFFF;
    }
}
</style>