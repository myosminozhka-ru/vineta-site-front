<template>
  <div class="wrapper">
    <!-- <osm-header /> -->
    <div class="licenses">
      <div class="header_padding">
        <osm-breadcrumbs />
        <osm-gallery :images="filterBySection('litsenzii-i-sertifikaty')" :title="$t('sections.fiveth.tabs.first')" />
        <osm-gallery :images="filterBySection('blagodarstvennye-pisma-i-otzyvy')" :title="$t('sections.fiveth.tabs.second')" />
        <osm-gallery :images="filterBySection('otchety-po-sout')" :title="$t('sections.fiveth.tabs.third')" />
      </div>
    </div>
    <osm-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LicensesPage',
  components: {
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmGallery: () => import('~/components/licenses/OsmGallery.vue'),
  },
  data: () => ({
    isMounted: false
  }),
  async fetch({store, i18n}) {

    await store.dispatch('setLoadingStatus', true)

    if (!store.state.licenses.length) {
      await store.dispatch('addLicenses')
    }

    await store.dispatch('addBreadcrumbs', [
      {
        name: i18n.messages[i18n.locale].buttons.main,
        link: 'index',
        isLink: true,
      },
      {
        name: i18n.messages[i18n.locale].sections.fiveth.tabs.first,
        isLink: false,
      },
    ])

    await store.dispatch('setLoadingStatus', false)
  },
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
  mounted() {
    this.isMounted = true;
  },
  methods: {
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
