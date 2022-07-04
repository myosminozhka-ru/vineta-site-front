<template>
    <div class="wrapper">
        <osm-header />
        <div class="header_padding">
            <div class="favorites">
                <osm-breadcrumbs />
                <div class="favorites__title">Избранное</div>
                <osm-catalog-products />
                <div class="favorites__buttons">
                    <osm-button class="favorites__button" :outlined="true">Выгрузить</osm-button>
                    <osm-button class="favorites__button">В каталог</osm-button>
                </div>
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
        OsmCatalogProducts: () => import('~/components/catalog/OsmCatalogProductsFake.vue'),
        OsmButton: () => import('~/components/global/OsmButton.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    }
}
</script>

<style lang="scss" scoped>
.favorites {
    padding: vw(30) vw(240) vw(120);
    @media all and (max-width: 1024px) {
        padding: 30px 20px;
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: vw(40);
        margin-bottom: vw(30);
        line-height: 140%;
        color: #172242;
    }
    &__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: vw(40);
    }
    &__button {
        &:first-child {
            margin-right: vw(40);
        }
    }
}
</style>