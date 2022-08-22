<template>
    <div class="products__items products__items--favorites">
            
        <div class="products__item" v-for="product in products" :key="product.index">
            <div class="products__item_image">
                <div class="image_container">
                    <img v-if="product.PREVIEW_PICTURE" :src="$vareibles.remote + product.PREVIEW_PICTURE" alt="">
                    <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                </div>
            </div>
            <div class="products__item_data">
                <span class="products__item_name">{{ product.NAME }}</span>
                <!-- <div class="products__item_sku">ТУ 3683-005-54116265-2011</div> -->
                <div @click="openFavModal">
                    <osm-button class="products__item_button" :large="true">{{ $t('buttons.buy') }}</osm-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "OsmCatalogFake",
    components: {
        OsmButton: () => import('~/components/global/OsmButton.vue'),
    },
    computed: {
        ...mapGetters(['getProducts']),
        ...mapGetters('localStorage', ['getFavorites']),
        products() {
            return this.getProducts.filter(item => this.getFavorites.includes(+item.ID))
        }
    },
    methods: {
        ...mapActions(['toggleModal']),
        openFavModal() {
            // console.log('openFavModal');
            this.toggleModal({
                isOpened: true,
                type: 'favorites'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.products {
    &__item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
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