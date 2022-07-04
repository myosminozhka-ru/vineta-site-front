<template>
    <div class="wrapper">
        <osm-header />
        <div class="header_padding">
            <div class="news">
                <osm-breadcrumbs />
                <nuxt-child />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewsPage",
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    }
}
</script>

<style lang="scss" scoped>
.news {
    padding: rem(30) rem(240) rem(120);
    @media all and (max-width: 1280px) {
        padding: 30px 20px;
    }
}
</style>