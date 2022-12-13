<template>
  <div class="wrapper">
    <!-- <osm-header /> -->
    <div class="partners">
      <!-- <pre style="font-size: 15rem;">{{ getPartners }}</pre> -->
      <div v-if="getPartners" class="header_padding">
        <osm-breadcrumbs />
        <div class="partners__title">Основные заказчики</div>
        <div class="partners__items">
          <div v-for="item in getPartners" :key="item.index" style="min-width: 0">
            <div v-if="'PROPERIES' in item" class="partners__item">
              <!-- <pre>{{ item }}</pre> -->
              <div class="partners__item_top">
                <div v-if="'PREVIEW_PICTURE' in item" class="partners__item_logo">
                  <nuxt-img :src="$vareibles.remote + item.PREVIEW_PICTURE" alt="" loading="lazy" />
                </div>
                <div v-if="'PREVIEW_TEXT' in item" class="partners__item_text">
                  {{ item.PREVIEW_TEXT }}
                </div>
                <div v-if="'PROPERIES' in item" class="partners__contact_items">
                  <div class="partners__contact_item">
                    <div class="icon">
                      <nuxt-img src="/contacts/MAP.svg" width="100%" alt="" loading="lazy" />
                    </div>
                    <div class="text">{{ item.ADRESS.VALUE }}</div>
                  </div>
                  <a v-if="item.PROPERIES[1]" :href="`mailto:${item.PROPERIES[1].VALUE}`" class="partners__contact_item email">
                    <div class="icon">
                      <nuxt-img src="/contacts/EMAIL.svg" width="100%" alt="" loading="lazy" />
                    </div>
                    <div class="text">{{ item.PROPERIES[1].VALUE }}</div>
                  </a>
                  <a v-if="item.PROPERIES[2]" :href="`tel:${item.PROPERIES[2].VALUE}`" class="partners__contact_item phone">
                    <div class="icon">
                      <nuxt-img src="/contacts/PHONE.svg" width="100%" alt="" loading="lazy" />
                    </div>
                    <div class="text">{{ item.PROPERIES[2].VALUE }}</div>
                  </a>
                  <div v-if="item.PROPERIES[3]" class="partners__contact_item">
                    <div class="icon">
                      <nuxt-img src="/contacts/SITE.svg" width="100%" alt="" loading="lazy" />
                    </div>
                    <div class="text">{{ item.PROPERIES[3].VALUE }}</div>
                  </div>
                </div>
              </div>
              <a v-if="item.PROPERIES[3]" class="button" :href="`http://${item.PROPERIES[3].VALUE}`" target="_blank">Перейти на сайт</a>
            </div>
          </div>
        </div>
        <div class="partners__title partners__hidden">Дочерние предприятия</div>
        <div class="partners__child_items partners__hidden">
          <div v-for="item in 1" :key="item.index" class="partners__child_item">
            <div class="partners__item_name">ОАО «Севмаш»</div>
            <div class="partners__contact_items">
              <div class="partners__contact_item">
                <div class="icon">
                  <nuxt-img src="/contacts/MAP.svg" width="100%" alt="" loading="lazy" />
                </div>
                <div class="text">620062, г. Екатеринбург, пр. Ленина, д. 101, стр.2, офис 500</div>
              </div>
              <a href="mailto:info@vineta.ru" class="partners__contact_item">
                <div class="icon">
                  <nuxt-img src="/contacts/EMAIL.svg" width="100%" alt="" loading="lazy" />
                </div>
                <div class="text">info@vineta.ru</div>
              </a>
              <a href="tel:+7(812)493-50-48" class="partners__contact_item">
                <div class="icon">
                  <nuxt-img src="/contacts/PHONE.svg" width="100%" alt="" loading="lazy" />
                </div>
                <div class="text">+7(812)493-50-48</div>
              </a>
              <div class="partners__contact_item">
                <div class="icon">
                  <nuxt-img src="/contacts/WATCH.svg" width="100%" alt="" loading="lazy" />
                </div>
                <div class="text">Пн-Пт с 9:00 до 18:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <osm-footer />
    <osm-preloader :class="[{'preloader--is-hidden': isMounted}]" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PartnersPage',
  components: {
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmPreloader: () => import('~/components/global/OsmPreloader.vue'),
  },
  data: () => ({
    isMounted: false
  }),
  head() {
    return {
      title: this.getSeo.partners.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.partners.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.partners.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getPartners']),
    ...mapGetters(['getSeo']),
  },
  created() {
    this.addBreadcrumbs([
      {
        name: 'Главная',
        link: 'index',
        isLink: true,
      },
      {
        name: 'Основные заказчики',
        isLink: false,
      },
    ])
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    ...mapActions(['addBreadcrumbs']),
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: #fff;
}
.partners {
  padding: rem(30) rem(240) rem(120);
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }
  @media all and (max-width: 1280px) {
    padding: 30px 20px;
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    margin-bottom: rem(25);
    line-height: 140%;
    color: #172242;
    @media all and (max-width: 1280px) {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: rem(20);
    &:not(:last-child) {
      margin-bottom: rem(120);
    }
    @media all and (max-width: 840px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 20px;
    }
  }
  &__child_items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: rem(20);
    @media all and (max-width: 840px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 20px;
    }
  }
  &__item {
    height: 100%;
    padding: rem(20);
    border: 1px solid #d7dce1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .phone,
    .email {
      .text {
        display: inline-block;
        width: max-content;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 100%;
          bottom: -5rem;
          height: 1px;
          background: #172242;
          transition: all 0.3s ease;
        }
        &:hover {
          &:after {
            right: 0;
          }
        }
      }
    }
  }
  &__item_logo {
    height: rem(70);
    margin-bottom: rem(40);
    display: flex;
    align-items: center;
    @media all and (max-width: 840px) {
      margin-bottom: 25px;
      height: auto;
    }
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  &__item_text {
    font-style: normal;
    font-weight: 400;
    font-size: rem(16);
    margin-bottom: rem(30);
    line-height: 140%;
    color: #555f76;
  }
  &__contact_items {
    margin-bottom: rem(30);
  }
  &__contact_item {
    display: flex;
    align-items: center;
    text-decoration: none;
    &:not(:last-child) {
      margin-bottom: rem(20);
      @media all and (max-width: 1280px) {
        margin-bottom: 20px;
      }
    }
    .icon {
      width: rem(30);
      margin-right: rem(20);
      font-size: 0;
      @media all and (max-width: 1280px) {
        width: 30px;
        margin-right: 20px;
      }
    }
    .text {
      width: calc(100% - #{rem(50)});
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 140%;
      color: #172242;
      @media all and (max-width: 1280px) {
        font-size: 16px;
      }
    }
  }
  &__item_name {
    font-style: normal;
    font-weight: 600;
    font-size: rem(24);
    margin-bottom: rem(20);
    line-height: 140%;
    color: #172242;
    @media all and (max-width: 1280px) {
      font-size: 18px;
    }
  }
}

.partners__hidden {
  display: none;
}
</style>
