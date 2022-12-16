<template>
  <div v-if="isMounted" class="history">
    <!-- <osm-header /> -->
    <div class="header_padding">
      <!-- <pre style="font-size: 15rem;">
                {{ getHistory }}
            </pre> -->
      <div class="history__in">
        <div class="history__top">
          <osm-breadcrumbs :white="true" />
        </div>
        <div class="history__bottom">
          <div class="history__text">
            <div
              v-for="(item, key) in modifyedHistory"
              :key="item.index"
              class="history__text--left"
              :class="{
                isActive: key === selectedTime,
                isOpened: item.isTextShowed,
              }"
            >
              <p v-html="decodeHTML(item.PREVIEW_TEXT)" />
              <div class="text button" @click="item.isTextShowed = !item.isTextShowed">
                <template v-if="!item.isTextShowed">{{ $t('buttons.unwrap') }}</template>
                <template v-else>{{ $t('buttons.roll_up') }}</template>
              </div>
            </div>
            <div class="history__text--buttons hide_on_tablet">
              <div @click="prev">
                <osm-button :outlined="true" class="history__text--button">
                  <div class="arrow">
                    <nuxt-img src="/arrow2.svg" width="100%" alt="" loading="lazy" />
                  </div>
                  <div class="text">{{ $t('buttons.into_the_past') }}</div>
                </osm-button>
              </div>
              <div @click="next">
                <osm-button :outlined="true" class="history__text--button history__text--button--fwd">
                  <div class="arrow">
                    <nuxt-img src="/arrow2.svg" width="100%" alt="" loading="lazy" />
                  </div>
                  <div class="text">{{ $t('buttons.at_present') }}</div>
                </osm-button>
              </div>
            </div>
          </div>
          <div class="history__timeline">
            <div
              v-for="(item, key) in getHistory"
              :key="item.index"
              class="history__timeline_item"
              :class="{
                isActive: key <= selectedTime,
                isTransformed: key === selectedTime,
              }"
              :style="`--index: ${selectedTime}`"
            >
              <div class="top">
                <div class="line"></div>
                <div class="sqare"></div>
              </div>
              <div class="bottom" @click="clickOnDotted(key)">
                {{ item.NAME }}
              </div>
            </div>
          </div>
          <div class="history__text--buttons hide_on_desktop">
            <div @click="prev">
              <osm-button :outlined="true" class="history__text--button">
                <div class="arrow">
                  <nuxt-img src="/arrow2.svg" width="100%" alt="" loading="lazy" />
                </div>
                <div class="text">{{ $t('buttons.into_the_past') }}</div>
              </osm-button>
            </div>
            <div @click="next">
              <osm-button :outlined="false" class="history__text--button history__text--button--fwd">
                <div class="arrow">
                  <nuxt-img src="/arrow2.svg" width="100%" alt="" loading="lazy" />
                </div>
                <div class="text">{{ $t('buttons.at_present') }}</div>
              </osm-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HistoryPage',
  components: {
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  data: () => ({
    selectedTime: 0,
    modifyedHistory: [],
    isDataLoaded: false,
    isMounted: false,
  }),
  async fetch({store, i18n}) {
    await store.dispatch('setLoadingStatus', true)

    if (!store.state.history.length) {
      await store.dispatch('addHistory')
    }

    await store.dispatch('addBreadcrumbs', [
      {
        name: i18n.messages[i18n.locale].buttons.main,
        link: 'index',
        isLink: true,
      },
      {
        name: i18n.messages[i18n.locale].buttons.history,
        isLink: false,
      },
    ])

    await store.dispatch('setLoadingStatus', false)
  },
  head() {
    return {
      title: this.getSeo.history.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.history.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.history.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getHistory']),
    ...mapGetters(['getSeo']),
  },
  mounted() {
    this.isMounted = true
    this.modifyedHistory = this.getHistory.map((item) => {
      return {
        ...item,
        isTextShowed: false,
      }
    })
  },
  watch: {
    getHistory(val, oldVal) {
      this.modifyedHistory = val.map((item) => {
        return {
          ...item,
          isTextShowed: false,
        }
      })
    }
  },
  methods: {
    next() {
      if (this.selectedTime >= this.getHistory.length - 1) return
      this.selectedTime++
      this.closeMore()
    },
    prev() {
      if (this.selectedTime <= 0) return
      this.selectedTime--
      this.closeMore()
    },
    decodeHTML(html) {
      if (document) {
        const txt = document.createElement('textarea')
        txt.innerHTML = html
        return txt.value
      }
    },
    closeMore() {
      this.modifyedHistory.forEach((item) => {
        item.isTextShowed = false;
      })
    },
    clickOnDotted(key) {
      this.selectedTime = key;
      this.closeMore()
    }
  },
}
</script>

<style lang="scss">
.history {
  &__text--left {
    p {
      margin: 0;
    }
  }
}
</style>

<style lang="scss" scoped>
.history {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__in {
    flex: 1 1 auto;
    padding: rem(30) rem(240) rem(144) rem(240);
    background: url('~assets/img/history.jpg') 50% 50% / cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
      padding: 30px 20px 80px 20px;
    }
  }
  &__text {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__text--left {
    flex: 1 1 auto;
    margin-right: rem(20);
    display: none;
    @media all and (max-width: 1280px) {
      width: 100%;
      margin-right: 0;
    }
    &.isActive {
      display: block;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: rem(20);
      line-height: 140%;
      color: #ffffff;
      p {
        margin: 0 !important;
      }
      @media all and (max-width: 1280px) {
        font-size: 20px;
      }
      &:not(:last-child) {
        margin-bottom: rem(10);
        @media all and (max-width: 1280px) {
          margin-bottom: 10px;
        }
      }
    }
  }
  &__text--buttons {
    display: flex;
    align-items: center;
    @media all and (max-width: 1280px) {
      margin-top: 80px;
    }
    @media all and (max-width: 840px) {
      flex-direction: column;
      align-items: stretch;
    }
  }
  &__text--button {
    .arrow {
      width: rem(28);
      height: rem(28);
      font-size: 0;
      @media all and (max-width: 1280px) {
        width: 28px;
        height: 28px;
      }
    }
    .text {
      font-style: normal;
      font-weight: 600;
      font-size: rem(20);
      margin-left: rem(20);
      line-height: 140%;
      color: #ffffff;
      transition: all 0.3s ease;
      @media all and (max-width: 1280px) {
        margin-left: 20px;
        font-size: 20px;
      }
    }
    &:hover,
    &:active {
      .text {
        color: #000;
      }
      .arrow {
        filter: invert(1);
      }
    }
    &--fwd {
      margin-left: rem(30);
      @media all and (max-width: 1280px) {
        margin-left: 30px;
      }
      @media all and (max-width: 840px) {
        margin-left: 0;
        margin-top: 20px;
      }
      .text {
        order: -1;
        margin-left: 0;
        margin-right: rem(20);
        @media all and (max-width: 1280px) {
          margin-right: 20px;
        }
      }
      .arrow {
        transform: rotate(180deg);
      }
      @media all and (max-width: 1280px) {
        &:hover,
        &:active {
          .text {
            color: #fff;
          }
          .arrow {
            filter: invert(0);
          }
        }
      }
    }
  }
  &__timeline {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    margin-top: rem(128);
    @media all and (max-width: 1280px) {
      margin-top: 80px;
    }
    @media all and (max-width: 840px) {
      overflow: auto;
      margin-left: -20px;
      margin-right: -20px;
      padding: 20px;
    }
  }
  &__timeline_item {
    min-width: rem(291);
    transition: all 0.3s ease;
    @media all and (max-width: 1280px) {
      transform: translateX(calc(-100% * var(--index)));
      min-width: 190px;
    }
    @media all and (max-width: 1280px) {
      transform: none;
    }
    .line {
      height: 2px;
      background: rgba(255, 255, 255, 0.2);
      position: relative;
      &::after {
        content: '';
        width: 0;
        height: 4px;
        position: absolute;
        top: -1px;
        left: 0;
        background: #fff;
        transition: all 0.3s ease;
      }
    }
    .sqare {
      width: rem(12);
      height: rem(12);
      border-radius: rem(2);
      transform: rotate(-45deg);
      margin-top: rem(-7);
      background: #4a4a4a;
      border: rem(2) solid #ffffff;
      box-sizing: border-box;
      @media all and (max-width: 1280px) {
        width: 12px;
        height: 12px;
        border-radius: 2px;
        margin-top: -7px;
        border: 2px solid #ffffff;
      }
    }
    .bottom {
      margin-top: rem(20);
      font-style: normal;
      font-weight: 600;
      font-size: rem(22);
      line-height: 140%;
      color: #ffffff;
      opacity: 0.8;
      transform-origin: 0 0;
      transition: all 0.3s ease;
      cursor: pointer;
      @media all and (max-width: 1280px) {
        font-size: 18px;
        margin-top: 19px;
      }
    }
    &.isActive {
      .line::after {
        width: 100%;
      }
    }
    &.isTransformed {
      .bottom {
        transform: scale(1.3);
      }
    }
  }
  &__bottom {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (min-width: 1281px) {
      padding-top: rem(100);
    }
  }
}
.header_padding {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
</style>
<style lang="scss">
.history {
  &__text--left {
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      -ms-line-clamp: 3;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      display: none;
      &:first-child {
        display: -webkit-box;
      }
    }
    text-overflow: ellipsis;
    overflow: hidden;
    -ms-line-clamp: 3;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    &.isActive.isOpened {
      line-clamp: unset;
      overflow: unset;
      display: block !important;
      p {
        line-clamp: unset;
        overflow: unset;
        display: block;
      }
    }
  }
}
</style>
