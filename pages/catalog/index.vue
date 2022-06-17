<template>
    <div class="pageWrap">
        <osm-breadcrumbs />
        <osm-catalog-top />
        <osm-catalog-categories />
    </div>
</template>

<script>
export default {
    name: 'CatalogPage',
    components: {
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmCatalogTop: () => import('~/components/catalog/OsmCatalogTop.vue'),
        OsmCatalogCategories: () => import('~/components/catalog/OsmCatalogCategories.vue'),
    }
}
</script>

<style lang="scss">
.pageWrap {
    padding: vw(150) vw(240) vw(150);
}
</style>