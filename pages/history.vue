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
              class="history__text--left"
              v-for="(item, key) in modifyedHistory"
              :key="item.index"
              :class="{
                isActive: key === selectedTime,
                isOpened: item.isTextShowed,
              }"
            >
              <p v-html="decodeHTML(item.PREVIEW_TEXT)" />
              <div class="text button" @click="item.isTextShowed = !item.isTextShowed">
                <template v-if="!item.isTextShowed">Развернуть</template>
                <template v-else>Свернуть</template>
              </div>
            </div>
            <div class="history__text--buttons hide_on_tablet">
              <div @click="prev">
                <osm-button :outlined="true" class="history__text--button">
                  <div class="arrow">
                    <img :src="require('~/assets/img/arrow2.svg')" width="100%" alt="" />
                  </div>
                  <div class="text">В прошлое</div>
                </osm-button>
              </div>
              <div @click="next">
                <osm-button :outlined="true" class="history__text--button history__text--button--fwd">
                  <div class="arrow">
                    <img :src="require('~/assets/img/arrow2.svg')" width="100%" alt="" />
                  </div>
                  <div class="text">В Настоящее</div>
                </osm-button>
              </div>
            </div>
          </div>
          <div class="history__timeline">
            <div
              class="history__timeline_item"
              v-for="(item, key) in getHistory"
              :key="item.index"
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
              <div class="bottom" @click="selectedTime = key">
                {{ item.NAME }}
              </div>
            </div>
          </div>
          <div class="history__text--buttons hide_on_desktop">
            <div @click="prev">
              <osm-button :outlined="true" class="history__text--button">
                <div class="arrow">
                  <img :src="require('~/assets/img/arrow2.svg')" width="100%" alt="" />
                </div>
                <div class="text">В прошлое</div>
              </osm-button>
            </div>
            <div @click="next">
              <osm-button :outlined="false" class="history__text--button history__text--button--fwd">
                <div class="arrow">
                  <img :src="require('~/assets/img/arrow2.svg')" width="100%" alt="" />
                </div>
                <div class="text">В Настоящее</div>
              </osm-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <osm-preloader />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HistoryPage',
  components: {
    // OsmHeader: () => import('~/components/global/OsmHeader.vue'),
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
    OsmPreloader: () => import('~/components/global/OsmPreloader.vue'),
  },
  data: () => ({
    selectedTime: 0,
    modifyedHistory: [],
    isDataLoaded: false,
    isMounted: false,
  }),
  computed: {
    ...mapGetters(['getHistory']),
  },
  mounted() {
    this.isMounted = true
    // console.log('modifyedHistory', this.modifyedHistory);
    this.modifyedHistory = this.getHistory.map((item) => {
      return {
        ...item,
        isTextShowed: false,
      }
    })
  },
  async fetch() {
    await this.addHistory()
    this.modifyedHistory = this.getHistory.map((item) => {
      return {
        ...item,
        isTextShowed: false,
      }
    })
  },
  async created() {
    await this.addHistory().then((result) => {
      this.isDataLoaded = true
    })
    this.addBreadcrumbs([
      {
        name: 'Главная',
        link: 'index',
        isLink: true,
      },
      {
        name: 'История',
        isLink: false,
      },
    ])
  },
  methods: {
    ...mapActions(['addBreadcrumbs']),
    ...mapActions(['addHistory']),
    next() {
      if (this.selectedTime >= this.getHistory.length - 1) return
      this.selectedTime++
    },
    prev() {
      if (this.selectedTime <= 0) return
      this.selectedTime--
    },
    decodeHTML(html) {
      if (document) {
        const txt = document.createElement('textarea')
        txt.innerHTML = html
        return txt.value
      }
    },
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
    // width: rem(588);
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
      // min-width: 190px;
    }
    .top {
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
