<template>
    <header class="header">
        <osm-logo />
        <osm-menu />
        <osm-info />
    </header>
</template>

<script>
export default {
    components: {
        OsmLogo: () => import('~/components/header/OsmLogo.vue'),
        OsmMenu: () => import('~/components/header/OsmMenu.vue'),
        OsmInfo: () => import('~/components/header/OsmInfo.vue'),
    }
}
</script>

<style lang="scss">
.header {
    background: #172242;
    padding: 0 vw(50);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    @media all and (max-width: 1024px) {
        padding: 35px 20px 0;
        position: relative;
    }
}
</style>