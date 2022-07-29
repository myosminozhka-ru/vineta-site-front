<template>
    <section class="section section__item section__item--fourth">
        <div class="section__left" v-if="fourthData">
            <img :src="$vareibles.remote + fourthData.PREVIEW_PICTURE" alt="first">
        </div>
        <div class="section__right" v-if="fourthData">
            <div class="section__content">
                <osm-h1 class="section__title">{{ fourthData.NAME }}</osm-h1>
                <div class="section__text">
                    {{ fourthData.PREVIEW_TEXT }}
                </div>
                <osm-button class="section__button" link="index">Подробнее</osm-button>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  computed: {
      ...mapGetters(['getMain']),
      fourthData() {
        return this.getMain[2];
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
    @media all and (max-width: 1280px) {
        background: #2E5599;
    }
    &__title {
        font-size: rem(40);
        margin-bottom: rem(30);
        @media all and (max-width: 1280px) {
            color: #fff;
        }
    }
    &__text {
        
        @media all and (max-width: 1280px) {
            color: #fff;
        }
    }
    &__button {
        @media all and (max-width: 1280px) {
            width: 223px;
        }
    }
}
</style>