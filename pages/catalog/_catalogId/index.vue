<template>
  <div class="pageWrap">
    <!-- <pre style="font-size: 15rem;">
            {{ currentCategory }}
        </pre> -->
    <osm-breadcrumbs />
    <osm-catalog-top v-if="'NAME' in currentCategory" :title="currentCategory.NAME" />
    <div class="catalog__in">
      <div class="catalog__in-left" v-if="hasFilters">
        <osm-catalog-filter />
      </div>
      <div class="catalog__in-right" :class="{ notHasFilters: !hasFilters }">
        <!-- {{ currentCategory }} -->
        <!-- {{ getCatalog }} -->
        <!-- {{ $route.params.catalogId }} -->
        <osm-catalog-products />

        <div class="pagination">
          <div class="pagination__in">
            <div class="pagination__item isActive">1</div>
            <div class="pagination__item">2</div>
            <div class="pagination__item">3</div>
            <div class="pagination__item">4</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CatalogPage',
  components: {
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmCatalogTop: () => import('~/components/catalog/OsmCatalogTop.vue'),
    OsmCatalogProducts: () => import('~/components/catalog/OsmCatalogProducts.vue'),
    OsmCatalogFilter: () => import('~/components/catalog/OsmCatalogFilter.vue'),
  },
  data: () => ({
    currentCategory: {},
    hasFilters: true,
    parent: null,
  }),
  head() {
    return {
      title: 'SEO' in this.currentCategory ? this.currentCategory.SEO.META.TITLE : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SEO' in this.currentCategory ? this.currentCategory.SEO.META.DESCRIPTION : 'DESCRIPTION',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'SEO' in this.currentCategory ? this.currentCategory.SEO.META.KEYWORDS : '',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: this.$config.vareibles.remote,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'SEO' in this.currentCategory ? this.currentCategory.SEO.META.TITLE : '',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'SEO' in this.currentCategory ? this.currentCategory.SEO.META.DESCRIPTION : '',
        },
        {
          hid: 'twitter:imag',
          name: 'twitter:imag',
          content: 'SEO' in this.currentCategory && 'DETAIL_PICTURE' in this.currentCategory ? this.$config.vareibles.remote + this.currentCategory.DETAIL_PICTURE : require('~/assets/img/product.noimage.png'),
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getCatalog']),
    uri() {
      return this.$route.params.catalogId
    },
  },
  created() {
    if (this.uri === 'oborudovanie-vozdukho-i-gazoochistki' || this.uri === 'sudovaya-armatura' || this.uri === 'avtomaticheskie-zakrytiya-vozdushnykh-trub' || this.uri === 'prochee-oborudovanie' || this.uri === 'oborudovanie-sistem-vodosnabzheniya') {
      this.hasFilters = false
    }
    this.getCatalog.map((category) => {
      if (category.CODE === this.$route.params.catalogId) {
        this.currentCategory = category
        return category
      }
      if (!category.CHILD) return category
      category.CHILD.map((child) => {
        if (child.CODE === this.$route.params.catalogId) {
          this.parent = category
          this.currentCategory = child
        }
        return child
      })
      return category
    })
    this.addBreadcrumbs([
      {
        name: this.$t('buttons.main'),
        link: 'index',
        isLink: true,
      },
      {
        name: this.$t('buttons.catalog'),
        link: 'catalog',
        isLink: true,
      },
      {
        name: this.parent ? this.parent.NAME : '',
        link: 'catalog-catalogId',
        params: {
          catalogId: this.parent ? this.parent.CODE : '',
        },
        isLink: true,
      },
      {
        name: this.currentCategory.NAME,
        isLink: false,
      },
    ])
  },
  mounted() {
    setTimeout(() => {
      this.setLoadingStatus(false)
    }, 0)
  },
  methods: {
    ...mapActions(['addBreadcrumbs', 'setLoadingStatus']),
  },
}
</script>
<style lang="scss">
.catalog {
  &__in-right.notHasFilters {
    @media all and (min-width: 1281px) {
      width: 100% !important;
      .products__item {
        &:not(:nth-child(3n + 3)) {
          margin-right: 0;
        }
        &:nth-child(n + 4) {
          margin-top: 0;
        }
        &:nth-child(n + 5) {
          margin-top: rem(20);
        }
        &:not(:nth-child(4n + 4)) {
          margin-right: rem(20);
        }
        width: calc(100% / 4 - 60rem / 4);
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.catalog {
  &__in {
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
      flex-direction: column;
    }
  }
  &__in-left {
    width: rem(345);
    @media all and (max-width: 1280px) {
      width: 100%;
    }
  }
  &__in-right {
    width: calc(100% - #{rem(365)});
    @media all and (max-width: 1280px) {
      width: 100%;
    }
  }
}
</style>
