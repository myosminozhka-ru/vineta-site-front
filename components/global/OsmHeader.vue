<template>
    <header class="header">
        <osm-logo />
        <osm-menu />
        <osm-info />
    </header>
</template>

<script>
export default {
    name: "OsmHeader",
    components: {
        OsmLogo: () => import('~/components/header/OsmLogo.vue'),
        OsmMenu: () => import('~/components/header/OsmMenu.vue'),
        OsmInfo: () => import('~/components/header/OsmInfo.vue'),
    }
}
</script>

<style lang="scss" scoped>
.header {
    background: #172242;
    padding: 0 vw(50);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
}
</style>