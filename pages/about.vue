<template>
  <div v-if="isMounted" class="wrapper footerOnBottom">
    <!-- <osm-header /> -->
    <div class="header_padding">
      <!-- <pre style="font-size: 15rem;">
        {{ getAbout }}
      </pre> -->
      <section class="first">
        <div class="first__text">
          {{ getAbout.banners.first.NAME }}
          <span class="first__small-text">{{ $t('about.small_text') }}</span>
        </div>
        <div class="first__image hide_on_mobile">
          <nuxt-img :src="$vareibles.remote + getAbout.banners.first.PREVIEW_PICTURE" width="100%" alt="" loading="lazy" />
        </div>
      </section>
      <section v-if="getAbout.banners.second" class="second">
        <div class="second__side second__side--left">
          <div class="second__side_top">
            <div class="second__title">
              <div class="text">{{ getAbout.banners.second.NAME }}</div>
            </div>
            <div class="second__text">
              <p v-html="decodeHTML(getAbout.banners.second.PREVIEW_TEXT)" />
              <p v-if="isTextShowed && getAbout.banners.second.DETAIL_TEXT" v-html="decodeHTML(getAbout.banners.second.DETAIL_TEXT)" />
            </div>
          </div>
          <div v-if="getAbout.banners.second.DETAIL_TEXT" class="second__buttons 12345" @click="isTextShowed = !isTextShowed">
            <osm-button class="second__button">
              <div class="icon" :class="{ isOpened: isTextShowed }">
                <svg width="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_37_12945)">
                    <path d="M0.933594 8.3999L14.0003 19.5999L27.0669 8.3999" stroke="white" stroke-width="3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_12945">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="text">
                <template v-if="!isTextShowed">{{ $t('buttons.unwrap') }}</template>
                <template v-else>{{ $t('buttons.roll_up') }}</template>
              </div>
            </osm-button>
          </div>
        </div>
        <div class="second__side second__side--right">
          <div class="second__side_top">
            <div class="second__title">
              <div class="text">{{ $t('buttons.catalog') }}</div>
              <nuxt-link :to="localePath({ name: 'catalog' })" class="second__title_button">
                <svg width="100%" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L8 9L1 17" stroke="white" stroke-width="2" />
                </svg>
              </nuxt-link>
            </div>
            <div class="second__items">
              <div class="second__items_col">
                <nuxt-link v-for="link in filteredFirstAboutSections" :key="link.index" :to="localePath({ name: 'catalog-catalogId', params: { catalogId: link.CODE } })" class="second__item">
                  <div class="icon">
                    <nuxt-img :src="$vareibles.remote + link.UF_PHOTO_ABOUT" width="100%" alt="" loading="lazy" />
                  </div>
                  <div class="text">{{ link.NAME }}</div>
                </nuxt-link>
              </div>
              <div class="second__items_col">
                <nuxt-link v-for="link in filteredSecondAboutSections" :key="link.index" :to="localePath({ name: 'catalog-catalogId', params: { catalogId: link.CODE } })" class="second__item">
                  <div class="icon">
                    <nuxt-img :src="$vareibles.remote + link.UF_PHOTO_ABOUT" width="100%" alt="" loading="lazy" />
                  </div>
                  <div class="text">{{ link.NAME }}</div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="second__buttons">
            <a href="https://vinetaboat.ru/" target="_blank" class="second__button button">
              <div class="text">
                {{ $t('buttons.boats') }}
              </div>
              <div class="icon">
                <svg id="a" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 72 72">
                  <defs>
                    <component :is="'style'">.b { fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.7px; }</component>
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
          </div>
        </div>
      </section>
      <section class="third">
        <div class="third__title">{{ $t('about.third_title') }}</div>
        <div class="third__items">
          <div v-for="item in getAbout.numbers" :key="item.index" class="third__item">
            <div class="number">{{ item.PROPERIES[0].VALUE }}</div>
            <div class="text">{{ item.NAME }}</div>
          </div>
        </div>
      </section>
      <section v-if="getAbout.banners.third" class="fourth">
        <nuxt-img :src="$vareibles.remote + getAbout.banners.third.PREVIEW_PICTURE" width="100%" alt="" loading="lazy" />
      </section>
      <section class="fiveth">
        <div class="fiveth__title">{{ $t('contacts.guide') }}</div>
        <div class="fiveth__items">
          <div v-for="item in managment" :key="item.index" class="fiveth__item">
            <div class="avatar">
              <div class="avatar__in">
                <nuxt-img v-if="item.PREVIEW_PICTURE" :src="$vareibles.remote + item.PREVIEW_PICTURE" alt="" loading="lazy" />
                <nuxt-img v-else src="/product.noimage.png" alt="" loading="lazy" />
              </div>
            </div>
            <div class="height" :style="'height:' + maxHeight">
              <div class="name">{{ item.NAME }}</div>
              <div v-if="item.PROPERIES.filter((elem) => elem.CODE === 'DOLJNOST').length" class="position">{{ item.PROPERIES.filter((elem) => elem.CODE === 'DOLJNOST')[0].VALUE }}</div>
            </div>
            <a v-if="item.PROPERIES.filter((elem) => elem.CODE === 'PHONE').length" :href="`tel:${item.PROPERIES.filter((elem) => elem.CODE === 'PHONE')[0].VALUE}`" class="phone">{{ item.PROPERIES.filter((elem) => elem.CODE === 'PHONE')[0].VALUE }}</a>
            <a v-if="item.PROPERIES.filter((elem) => elem.CODE === 'EMAIL').length" :href="`mailto:${item.PROPERIES.filter((elem) => elem.CODE === 'EMAIL')[0].VALUE}`" class="email">{{ item.PROPERIES.filter((elem) => elem.CODE === 'EMAIL')[0].VALUE }}</a>
          </div>
        </div>
      </section>
      <section class="fourth">
        <nuxt-img src="/about/people2.jpg" width="100%" alt="" loading="lazy" />
        <div v-if="false" class="play">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" fill="none">
            <rect width="100%" height="100%" fill="#FF004D" />
            <path d="M61.6673 50L38.334 33.3334V66.6667L61.6673 50Z" fill="white" />
          </svg>
        </div>
      </section>
      <section class="history">
        <div class="history__side history__left">
          <div class="history__top">
            <div class="history__title">{{ getAbout.banners.fifth.NAME }}</div>
            <div class="history__line"></div>
            <div class="history__text">{{ getAbout.banners.fifth.PREVIEW_TEXT }}</div>
          </div>
          <osm-button class="history__button" link="history">{{ $t('buttons.more') }}</osm-button>
        </div>
        <div class="history__side history__right">
          <div class="history__top">
            <div class="history__title">{{ getAbout.banners.sixth.NAME }}</div>
            <div class="history__line"></div>
            <div class="history__text" v-html="getAbout.banners.sixth.PREVIEW_TEXT"></div>
          </div>
          <osm-button class="history__button" :outlined="true" link="techs">{{ $t('buttons.more') }}</osm-button>
        </div>
      </section>
      <section class="sixth">
        <customers :has-button="true" />
      </section>
      <section v-if="false" class="seventh">
        <div class="seventh__title">{{ $t('about.map') }}</div>
        <div class="seventh__map">
          <nuxt-img src="/about/map.svg" width="100%" alt="" loading="lazy" />
        </div>
      </section>
      <section class="eighth">
        <licenses />
      </section>
    </div>
    <osm-footer />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AboutPage',
  components: {
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
    Customers: () => import('~/components/sliders/Customers.vue'),
    Licenses: () => import('~/components/tabs/Licenses.vue'),
  },
  data: () => ({
    isTextShowed: false,
    isDataLoaded: false,
    filteredFirstAboutSections: [],
    filteredSecondAboutSections: [],
    isMounted: false,
    maxHeight: 'auto',
  }),
  async fetch() {
    await this.addAbout()
    if (process.client) {
      this.createDinamycHeight()
    }
  },
  head() {
    return {
      title: this.getSeo.about.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.about.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.about.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getAbout']),
    ...mapGetters(['getSeo']),
    managment() {
      return this.getAbout.peoples
    },
  },
  created() {
    this.addAbout().then((result) => {
      this.isDataLoaded = true
    })
    this.addBreadcrumbs([
      {
        name: this.$t('buttons.main'),
        link: 'index',
        isLink: true,
      },
      {
        name: this.$t('buttons.about'),
        isLink: false,
      },
    ])
  },

  mounted() {
    this.isMounted = true
    this.filterAboutSections()
    this.createDinamycHeight()
    window.addEventListener('resize', this.createDinamycHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.createDinamycHeight)
  },
  methods: {
    ...mapActions(['addBreadcrumbs']),
    ...mapActions(['addAbout']),
    decodeHTML(html) {
      if (document) {
        const txt = document.createElement('textarea')
        txt.innerHTML = html
        return txt.value
      }
    },
    filterAboutSections() {
      const firstArray = []
      const secondArray = []
      this.getAbout.sections.forEach((i) => {
        switch (i.ID) {
          case '16':
            firstArray[0] = i
            break
          case '3':
            firstArray[1] = i
            break
          case '33':
            firstArray[2] = i
            break
          case '2':
            firstArray[3] = i
            break
          case '9':
            firstArray[4] = i
            break
          case '1':
            secondArray[0] = i
            break
          case '29':
            secondArray[1] = i
            break
          case '34':
            secondArray[2] = i
            break
          case '8':
            secondArray[3] = i
            break
        }
      })
      this.filteredFirstAboutSections = firstArray
      this.filteredSecondAboutSections = secondArray
    },
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

.header_padding {
  background: #fff;
}

.first {
  display: flex;
  align-items: center;
  padding: rem(20) rem(240) rem(20) rem(240);
  background: #d7dce1;
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }

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
      width: 745px;
      font-size: 30px;
    }

    @media all and (max-width: 840px) {
      width: 100%;
    }
  }

  &__small-text {
    font-size: rem(30);
    display: block;
    line-height: normal;
    margin-top: rem(10);

    @media all and (max-width: 1280px) {
      font-size: 20px;
    }
  }

  &__image {
    width: rem(419);
    font-size: 0;
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

.second {
  display: flex;

  @media all and (max-width: 1280px) {
    flex-direction: column;
  }

  &__side {
    width: 50%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media all and (max-width: 1280px) {
      width: 100%;
    }

    &--left {
      padding: rem(60) rem(60) rem(60) rem(240);

      @media all and (max-width: 1440px) {
        padding-left: 150px;
      }
      @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
        padding-left: rem(50);
      }

      @media all and (max-width: 1280px) {
        padding: 40px 20px;
      }

      @media all and (max-width: 840px) {
        padding: 60px 15px;
      }
    }

    &--right {
      padding: rem(60) rem(240) rem(60) rem(60);
      background: #2e5599;

      @media all and (max-width: 1440px) {
        padding-right: 150px;
      }
      @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
        padding-right: rem(50);
      }

      @media all and (max-width: 1280px) {
        padding: 40px 20px;
      }

      @media all and (max-width: 840px) {
        padding: 60px 15px;
      }
    }
  }

  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(24);
    margin-bottom: rem(45);
    line-height: 140%;
    display: flex;
    align-items: center;

    @media all and (max-width: 1280px) {
      font-size: 24px;
      margin-bottom: 42px;
    }
  }

  &__side--right &__title {
    color: #fff;
  }

  &__title_button {
    display: block;
    width: rem(40);
    height: rem(40);
    padding: rem(12) rem(16);
    margin-left: rem(20);
    background: #ff0040;
    box-sizing: border-box;
    font-size: 0;
    transition: all 0.3s ease;

    @media all and (max-width: 1280px) {
      width: 40px;
      height: 40px;
      padding: 12px 16px;
      margin-left: 28px;
    }

    &:hover {
      background: #df0043;
    }

    &:active {
      background: #a70032;
    }
  }

  &__text {
    p {
      font-style: normal;
      font-weight: 600400;
      font-size: rem(20);
      line-height: 140%;
      color: #555f76;
      margin: 0;

      @media all and (max-width: 1280px) {
        font-size: 20px;
      }

      &:not(:last-child) {
        margin-bottom: rem(20);

        @media all and (max-width: 1280px) {
          margin-bottom: 20px;
        }
      }
    }
  }

  &__buttons {
    margin-top: rem(54);

    @media all and (max-width: 1280px) {
      margin-top: 30px;
    }
  }

  &__button {
    display: inline-flex;
    align-items: center;

    @media all and (max-width: 1280px) {
      width: 263px;
    }

    @media all and (max-width: 840px) {
      width: 100%;
    }

    .icon {
      width: rem(28);
      height: rem(28);
      margin-right: rem(20);
      font-size: 0;
      transition: all 0.3s ease;

      @media all and (max-width: 1280px) {
        min-width: 28px;
        max-width: 28px;
        height: 28px;
        margin-right: 20px;
      }

      &.isOpened {
        transform: rotate(180deg);
      }
    }
  }

  &__side--right &__button {
    .icon {
      margin-right: 0;
      margin-left: rem(20);

      @media all and (max-width: 1280px) {
        margin-left: 20px;
      }
    }
  }

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &_col {
      display: flex;
      flex-direction: column;
      width: 45%;
      @media all and (max-width: 1280px) {
        min-width: 270px;
      }
    }
  }

  &__item {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-bottom: 20px;

    @media all and (max-width: 1280px) {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    @media all and (max-width: 840px) {
      width: 100%;
    }

    .icon {
      font-size: 0;
      width: rem(30);
      margin: rem(10);
      flex-shrink: 0;

      img {
        width: 100%;
      }

      @media all and (max-width: 1280px) {
        width: 24px;
        margin-right: 10px;
      }
    }

    .text {
      font-style: normal;
      font-weight: 400;
      font-size: rem(18);
      line-height: 140%;
      color: #ffffff;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 100%;
        bottom: rem(-5);
        height: rem(1);
        background: #fff;
        transition: all 0.3s ease;
      }

      @media all and (max-width: 1280px) {
        font-size: 16px;
      }
    }

    &:hover .text:after {
      right: 0;
    }
  }
}

