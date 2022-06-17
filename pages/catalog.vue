<template>
    <div class="wrapper footerOnBottom">
        <osm-header />
        <nuxt-child />
        <osm-footer />
    </div>
</template>
<script>
export default {
    name: 'CatalogTemplate',
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    }
}
</script>