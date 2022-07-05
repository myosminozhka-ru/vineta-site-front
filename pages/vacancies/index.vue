<template>
    <div>
        <section class="first">
            <div class="first__text">
            Проектируем, изготавливаем и поставляем оборудование для судостроения
            </div>
            <div class="first__image hide_on_mobile">
              <img :src="require('~/assets/img/about/first_img.png')" width="100%" alt="">
            </div>
        </section>
        <osm-advantagies />
        <div class="vacancies__slider">
            <osm-slider />
        </div>
        <osm-response />
        <osm-list />
    </div>
</template>

<script>
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
    })
  }

</script>

<style lang="scss" scoped>
  .first {
    display: flex;
    align-items: center;
    padding: rem(20) rem(495) rem(20) rem(240);
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