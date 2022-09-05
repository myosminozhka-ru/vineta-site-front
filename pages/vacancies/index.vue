<template>
  <div>
    <!-- <pre style="font-size: 15rem;">
        {{ getVacancies }}
      </pre> -->
    <section class="first" v-if="getVacancies.banners.first">
      <div class="first__text">
        {{ getVacancies.banners.first.NAME }}
      </div>
      <div class="first__image hide_on_mobile">
        <img :src="$vareibles.remote + getVacancies.banners.first.PREVIEW_PICTURE" width="100%" alt="" />
      </div>
    </section>
    <osm-advantagies :bennefits="getVacancies.bennefits" />
    <div class="vacancies__slider">
      <osm-slider :gallery="getVacancies.gallery" />
    </div>
    <osm-response />
    <osm-list :vacancies="getVacancies.vacancy" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AboutPage',
  head() {
    return {
      title: this.getVacancies && 'SEO' in this.getVacancies ? this.getVacancies.SEO.META.TITLE : '',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.getVacancies && 'SEO' in this.getVacancies ? this.getVacancies.SEO.META.DESCRIPTION : 'DESCRIPTION',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getVacancies && 'SEO' in this.getVacancies ? this.getVacancies.SEO.META.KEYWORDS : '',
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
          content: this.getVacancies && 'SEO' in this.getVacancies ? this.getVacancies.SEO.META.TITLE : '',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.getVacancies && 'SEO' in this.getVacancies ? this.getVacancies.SEO.META.DESCRIPTION : '',
        },
        {
          hid: 'twitter:imag',
          name: 'twitter:imag',
          content: this.getVacancies && 'PREVIEW_PICTURE' in this.getVacancies ? this.$vareibles.remote + this.getVacancies.PREVIEW_PICTURE : require('~/assets/img/product.noimage.png'),
        },
      ],
    }
  },
  components: {
    OsmAdvantagies: () => import('~/components/vacancies/OsmAdvantagies.vue'),
    OsmResponse: () => import('~/components/vacancies/OsmResponse.vue'),
    OsmList: () => import('~/components/vacancies/OsmList.vue'),
    OsmSlider: () => import('~/components/contacts/OsmSlider.vue'),
  },
  data: () => ({
    isTextShowed: false,
  }),
  created() {
    this.addBreadcrumbs([
      {
        name: 'Главная',
        link: 'index',
        isLink: true,
      },
      {
        name: 'Вакансии',
        isLink: false,
      },
    ])
  },
  methods: {
    ...mapActions(['addBreadcrumbs']),
  },
  computed: {
    ...mapGetters(['getVacancies']),
  },
}
</script>

<style lang="scss" scoped>
.first {
  display: flex;
  align-items: center;
  padding: rem(20) rem(240) rem(20) rem(240);
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }
  background: #d7dce1;
  @media all and (max-width: 1280px) {
    padding: 20px 20px 20px 20px;
    height: calc(100vh - 170px);
  }
  @media all and (max-width: 840px) {
    padding: 60px 15px;
    height: calc(100vh - 140px);
  }

  &__text {
    width: calc(100% - #{rem(419)});
    font-style: normal;
    font-weight: 600;
    font-size: rem(50);
    line-height: 140%;
    color: #172242;
    @media all and (max-width: 1280px) {
      width: 446px;
      font-size: 30px;
    }
    @media all and (max-width: 840px) {
      width: 100%;
    }
  }

  &__image {
    width: rem(419);
    height: 100%;
    padding: 30px 0;
    font-size: 0;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @media all and (max-width: 1280px) {
      width: calc(100% - 446px);
    }
  }
}
.vacancies {
  &__slider {
    padding: 0 rem(240);
    @media all and (max-width: 1280px) {
      padding: 0 20px;
    }
  }
}
</style>