.third {
  padding: rem(120) rem(240);

  @media all and (max-width: 1440px) {
    padding-right: 150px;
    padding-left: 150px;
  }
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
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
    width: calc(100% / 2 - #{rem(60)} / 4);
    text-align: center;
    margin-top: 20px;

    @media all and (max-width: 840px) {
      width: calc(100% / 2 - 10px);

      &:nth-child(n + 3) {
        margin-top: 20px;
      }
    }

    .number {
      font-style: normal;
      font-weight: 600;
      font-size: rem(120);
      line-height: 110%;
      color: #ff0040;

      @media all and (max-width: 1280px) {
        font-size: 80px;
      }

      @media all and (max-width: 840px) {
        font-size: 60px;
      }
    }

    .text {
      font-style: normal;
      font-weight: 400;
      font-size: rem(20);
      line-height: 110%;
      color: #555f76;

      @media all and (max-width: 1280px) {
        font-size: 20px;
      }

      @media all and (max-width: 840px) {
        font-size: 16px;
      }
    }
  }
}

.fourth {
  padding: 0 rem(240);
  font-size: 0;
  position: relative;

  > img {
    max-width: 100%;
  }

  @media all and (max-width: 1440px) {
    padding-right: 150px;
    padding-left: 150px;
  }
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }

  @media all and (max-width: 1280px) {
    padding: 0 20px;
  }

  @media all and (max-width: 840px) {
    padding: 0 15px;
  }

  .play {
    font-size: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    cursor: pointer;
    width: rem(100);
    height: rem(100);

    @media all and (max-width: 1280px) {
      width: 80px;
      height: 80px;
    }

    @media all and (max-width: 840px) {
      width: 60px;
      height: 60px;
    }

    svg rect {
      transition: all 0.3s ease;
    }

    &:hover {
      svg rect {
        fill: #df0043;
      }
    }

    &:active {
      svg rect {
        fill: #a70032;
      }
    }
  }
}

