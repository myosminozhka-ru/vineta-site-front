<template>
  <div class="wrapper">
    <!-- <osm-header /> -->
    <div class="licenses">
      <div class="header_padding">
        <osm-breadcrumbs />
        <!-- <pre style="font-size: 15rem;">
                    {{ getLicenses }}
                </pre> -->
        <osm-gallery :images="filterBySection('litsenzii-i-sertifikaty')" :title="$t('sections.fiveth.tabs.first')" />
        <osm-gallery :images="filterBySection('blagodarstvennye-pisma-i-otzyvy')" :title="$t('sections.fiveth.tabs.second')" />
        <osm-gallery :images="filterBySection('otchety-po-sout')" :title="$t('sections.fiveth.tabs.third')" />
      </div>
    </div>
    <osm-footer />
    <osm-preloader :class="[{'preloader--is-hidden': isMounted}]" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LicensesPage',
  components: {
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmGallery: () => import('~/components/licenses/OsmGallery.vue'),
    OsmPreloader: () => import('~/components/global/OsmPreloader.vue'),
  },
  data: () => ({
    isMounted: false
  }),
  head() {
    return {
      title: this.getSeo.licenses.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.licenses.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.licenses.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getLicenses']),
    ...mapGetters(['getSeo']),
  },
  created() {
    this.addBreadcrumbs([
      {
        name: this.$t('buttons.main'),
        link: 'index',
        isLink: true,
      },
      {
        name: this.$t('tabs.first'),
        isLink: false,
      },
    ])
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    ...mapActions(['addBreadcrumbs']),
    filterBySection(type) {
      return this.getLicenses.filter((i) => i.SECTION === type)
    },
  },
}
</script>

<style lang="scss" scoped>
.licenses {
  padding: rem(30) rem(240) rem(120);
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }
  background: #fff;
  @media all and (max-width: 1280px) {
    padding: 30px 20px;
  }
}
.header_padding {
}
</style>
