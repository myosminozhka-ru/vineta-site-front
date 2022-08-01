<template>
  <div class="pageWrap">
    <osm-breadcrumbs />
    <osm-catalog-top />
    <osm-catalog-categories />
    <div class="catalog__header_right hide_off_mobile">
      <nuxt-link :to="{name: 'index'}" class="catalog__header_btn">
        <div class="text">Лодки и катера</div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" id="a" viewBox="0 0 72 72">
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
            <path class="b"
              d="M64.55,60.06c-8.2,0-7.84-4.92-14.16-4.92-6.32,0-5.96,4.92-14.16,4.92h0c-8.2,0-7.84-4.92-14.16-4.92-6.32,0-5.96,4.92-14.16,4.92" />
          </svg>
        </div>
      </nuxt-link>
      <nuxt-link :to="{name: 'index'}" class="catalog__header_link">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 25" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.11116 17.2091L9.11117 0H10.963L10.963 17.2091L15.2749 12.8972C15.6365 12.5356 16.2228 12.5356 16.5844 12.8972C16.946 13.2588 16.946 13.845 16.5844 14.2066L10.6918 20.0992C10.3302 20.4608 9.74396 20.4608 9.38236 20.0992L3.48981 14.2066C3.12821 13.845 3.12821 13.2588 3.48981 12.8972C3.8514 12.5356 4.43767 12.5356 4.79926 12.8972L9.11116 17.2091ZM19.2964 24.0741C19.2964 24.5854 18.8818 25 18.3704 25H1.70376C1.19238 25 0.777832 24.5854 0.777832 24.0741C0.777832 23.5627 1.19238 23.1481 1.70376 23.1481H18.3704C18.8818 23.1481 19.2964 23.5627 19.2964 24.0741Z"
              fill="#FF0040" />
          </svg>
        </div>
        <div class="text">
          Скачать каталог
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'CatalogPage',
    components: {
      OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
      OsmCatalogTop: () => import('~/components/catalog/OsmCatalogTop.vue'),
      OsmCatalogCategories: () => import('~/components/catalog/OsmCatalogCategories.vue'),
    },
    created() {
        this.addBreadcrumbs([
            {
                name: 'Главная',
                link: 'index',
                isLink: true
            },
            {
                name: 'Каталог',
                isLink: false
            },
        ])
    },
    methods: {
      ...mapActions(['addBreadcrumbs']), 
    }
  }

</script>
