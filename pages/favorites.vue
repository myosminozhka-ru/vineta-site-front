<template>
    <div class="wrapper" id="wrapper">
        <osm-header />
        <div class="header_padding">
            <div class="favorites">
                <osm-breadcrumbs />
                <div class="favorites__title">Избранное</div>
                <osm-catalog-products />
                <div class="favorites__buttons">
                    <span @click="printSection">
                        <osm-button class="favorites__button" :large="true" :outlined="true">Выгрузить</osm-button>
                    </span>
                    <osm-button class="favorites__button" :large="true" link="catalog">В каталог</osm-button>
                </div>
            </div>
        </div>
        <osm-footer />
        <osm-preloader />
        <osm-favorites-modal />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "FavoritesPage",
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmCatalogProducts: () => import('~/components/catalog/OsmCatalogProductsFake.vue'),
        OsmButton: () => import('~/components/global/OsmButton.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
        OsmPreloader: () => import('~/components/global/OsmPreloader.vue'),
        OsmFavoritesModal: () => import('~/components/modals/favorites.vue')
    },
    created() {
      this.addBreadcrumbs([
          {
              name: 'Главная',
              link: 'index',
              isLink: true
          },
          {
              name: 'Избранное',
              isLink: false
          },
      ])
    },
    methods: {
      ...mapActions(['addBreadcrumbs']),
      printSection() {
        // this.$htmlToPaper("wrapper");
        window.print();
      }
    },
}
</script>

<style lang="scss" scoped>
.favorites {
    padding: rem(30) rem(240) rem(120);
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