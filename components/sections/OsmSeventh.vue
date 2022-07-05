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