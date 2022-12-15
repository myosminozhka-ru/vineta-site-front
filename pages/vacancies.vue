<template>
  <div v-if="isDataLoaded" class="wrapper footerOnBottom">
    <!-- <osm-header /> -->
    <div class="header_padding">
      <nuxt-child />
    </div>
    <osm-footer />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'VacanciesPage',
  components: {
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
  },
  data: () => ({
    isDataLoaded: false,
    /**
     * Скрыть лоадер
     * @type {boolean}
     * @default false
     */
     isMounted: false,
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
  mounted() {
    this.isMounted = true;
  }
}
</script>

<style lang="scss" scoped>
.header_padding {
  background: #fff;
}
</style>
