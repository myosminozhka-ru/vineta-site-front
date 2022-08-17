<template>
    <header class="header">
        <osm-logo />
        <osm-menu />
        <osm-info />
        <osm-search />
        <osm-mobile-menu />
    </header>
</template>

<script>
export default {
    components: {
        OsmLogo: () => import('~/components/header/OsmLogo.vue'),
        OsmMenu: () => import('~/components/header/OsmMenu.vue'),
        OsmInfo: () => import('~/components/header/OsmInfo.vue'),
        OsmMobileMenu: () => import('~/components/header/OsmMobileMenu.vue'),
        OsmSearch: () => import('~/components/search/OsmSearchPopup.vue'),
    }
}
</script>

<style lang="scss">
.header {
    background: #172242;
    padding: 0 rem(50);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 11;
    @media print {
        display: none;
    }
    @media all and (max-width: 1280px) {
        padding: 35px 20px 0;
        position: relative;
    }
    @media all and (max-width: 860px) {
        padding: 23px 20px 0;
        position: relative;
    }
}
</style>