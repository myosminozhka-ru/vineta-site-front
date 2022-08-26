<template>
    <div class="wrapper">
        <!-- <osm-header /> -->
        <div class="licenses">
            <div class="header_padding">
                <osm-breadcrumbs />
                <!-- <pre style="font-size: 15rem;">
                    {{ getLicenses }}
                </pre> -->
                <osm-gallery :images="filterBySection('Лицензии и сертификаты')" :title="$t('sections.fiveth.tabs.first')"/>
                <osm-gallery :images="filterBySection('Благодарственные письма и отзывы')" :title="$t('sections.fiveth.tabs.second')"/>
                <osm-gallery :images="filterBySection('Отчеты СОУП и аттестации')" :title="$t('sections.fiveth.tabs.third')"/>
            </div>
        </div>
        <osm-footer />
        <osm-preloader />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "LicensesPage",
    components: {
        // OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmGallery: () => import('~/components/licenses/OsmGallery.vue'),
        OsmPreloader: () => import('~/components/global/OsmPreloader.vue')
    },
    computed: {
        ...mapGetters(['getLicenses']), 
    },
    created() {
      this.addBreadcrumbs([
          {
              name: 'Главная',
              link: 'index',
              isLink: true
          },
          {
              name: 'Лицензии и сертификаты',
              isLink: false
          },
      ])
    },
    methods: {
      ...mapActions(['addBreadcrumbs']),
      filterBySection(type) {
        return this.getLicenses.filter(i => i.SECTION === type)
      }
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