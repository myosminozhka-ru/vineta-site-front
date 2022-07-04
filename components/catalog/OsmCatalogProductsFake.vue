<template>
    <div class="products__items products__items--favorites">
        <div class="products__item" v-for="product in 8" :key="product.index">
            <div class="products__item_image">
                <div class="image_container">
                    <img :src="require('~/assets/img/sections/second.jpg')" alt="">
                </div>
            </div>
            <div class="products__item_data">
                <nuxt-link class="products__item_name" :to="{name: 'index'}">Товар</nuxt-link>
                <div class="products__item_sku">ТУ 3683-005-54116265-2011</div>
                <osm-button class="products__item_button" :large="true">Заказать</osm-button>
            </div>
        </div>
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
    width: calc(100% + #{vw(40)});
    margin-top: vw(20);
    margin-bottom: vw(-20);
    margin-left: vw(-20);
    margin-right: vw(-20);
    @media all and (max-width: 1024px) {
        width: calc(100% + 40px);
        margin-top: 20px;
        margin-bottom: -20px;
        margin-left: -20px;
        margin-right: -20px;
    }
}
</style>