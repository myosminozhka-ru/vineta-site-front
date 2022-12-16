<template>
  <div class="vacancy">
    <div v-if="$store.state.dataVacancy.length > 0" class="vacancy__in">
      <osm-breadcrumbs />
      <div class="vacancy__top">
        <div class="vacancy__title">{{ $store.state.dataVacancy[0].NAME }}</div>
        <div class="vacancy__button hide_on_mobile" @click="openApplyModal">
          <osm-button>{{ $t('buttons.apply') }}</osm-button>
        </div>
      </div>
      <div class="vacancy__price">{{ $store.state.dataVacancy[0].PROPERIES.find(item => item.CODE === 'OKLAD')?.VALUE }}</div>
      <div class="vacancy__button hide_off_mobile" @click="openApplyModal">
        <osm-button>{{ $t('buttons.apply') }}</osm-button>
      </div>
      <div class="vacancy__items">
        <div v-if="isMounted" class="vacancy__item">
          <div v-for="item in $store.state.dataVacancy[0].PROPERIES" :key="item.index" class="spec">
            <div class="title">{{ item.NAME }}</div>
            <template v-if="item.VALUE.TEXT">
              <div class="text" v-html="decodeHTML(item.VALUE.TEXT)"></div>
            </template>
            <template v-if="!item.VALUE.TEXT">
              <div class="text" v-html="decodeHTML(item.VALUE)"></div>
            </template>
          </div>
        </div>
      </div>
      <osm-apply-modal v-if="isShowApplyModal" :property="$store.state.dataVacancy[0].NAME" @close="isShowApplyModal = false" />
    </div>
    <osm-response @onOpenModal="isShowApplyModal = true" :data-array="getVacancies.persons" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    OsmButton: () => import('~/components/global/OsmButton.vue'),
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmResponse: () => import('~/components/vacancies/OsmResponseIn.vue'),
    OsmApplyModal: () => import('~/components/modals/apply.vue'),
  },
  data: () => ({
    vacancy: [],
    isMounted: false,
    isShowApplyModal: false,
  }),
  async fetch({store, route, app, i18n}) {
    await store.dispatch('setLoadingStatus', true)
    const dataVacancy = await app.$axios.$get(`vacancy-detail.php?code=${route.params.itemId}`)
    await store.dispatch('setDataVacancy', dataVacancy)
    await store.dispatch('addBreadcrumbs', [
      {
        name: i18n.messages[i18n.locale].buttons.main,
        link: 'index',
        isLink: true,
      },
      {
        name: i18n.messages[i18n.locale].buttons.vacancies,
        link: 'vacancies',
        isLink: true,
      },
      {
        name: dataVacancy[0].NAME,
        isLink: false,
      },
    ])
  },
  head() {
    return {
      title: this.$store.state.dataVacancy.length > 0 && 'SEO' in this.$store.state.dataVacancy[0] ? this.$store.state.dataVacancy[0].SEO.META.TITLE : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$store.state.dataVacancy.length > 0 && 'SEO' in this.$store.state.dataVacancy[0] ? this.$store.state.dataVacancy[0].SEO.META.DESCRIPTION : 'DESCRIPTION',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$store.state.dataVacancy.length > 0 && 'SEO' in this.$store.state.dataVacancy[0] ? this.$store.state.dataVacancy[0].SEO.META.KEYWORDS : '',
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
          content: this.$store.state.dataVacancy.length > 0 && 'SEO' in this.$store.state.dataVacancy[0] ? this.$store.state.dataVacancy[0].SEO.META.TITLE : '',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$store.state.dataVacancy.length > 0 && 'SEO' in this.$store.state.dataVacancy[0] ? this.$store.state.dataVacancy[0].SEO.META.DESCRIPTION : '',
        },
        {
          hid: 'twitter:imag',
          name: 'twitter:imag',
          content: this.$store.state.dataVacancy.length > 0 && 'PREVIEW_PICTURE' in this.$store.state.dataVacancy[0] ? this.$vareibles.remote + this.$store.state.dataVacancy[0].PREVIEW_PICTURE : require('~/assets/img/product.noimage.png'),
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getVacancies']),
  },
  mounted() {
    this.vacancy = this.$store.state.dataVacancy;
    window.scrollTo(0, 0)
    this.isMounted = true

    setTimeout(() => {
      this.setLoadingStatus(false)
    }, 0)
  },
  destroyed() {
    this.setDataVacancy = [];
  },
  methods: {
    ...mapActions(['toggleModal', 'setDataVacancy']),
    openApplyModal() {
      this.toggleModal({
        isOpened: true,
        type: 'apply',
      })
      this.isShowApplyModal = true
    },
    ...mapActions(['addBreadcrumbs', 'setLoadingStatus']),
    decodeHTML(html) {
      if (document) {
        const txt = document.createElement('textarea')
        txt.innerHTML = html
        return txt.value
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.vacancy {
  &__in {
    padding: rem(30) rem(240) rem(120);
    @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
      padding-left: rem(50);
      padding-right: rem(50);
    }
    @media all and (max-width: 1280px) {
      padding: 30px 20px;
    }
  }
  &__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: rem(30);
    @media all and (max-width: 840px) {
      flex-direction: column;
    }
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    margin-right: rem(36);
    line-height: 140%;
    color: #172242;
    flex: 1 1 auto;
    @media all and (max-width: 1280px) {
      font-size: 30px;
    }
    @media all and (max-width: 840px) {
      margin-right: 0;
    }
  }
  &__button {
    @media all and (max-width: 840px) {
      margin-bottom: 30px;
    }
  }
  &__price {
    font-style: normal;
    font-weight: 600;
    font-size: rem(24);
    margin-bottom: rem(30);
    line-height: 140%;
    color: #172242;
  }
  &__item {
    &:not(:last-child) {
      margin-bottom: rem(60);
    }
    .spec {
      .title {
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        margin-bottom: rem(10);
        line-height: 140%;
        color: #555f76;
      }
      .text {
        font-style: normal;
        font-weight: 400;
        font-size: rem(18);
        line-height: 140%;
        color: #172242;
      }
      &:not(:last-child) {
        margin-bottom: rem(20);
      }
    }
    & > .title {
      font-style: normal;
      font-weight: 600;
      font-size: rem(24);
      margin-bottom: rem(30);
      line-height: 140%;
      color: #172242;
    }
    .list {
      padding: 0;
      margin: 0;
      padding-left: rem(20);
      li {
        font-style: normal;
        font-weight: 400;
        font-size: rem(15);
        line-height: 140%;
        color: #555f76;
        &:not(:last-child) {
          margin-bottom: rem(10);
        }
      }
    }
  }
}
</style>
