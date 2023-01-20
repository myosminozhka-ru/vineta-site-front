<template>
  <section class="section section__item section__item--first">
    <div class="section__left">
      <video id="first-video" muted class="section__left_video">
        <source type="video/webm" src="~/assets/video/2.webm" />
      </video>
    </div>
    <div v-if="firstData" class="section__right">
      <div v-if="'PROPERIES' in firstData" class="section__content">
        <osm-h1 class="section__title">{{ firstData.NAME }}</osm-h1>
        <div class="section__text">
          {{ firstData.PREVIEW_TEXT }}
        </div>
        <div class="section__list-btn">
          <osm-button v-if="'NAME_BUTTON' in firstData.PROPERIES" class="section__button" link="catalog">
            {{ firstData.PROPERIES.NAME_BUTTON.VALUE }}
          </osm-button>
          <osm-button class="section__button" link="about"> {{ $t('buttons.more') }} </osm-button>
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
    isClipped: false,
    isSvgVisible: false,
    video: null,
  }),
  computed: {
    ...mapGetters(['getMain']),
    firstData() {
      return this.getMain[0] || null
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
        if (newProvertyB !== 'null' && newPropertyA === 'true' && window.innerWidth > 1280) {
          this.video.play()
        } else if (newProvertyB !== 'null' && newProvertyB !== 'true' && window.innerWidth > 1280) {
          this.video.pause()
          this.video.load()
        }
      },
    },
  },

  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      this.isClipped = true
    })

    this.$nextTick().then(() => {
      this.video = document.getElementById('first-video')

      if (window.innerWidth <= 1280) {
        this.video.play()
      }
    })
  },

  beforeDestroy() {
    this.video = null
  },
}
</script>

<style lang="scss" scoped>
.first__gif {
  width: auto;
}
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
    }
  }
  svg {
    transition: all 0.3s ease;
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

  &__left {
    @media all and (max-width: 1280px) {
      height: 470px;
      width: 495px;
    }
    @media all and (max-width: 860px) {
      min-height: 200px !important;
      width: 100%;
    }
  }

  &__left_video {
    width: 160%;
    pointer-events: none;
    transform: rotate(-90deg);
  }

  &__right {
    @media all and (max-width: 1280px) {
      padding: 20px;
    }
  }

  &__title {
    margin-bottom: rem(30);
  }

  &__button {
    width: 192px;
    @media all and (max-width: 840px) {
      width: 100%;
    }
  }
}

.section__list-btn {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: rem(-10) rem(-15);
  > * {
    margin: rem(10) rem(15);
  }
}
</style>
