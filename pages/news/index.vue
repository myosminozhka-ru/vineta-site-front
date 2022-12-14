<template>
    <osm-news-content />
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "NewsIndexPage",
    components: {
        OsmNewsContent: () => import('~/components/news/OsmNewsContentPage.vue'),
    },
    created() {
        this.addBreadcrumbs([
            {
                name: this.$t('buttons.main'),
                link: 'index',
                isLink: true
            },
            {
                name: this.$t('buttons.news'),
                isLink: false
            },
        ])
    },
    methods: {
        ...mapActions(['addBreadcrumbs']),
    }
}


</script>
