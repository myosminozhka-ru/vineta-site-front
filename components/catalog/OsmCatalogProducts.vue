<template>
    <div class="products">
        <div class="products__items" v-if="filteredProducts">
            <nuxt-link class="products__item" v-for="product in filteredProducts" :key="product.ID" :to="localePath({name: 'catalog-catalogId-productId', params: {productId: product.CODE}})">
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
                            <template v-if="'NAME' in property && property.NAME">
                                <div class="name">{{ property.NAME }}</div>
                                <div class="value">{{ property.VALUE }}</div>
                            </template>
                        </div>
                    </div>
                </div>
            </nuxt-link>
        </div>
        <div class="products__none" v-else>
           {{ $t('catalog.empty') }}
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
                return this.products.filter(product => {
                    let params = [];
                    this.products.map(item => {
                        if ('PROPERIES_FILTER' in item) {
                            item.PROPERIES_FILTER.map(prop => {
                                if (!params) {
                                    params = {};
                                }
                                prop.VALUE.map(item => {
                                    if (!params.includes(item)) {
                                        params = [
                                            ...params,
                                            item
                                        ];
                                    }
                                    return item;
                                })
                                return prop;
                            });
                        }
                        return item;
                    });
                    console.log(this.findCommonElements(params, this.getFilters));
                    if (this.findCommonElements(params, this.getFilters)) {
                        console.log(this.getFilters, params)
                        return product;
                    } else {
                        return false;
                    }
                });
            } else {
                return this.products;
            }
        }
    },
    created() {
        if (this.currentCategory[0]) {
            this.addBreadcrumbs([
                {
                    name: this.$t('buttons.catalog'),
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
        findCommonElements(arr1, arr2) {
            return arr1.some(item => arr2.includes(item))
        },
        ...mapActions(['addBreadcrumbs'])
    }
}
</script>