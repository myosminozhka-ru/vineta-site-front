<template>
    <osm-news-block />
</template>

<script>
export default {
    components: {
        OsmNewsBlock: () => import('~/components/news/OsmBlock.vue'),
    }
}
</script>