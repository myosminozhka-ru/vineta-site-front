<template>
  <div class="wrapper footerOnBottom">
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
  async fetch({store}) {
    await store.dispatch('setLoadingStatus', true)

    if (!store.state.vacancies.length) {
      await store.dispatch('addVacancies')
    }

    if (!store.state.main.length) {
      await store.dispatch('addMain')
    }

    if (!Object.keys(store.state.main2).length) {
      await store.dispatch('addMainMore')
    }
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
  methods: {
    ...mapActions(['setLoadingStatus', 'addVacancies', 'addMain', 'addMainMore']),
  },
}
</script>

<style lang="scss" scoped>
.header_padding {
  background: #fff;
}
</style>
