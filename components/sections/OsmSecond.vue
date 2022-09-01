<template>
  <section class="section section__item section__item--second section__item--dark">
    <div class="section__left section__left--fullwidth">
      <video id="second-video" muted class="section__left_video">
        <source type="video/webm" src="~/assets/video/2.webm" />
      </video>
      <!-- <img :src="$vareibles.remote + secondData.PREVIEW_PICTURE" alt="first" width="100%"> -->
    </div>
    <div class="section__right">
      <div v-if="'PROPERIES' in secondData" class="section__content">
        <div class="mobile_left">
          <osm-h1 class="section__title">{{ secondData.NAME }}</osm-h1>
          <div class="section__text">
            {{ secondData.PREVIEW_TEXT }}
          </div>
          <div class="section__buttons hide_on_desktop hide_on_mobile">
            <osm-button v-if="'NAME_BUTTON' in secondData.PROPERIES" link="index" class="section__button">{{ secondData.PROPERIES.NAME_BUTTON.VALUE }}</osm-button>
            <a v-if="'FILE' in secondData.PROPERIES" target="_blank" :href="$vareibles.remote + secondData.PROPERIES.FILE.VALUE.SRC" class="section__downloads">
              <div class="section__pdf">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 25">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11068 17.2091L9.11068 0H10.9625L10.9625 17.2091L15.2744 12.8972C15.636 12.5356 16.2223 12.5356 16.5839 12.8972C16.9455 13.2588 16.9455 13.845 16.5839 14.2066L10.6913 20.0992C10.3297 20.4608 9.74347 20.4608 9.38187 20.0992L3.48932 14.2066C3.12772 13.845 3.12772 13.2588 3.48932 12.8972C3.85091 12.5356 4.43718 12.5356 4.79877 12.8972L9.11068 17.2091ZM19.2959 24.0741C19.2959 24.5854 18.8813 25 18.3699 25H1.70327C1.1919 25 0.777344 24.5854 0.777344 24.0741C0.777344 23.5627 1.1919 23.1481 1.70327 23.1481H18.3699C18.8813 23.1481 19.2959 23.5627 19.2959 24.0741Z" fill="white" />
                  </svg>
                </div>
                <div class="text">{{ secondData.PROPERIES.NAME_FILE.VALUE }}</div>
              </div>
              <div class="section__plank">/ PDF 12 {{ $t('sections.second.mb') }}</div>
            </a>
          </div>
        </div>
        <div class="mobile_right">
          <div class="tiles">
            <div v-if="secondData.PROPERIES" class="tiles__item">
              <!-- <pre>
				{{ secondData.PROPERIES }}
			</pre> -->
              <video v-if="'VIDEO' in secondData.PROPERIES" ref="secondVideo" :class="{ isVideoPlayed }" controls="false" :src="$vareibles.remote + secondData.PROPERIES.VIDEO.VALUE.SRC" :type="secondData.PROPERIES.VIDEO.VALUE.CONTENT_TYPE" :poster="'VIDEO_PREVIEW' in secondData.PROPERIES ? $vareibles.remote + secondData.PROPERIES.VIDEO_PREVIEW.VALUE.SRC : require('~/assets/img/product.noimage.png')" />
              <div v-if="!isVideoPlayed" class="tiles__item-bottom" @click="playVideo">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60">
                    <rect width="60" height="60" fill="#FF0040" />
                    <path d="M37 30L23 20V40L37 30Z" fill="white" />
                  </svg>
                </div>
                <div v-if="'NAME_VIDEO' in secondData.PROPERIES" class="text">{{ secondData.PROPERIES.NAME_VIDEO.VALUE }}</div>
              </div>
            </div>
            <template v-if="'MORE_PHOTO' in secondData.PROPERIES">
              <div v-for="morePhoto in secondData.PROPERIES.MORE_PHOTO.VALUE" :key="morePhoto.ID" class="tiles__item">
                <img :src="$vareibles.remote + morePhoto.SRC" alt="" />
              </div>
            </template>
          </div>
          <div class="section__buttons hide_off_mobile">
            <osm-button v-if="'NAME_BUTTON' in secondData.PROPERIES" class="section__more" link="index">{{ secondData.PROPERIES.NAME_BUTTON.VALUE }}</osm-button>
            <a v-if="'FILE' in secondData.PROPERIES" target="_blank" :href="$vareibles.remote + secondData.PROPERIES.FILE.VALUE.SRC" class="section__downloads">
              <div class="section__pdf">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 25">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11068 17.2091L9.11068 0H10.9625L10.9625 17.2091L15.2744 12.8972C15.636 12.5356 16.2223 12.5356 16.5839 12.8972C16.9455 13.2588 16.9455 13.845 16.5839 14.2066L10.6913 20.0992C10.3297 20.4608 9.74347 20.4608 9.38187 20.0992L3.48932 14.2066C3.12772 13.845 3.12772 13.2588 3.48932 12.8972C3.85091 12.5356 4.43718 12.5356 4.79877 12.8972L9.11068 17.2091ZM19.2959 24.0741C19.2959 24.5854 18.8813 25 18.3699 25H1.70327C1.1919 25 0.777344 24.5854 0.777344 24.0741C0.777344 23.5627 1.1919 23.1481 1.70327 23.1481H18.3699C18.8813 23.1481 19.2959 23.5627 19.2959 24.0741Z" fill="white" />
                  </svg>
                </div>
                <div v-if="'NAME_FILE' in secondData.PROPERIES" class="text">{{ secondData.PROPERIES.NAME_FILE.VALUE }}</div>
              </div>
              <div class="section__plank">/ PDF 12 МБ</div>
            </a>
          </div>
        </div>
        <div class="section__buttons hide_on_tablet">
          <osm-button v-if="'NAME_BUTTON' in secondData.PROPERIES" link="index">{{ secondData.PROPERIES.NAME_BUTTON.VALUE }}</osm-button>
          <a v-if="'FILE' in secondData.PROPERIES" target="_blank" :href="$vareibles.remote + secondData.PROPERIES.FILE.VALUE.SRC" class="section__downloads">
            <div class="section__pdf">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 25">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11068 17.2091L9.11068 0H10.9625L10.9625 17.2091L15.2744 12.8972C15.636 12.5356 16.2223 12.5356 16.5839 12.8972C16.9455 13.2588 16.9455 13.845 16.5839 14.2066L10.6913 20.0992C10.3297 20.4608 9.74347 20.4608 9.38187 20.0992L3.48932 14.2066C3.12772 13.845 3.12772 13.2588 3.48932 12.8972C3.85091 12.5356 4.43718 12.5356 4.79877 12.8972L9.11068 17.2091ZM19.2959 24.0741C19.2959 24.5854 18.8813 25 18.3699 25H1.70327C1.1919 25 0.777344 24.5854 0.777344 24.0741C0.777344 23.5627 1.1919 23.1481 1.70327 23.1481H18.3699C18.8813 23.1481 19.2959 23.5627 19.2959 24.0741Z" fill="white" />
                </svg>
              </div>
              <div v-if="'NAME_FILE' in secondData.PROPERIES" class="text">{{ secondData.PROPERIES.NAME_FILE.VALUE }}</div>
            </div>
            <div class="section__plank">/ PDF 12 МБ</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OsmFirstSection',
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    //   OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  props: {
    isMounted: {
      type: Boolean,
      default: false,
    },
    isStart: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    isVideoPlayed: false,
    isSvgVisible: false,
    video: null,
  }),
  computed: {
    ...mapGetters(['getMain']),
    secondData() {
      return this.getMain[1]
    },
    combined() {
      return `${this.isStart}|${this.video}`
    },
  },
  watch: {
    isMounted(newIsMounted, oldIsMounted) {
      if (newIsMounted === true) {
        setTimeout(() => {
          this.isSvgVisible = false
        }, 3000)
      } else {
        this.isSvgVisible = true
      }
    },

    combined: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        const [newPropertyA, newProvertyB] = newVal.split('|')

        if (newProvertyB !== 'null' && newPropertyA === 'true') {
          this.video.play()
        } else if (newProvertyB !== 'null' && newProvertyB !== 'true') {
          this.video.pause()
          this.video.load()
        }
      },
    },
  },

  mounted() {
    this.$nextTick().then(() => {
      this.video = document.getElementById('second-video')
    })
  },
  beforeDestroy() {
    this.video = null
  },
  methods: {
    playVideo() {
      this.isVideoPlayed = true
      this.$refs.secondVideo.play()
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  &__left_image_wrap {
    padding-left: rem(90);
    padding-right: rem(90);
    height: rem(600);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform: rotate(-90deg);
    width: 100%;
    @media all and (max-width: 1280px) {
      padding-top: 150px;
      padding-bottom: 150px;
    }
    @media all and (max-width: 860px) {
      padding-top: 0px;
      padding-bottom: 0px;
      padding-left: 4px;
      padding-right: 4px;
      height: 100%;
      width: 200px;
    }
    img {
      width: auto;
      // -webkit-filter: drop-shadow(#{rem(10)} #{rem(10)} #{rem(10)} #222);
      // filter: drop-shadow(#{rem(10)} #{rem(10)} #{rem(10)} #222);
    }
  }
  svg {
    transition: all 0.3s ease;
  }

  &__left_video {
    width: 130%;
    pointer-events: none;
    transform: rotate(-90deg);
  }

  &__left_image_clipped {
    @media all and (min-width: 1281px) {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }
    @media all and (max-width: 1280px) {
      padding-top: 165px;
      padding-bottom: 165px;
    }
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) rotate(3deg);
    @media all and (max-width: 1280px) {
      transform: translateX(-50%);
    }
    transition: 1s clip-path 2.3s ease;
    //   padding-top: rem(30);
    //   padding-bottom: rem(25);
    padding: 24px;
    &:not(.isClipped) {
      @media all and (min-width: 861px) {
        opacity: 0;
        width: 100%;
      }
      transition: 1s clip-path 0.3s ease;
    }

    &.isClipped {
      clip-path: polygon(0% 0, 100% 0, 100% 100%, 0% 100%);
      & + svg {
        opacity: 0;
        transition: 1s all 2.3s ease;
      }
    }
  }

  &__more {
    @media all and (max-width: 840px) {
      width: 100%;
      margin-bottom: 0;
    }
  }

  &__content {
    @media all and (max-width: 1280px) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .mobile_left,
      .mobile_right {
        width: calc(50% - 10px);
      }

      .mobile_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    @media all and (max-width: 840px) {
      flex-direction: column;

      .mobile_left,
      .mobile_right {
        width: 100%;
      }

      .mobile_left {
      }
    }
  }

  &__item--dark &__title {
    color: #fff;
    font-size: rem(40);
    margin-bottom: rem(30);
    @media all and (max-width: 1280px) {
      font-size: 30px;
    }
  }

  &__item--dark &__text {
    color: #fff;
  }

  &__right {
    padding-right: rem(122);
    //   padding-top: 0;
    //   padding-bottom: 0;
    background: #2e5599;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media all and (max-width: 1440px) {
      padding-top: rem(122) !important;
      padding-bottom: 0 !important;
    }
    @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
      //   padding-left: rem(50);
      padding-right: rem(50);
    }

    @media all and (max-width: 1280px) {
      width: 100% !important;
      padding: 80px 20px;
    }
    @media all and (max-width: 840px) {
      padding: 20px !important;
      min-height: 1px !important;
    }
  }

  &__left {
    @media all and (max-width: 1280px) {
      display: none;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media all and (max-width: 1280px) {
      flex-wrap: wrap;
    }
  }

  &__downloads {
    display: flex;
    align-items: center;
    text-decoration: none;

    @media all and (max-width: 1280px) {
      margin: 25px 0;
    }

    @media all and (max-width: 840px) {
      width: 100%;
      justify-content: space-between;
      margin-bottom: 0;
      margin-top: 30px;
    }
  }

  &__pdf {
    display: flex;
    align-items: center;
    margin-right: rem(42);

    .icon {
      width: rem(19);
      font-size: 0;

      @media all and (max-width: 1280px) {
        width: 25px;
      }
    }

    .text {
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 1;
      color: #ffffff;
      margin-left: rem(14);
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 100%;
        bottom: rem(-5);
        height: rem(2);
        border-radius: rem(2);
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

  &__plank {
    padding: rem(12) rem(20);
    font-style: normal;
    font-weight: 400;
    font-size: rem(14);
    line-height: 140%;
    color: #ffffff;
    background: #00234a;

    @media all and (max-width: 1280px) {
      padding: 8px 10px;
      font-size: 12px;
    }

    @media all and (max-width: 840px) {
      padding: 12px 20px;
      font-size: 12px;
    }
  }
}

.tiles {
  margin-bottom: rem(30);
  display: grid;
  grid-template-columns: rem(440) auto;
  grid-gap: rem(20);
  grid-template-areas:
    'first second'
    'first third';

  @media all and (max-width: 1440px) and (min-width: 1281px) {
    grid-template-rows: repeat(2, 100px);
  }

  @media all and (max-width: 1280px) {
    margin-bottom: 0;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    grid-template-areas:
      'first first'
      'second third';
  }

  @media all and (max-width: 840px) {
    margin-bottom: 20px;
  }

  &__item {
    &:not(:first-child) {
      height: rem(148);
    }

    @media all and (max-width: 1440px) and (min-width: 1281px) {
      &:not(:first-child) {
        height: 100px;
      }
    }

    &:nth-child(n + 4) {
      display: none;
    }

    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      &:not(.isVideoPlayed)::-webkit-media-controls {
        display: none;
      }
    }

    &:first-child {
      grid-area: first;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 62.5%, #000000 100%);
        z-index: 1;
      }
    }
  }

  &__item-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 0;
    display: flex;
    align-items: center;
    z-index: 2;
    cursor: pointer;

    .icon {
      width: rem(60);

      svg {
        rect {
          transition: all 0.3s ease;
        }
      }
    }

    .text {
      margin-left: rem(20);
      font-style: normal;
      font-weight: 400;
      font-size: rem(20);
      line-height: 130%;
      color: #ffffff;
    }

    &:hover {
      .icon {
        width: rem(60);

        svg {
          rect {
            fill: #df0043;
          }
        }
      }
    }

    &:active {
      .icon {
        width: rem(60);

        svg {
          rect {
            fill: #a70032;
          }
        }
      }
    }
  }
}
</style>
