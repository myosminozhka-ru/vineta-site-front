<template>
    <div class="products">
        <div class="products__items products__items--search">
          <nuxt-link
            v-for="product in products"
            :key="product.index"
            :to="localePath({name: 'catalog-catalogId-productId', params: {productId: product.CODE}})"
            class="products__item">
                <div class="products__item_image">
                    <div class="image_container">
                        <nuxt-img v-if="product.PREVIEW_PICTURE" :src="$vareibles.remote + product.PREVIEW_PICTURE" alt="" loading="lazy" />
                        <nuxt-img v-else src="/product.noimage.png" alt="" loading="lazy" />
                    </div>
                </div>
                <div class="products__item_data">
                    <!-- <pre style="font-size: 15rem">{{ product }}</pre> -->
                    <span class="products__item_name">{{ product.NAME }}</span>
                    <div class="products__item_sku">ТУ 3683-005-54116265-2011</div>
                    <div class="products__item_properties">
                        <div v-for="property in product.PROPERIES" :key="property.index" class="products__item_property">
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
