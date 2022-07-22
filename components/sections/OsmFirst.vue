<template>
    <section class="section section__item section__item--first" v-if="firstData">
        <div class="section__left">
            <div class="section__left_image_wrap">
                <img v-if="isMounted" :src="require('~/assets/img/sections/detail1.svg')" height="100%" alt="">
                <img :class="{isMounted}" class="section__left_image_clipped" :src="require('~/assets/img/sections/first.png')" height="100%" alt="">
                <!-- <img class="section__left_image_clipped" :src="$vareibles.remote + firstData.PREVIEW_PICTURE" alt="first"> -->
            </div>
        </div>
        <div class="section__right">
            <div class="section__content">
                <osm-h1 class="section__title">{{ firstData.NAME }}</osm-h1>
                <div class="section__text">
                    {{ firstData.PREVIEW_TEXT }}
                </div>
                <osm-button class="section__button" link="catalog">{{ firstData.PROPERIES.NAME_BUTTON.VALUE }}</osm-button>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'OsmFirstSection',
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  data: () => ({
    isMounted: false
  }),
  computed: {
      ...mapGetters(['getMain']),
      firstData() {
          return this.getMain[0]
      }
  },
  mounted() {
    this.isMounted = true
  }
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
    }
    &__left_image_clipped {
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: 1s  all 1.3s ease;
    }
    &.isActive &__left_image_clipped.isMounted {
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    }
    &__left {
        @media all and (max-width: 1280px) {
            height: 470px;
            width: 495px;
        }
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
    }
}
</style>