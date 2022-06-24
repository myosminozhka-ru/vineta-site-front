<template>
    <section class="section section__item section__item--sixth catalog hide_on_mobile">
        <div class="catalog__wrap">
            <div class="catalog__left">
                <osm-h1 class="catalog__title">Каталог</osm-h1>
                <div class="catalog__points">
                    <div class="catalog__point" v-for="(point, key) in catalog.items" :key="point.index" @click="catalog.slider.go(`=${key}`)">
                        <div class="icon">
                            <img :src="point.icon" width="100%" alt="">
                        </div>
                        <div class="text">{{ point.text }}</div>
                    </div>
                </div>
            </div>
            <div class="catalog__right catalog__slider glide">
                <div class="glide__track" data-glide-el="track">
                    <div class="glide__slides">
                        <div class="catalog__item" v-for="item in catalog.items" :key="item.index">
                            <div class="catalog__item_in">
                                <div class="image">
                                    <img :src="item.icon" width="100%" alt="">
                                </div>
                                <div class="text">{{ item.text }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Glide from '@glidejs/glide'
export default {
  name: 'OsmSixthSection',
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
  },
  data: () => ({
      catalog: {
        slider: new Glide('.catalog__slider.glide', {
            gap: 0
        }),
        items: [
            {
                icon: require('~/assets/img/catalog/catalog_icon1.svg'),
                text: 'Теплообменное оборудование'
            },
            {
                icon: require('~/assets/img/catalog/catalog_icon1.svg'),
                text: 'Оборудование систем водоснабжения'
            },
            {
                icon: require('~/assets/img/catalog/catalog_icon1.svg'),
                text: 'Оборудование для подготовки топлива'
            },
            {
                icon: require('~/assets/img/catalog/catalog_icon1.svg'),
                text: 'Оборудование водоочистки и водоподготовки'
            },
            {
                icon: require('~/assets/img/catalog/catalog_icon1.svg'),
                text: 'Фильтры различных типов'
            },
            {
                icon: require('~/assets/img/catalog/catalog_icon1.svg'),
                text: 'Оборудование очистки газов и воздухаы'
            },
            {
                icon: require('~/assets/img/catalog/catalog_icon1.svg'),
                text: 'Судовые дизельные двигатели'
            },
            {
                icon: require('~/assets/img/catalog/catalog_icon1.svg'),
                text: 'Судовая арматура'
            },
            {
                icon: require('~/assets/img/catalog/catalog_icon1.svg'),
                text: 'Прочее оборудование'
            }
        ]
      }
  }),
  mounted() {
      this.catalog.slider.mount();
  }
}
</script>

<style lang="scss" scoped>
.catalog {
    display: flex;
    align-items: center;
    background: #FFFFFF;
    &__wrap {
        width: 100%;
        display: flex;
        align-items: center;
        padding: vw(100) vw(240) vw(70) vw(108);
        @media all and (max-width: 1024px) {
            padding: 20px;
        }
    }
    &__left {
        width: vw(657);
        padding-right: vw(100);
        box-sizing: border-box;
        @media all and (max-width: 1024px) {
            width: 300px;
            padding-right: 0;
        }
    }
    &__right {
        width: calc(100% - #{vw(657)});
        @media all and (max-width: 1024px) {
            width: calc(100% - 300px);
        }
    }
    &__title {
        margin-bottom: vw(30);
        @media all and (max-width: 1024px) {
            margin-bottom: 30px;
        }
    }
    &__point {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:not(:last-child) {
            margin-bottom: vw(30);
        }
        .icon {
            width: vw(40);
            margin-right: vw(20);
        }
        .text {
            width: calc(100% - #{vw(60)});
            font-weight: 400;
            font-size: vw(24);
            line-height: 140%;
            color: #555F76;
        }
    }
    &__item_in {
        position: relative;
        // background: #F2F2F2 url('~assets/img/catalog/catalog_bg.svg') 0 50% / auto 150% no-repeat;
        background-color: #F2F2F2;
        background-image: url('~assets/img/catalog/catalog_bg.svg');
        background-position: 0 50%;
        background-size: auto 150%;
        background-repeat: repeat;
        transition: 0s background-position 1s ease;
        height: 100%;
        border-bottom: vw(9) solid #2E5599;
        box-sizing: border-box;
        padding-left: vw(250);
        padding-bottom: vw(40);
        padding-right: vw(30);
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        @media all and (max-width: 1024px) {
            padding: 266px 30px 30px 126px;
            height: auto;
        }
    }
    &__item.glide__slide--active &__item_in {
        background-position: -850px 50%;
        transition: background-position 1s ease;
    }
    &__item {
        padding: vw(73) 0 0 vw(108);
        height: vw(435);
        box-sizing: border-box;
        overflow: hidden;
        @media all and (max-width: 1024px) {
            padding: 126px 0 0 219px;
            height: auto;
        }
        .image {
            position: absolute;
            top: vw(-73);
            left: vw(-108);
            width: vw(358);   
            @media all and (max-width: 1024px) {
                width: 510px;
                height: 510px;
                left: -219px;
                top: -126px;
                padding: 60px;
            }
        }
        .text {
            text-align: right;
            font-style: normal;
            font-weight: 600;
            font-size: vw(40);
            line-height: 140%;
            text-align: right;
            text-transform: uppercase;
            color: #2E5599;
            max-width: 100%;
            white-space: initial;
            @media all and (max-width: 1024px) {
                font-size: 30px;
            }
        }
    }
}
</style>