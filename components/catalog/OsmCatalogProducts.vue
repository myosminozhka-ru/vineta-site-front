<template>
    <div class="products">
        <div class="products__items" v-if="products">
            <div class="products__item" v-for="product in products" :key="product.ID">
                <div class="products__item_image">
                    <div class="image_container">
                        <img :src="require('~/assets/img/sections/second.jpg')" alt="">
                    </div>
                </div>
                <div class="products__item_data">
                    <nuxt-link class="products__item_name" :to="{name: 'index'}">{{product.NAME}}</nuxt-link>
                    <div class="products__item_sku">ТУ 3683-005-54116265-2011</div>
                    <div class="products__item_properties">
                        <div class="products__item_property" v-for="property in product.PROPERIES" :key="property.index">
                            <div class="name">{{ property.NAME }}</div>
                            <div class="value">{{ property.VALUE }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="products__none" v-else>
            Нет товаров
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data: () => ({
        products: [],
    }),
    beforeDestroy() {
        this.products = [];
        console.log(this.products);
    },
    computed: {
        ...mapGetters(['getCatalog']),
        catalogId() {
            return this.$route.params.catalogId
        },
        currentCategory() {
            return this.getCatalog.filter(item => item.CODE === this.catalogId)
        }
    },
    async fetch() {
        this.products = await this.$axios.$get(`catalog/elements.php?id=${this.$route.params.catalogId}&sub=y`);
        console.log(this.products);
    }
}
</script>

<style lang="scss">
.products {
    &__items {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        // justify-content: space-between;
    }
    &__item {
        width: calc(100% / 3 - #{vw(40)} / 3);
        border: 1px solid #D7DCE1;
        box-sizing: border-box;
        transition: all .3s ease;
        &:hover {
            border-color: transparent;
        }
        &:nth-child(n + 4) {
            margin-top: vw(79);
        }
        &:not(:nth-child(3n+3)) {
            margin-right: vw(20);
        }
    }
    &__item_image {
        background: #D7DCE1;
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
    &__item_data {
        padding: vw(20);
    }
    &__item_name {
        font-style: normal;
        font-weight: 600;
        font-size: vw(20);
        margin-bottom: vw(10);
        line-height: 140%;
        color: #172242;
        text-decoration: none;
    }
    &__item_sku {
        font-style: normal;
        font-weight: 400;
        font-size: vw(16);
        line-height: 110%;
        color: #555F76;
    }
    &__item_properties {
        padding-top: vw(20);
        margin-top: vw(20);
        border-top: vw(2) solid #D7DCE1;
    }
    &__item_property {
        &:not(:last-child) {
            margin-bottom: vw(20);
        }
        .name {
            font-style: normal;
            font-weight: 600;
            font-size: vw(16);
            margin-bottom: vw(5);
            line-height: 110%;
            color: #172242;
        }
        .value {
            font-style: normal;
            font-weight: 400;
            font-size: vw(14);
            line-height: 140%;
            color: #555F76;
        }
    }
}
</style>