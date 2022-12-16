<template>
  <div class="pageWrap">
    <osm-breadcrumbs />
    <osm-catalog-top :title="$t('buttons.catalog')" />
    <osm-catalog-categories />
    <div class="catalog__header_right hide_off_mobile">
      <a href="https://vinetaboat.ru/" target="_blank" class="catalog__header_btn">
        <div class="text">{{ $t('buttons.boats') }}</div>
        <div class="icon">
          <svg id="a" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 72 72">
            <defs>
              <style>
                .b {
                  fill: none;
                  stroke: #fff;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 2.7px;
                }
              </style>
            </defs>
            <polygon class="b" points="52.32 48.01 10.37 48.01 7.26 33.98 64.74 33.98 52.32 48.01" />
            <path class="b" d="M35.77,18.74H12.12v15.24H52.59l-11.07-12.64c-1.45-1.66-3.55-2.61-5.75-2.61Z" />
            <line class="b" x1="18.94" y1="26.36" x2="12.12" y2="26.36" />
            <line class="b" x1="28.26" y1="26.97" x2="46.45" y2="26.97" />
            <line class="b" x1="17.92" y1="8.89" x2="17.92" y2="18.74" />
            <line class="b" x1="26.02" y1="12.67" x2="26.02" y2="18.74" />
            <path class="b" d="M64.55,60.06c-8.2,0-7.84-4.92-14.16-4.92-6.32,0-5.96,4.92-14.16,4.92h0c-8.2,0-7.84-4.92-14.16-4.92-6.32,0-5.96,4.92-14.16,4.92" />
          </svg>
        </div>
      </a>
      <nuxt-link :to="localePath({ name: 'index' })" class="catalog__header_link">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 21" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33396 17.2091L6.33396 0H8.18582L8.18581 17.2091L12.4977 12.8972C12.8593 12.5356 13.4456 12.5356 13.8072 12.8972C14.1688 13.2588 14.1688 13.845 13.8072 14.2066L7.91462 20.0992C7.55302 20.4608 6.96676 20.4608 6.60516 20.0992L0.712604 14.2066C0.351007 13.845 0.351007 13.2588 0.712604 12.8972C1.0742 12.5356 1.66046 12.5356 2.02206 12.8972L6.33396 17.2091Z" fill="#FF0040" />
          </svg>
        </div>
        <div class="text">
          {{ $t('buttons.download_catalog') }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CatalogPage',
  components: {
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmCatalogTop: () => import('~/components/catalog/OsmCatalogTop.vue'),
    OsmCatalogCategories: () => import('~/components/catalog/OsmCatalogCategories.vue'),
  },
  data: () => ({
    isMounted: false,
  }),
  async fetch({store, i18n}) {
    await store.dispatch('addBreadcrumbs', [
      {
        name: i18n.messages[i18n.locale].buttons.main,
        link: 'index',
        isLink: true,
      },
      {
        name: i18n.messages[i18n.locale].buttons.catalog,
        isLink: false,
      },
    ])

    await store.dispatch('setLoadingStatus', false)
  },
  methods: {
    ...mapActions(['setLoadingStatus']),
  },
}
</script>