.fiveth {
  padding: rem(120) rem(240);

  @media all and (max-width: 1440px) {
    padding-right: 150px;
    padding-left: 150px;
  }
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
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

    @media all and (min-width: 841px) {
      &:nth-child(n + 5) {
        margin-top: rem(40);
      }
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

.sixth {
  overflow: hidden;
  padding: rem(120) rem(240);
  background: #f2f2f2;

  @media all and (max-width: 1440px) {
    padding-right: 150px;
    padding-left: 150px;
  }
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }

  @media all and (max-width: 1280px) {
    padding: 80px 20px;
  }

  @media all and (max-width: 840px) {
    padding: 60px 15px;
  }
}

.seventh {
  padding: rem(120) rem(240);

  @media all and (max-width: 1440px) {
    padding-right: 150px;
    padding-left: 150px;
  }
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
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

  &__map {
    padding: 0 rem(110);

    @media all and (max-width: 1280px) {
      padding: 0;
    }
  }
}

.eighth {
  overflow: hidden;
  padding: rem(0) rem(240) rem(120);
  background: #f2f2f2;

  @media all and (max-width: 1440px) {
    padding-right: 150px;
    padding-left: 150px;
  }
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }

  @media all and (max-width: 1280px) {
    padding: 80px 20px;
  }

  @media all and (max-width: 840px) {
    padding: 60px 15px;
  }
}

