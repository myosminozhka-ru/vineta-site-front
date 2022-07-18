<template>
    <div class="wrapper">
        <osm-header />
        <div class="header_padding" v-if="false">
            <div class="search">
                <osm-breadcrumbs />
                <div class="search__title">Избранное</div>
                <osm-catalog-products />
                <div class="search__buttons">
                    <osm-button class="search__button" :outlined="true">Выгрузить</osm-button>
                    <osm-button class="search__button">В каталог</osm-button>
                </div>
                <osm-news-block :inner="true" class="search__news" />
            </div>
        </div>
        <osm-footer />
    </div>
</template>

<script>
export default {
    name: "FavoritesPage",
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmCatalogProducts: () => import('~/components/catalog/OsmCatalogProductsSearch.vue'),
        OsmButton: () => import('~/components/global/OsmButton.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
        OsmNewsBlock: () => import('~/components/news/OsmBlock.vue'),
    }
}
</script>

<style lang="scss" scoped>
.search {
    padding: rem(30) rem(240) rem(120);
    @media all and (max-width: 1280px) {
        padding: 30px 20px;
    }
    &__news {
        position: static;
        margin-top: rem(120);
        @media all and (max-width: 860px) {
            margin-top: 60px;
        }
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #172242;
    }
    &__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: rem(40);
    }
    &__button {
        &:first-child {
            margin-right: rem(40);
        }
    }
}
</style>