<template>
    <section class="section section__item section__item--first" v-if="firstData">
        <div class="section__left">
            <img :src="$vareibles.remote + firstData.PREVIEW_PICTURE" alt="first">
        </div>
        <div class="section__right">
            <div class="section__content">
                <osm-h1 class="section__title">{{ firstData.NAME }}</osm-h1>
                <div class="section__text">
                    {{ firstData.PREVIEW_TEXT }}
                </div>
                <osm-button link="catalog">{{ firstData.PROPERIES.NAME_BUTTON.VALUE }}</osm-button>
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
  computed: {
      ...mapGetters(['getMain']),
      firstData() {
          return this.getMain[0]
      }
  }
}
</script>

<style lang="scss" scoped>
.section {
    
    &__left {
        @media all and (max-width: 1440px) {
            height: 470px;
            width: 495px;
        }
    }
    &__right {
        @media all and (max-width: 1440px) {
            padding: 20px;
        }
    }
}
</style>