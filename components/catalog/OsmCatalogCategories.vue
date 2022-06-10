<template>
    <div class="categories">
        <div class="categories__item" v-for="item in 9" :key="item.index">
            <div class="categories__item_image">
                <div class="image_container">
                    <img :src="require('~/assets/img/sections/second.jpg')" alt="">
                </div>
            </div>
            <nuxt-link :to="{name: 'index'}" class="categories__item_name">Фильтры</nuxt-link>
            <ul class="categories__item_childs">
                <li class="categories__item_child" v-for="child in 4" :key="child.index">
                    <nuxt-link :to="{name: 'index' }">Фланцевые;</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.categories {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    &__item {
        width: calc(100% / 3 - #{vw(40)} / 2);
        &:nth-child(n + 4) {
            margin-top: vw(79);
        }
    }
    &__item_image {
        background: #D7DCE1;
        margin-bottom: vw(40);
        .image_container {
            position: relative;
            padding-top: 50%;
        }
        img {
            position: absolute;
            top: 0;
            left: 50%;
            height: 100%;
            transform: translateX(-50%);
        }
    }
    &__item_name {
        margin-bottom: vw(15);
        display: block;
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: vw(20);
        line-height: 140%;
        color: #172242;
    }
    &__item_childs {
        margin: 0;
        padding: 0 0 0 vw(23);
    }
    &__item_child {
        font-style: normal;
        font-weight: 400;
        font-size: vw(16);
        line-height: 140%;
        color: #555F76;
        &:not(:last-child) {
            margin-bottom: vw(10);
        }
        a {
            text-decoration: none;
            font-style: inherit;
            font-weight: inherit;
            font-size: inherit;
            line-height: inherit;
            color: inherit;
        }
    }
}
</style>