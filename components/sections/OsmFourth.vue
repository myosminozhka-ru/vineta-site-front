<template>
  <section v-if="fourthData" class="section section__item section__item--fourth">
    <div v-show="'PROPERIES' in fourthData" class="section__left">
      <nuxt-img :src="$config.vareibles.remote + fourthData.PROPERIES.VIDEO_PREVIEW.VALUE.SRC" alt="" loading="lazy" />
    </div>
    <div class="section__right">
      <div class="section__content">
        <osm-h1 class="section__title" >{{ fourthData.NAME }}</osm-h1>
        <div class="section__text" v-html="fourthData.PREVIEW_TEXT"></div>
        <osm-button class="section__button" link="techs" hash="#2">{{ $t('buttons.more') }}</osm-button>
      </div>
    </div>
  </section>

</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  computed: {
    ...mapGetters(['getMain']),
    ...mapGetters(['getMainMore']),
    fourthData() {
      return this.getMain[3]
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  @media all and (max-width: 1280px) {
    background: #2e5599;
  }
  &__title {
    font-size: rem(40);
    margin-bottom: rem(30);
    @media all and (max-width: 1280px) {
      color: #fff !important;
    }
  }
  &__text {
    @media all and (max-width: 1280px) {
      color: #fff !important;
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
  &__left {
    video {
      max-width: 100%;
      width: 100%;
    }
    @media all and (max-width: 840px) {
      min-height: 235px;
    }
  }
}
</style>
