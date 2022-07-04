<template>
    <div class="products">
        <div class="products__items products__items--search">
            <div class="products__item" v-for="product in 20" :key="product.index">
                <div class="products__item_image">
                    <div class="image_container">
                        <img :src="require('~/assets/img/sections/second.jpg')" alt="">
                    </div>
                </div>
                <div class="products__item_data">
                    <nuxt-link class="products__item_name" :to="{name: 'index'}">Охладители масла и воды ОКН 0,2-74</nuxt-link>
                    <div class="products__item_sku">ТУ 3683-005-54116265-2011</div>
                    <div class="products__item_properties">
                        <div class="products__item_property" v-for="property in 5" :key="property.index">
                            <div class="name">Охлаждающая среда:</div>
                            <div class="value">Вода морская</div>
                        </div>
                    </div>
                </div>
            </div>
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
        this.products = await this.$axios.$get(`catalog/elements.php?code=${this.$route.params.catalogId}&sub=y`);
        console.log(this.products);
    }
}
</script>