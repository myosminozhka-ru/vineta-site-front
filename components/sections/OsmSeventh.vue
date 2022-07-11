<template>
    <section class="section section__item section__item--seventh news">
        <osm-news-block />
    </section>
</template>

<script>
export default {
    name: 'OsmSeventhSection',
    components: {
        OsmNewsBlock: () => import('~/components/news/OsmBlock.vue'),
    }
}
</script>

<style lang="scss" scoped>
.section {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>