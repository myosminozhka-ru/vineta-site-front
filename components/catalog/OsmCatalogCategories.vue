<template>
    <div class="categories">
        <div class="categories__item" v-for="category in getCatalog" :key="category.ID">
            <nuxt-link :to="localePath({name: 'catalog-catalogId', params: {catalogId: category.CODE}})" class="categories__item_image">
                <div class="image_container">
                    <img v-if="category.DETAIL_PICTURE" :src="$vareibles.remote + category.DETAIL_PICTURE" alt="">
                    <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                </div>
            </nuxt-link >
            <nuxt-link :to="localePath({name: 'catalog-catalogId', params: {catalogId: category.CODE}})" class="categories__item_name">{{ category.NAME }}</nuxt-link>
            <template v-if="'CHILD' in category">
                <ul class="categories__item_childs" v-if="'CHILD' in category">
                    <li v-for="child in category.CHILD" :key="child.index">
                        <nuxt-link class="categories__item_category" :to="localePath({name: 'catalog-catalogId', params: {catalogId: child.CODE}})">{{ child.NAME }}</nuxt-link>
                        <ul>
                            <li class="categories__item_child" v-for="product in getProducts.filter(element => element.SECTION.CODE === child.CODE)" :key="product.index">
                                <nuxt-link :to="localePath(`/catalog/${child.CODE}/${product.CODE}`)">— {{ product.NAME }}</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </template>
            <template v-else>
                <ul class="categories__item_childs">
                    <li>
                        <ul>
                            <li class="categories__item_child" v-for="product in getProducts.filter(element => element.SECTION.CODE === category.CODE)" :key="product.index">
                                <nuxt-link :to="localePath(`/catalog/${category.CODE}/${product.CODE}`)">— {{ product.NAME }}</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['getCatalog']),
        ...mapGetters(['getProducts']),
    },
}
</script>


<style lang="scss" scoped>
.categories {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        margin-bottom: 30px;
    }
    &__item {
        width: calc(100% / 3 - #{rem(40)} / 3);
        &:nth-child(n + 4) {
            margin-top: rem(79);
        }
        @media all and (max-width: 1280px) {
            width: calc(100% / 2 - 10px);
            &:nth-child(n + 3) {
                margin-top: 30px;
            }
        }
        @media all and (max-width: 840px) {
            width: 100%;
            &:nth-child(n + 2) {
                margin-top: 20px;
            }
        }
    }
    &__item_image {
        background: #D7DCE1;
        margin-bottom: rem(40);
        display: block;
        @media all and (max-width: 1280px) {
            margin-bottom: 30px;
        }
        @media all and (max-width: 840px) {
            margin-bottom: 20px;
        }
        .image_container {
            position: relative;
            padding-top: 58%;
            @media all and (max-width: 1440px) {
                padding-top: 76%;
            }
            @media all and (max-width: 1280px) {
                padding-top: 58%;
            }
            @media all and (max-width: 840px) {
                padding-top: 83%;
            }
        }
        img {
            position: absolute;
            top: 0;
            width: 100%;
            left: 50%;
            height: 100%;
            transform: translateX(-50%);
        }
    }
    &__item_name {
        margin-bottom: rem(15);
        display: block;
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: rem(20);
        line-height: 140%;
        color: #172242;
        transition: all .3s ease;
        @media all and (max-width: 1280px) {
            margin-bottom: 15px;
            font-size: 20px;
        }
        &:hover {
            color: #FF0040;
        }
    }
    &__item_category {
        margin-bottom: rem(15);
        display: block;
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: rem(16);
        line-height: 140%;
        color: #172242;
        transition: all .3s ease;
        @media all and (max-width: 1280px) {
            margin-bottom: 15px;
            font-size: 20px;
        }
        &:hover {
            color: #FF0040;
        }
    }
    &__item_childs {
        margin: 0;
        padding: 0;
        list-style: none;
        ul {
            padding: 0;
            list-style: none;
        }
        & > li:not(:last-child) {
            margin-bottom: rem(15);
        }
        @media all and (max-width: 1280px) {
            padding: 0 0 0 23px;
        }
    }
    &__item_child {
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        line-height: 140%;
        color: #555F76;
        @media all and (max-width: 1280px) {
            font-size: 16px;
        }
        &:not(:last-child) {
            margin-bottom: rem(10);
            @media all and (max-width: 1280px) {
                margin-bottom: 10px;
            }
        }
        a {
            text-decoration: none;
            font-style: inherit;
            font-weight: inherit;
            font-size: inherit;
            line-height: inherit;
            color: inherit;
            position: relative;
            &:after {
                content: "";
                position: absolute;
                right: 0;
                left: 0;
                bottom: rem(-5);
                height: 0;
                background: #FF0040;
                transition: all .3s ease;
                border-radius: rem(5);
            }
        }
        &:hover {
            color: #FF0040;
            a:after {
                height: 1px;
            }
        }
    }
}
</style>