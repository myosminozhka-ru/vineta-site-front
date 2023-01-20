<template>
  <div class="wrapper">
    <!-- <osm-header /> -->
    <!-- <pre>{{ getContacts }}</pre> -->
    <div v-if="'0' in getContacts" class="contacts">
      <div class="header_padding">
        <osm-breadcrumbs />
        <div class="contacts__top">
          <div class="contacts__left">
            <div class="contacts__title">{{ getContacts['0'].NAME }}</div>
            <div v-if="'PROPERIES' in getContacts['0']" class="contacts__items">
              <div class="contacts__item contacts__item--address">
                <div class="contacts__item_in">
                  <div class="icon">
                    <nuxt-img src="/contacts/MAP.svg" width="100%" alt="" loading="lazy" />
                  </div>
                  <div class="text">{{getContacts['0'].ADRESS?.VALUE}}</div>
                </div>
              </div>
              <template v-for="(contact, index) in getContacts['0'].PROPERIES">
                <div v-if="contact.CODE === 'NAME_PHONE'" :key="index" class="contacts__item contacts__item--schedule">
                  <div class="contacts__item_in name_phone">
                    <div class="icon">
                      <nuxt-img src="/contacts/NAME_PHONE.svg" width="100%" alt="" loading="lazy" />
                    </div>
                    <div class="text">{{ contact?.VALUE }}</div>
                  </div>
                </div>
                <div v-else-if="contact.CODE === 'PHONE'" :key="index" class="contacts__item">
                  <a :href="`tel:${contact?.VALUE}`" class="contacts__item_in phone">
                    <div class="icon">
                      <nuxt-img src="/contacts/PHONE.svg" width="100%" alt="" loading="lazy" />
                    </div>
                    <div class="text">{{ contact?.VALUE }}</div>
                  </a>
                </div>
                <div v-else-if="contact.CODE === 'GEO'" :key="index" class="contacts__item">
                  <div class="contacts__item_in geo">
                    <div class="icon">
                      <nuxt-img src="/contacts/MAP.svg" width="100%" alt="" loading="lazy" />
                    </div>
                    <div class="text">{{ contact?.VALUE }}</div>
                  </div>
                </div>
                <div v-else-if="contact.CODE === 'EMAIL'" :key="index" class="contacts__item">
                  <a :href="`mailto:${contact?.VALUE}`" class="contacts__item_in email">
                    <div class="icon">
                      <nuxt-img src="/contacts/EMAIL.svg" width="100%" alt="" loading="lazy" />
                    </div>
                    <div class="text">{{ contact?.VALUE }}</div>
                  </a>
                </div>
              </template>
            </div>
            <template v-if="getDownloads['rekvizity']">
              <a v-if="'PROPERIES' in getDownloads['rekvizity']" :href="$config.vareibles.remote + getDownloads['rekvizity'].PROPERIES[0]?.VALUE.SRC" target="_blank" class="button contacts__button">
                <div class="contacts__button_in">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 28" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.44661 19.2741L9.44661 0H11.5207L11.5207 19.2741L16.35 14.4448C16.755 14.0398 17.4116 14.0398 17.8166 14.4448C18.2216 14.8498 18.2216 15.5064 17.8166 15.9114L11.2169 22.5111C10.812 22.9161 10.1553 22.9161 9.75036 22.5111L3.15069 15.9114C2.7457 15.5064 2.7457 14.8498 3.15069 14.4448C3.55568 14.0398 4.2123 14.0398 4.61728 14.4448L9.44661 19.2741ZM20.854 26.963C20.854 27.5357 20.3897 28 19.817 28H1.15032C0.577579 28 0.113281 27.5357 0.113281 26.963V26.963C0.113281 26.3902 0.577579 25.9259 1.15032 25.9259H19.817C20.3897 25.9259 20.854 26.3902 20.854 26.963V26.963Z" fill="white" />
                    </svg>
                  </div>
                  <div class="text">{{ getDownloads['rekvizity'].NAME }}</div>
                </div>
              </a>
            </template>
          </div>
          <div class="contacts__right">
            <osm-map />
          </div>
        </div>
      </div>
      <osm-contacts-slider id="contact-slider" :gallery="getVacancies.gallery" />
    </div>
    <section class="fiveth">
      <div class="fiveth__title">{{ $t('contacts.guide') }}</div>
      <div class="fiveth__items">
        <div v-for="item in managment" :key="item.index" class="fiveth__item">
          <div class="avatar">
            <div class="avatar__in">
              <nuxt-img v-if="item.PREVIEW_PICTURE" :src="$config.vareibles.remote + item.PREVIEW_PICTURE" alt="" loading="lazy" />
              <nuxt-img v-else src="/product.noimage.png" alt="" loading="lazy" />
            </div>
          </div>
          <div class="height" :style="'height:' + maxHeight">
            <div class="name">{{ item.NAME }}</div>
            <div v-if="item.PROPERIES?.filter((elem) => elem.CODE === 'DOLJNOST').length" class="position">{{ item.PROPERIES?.filter((elem) => elem.CODE === 'DOLJNOST')[0].VALUE }}</div>
          </div>
          <a v-if="item.PROPERIES?.filter((elem) => elem.CODE === 'PHONE').length" :href="`tel:${item.PROPERIES?.filter((elem) => elem.CODE === 'PHONE')[0].VALUE}`" class="phone">{{ item.PROPERIES?.filter((elem) => elem.CODE === 'PHONE')[0].VALUE }}</a>
          <a v-if="item.PROPERIES?.filter((elem) => elem.CODE === 'EMAIL').length" :href="`mailto:${item.PROPERIES?.filter((elem) => elem.CODE === 'EMAIL')[0].VALUE}`" class="email">{{ item.PROPERIES?.filter((elem) => elem.CODE === 'EMAIL')[0].VALUE }}</a>
        </div>
      </div>
    </section>
    <osm-down-to element-to="contact-slider" />
    <osm-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ContactsPage',
  components: {
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    OsmContactsSlider: () => import('~/components/contacts/OsmSlider.vue'),
    OsmMap: () => import('~/components/global/OsmMap.vue'),
    OsmDownTo: () => import('~/components/global/OsmDownTo.vue'),
  },
  data: () => ({
    isDataLoaded: false,
    maxHeight: 'auto',
    /**
     * Скрыть лоадер
     * @type {boolean}
     * @default false
     */
    isMounted: false,
  }),
  async fetch({store, i18n, app}) {
    await store.dispatch('setLoadingStatus', true)

    if (!store.state.vacancies.length) {
      await store.dispatch('addVacancies')
    }

    if (!Object.keys(store.state.about).length) {
      await store.dispatch('addAbout')
    }

    store.dispatch('addBreadcrumbs', [
      {
        name: i18n.messages[i18n.locale].buttons.main,
        link: 'index',
        isLink: true,
      },
      {
        name: i18n.messages[i18n.locale].buttons.contacts,
        isLink: false,
      },
    ])

    await store.dispatch('setLoadingStatus', false)
  },
  head() {
    return {
      title: this.getSeo.contact?.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.contact?.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.contact?.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getContacts']),
    ...mapGetters(['getVacancies']),
    ...mapGetters(['getAbout']),
    ...mapGetters(['getDownloads']),
    ...mapGetters(['getSeo']),

    contacts() {
      return this.getContacts
    },
    managment() {
      return this.getAbout.peoples
    },
  },
  mounted() {
    this.createDinamycHeight()
    window.addEventListener('resize', this.createDinamycHeight)
    this.isMounted = true;
  },
  destroyed() {
    window.removeEventListener('resize', this.createDinamycHeight)
  },
  methods: {
    createDinamycHeight() {
      this.maxHeight = 'auto'

      setTimeout(() => {
        const panels = document.querySelectorAll('.fiveth .height')
        let maxHeight = 0
        const heights = Array.prototype.slice.call(panels).map(function (panel) {
          return panel.offsetHeight
        })
        heights.forEach((el) => (maxHeight = Math.max(el, maxHeight)))

        this.maxHeight = maxHeight + 'px'
      }, 150)
    },
  },
}
</script>

