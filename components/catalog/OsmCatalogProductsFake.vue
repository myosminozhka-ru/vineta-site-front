<template>
    <div class="products__items products__items--favorites">
            
        <nuxt-link class="products__item" v-for="product in products" :key="product.index" :to="{name: 'catalog-catalogId-productId', params: {productId: product.CODE}}">
            <div class="products__item_image">
                <div class="image_container">
                    <img v-if="product.PREVIEW_PICTURE" :src="$vareibles.remote + product.PREVIEW_PICTURE" alt="">
                    <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                </div>
            </div>
            <div class="products__item_data">
                <span class="products__item_name">{{ product.NAME }}</span>
                <!-- <div class="products__item_sku">ТУ 3683-005-54116265-2011</div> -->
                <osm-button class="products__item_button" :large="true">Заказать</osm-button>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "OsmCatalogFake",
    components: {
        OsmButton: () => import('~/components/global/OsmButton.vue'),
    },
    data: () => ({
        products: []
    }),
    computed: {
        ...mapGetters(['getProducts']),
        ...mapGetters('localStorage', ['getFavorites']),
    },
    mounted() {
        this.products = this.getProducts.filter(item => this.getFavorites.includes(+item.ID))
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
    @media print {
        display: none;
    }
}
</style>