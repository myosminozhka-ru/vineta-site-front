<template>
  <section class="section section__item section__item--third" v-if="thirdData">
    <div class="section__left">
      <video id="third-video" muted loop autoplay class="section__left_video">
        <source type="video/webm" src="~/assets/video/factory.webm" />
      </video>
    </div>
    <div class="section__right section__slider glide">
      <div class="section__content">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div
              v-for="item in 1"
              :key="item.index"
              class="section__slide glide__slide"
            >
              <osm-h1 class="section__title">{{ thirdData.NAME }}</osm-h1>
              <div class="section__text" v-html="thirdData.PREVIEW_TEXT" />
              <osm-button class="section__button" link="history">{{
                $t('buttons.more')
              }}</osm-button>
            </div>
          </div>
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
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    isMounted: {
      type: Boolean,
      default: false,
    },
    isStart: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    video: null,
  }),
  computed: {
    ...mapGetters(['getMain']),
    thirdData() {
      return this.getMain[2]
    },
    combined() {
      return `${this.isActive}|${this.video}`
    },
  },
  methods: {
    playVideo() {
      this.isVideoPlayed = true
      this.$refs.secondVideo.play()
    },
  },
  beforeDestroy() {
    this.video = null
  },
  mounted() {
    this.$nextTick().then(() => {
      this.video = document.getElementById('third-video')
    })
  },
  watch: {
    combined: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        console.log('combined')
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
}
</script>

<style lang="scss" scoped>
.section {
  &__left {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    width: 100%;
    @media all and (max-width: 860px) {
      width: 100%;
    }
  }
  &__right {
    padding-top: rem(100);
    padding-bottom: 0;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 1280px) {
      padding-right: 20px;
    }
    @media all and (max-width: 840px) {
      padding-bottom: 60px !important;
    }
  }
  &__title {
    font-size: rem(40);
    margin-bottom: rem(30);
    word-break: break-word;
  }
  &__right-image {
    height: 360px;
    margin-top: 20px;
    margin-left: -20px;
    margin-right: -20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media all and (max-width: 840px) {
      width: 100%;
    }
  }
  &__button {
    @media all and (max-width: 1280px) {
      width: 223px;
    }
    @media all and (max-width: 860px) {
      width: 100%;
    }
  }
  &__bullets {
    position: absolute;
    left: rem(133);
    bottom: rem(73);
    @media all and (max-width: 1280px) {
      position: static;
      margin-top: 43px;
      width: 100%;
    }
    @media all and (max-width: 840px) {
      margin-top: 20px;
    }
  }
  &__bullet {
    font-size: 0;
    border: none;
    background: #d7dce1;
    width: rem(10);
    height: rem(10);
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    @media all and (max-width: 1280px) {
      width: 10px;
      height: 10px;
    }
    &:not(:last-child) {
      margin-right: rem(25);
      @media all and (max-width: 1280px) {
        margin-right: 25px;
      }
    }
    &.glide__bullet--active {
      background: #2e5599;
      transform: scale(1.6);
    }
  }
}
</style>
