<template>
    <div class="wrapper">
        <osm-header />
        <div class="licenses">
            <div class="header_padding">
                <osm-breadcrumbs />
                <osm-gallery />
                <osm-gallery />
                <osm-gallery />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LicensesPage",
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmGallery: () => import('~/components/licenses/OsmGallery.vue'),
    }
}
</script>

<style lang="scss" scoped>
.licenses {
    padding: rem(30) rem(240) rem(120);
    @media all and (max-width: 1280px) {
        padding: 30px 20px;
    }
}
.header_padding {

}
</style>