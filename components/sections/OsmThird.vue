<template>
  <section class="section section__item section__item--third" v-if="thirdData">
    <div class="section__left section__left--fullwidth hide_on_mobile">
      <img :src="$vareibles.remote + thirdData.PREVIEW_PICTURE" alt="first">
    </div>
    <div class="section__right section__slider glide">
      <div class="section__content">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div v-for="item in 6" :key="item.index" class="section__slide glide__slide">
              <osm-h1 class="section__title">{{ thirdData.NAME }}</osm-h1>
              <div class="section__text">
                {{ thirdData.PREVIEW_TEXT }}
              </div>
              <osm-button link="index">Каталог</osm-button>
            </div>
          </div>
        </div>
      </div>
      <div class="section__right-image hide_off_mobile">
        <img :src="$vareibles.remote + thirdData.PREVIEW_PICTURE" alt="first">
      </div>
      <div class="section__bullets" data-glide-el="controls[nav]">
        <button v-for="(key, item) in 6" :key="item.index" class="section__bullet" :data-glide-dir="`=${key-1}`">{{ key }}</button>
      </div>
    </div>
  </section>
</template>
<script>
  import Glide from '@glidejs/glide';
  import { mapGetters } from 'vuex';
  export default {
    name: 'OsmFirstSection',
    data: () => ({
      slider: new Glide('.section__slider')
    }),
    components: {
      OsmH1: () => import('~/components/global/OsmH1.vue'),
      OsmButton: () => import('~/components/global/OsmButton.vue'),
    },
    computed: {
      ...mapGetters(['getMain']),
      thirdData() {
        return this.getMain[2];
    }
  },
  beforeDestroy() {
    this.slider.destroy();
  },
    mounted() {
      setTimeout(() => {
        this.slider.mount();
      }, 500);
    }
  }

</script>

<style lang="scss" scoped>
  .section {
    &__right {
      padding-right: vw(243);
      display: block;
      @media all and (min-width: 1025px) {
        padding-top: vw(300);

      }
      @media all and (max-width: 1024px) {
          padding-right: 20px;
          
        }
        @media all and (max-width: 840px) {
          padding-bottom: 60px !important;
        }
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
    }
    &__bullets {
        position: absolute;
        left: vw(133);
        bottom: vw(73);
        @media all and (max-width: 1024px) {
          position: static;
          margin-top: 43px;
        }
        @media all and (max-width: 840px) {
          margin-top: 20px;
        }
    }
    &__bullet {
        font-size: 0;
        border: none;
        background: #D7DCE1;
        width: vw(10);
        height: vw(10);
        padding: 0;
        border-radius: 50%;
        cursor: pointer;
        transition: all .3s ease;
        @media all and (max-width: 1024px) {
          width: 10px;
          height: 10px;
        }
        &:not(:last-child) {
            margin-right: vw(25);
            @media all and (max-width: 1024px) {
              margin-right: 25px;
            }
        }
        &.glide__bullet--active {
            background: #2E5599;
            transform: scale(1.6);
        }
    }
  }

</style>
