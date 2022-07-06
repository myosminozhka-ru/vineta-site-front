<template>
    <div class="products__items products__items--favorites">
        <nuxt-link class="products__item" v-for="product in 8" :key="product.index" :to="{name: 'catalog-product'}">
            <div class="products__item_image">
                <div class="image_container">
                    <img :src="require('~/assets/img/sections/second.jpg')" alt="">
                </div>
            </div>
            <div class="products__item_data">
                <span class="products__item_name">Товар</span>
                <div class="products__item_sku">ТУ 3683-005-54116265-2011</div>
                <osm-button class="products__item_button" :large="true">Заказать</osm-button>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "OsmCatalogFake",
    data: () => ({
        products: [],
    }),
    components: {
        OsmButton: () => import('~/components/global/OsmButton.vue'),
    },
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
        this.products = await this.$axios.$get(`catalog/elements.php?code=${this.$route.params.catalogId}&sub=y`);
        console.log(this.products);
    }
}
</script>

<style lang="scss" scoped>
.products__item_button {
    width: calc(100% + #{rem(40)});
    margin-top: rem(20);
    margin-bottom: rem(-20);
    margin-left: rem(-20);
    margin-right: rem(-20);
    @media all and (max-width: 1280px) {
        width: calc(100% + 40px);
        margin-top: 20px;
        margin-bottom: -20px;
        margin-left: -20px;
        margin-right: -20px;
    }
}
</style>