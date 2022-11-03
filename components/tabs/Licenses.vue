<template>
  <div class="licenses">
    <osm-h2 class="licenses__title">{{ $t('sections.fiveth.tabs.title') }}</osm-h2>

    <tabs class="hide_on_mobile" :options="{ useUrlFragment: false }" @clicked="tabClicked" @changed="tabChanged">
      <tab v-for="tab in tabs" :key="tab.index" :name="tab.title">
        <div class="licensesSlid glide">
          <div class="licensesSlid__slider">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li v-for="(item, key) in filterBySection(tab.filter)" :key="item.index" class="licensesSlid__slide glide__slide" @click="setGalleryIndex(key)">
                  <template v-if="item.PREVIEW_PICTURE">
                    <div v-if="tab.filter === 'otchety-po-sout'" class="gallery__item">
                      <div class="gallery__item_image">
                        <img :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="" />
                      </div>
                      <div class="gallery__item_overlay">
                        <div class="icon">
                          <img :src="require('~/assets/img/licenses/search_icon.svg')" width="100%" alt="" />
                        </div>
                        <div class="text">{{ item.NAME }}</div>
                        <a v-if="item.PROPERIES" :href="$vareibles.remote + item.PROPERIES.PDF.SRC" download="true" target="_blank" class="pdf">
                          <img :src="require('~/assets/img/pdf.png')" alt="" />
                        </a>
                      </div>
                    </div>

                    <img v-else :src="$vareibles.remote + item.PREVIEW_PICTURE" alt="" />
                  </template>
                </li>
                <nuxt-link :to="localePath({ name: 'licenses' })" class="licensesSlid__slide licensesSlid__slide--last glide__slide">
                  <div class="text">Смотреть все</div>
                </nuxt-link>
              </ul>
            </div>
            <div class="licensesSlid__arrows" data-glide-el="controls">
              <button class="licensesSlid__arrow licensesSlid__arrow--left" data-glide-dir="<">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" fill="#FF004D" />
                  <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2" />
                </svg>
              </button>
              <button class="licensesSlid__arrow licensesSlid__arrow--right" data-glide-dir=">">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" fill="#FF004D" />
                  <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </tab>
    </tabs>
    <div class="licenses__accordions hide_off_mobile">
      <div v-for="(tab, i) in tabs" :key="i" class="licenses__accordion opened">
        <div class="title">
          <div class="text">{{ tab.title }}</div>
          <div class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
              <path d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2" />
            </svg>
          </div>
        </div>
        <div class="content">
          <div class="licensesSlid glide">
            <div class="licensesSlid__slider">
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                  <li v-for="(item, key) in filterBySection(tab.filter)" :key="item.index" class="licensesSlid__slide glide__slide" @click="setGalleryIndex(key)">
                    <img v-if="item.PREVIEW_PICTURE" :src="$vareibles.remote + item.PREVIEW_PICTURE" alt="" />
                  </li>
                  <nuxt-link :to="localePath({ name: 'licenses' })" class="licensesSlid__slide licensesSlid__slide--last glide__slide">
                    <div class="text">Смотреть все</div>
                  </nuxt-link>
                </ul>
              </div>
            </div>
            <div class="licensesSlid__arrows">
              <nuxt-link :to="localePath({ name: 'licenses' })" class="more">Смотреть все</nuxt-link>
              <div class="licensesSlid__arrows-in" data-glide-el="controls">
                <button class="licensesSlid__arrow licensesSlid__arrow--left" data-glide-dir="<">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" fill="#FF004D" />
                    <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2" />
                  </svg>
                </button>
                <button class="licensesSlid__arrow licensesSlid__arrow--right" data-glide-dir=">">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" fill="#FF004D" />
                    <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LicensesTabs',
  components: {
    OsmH2: () => import('~/components/global/OsmH2.vue'),
  },
  data: () => ({
    slider: null,
    isMounted: false,
    index: null,
  }),
  computed: {
    ...mapGetters(['getLicenses']),
    ...mapGetters(['galleryIndex']),
    tabs() {
      return [
        {
          title: this.$t('sections.fiveth.tabs.first'),
          filter: 'litsenzii-i-sertifikaty',
        },
        {
          title: this.$t('sections.fiveth.tabs.second'),
          filter: 'blagodarstvennye-pisma-i-otzyvy',
        },
        {
          title: this.$t('sections.fiveth.tabs.third'),
          filter: 'otchety-po-sout',
        },
      ]
    },
    imagesGallery() {
      return this.getLicenses.map((item) => {
        return this.$vareibles.remote + item.PREVIEW_PICTURE
      })
    },
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy()
  },
  mounted() {
<<<<<<< HEAD
    setTimeout(() => {
      this.initSlider()
=======
    this.initSlider()
    setTimeout(() => {
>>>>>>> 0b99a1df6726a552c775289950725fcc6512a58e
      this.initAccordions()
      this.isMounted = true
    }, 1000)
    // this.setGalleryIndex(2);
    // console.log('galleryIndex', this.galleryIndex);
  },
  methods: {
    ...mapActions(['setGalleryIndex']),
    tabClicked(selectedTab) {
      // console.log('Current tab re-clicked:' + selectedTab.tab.name);
    },
    tabChanged(selectedTab) {
      // console.log('Tab changed t:' + selectedTab.tab.name);
    },
    initSlider() {
      document.querySelectorAll('.licensesSlid').forEach((item) => {
        new Glide(item, {
          perView: 6,
          type: 'carousel',
          breakpoints: {
            840: {
              perView: 2,
            },
            600: {
              perView: 1,
            },
          },
        }).mount()
      })
    },
    initAccordions() {
      document.querySelectorAll('.licenses__accordion').forEach((item) => {
        item.querySelector('.title').addEventListener('click', (event) => {
          event.target.closest('.licenses__accordion').classList.toggle('opened')
        })
      })
    },
    filterBySection(type) {
      return this.getLicenses.filter((i) => i.SECTION.toUpperCase().trim() === type.toUpperCase().trim())
    },
  },
}
</script>

<style lang="scss">
.tabs-component {
  &-panels {
    position: relative;
  }

  &-panel {
    display: block !important;
    transition: 0.3s opacity 0.3s ease;
  }

  &-panel[aria-hidden='true'] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
  }

  // }
  // &-panel:not([aria-hidden="true"]) {
  //     transition: 0.5s opacity 5s ease;
  //     opacity: 1;
  //     visibility: visible;
  // }
  &-tabs {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0 0 rem(26) 0;
    padding: 0;
  }

  &-tab {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: rem(-5);
      height: rem(2);
      background: #ff004d;
      transition: all 0.3s ease;
    }

    &:not(:last-child) {
      margin-right: rem(100);

      @media all and (max-width: 1280px) {
        margin-right: 8%;
      }
    }

    a {
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      font-size: rem(20);
      line-height: 140%;
      color: #172242;
      transition: all 0.3s ease;

      @media all and (max-width: 1280px) {
        font-size: 20px;
      }
    }

    &.is-active {
      &:after {
        left: 0;
        right: 0;
      }

      a {
        font-weight: 600;
        color: #ff004d;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.licenses {
  max-width: 100%;
  width: 100%;

  .glide__slides {
    align-items: stretch;
  }

  .glide__slide {
    height: auto;
  }

  &__accordion {
    &:not(:last-child) {
      margin-bottom: 10px;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border: 1px solid #d7dce1;
      cursor: pointer;
    }

    .text {
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      color: #555f76;
    }

    .content {
      height: 0;
      overflow: hidden;
    }

    .more {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #ff004d;
      text-decoration: none;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background: #ff004d;
        border-radius: 5px;
      }
    }

    &.opened {
      .title {
        border-color: #ff0040;
        background: #ff0040;
      }

      .text {
        color: #fff;
      }

      .arrow {
        transform: rotate(180deg);

        svg path {
          stroke: #fff;
        }
      }

      .content {
        height: auto;
        padding-top: 20px;
      }
    }
  }

  &__title {
    margin-bottom: rem(30);
  }
}

.licensesSlid {
  max-width: 100%;
  width: 100%;

  &__title {
    margin-bottom: rem(30);
  }

  &__slider {
    position: relative;

    @media all and (max-width: 840px) {
      padding-right: 143px;

      .glide__track {
        overflow: visible;
      }
    }
  }

  &__slide {
    padding: rem(20);
    background: #d7dce1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: rem(114);

    img {
      max-width: 100%;
      max-height: 100%;
    }

    &--last {
      background: #555f76;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        background: #444c5f;
      }

      &:active {
        background: #373d4d;
      }

      .text {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: 140%;
        color: #ffffff;
      }
    }
  }

  &__arrows {
    @media all and (max-width: 840px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      padding-bottom: 10px;
    }
  }

  &__arrow {
    position: absolute;
    width: rem(40);
    top: 50%;
    border: none;
    background: none;
    padding: 0;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 0;

    @media all and (max-width: 1280px) {
      width: 40px;
    }

    @media all and (max-width: 840px) {
      position: static;
      transform: translateY(0);
    }

    &--left {
      left: rem(-20);

      @media all and (max-width: 1280px) {
        left: -20px;
      }

      @media all and (max-width: 840px) {
        margin-right: 20px;
      }
    }

    &--right {
      right: rem(-20);
      transform: translateY(-50%) rotate(180deg);

      @media all and (max-width: 1280px) {
        right: -20px;
      }

      @media all and (max-width: 840px) {
        transform: rotate(180deg);
      }
    }

    svg rect {
      fill: #ff004d;
      transition: all 0.3s ease;
    }

    &:hover {
      svg rect {
        fill: #df0043;
      }
    }

    &:active {
      svg rect {
        fill: #a70032;
      }
    }
  }
}

.gallery__item {
  position: relative;
}
.gallery__item_overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(23, 34, 66, 0.8), rgba(23, 34, 66, 0.8));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: rem(53) rem(33) rem(33) rem(33);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  .icon {
    width: rem(44);
    margin-bottom: rem(20);
    font-size: 0;
  }
  .text {
    font-style: normal;
    font-weight: 600;
    font-size: rem(13);
    line-height: 140%;
    text-align: center;
    color: #ffffff;
  }
  .pdf {
    width: 30px;
    position: absolute;
    top: 15px;
    right: 12px;
    z-index: 10;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.gallery__item:hover .gallery__item_overlay {
  opacity: 1;
  visibility: visible;
}
</style>
