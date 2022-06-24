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