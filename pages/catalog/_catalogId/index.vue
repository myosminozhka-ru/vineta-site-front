<template>
  <div class="pageWrap">
    <!-- <pre style="font-size: 15rem;">
            {{ currentCategory }}
        </pre> -->
    <osm-breadcrumbs />
    <osm-catalog-top
      v-if="'NAME' in currentCategory"
      :title="currentCategory.NAME"
    />
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
    OsmCatalogProducts: () =>
      import('~/components/catalog/OsmCatalogProducts.vue'),
    OsmCatalogFilter: () => import('~/components/catalog/OsmCatalogFilter.vue'),
  },
  data: () => ({
    currentCategory: {},
    hasFilters: true,
    parent: null,
  }),
  head() {
    // console.log(this.currentCategory);
    return {
      title:
        'SEO' in this.currentCategory
          ? this.currentCategory.SEO.META.TITLE
          : '',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'SEO' in this.currentCategory
              ? this.currentCategory.SEO.META.DESCRIPTION
              : 'DESCRIPTION',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'SEO' in this.currentCategory
              ? this.currentCategory.SEO.META.KEYWORDS
              : '',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://vineta.fvds.ru/',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content:
            'SEO' in this.currentCategory
              ? this.currentCategory.SEO.META.TITLE
              : '',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'SEO' in this.currentCategory
              ? this.currentCategory.SEO.META.DESCRIPTION
              : '',
        },
        {
          hid: 'twitter:imag',
          name: 'twitter:imag',
          content:
            'SEO' in this.currentCategory &&
            'DETAIL_PICTURE' in this.currentCategory
              ? this.$vareibles.remote + this.currentCategory.DETAIL_PICTURE
              : require('~/assets/img/product.noimage.png'),
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
  // beforeCreate() {
  //     this.currentCategory = this.getCatalog.filter(category => category.CODE === this.$route.params.catalogId);
  // },
  created() {
    // this.currentCategory
    if (
      this.uri === 'oborudovanie-vozdukho-i-gazoochistki' ||
      this.uri === 'sudovaya-armatura' ||
      this.uri === 'avtomaticheskie-zakrytiya-vozdushnykh-trub' ||
      this.uri === 'prochee-oborudovanie' ||
      this.uri === 'oborudovanie-sistem-vodosnabzheniya'
    ) {
      this.hasFilters = false
    }
    this.getCatalog.map((category) => {
      if (category.CODE === this.$route.params.catalogId) {
        this.currentCategory = category
        return category
      }
      if (!category.CHILD) return category
      category.CHILD.map((child) => {
        // console.log(child)
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
        name: 'Главная',
        link: 'index',
        isLink: true,
      },
      {
        name: 'Каталог',
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
  methods: {
    ...mapActions(['addBreadcrumbs']),
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
    // align-items: flex-start;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
      flex-direction: column;
    }
  }
  &__in-left {
    width: rem(345);
    // border: 1px solid #D7DCE1;
    @media all and (max-width: 1280px) {
      width: 100%;
      // border: none;
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
