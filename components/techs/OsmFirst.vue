<template>
  <section class="section section__item">
    <div class="header_padding">
      <div class="section__item__in">
        <div class="section__top--tech">
          <osm-breadcrumbs />
        </div>
        <div class="section__middle--tech">
          <osm-h1 class="section__title">{{ $t('buttons.techs') }}</osm-h1>
        </div>
        <div class="section__bottom--tech">
          <div class="section__left--tech">
            <nuxt-img src="/techs/1.jpg" alt="" loading="lazy" />
          </div>
          <div class="section__right--tech" @mousewheel.stop>
            <div class="index"></div>
            <div class="texts">
              <div v-html="dataObject.PREVIEW_TEXT"></div>

              <div @click="$emit('toNext')">
                <osm-button>{{ $t('buttons.more') }}</osm-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'OsmFirstSection',
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
  },
  props: {
    dataObject: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background: #fff;
  &__item__in {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: rem(30) rem(260) rem(40) rem(107);
    @media all and (max-width: 1480px) {
      padding: rem(30) rem(50) rem(40) rem(107);
    }
    @media all and (max-width: 1280px) {
      padding: 30px 20px 40px;
    }
  }
  &__middle--tech {
    padding-bottom: rem(40);
    @media all and (max-width: 1280px) {
      padding-bottom: 0;
      position: relative;
      z-index: 2;
    }
  }
  &__bottom--tech {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    @media all and (max-width: 1280px) {
      flex-direction: column;
    }
  }
  &__left--tech {
    width: rem(602);
    margin-right: rem(128);
    font-size: 0;
    height: 100%;
    @media all and (max-width: 1280px) {
      width: 100%;
      margin-right: 0;
      order: 2;
      height: 400px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
  &__right--tech {
    width: calc(100% - #{rem(602)} - #{rem(128)});
    height: 100%;
    position: relative;
    @media all and (max-width: 1280px) {
      width: 100%;
      margin-bottom: 30px;
    }
    .index {
      color: #e7e7e7;
      font-size: rem(400);
      font-weight: 600;
      position: absolute;
      top: rem(-187);
      left: 0;
      right: 0;
      text-align: center;
      pointer-events: none;
      @media all and (max-width: 1440px) {
        text-align: right;
        font-size: 270px;
        top: -107px;
      }
      @media all and (max-width: 1280px) {
        top: -65px;
      }
      @media all and (max-width: 860px) {
        font-size: 190px;
        top: -50px;
        right: 10px;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) -12.5%, #ffffff 56.04%);
      }
    }
    .bg_text {
      padding: rem(20);
      background: #d7dce1;
      font-style: normal;
      font-weight: 400;
      font-size: rem(14);
      line-height: 140%;
      text-align: center;
      color: #555f76;
      @media all and (max-width: 1280px) {
        font-size: 12px;
        padding: 20px;
      }
      &:not(:last-child) {
        margin-bottom: rem(30);
        @media all and (max-width: 1280px) {
          margin-bottom: 30px;
        }
      }
    }
  }
}
.header_padding {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
