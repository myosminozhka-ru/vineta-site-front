<template>
  <div id="wrapper" class="wrapper footerOnBottom">
    <nuxt-child v-show="isMounted" />
    <osm-footer v-show="isMounted" />
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
