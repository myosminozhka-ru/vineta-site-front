<template>
    <div class="wrapper">
        <osm-header />
        <div class="pageWrap">
            <osm-breadcrumbs />
            <osm-catalog-top />
            <osm-catalog-categories />
        </div>
        <osm-footer />
    </div>
</template>

<script>
export default {
    name: 'CatalogPage',
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmCatalogTop: () => import('~/components/catalog/OsmCatalogTop.vue'),
        OsmCatalogCategories: () => import('~/components/catalog/OsmCatalogCategories.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    }
}
</script>

<style lang="scss">
.pageWrap {
    padding: vw(150) vw(240) vw(150);
}
</style>