<template>
    <div class="products">
        <div class="products__items" v-if="products">
            <nuxt-link class="products__item" v-for="product in filteredProducts" :key="product.ID" :to="{name: 'catalog-catalogId-productId', params: {productId: product.CODE}}">
                <!-- <pre style="font-size: 15rem">{{ product }}</pre> -->
                <div class="products__item_image">
                    <div class="image_container">
                        <img v-if="product.PREVIEW_PICTURE" :src="$vareibles.remote + product.PREVIEW_PICTURE" alt="">
                        <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                    </div>
                </div>
                <div class="products__item_data">
                    <span class="products__item_name">{{product.NAME}}</span>
                    <div class="products__item_sku">ТУ 3683-005-54116265-2011</div>
                    <div class="products__item_properties">
                        <div class="products__item_property" v-for="property in product.PROPERIES" :key="property.index">
                            <div class="name">{{ property.NAME }}</div>
                            <div class="value">{{ property.VALUE }}</div>
                        </div>
                    </div>
                </div>
            </nuxt-link>
        </div>
        <div class="products__none" v-else>
            Нет товаров
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data: () => ({
        products: [],
    }),
    beforeDestroy() {
        this.products = [];
    },
    computed: {
        ...mapGetters(['getCatalog']),
        ...mapGetters(['getFilters']),
        catalogId() {
            return this.$route.params.catalogId
        },
        currentCategory() {
            return this.getCatalog.filter(item => item.CODE === this.catalogId)
        },
        filteredProducts() {
            if (this.getFilters.length) {
                return this.products.filter(product => this.getFilters.includes(product.SECTION.CODE));
            } else {
                return this.products;
            }
        }
    },
    created() {
        if (this.currentCategory[0]) {
            this.addBreadcrumbs([
                {
                    name: 'Каталог',
                    link: 'catalog',
                    isLink: true
                },
                {
                    name: this.currentCategory[0].NAME,
                    isLink: false
                },
            ])
        }
    },
    async mounted() {
        this.products = await this.$axios.$get(`catalog/elements.php?code=${this.$route.params.catalogId}&sub=y`);
    },
    methods: {
        ...mapActions(['addBreadcrumbs'])
    }
}
</script>