<template>
    <div class="wrapper footerOnBottom" id="wrapper">
        <osm-preloader />
        <!-- <osm-header /> -->
        <nuxt-child />
        <osm-footer />
    </div>
</template>
<script>

export default {
    name: 'CatalogTemplate',
    components: {
        // OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
        OsmPreloader: () => import('~/components/global/OsmPreloader.vue')
    },
}
</script>