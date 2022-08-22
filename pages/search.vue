<template>
    <div class="wrapper">
        <osm-header />
        <div class="header_padding">
            <div class="search">
                <osm-breadcrumbs />
                <div class="search__title">Результаты поиска</div>
                <osm-catalog-products :products="productsResult" />
                <div class="search__buttons">
                    <osm-button class="search__button" :outlined="true">Выгрузить</osm-button>
                    <osm-button class="search__button" link="catalog">В каталог</osm-button>
                </div>
                <osm-news-block :inner="true" class="search__news" />
            </div>
        </div>
        <osm-footer />
        <osm-preloader />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "FavoritesPage",
    head() {
      return {
        title: 'Результаты поиска',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'Результаты поиска'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'Результаты поиска'
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image'
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: this.vacancy && 'SEO' in this.vacancy[0] ? this.vacancy[0].SEO.META.TITLE : '',
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: 'Результаты поиска'
          },
        ]
      }
    },
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmCatalogProducts: () => import('~/components/catalog/OsmCatalogProductsSearch.vue'),
        OsmButton: () => import('~/components/global/OsmButton.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
        OsmNewsBlock: () => import('~/components/news/OsmBlock.vue'),
        OsmPreloader: () => import('~/components/global/OsmPreloader.vue')
    },
    computed: {
        ...mapGetters(['getProducts']),
        productsResult() {
            return this.getProducts.filter(product => product.NAME.includes(this.$route.query.q));
        }
    },
    created() {
      this.addBreadcrumbs([
          {
              name: 'Главная',
              link: 'index',
              isLink: true
          },
          {
              name: 'Результаты поиска',
              isLink: false
          },
      ])
    },
    methods: {
      ...mapActions(['addBreadcrumbs'])
    },
    mounted() {
        // console.log(this.$route.query.q);
    }
}
</script>

<style lang="scss" scoped>
.search {
    padding: rem(30) rem(240) rem(120);
    @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
      padding-left: rem(50);
      padding-right: rem(50);
    }
    overflow: hidden;
    @media all and (max-width: 1280px) {
        padding: 30px 20px;
    }
    &__news {
        position: static;
        margin-top: rem(120);
        @media all and (max-width: 860px) {
            margin-top: 60px;
        }
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #172242;
    }
    &__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: rem(40);
    }
    &__button {
        &:first-child {
            margin-right: rem(40);
        }
    }
}
</style>