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
                name: 'Главная',
                link: 'index',
                isLink: true
            },
            {
                name: 'Новости',
                isLink: false
            },
        ])
    },
    methods: {
        ...mapActions(['addBreadcrumbs']), 
    }
}


</script>