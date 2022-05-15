<template>
  <section class="section section__item section__item--third">
    <div class="section__left">
      <img :src="require('~/assets/img/sections/third.jpg')" alt="first">
    </div>
    <div class="section__right section__slider glide">
      <div class="section__content">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div v-for="item in 6" :key="item.index" class="section__slide glide__slide">
              <osm-h1 class="section__title">История производства</osm-h1>
              <div class="section__text">Безусловно, постоянное информационно-пропагандистское обеспечение нашей
                деятельности однозначно фиксирует необходимость соответствующих условий активизации. А ещё
                реплицированные с зарубежных источников, современные исследования будут своевременно верифицированы! А
                также активно развивающиеся страны третьего мира могут быть рассмотрены исключительно в разрезе
                маркетинговых и финансовых предпосылок.</div>
              <osm-button link="index">Каталог</osm-button>
            </div>
          </div>
        </div>
      </div>
      <div class="section__bullets" data-glide-el="controls[nav]">
        <button v-for="(key, item) in 6" :key="item.index" class="section__bullet" :data-glide-dir="`=${key-1}`">{{ key }}</button>
      </div>
    </div>
  </section>
</template>
<script>
  import Glide from '@glidejs/glide'
  export default {
    name: 'OsmFirstSection',
    data: () => ({
      slider: new Glide('.section__slider')
    }),
    components: {
      OsmH1: () => import('~/components/global/OsmH1.vue'),
      OsmButton: () => import('~/components/global/OsmButton.vue'),
    },
    mounted() {
      this.slider.mount();
    }
  }

</script>

<style lang="scss" scoped>
  .section {
    &__right {
      padding-right: vw(243);
    }
    &__bullets {
        position: absolute;
        left: vw(133);
        bottom: vw(73);
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
        &:not(:last-child) {
            margin-right: vw(25);
        }
        &.glide__bullet--active {
            background: #2E5599;
            transform: scale(1.6);
        }
    }
  }

</style>
