<template>
    <div class="licenses">
        <osm-h2 class="licenses__title">Лицензии и сертификаты</osm-h2>
        <tabs @clicked="tabClicked" @changed="tabChanged" :options="{ useUrlFragment: false }">
            <tab v-for="tab in tabs" :key="tab.index" :name="tab">
                <div class="licensesSlid glide">
                    <div class="licensesSlid__slider">
                        <div class="glide__track" data-glide-el="track">
                            <ul class="glide__slides">
                                <li v-for="(key, item) in 15" :key="item.index" class="licensesSlid__slide glide__slide">
                                    <img :src="require('~/assets/img/licenses/license1.png')" alt="">
                                </li>
                            </ul>
                        </div>
                        <div class="licensesSlid__arrows" data-glide-el="controls">
                            <button class="licensesSlid__arrow licensesSlid__arrow--left" data-glide-dir="<">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" fill="#FF004D"/>
                                    <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                                </svg>
                            </button>
                            <button class="licensesSlid__arrow licensesSlid__arrow--right" data-glide-dir=">">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" fill="#FF004D"/>
                                    <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </tab>
        </tabs>
    </div>
</template>

<script>
import Glide from '@glidejs/glide'
export default {
  name: 'LicensesTabs',
  components: {
    OsmH2: () => import('~/components/global/OsmH2.vue'),
  },
  data: () => ({
    tabs: ['Лицензии и сертификаты', 'Благодарственные письма и отзывы', 'Отчеты СОУП и аттестации'],
    slider: null
  }),
  beforeDestroy() {
    if (this.slider) this.slider.destroy();
  },
    mounted() {
        setTimeout(() => {
            this.initSlider();
        }, 1000) 
    },
  methods: {
    tabClicked (selectedTab) {
        console.log('Current tab re-clicked:' + selectedTab.tab.name);
    },
    tabChanged (selectedTab) {
        console.log('Tab changed to:' + selectedTab.tab.name);
    },
    initSlider() {
        document.querySelectorAll('.licensesSlid').forEach(item => {
            new Glide(item, {
                perView: 6,
                type: 'carousel'
            }).mount()
        })
    }
  }
}
</script>

<style lang="scss">
.tabs-component {
    &-panels {
        position: relative; 
    }
    &-panel {
        display: block !important;
        transition: .3s opacity .3s ease;
    }
    &-panel[aria-hidden="true"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity .3s ease;
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
        margin: 0 0 vw(26) 0;
        padding: 0;
    }
    &-tab {
        position: relative;
        &:after {
            content: '';
            position: absolute;
            left: 50%;
            right: 50%;
            bottom: vw(-5);
            height: vw(2);
            background: #FF004D;
            transition: all .3s ease;
        }
        &:not(:last-child) {
            margin-right: vw(100);
        }
        a {
            text-decoration: none;
            font-style: normal;
            font-weight: 400;
            font-size: vw(20);
            line-height: 140%;
            color: #172242;
            transition: all .3s ease;
        }
        &.is-active {
            &:after {
                left: 0;
                right: 0;
            }
            a {
                font-weight: 600;
                color: #FF004D;
            }
        }
    }
}
</style>

<style lang="scss" scoped>
.licenses {
    max-width: 100%;
    width: 100%;
    &__title {
        margin-bottom: vw(30);
    }
}
.licensesSlid {
    max-width: 100%;
    width: 100%;
    &__title {
        margin-bottom: vw(30);
    }
    &__slider {
        position: relative;
    }
    &__slide {
        padding: vw(20);
        background: #D7DCE1;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: vw(114);
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    &__arrows {}
    &__arrow {
        position: absolute;
        width: vw(40);
        top: 50%;
        border: none;
        background: none;
        padding: 0;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 0;
        &--left {
            left: vw(-20);
        }
        &--right {
            right: vw(-20);
            transform: translateY(-50%) rotate(180deg);
        }
    }
}
</style>