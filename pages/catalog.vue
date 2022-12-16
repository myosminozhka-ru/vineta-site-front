<template>
  <div id="wrapper" class="wrapper footerOnBottom">
    <nuxt-child />
    <osm-footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CatalogTemplate',
  components: {
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
  },
  data: () => ({
    isMounted: false,
  }),
  async fetch({store}) {
    await store.dispatch('setLoadingStatus', true)

    if (!store.state.products.length) {
      await store.dispatch('addProducts')
    }
  },
  head() {
    return {
      title: this.getSeo.catalog.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.catalog.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.catalog.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getSeo']),
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>
