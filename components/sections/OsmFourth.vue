<template>
    <section class="section section__item section__item--fourth" v-if="fourthData">
        <div class="section__left">
            <img :src="$vareibles.remote + fourthData.PREVIEW_PICTURE" alt="first">
        </div>
        <div class="section__right">
            <div class="section__content">
                <osm-h1 class="section__title">{{ fourthData.NAME }}</osm-h1>
                <div class="section__text">
                    {{ fourthData.PREVIEW_TEXT }}
                </div>
                <osm-button link="index">Подробнее</osm-button>
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
        return this.getMain[3];
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
    @media all and (max-width: 1440px) {
        background: #2E5599;
    }
    &__title {
        @media all and (max-width: 1440px) {
            color: #fff;
        }
    }
    &__text {
        @media all and (max-width: 1440px) {
            color: #fff;
        }
    }
}
</style>