.history {
  padding: rem(120) 0;
  display: flex;

  @media all and (max-width: 1280px) {
    padding: rem(80) 0;
    overflow: auto;
  }

  @media all and (max-width: 860px) {
    flex-direction: column;
  }

  &__side {
    width: 50%;
    padding-top: rem(60);
    padding-bottom: rem(60);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media all and (max-width: 1280px) {
      min-width: 314px;
    }
    @media all and (max-width: 860px) {
      width: 100%;
    }
  }

  &__left {
    padding-left: rem(240);
    padding-right: rem(240);
    position: relative;
    background: url('~assets/img/about/about_history.jpg') 50% 50% / cover no-repeat;
    @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
      padding-left: rem(50);
      padding-right: rem(50);
    }
    @media all and (max-width: 1280px) {
      padding-left: rem(20);
      padding-right: rem(20);
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #172242;
      opacity: 0.6;
    }
  }

  &__right {
    padding-left: rem(131);
    padding-right: rem(350);

    @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
      padding-left: rem(50);
      padding-right: rem(50);
    }

    @media all and (max-width: 1280px) {
      padding-left: rem(20);
      padding-right: rem(20);
    }
  }

  &__top {
    position: relative;
    z-index: 5;
  }

  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    margin-bottom: rem(30);
    line-height: 140%;

    @media all and (max-width: 1280px) {
      font-size: 30px;
    }
  }

  &__left &__title {
    color: #ffffff;
  }

  &__right &__title {
    color: #172242;
  }

  &__line {
    width: 100%;
    height: 2px;
    border-radius: 4px;
    margin-bottom: rem(30);
  }

  &__left &__line {
    background: #ffffff;
  }

  &__right &__line {
    background: #555f76;
    opacity: 0.2;
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: rem(18);
    margin-bottom: rem(30);
    line-height: 140%;
  }

  &__left &__text {
    color: #ffffff;
    opacity: 0.9;
  }

  &__right &__text {
    color: #555f76;
    opacity: 0.7;
  }

  &__button {
    position: relative;
    z-index: 5;

    @media all and (max-width: 1280px) {
      width: 183px;
    }
    @media all and (max-width: 860px) {
      width: 100%;
    }
  }
}
</style>
