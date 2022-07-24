<template>
    <div>

      <!-- <pre style="font-size: 15rem;">
        {{ getVacancies }}
      </pre> -->
        <section class="first" v-if="getVacancies.banners.first">
            <div class="first__text">
            {{ getVacancies.banners.first.NAME }}
            </div>
            <div class="first__image hide_on_mobile">
              <img :src="$vareibles.remote + getVacancies.banners.first.PREVIEW_PICTURE" width="100%" alt="">
            </div>
        </section>
        <osm-advantagies :bennefits="getVacancies.bennefits" />
        <div class="vacancies__slider">
            <osm-slider :gallery="getVacancies.gallery" />
        </div>
        <osm-response />
        <osm-list :vacancies="getVacancies.vacancy" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
  export default {
    name: 'AboutPage',
    components: {
      OsmAdvantagies: () => import('~/components/vacancies/OsmAdvantagies.vue'),
      OsmResponse: () => import('~/components/vacancies/OsmResponse.vue'),
      OsmList: () => import('~/components/vacancies/OsmList.vue'),
      OsmSlider: () => import('~/components/contacts/OsmSlider.vue')
    },
    data: () => ({
      isTextShowed: false
    }),
    computed: {
      ...mapGetters(['getVacancies']),
    }
  }

</script>

<style lang="scss" scoped>
  .first {
    display: flex;
    align-items: center;
    padding: rem(20) rem(240) rem(20) rem(240);
    background: #D7DCE1;
    @media all and (max-width: 1280px) {
      padding: 20px 146px 20px 20px;
    }
    @media all and (max-width: 840px) {
        padding: 60px 15px;
    }

    &__text {
      width: calc(100% - #{rem(419)});
      font-style: normal;
      font-weight: 600;
      font-size: rem(50);
      line-height: 140%;
      color: #172242;
      @media all and (max-width: 1280px) {
        width: 446px;
        font-size: 30px;
      }
      @media all and (max-width: 840px) {
        width: 100%;
      }
    }

    &__image {
      width: rem(419);
      font-size: 0;
       @media all and (max-width: 1280px) {
        width: calc(100% - 446px);
      }
    }
  }
  .vacancies {
    &__slider {
      padding: 0 rem(240);
      @media all and (max-width: 1280px) {
        padding: 0 20px;
      }
    }
  }
</style>