<style lang="scss" scoped>

.height {
  margin-bottom: 10px;
}
.contacts {
  padding: rem(30) rem(240) rem(120);
  background: #fff;
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }
  @media all and (max-width: 840px) {
    overflow: hidden;
  }

  @media all and (max-width: 1280px) {
    padding: 30px 20px;
  }
  #contact-slider {
    margin-top: 30px;
    @media all and (max-width: 1280px) {
      margin-top: 30px;
    }
  }
  &__top {
    display: flex;
    @media all and (min-width: 1281px) {
      position: relative;
      padding: rem(50);
      margin-bottom: rem(120);
    }
    @media all and (max-width: 840px) {
      flex-direction: column;
      margin-bottom: 50px;
    }
  }
  &__title {
    margin-bottom: rem(30);
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    line-height: 140%;
    color: #172242;
    @media all and (max-width: 1280px) {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  &__left {
    width: rem(461);
    @media all and (min-width: 1281px) {
      position: relative;
      z-index: 5;
      background: #fff;
      padding: rem(50);
    }
    @media all and (max-width: 1280px) {
      width: 50%;
    }
    @media all and (max-width: 840px) {
      width: 100%;
    }
  }
  &__right {
    @media all and (min-width: 1281px) {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
    }
    @media all and (max-width: 1280px) {
      width: 50%;
      margin-left: 0;
    }
    @media all and (max-width: 840px) {
      margin-top: 20px;
      width: 100%;
      height: 410px;
    }
  }
  &__items {
    display: flex;
    flex-direction: column;
  }
  &__item {
    &:not(:last-child) {
      margin-bottom: rem(20);
      @media all and (max-width: 1280px) {
        margin-bottom: 20px;
      }
    }
    &--address {
      order: -2;
    }
    &--schedule {
      order: -1;
    }
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
  &__item_in {
    display: flex;
    align-items: center;
    text-decoration: none;

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
  &__button {
    margin-top: rem(30);
    width: 100%;
    @media all and (max-width: 1280px) {
      width: 330px;
      display: flex;
      margin: 0 auto;
      margin-top: 30px;
    }
    @media all and (max-width: 840px) {
      width: 100%;
    }
  }
  &__button_in {
    display: flex;
    align-items: center;
    .icon {
      width: rem(20);
      height: rem(28);
      margin-right: rem(25);
      font-size: 0;
      @media all and (max-width: 1280px) {
        width: 20px;
        height: 28px;
        margin-right: 25px;
      }
    }
  }
}

.fiveth {
  padding: 0 rem(240) rem(120);
  @media all and (max-width: 1440px) {
    padding-right: 150px;
    padding-left: 150px;
  }
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }
  @media all and (max-width: 1280px) {
    padding: 80px 20px;
  }
  @media all and (max-width: 840px) {
    padding: 60px 15px;
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    margin-bottom: rem(30);
    line-height: 140%;
    color: #172242;
    @media all and (max-width: 1280px) {
      font-size: 30px;
      margin-bottom: 30px;
    }
    @media all and (max-width: 840px) {
    }
  }
  &__items {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__item {
    width: calc(100% / 4 - #{rem(60)} / 4);
    margin-top: rem(40);
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 840px) {
      width: calc(100% / 2 - 10px);
      &:nth-child(n + 3) {
        margin-top: 20px;
      }
    }
    .avatar {
      position: relative;
      margin-bottom: rem(20);
    }
    .avatar__in {
      padding-top: 95%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 0;
      }
    }
    .name {
      font-style: normal;
      font-weight: 600;
      font-size: rem(20);
      margin-bottom: rem(10);
      line-height: 140%;
      color: #172242;
      @media all and (max-width: 1280px) {
        font-size: 20px;
        margin-bottom: 10px;
      }
      @media all and (max-width: 840px) {
        font-size: 14px;
      }
    }
    .position {
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      margin-bottom: rem(10);
      line-height: 140%;
      color: #555f76;
      @media all and (max-width: 1280px) {
        font-size: 16px;
        margin-bottom: 10px;
      }
      @media all and (max-width: 840px) {
        font-size: 12px;
      }
    }
    .phone {
      margin-bottom: 10px;
      @media all and (max-width: 1280px) {
        margin-bottom: 10px;
      }
    }
    .phone,
    .email {
      display: block;
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 140%;
      color: #ff0040;
      @media all and (max-width: 1280px) {
        font-size: 16px;
      }
      @media all and (max-width: 840px) {
        font-size: 12px;
      }
    }
  }
}
</style>
