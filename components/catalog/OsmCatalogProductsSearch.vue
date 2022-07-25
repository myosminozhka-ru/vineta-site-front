<template>
    <div class="products">
        <div class="products__items products__items--search">
            <nuxt-link class="products__item" v-for="product in products" :key="product.index" :to="{name: 'catalog-catalogId-productId', params: {productId: product.CODE}}">
                <div class="products__item_image">
                    <div class="image_container">
                        <img :src="$vareibles.remote + product.PREVIEW_PICTURE" alt="">
                    </div>
                </div>
                <div class="products__item_data">
                    <!-- <pre style="font-size: 15rem">{{ product }}</pre> -->
                    <span class="products__item_name">{{ product.NAME }}</span>
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
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            default: () => ([])
        }
    },
}
</script>