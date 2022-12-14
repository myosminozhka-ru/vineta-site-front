<template>
  <div id="wrapper" class="wrapper">
    <!-- <osm-header /> -->
    <div class="header_padding">
      <div class="favorites">
        <osm-breadcrumbs />
        <div class="favorites__title">{{ $t('favourites.title') }}</div>
        <osm-catalog-products v-if="products.length" />
        <div v-else class="favorites__subtitle">{{ $t('favourites.subtitle') }}</div>
        <div class="favorites__buttons">
          <span v-if="false" @click="printSection">
            <osm-button class="favorites__button" :large="true" :outlined="true">{{ $t('buttons.upload') }}</osm-button>
          </span>
          <osm-button class="favorites__button" :large="true" link="catalog">{{ $t('buttons.to_catalogue') }}</osm-button>
        </div>
      </div>
    </div>
    <osm-footer />
    <osm-preloader :class="[{'preloader--is-hidden': isMounted}]" />
    <osm-favorites-modal />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'FavoritesPage',
  components: {
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmCatalogProducts: () => import('~/components/catalog/OsmCatalogProductsFake.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    OsmPreloader: () => import('~/components/global/OsmPreloader.vue'),
    OsmFavoritesModal: () => import('~/components/modals/favorites.vue'),
  },
  data: () => ({
    isMounted: false,
  }),
  head() {
    return {
      title: this.getSeo.favorites.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.favorites.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.favorites.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    ...mapGetters('localStorage', ['getFavorites']),
    ...mapGetters(['getSeo']),
    products() {
      return this.getProducts.filter((item) => this.getFavorites.includes(+item.ID))
    },
  },
  created() {
    this.addBreadcrumbs([
      {
        name: this.$t('buttons.main'),
        link: 'index',
        isLink: true,
      },
      {
        name: this.$t('favourites.title'),
        isLink: false,
      },
    ])
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    ...mapActions(['addBreadcrumbs']),
    printSection() {
      window.print()
    },
  },
}
</script>

<style lang="scss" scoped>
.favorites {
  padding: rem(30) rem(240) rem(120);
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }
  @media all and (max-width: 1280px) {
    padding: 30px 20px;
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    margin-bottom: rem(30);
    line-height: 140%;
    color: #172242;
    @media print {
      display: none;
    }
  }
  &__subtitle {
    font-style: normal;
    font-weight: 600;
    font-size: rem(20);
    margin-bottom: rem(30);
    line-height: 140%;
    color: #172242;
    @media print {
      display: none;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: rem(40);
    @media print {
      display: none !important;
    }
    @media all and (max-width: 840px) {
      flex-direction: column;
      span {
        display: block;
        width: 100%;
      }
    }
  }
  &__button {
    width: rem(200);
    @media all and (max-width: 840px) {
      width: 100%;
    }
    &:first-child {
      margin-right: rem(40);
      @media all and (max-width: 840px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
