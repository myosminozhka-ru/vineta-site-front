<template>
    <osm-news-content />
</template>

<script>
export default {
    name: "NewsIndexPage",
    components: {
        OsmNewsContent: () => import('~/components/news/OsmNewsContentPage.vue'),
    }
}
</script>