<template>
    <div class="pageWrap">
        <osm-breadcrumbs />
        <osm-catalog-top />
        <div class="catalog__in">         
            <div class="catalog__in-left">
                <osm-catalog-filter />
            </div>
            <div class="catalog__in-right">
                <!-- {{ currentCategory }} -->
                <!-- {{ getCatalog }} -->
                <!-- {{ $route.params.catalogId }} -->
                <osm-catalog-products /> 
            </div>
        </div>
          
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'CatalogPage',
    components: {
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmCatalogTop: () => import('~/components/catalog/OsmCatalogTop.vue'),
        OsmCatalogProducts: () => import('~/components/catalog/OsmCatalogProducts.vue'),
        OsmCatalogFilter: () => import('~/components/catalog/OsmCatalogFilter.vue'),
    },
    computed: {
        ...mapGetters(['getCatalog']),
        currentCategory() {
            return this.getCatalog.filter(category => category.CODE === this.$route.params.catalogId);
        }
    },
    created() {
        this.addBreadcrumbs([
            {
                name: 'Главная',
                link: 'index',
                isLink: true
            },
            {
                name: 'Каталог',
                link: 'catalog',
                isLink: true
            },
            // {
            //     name: this.currentCategory[0].NAME,
            //     isLink: false
            // },
        ])
    },
    methods: {
        ...mapActions(['addBreadcrumbs'])
    }
}
</script>

<style lang="scss" scoped>
.catalog {
    &__in {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media all and (max-width: 1280px) {
            flex-direction: column;
        }
    }
    &__in-left {
        width: rem(345);
        border: 1px solid #D7DCE1;
        @media all and (max-width: 1280px) {
            width: 100%;
            border: none;
        }
    }
    &__in-right {
        width: calc(100% - #{rem(365)});
        @media all and (max-width: 1280px) {
            width: 100%;
        }
    }
}
</style>