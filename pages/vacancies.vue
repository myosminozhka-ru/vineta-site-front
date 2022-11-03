<template>
  <div v-if="isDataLoaded" class="wrapper footerOnBottom">
    <!-- <osm-header /> -->
    <div class="header_padding">
      <nuxt-child />
    </div>
    <osm-footer />
    <osm-preloader />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AboutPage',
  components: {
    // OsmHeader: () => import('~/components/global/OsmHeader.vue'),
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    OsmPreloader: () => import('~/components/global/OsmPreloader.vue'),
  },
  data: () => ({
    isDataLoaded: false,
  }),
  async fetch() {
    await this.addVacancies()
  },
  head() {
    return {
      title: this.getSeo.vacancies.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.vacancies.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.vacancies.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getSeo']),
  },
  created() {
    this.addVacancies().then((result) => {
      this.isDataLoaded = true
    })
  },
  methods: {
    ...mapActions(['addVacancies']),
  },
}
</script>

<style lang="scss" scoped>
.header_padding {
  background: #fff;
}
</style>
