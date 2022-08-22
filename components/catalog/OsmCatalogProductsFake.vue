<template>
    <div class="products__items products__items--favorites">
            
        <div class="products__item" v-for="product in products" :key="product.index">
            <div class="products__item_closer" @click="addFavorites(product.ID)">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" fill="#FF0040"/>
                    <rect width="24" height="24" fill="#FF0040"/>
                    <path d="M13.0567 11.9994L17.7783 7.28477C17.9194 7.14363 17.9987 6.95221 17.9987 6.7526C17.9987 6.553 17.9194 6.36157 17.7783 6.22043C17.6372 6.07929 17.4458 6 17.2462 6C17.0466 6 16.8552 6.07929 16.7141 6.22043L12 10.9425L7.28592 6.22043C7.14479 6.07929 6.95338 6 6.7538 6C6.55422 6 6.36281 6.07929 6.22169 6.22043C6.08056 6.36157 6.00128 6.553 6.00128 6.7526C6.00128 6.95221 6.08056 7.14363 6.22169 7.28477L10.9433 11.9994L6.22169 16.7139C6.15144 16.7836 6.09569 16.8665 6.05764 16.9579C6.01959 17.0492 6 17.1472 6 17.2461C6 17.3451 6.01959 17.443 6.05764 17.5344C6.09569 17.6257 6.15144 17.7086 6.22169 17.7783C6.29136 17.8485 6.37425 17.9043 6.46558 17.9424C6.55691 17.9804 6.65487 18 6.7538 18C6.85274 18 6.9507 17.9804 7.04203 17.9424C7.13335 17.9043 7.21625 17.8485 7.28592 17.7783L12 13.0562L16.7141 17.7783C16.7838 17.8485 16.8666 17.9043 16.958 17.9424C17.0493 17.9804 17.1473 18 17.2462 18C17.3451 18 17.4431 17.9804 17.5344 17.9424C17.6257 17.9043 17.7086 17.8485 17.7783 17.7783C17.8486 17.7086 17.9043 17.6257 17.9424 17.5344C17.9804 17.443 18 17.3451 18 17.2461C18 17.1472 17.9804 17.0492 17.9424 16.9579C17.9043 16.8665 17.8486 16.7836 17.7783 16.7139L13.0567 11.9994Z" fill="white"/>
                </svg>
            </div>
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
        ...mapActions('localStorage', ['addFavorites']),
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
        position: relative;
    }
    &__item_closer {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        z-index: 20;
        width: rem(24);
        height: rem(24);
        font-size: 0;
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