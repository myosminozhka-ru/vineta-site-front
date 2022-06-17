<template>
    <div class="header__info">
        <nuxt-link class="header__button header__button--search" :to="{ name: 'index' }">
            <object :data="require(`~/assets/img/search.svg`)" width="100%" />
        </nuxt-link>
        <nuxt-link class="header__button header__button--favorites" :to="{ name: 'index' }">
            <object :data="require(`~/assets/img/favorites.svg`)" width="100%" />
            <div v-if="favoritesCount" class="header__count">
                {{ favoritesCount }}
            </div>
        </nuxt-link>
        <div class="header__langs">
            <nuxt-link :to="{ name: 'index' }" class="isActive">Ру</nuxt-link>
            <div class="delim">/</div>
            <nuxt-link :to="{ name: 'index' }">En</nuxt-link>
        </div>
        <a href="tel:+78124935048" class="header__phone">+7 (812) 493-50-48</a>
    </div>
</template>

<script>
export default {
    name: "OsmInfo",
    data: () => ({
        favoritesCount: 4,
    })
}
</script>

<style lang="scss" scoped>
.header {
    &__info {
        display: flex;
        align-items: center;
    }
    &__button {
        display: block;
        font-size: 0;
        width: vw(30);
        margin-right: vw(40);
        position: relative;
        @media all and (max-width: 1024px) {
            width: 30px;
            margin-right: 30px;
        }
    }
    &__count {
        position: absolute;
        top: vw(-5);
        left: vw(-5);
        width: vw(19);
        height: vw(19);
        font-size: vw(14);
        line-height: vw(19);
        font-style: normal;
        font-weight: 400;
        color: #FFFFFF;
        background: #FF004D;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        text-align: center;
        border-radius: 50%;
        @media all and (max-width: 1024px) {
            top: -5px;
            left: -5px;
            width: 19px;
            height: 19px;
            font-size: 14px;
            line-height: 19px;
        }
    }
    &__langs {
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: vw(18);
        margin-right: vw(40);
        line-height: 140%;
        color: #D7DCE1;
        @media all and (max-width: 1024px) {
            font-size: 18px;
            margin-right: 31px;
        }
        .delim {
            margin: 0 vw(8);
        }
        a {
            text-decoration: none;
            font-style: inherit;
            font-weight: inherit;
            font-size: inherit;
            line-height: inherit;
            color: inherit;
            &.isActive {
                font-weight: 600;
            }
        }
    }
    &__phone {
        font-style: normal;
        font-weight: 600;
        font-size: vw(20);
        line-height: 140%;
        color: #D7DCE1;
        text-decoration: none;
        @media all and (max-width: 1024px) {
            font-size: 20px;
        }
    }
    object {
        pointer-events: none;
    }
}
</style>