<template>
  <div id="wrapper" class="wrapper footerOnBottom">
    <osm-preloader :class="[{'preloader--is-hidden': isMounted}]" />
    <!-- <osm-header /> -->
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
    OsmPreloader: () => import('~/components/global/OsmPreloader.vue'),
  },
  data: () => ({
    isMounted: false,
  }),
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
