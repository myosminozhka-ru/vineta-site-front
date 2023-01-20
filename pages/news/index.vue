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
  async fetch({store, i18n}) {
    await store.dispatch('addBreadcrumbs', [
      {
        name: i18n.messages[i18n.locale].buttons.main,
        link: 'index',
        isLink: true
      },
      {
        name: i18n.messages[i18n.locale].buttons.news,
        isLink: false
      },
    ])
    store.dispatch('setLoadingStatus', false)
  },
  methods: {
      ...mapActions(['setLoadingStatus']),
  }
}


</script>
