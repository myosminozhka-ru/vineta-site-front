<template>
    <div class="news__wrap" :class="{'innerPage': inner}">
        <div class="news__top">
            <osm-h1 class="news__title">Новости</osm-h1>
            <osm-button class="news__button_top" link="news" :outlined="true">Все новости</osm-button>
        </div>
        <div class="news__bottom hide_on_tablet">
            <nuxt-link :to="localePath({name: 'news-newsId', params: {newsId: item.CODE}})" v-for="(item, key) in getNews.slice(0, 4)" :key="key" :class="{'news__item_big': key === 0, 'news__item': key != 0}" >
                <template v-if="key === 0">
                    <div class="news__image">
                        <img v-if="item.PREVIEW_PICTURE" :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="">
                        <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                    </div>
                    <div class="news__item_top">
                        <div class="news__date">{{ item.DATE }}</div>
                    </div>
                    <div class="news__item_bottom">
                        <div class="news__text">
                            {{ item.NAME }}
                        </div>
                        <span class="button" >Читать новость</span>
                    </div>
                </template>
                <template v-else>
                    <div class="news__item_left">
                        <div class="news__image">
                            <img v-if="item.PREVIEW_PICTURE" :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="">
                            <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                        </div>
                    </div>
                    <div class="news__item_right">
                        <div class="news__item_top">
                            <div class="news__date" v-if="'PROPERIES' in item">{{ item.PROPERIES[0].VALUE }}</div>
                            <div class="news__text">
                                {{ item.NAME }}
                            </div>
                        </div>
                        <span class="news__link" :to="{name: 'news-newsId', params: {newsId: item.CODE}}">Читать новость</span>
                    </div>
                </template>
            </nuxt-link>
        </div>
        <div class="glide news__slider hide_on_desktop">
            <div class="glide__track" data-glide-el="track">
                <div class="glide__slides news__slides">
                    <div v-for="(item, key) in getNews" :key="key" class="news__item_big">
                        <div class="news__image">
                            <img v-if="item.PREVIEW_PICTURE" :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="">
                            <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                        </div>
                        <div class="news__item_top">
                            <div class="news__date">{{ item.DATE }}</div>
                        </div>
                        <div class="news__item_bottom">
                            <div class="news__text">
                                {{ item.NAME }}
                            </div>
                            <osm-button :link="item.link" class="hide_on_mobile">Подробнее</osm-button>
                            <div class="mobile_link hide_off_mobile">
                                <nuxt-link class="more" :to="localePath({name: 'news-newsId', params: {newsId: item.CODE}})">Читать новость</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="news__slider-buttons">
                <div class="news__bullets hide_on_mobile" data-glide-el="controls[nav]">
                    <button v-for="(item, key) in getNews.slice(0, 4)" :key="key" class="news__bullet" :data-glide-dir="`=${key}`">{{ key+1 }}</button>
                </div>
                <nuxt-link :to="localePath({name: 'news'})" class="more hide_off_mobile">Смотреть все</nuxt-link>
                <div class="news__arrows" data-glide-el="controls">
                    <button class="news__arrow news__arrow--left" data-glide-dir="<">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" fill="#FF004D"/>
                            <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                        </svg>
                    </button>
                    <button class="news__arrow news__arrow--right" data-glide-dir=">">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" fill="#FF004D"/>
                            <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Glide from '@glidejs/glide';
import { mapGetters } from 'vuex';
export default {
  name: 'OsmSeventhSection',
  props: {
    inner: {
        type: Boolean,
        default: false
    }
  },
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  data: () => ({
    slider: null,
  }),
  computed: {
    ...mapGetters(['getNews']),
  },
  mounted() {
    if (document.querySelector('.news__slider')) {
        this.slider = new Glide('.news__slider', {
            perView: 2,
            gap: 20,
            type: 'carousel',
            breakpoints: {
                1280: {
                    perView: 2,
                },
                840: {
                    perView: 1,
                }
            }
        }).mount();
    }
  }
}
</script>
<style lang="scss">
.news {
    &__wrap:not(.innerPage) &__button_top {
        @media all and (max-width: 840px) {
            display: none;
        }
    }
    &__wrap:not(.innerPage) &__button_top .button {
        @media all and (max-width: 840px) {
            color: #fff !important;
        }
    }
}
</style>
<style lang="scss" scoped>
.news {
    &__slider {
        @media all and (max-width: 840px) {
            padding-right: 102px;
            .glide__track {
                overflow: visible;
            }
            .mobile_link {
                display: flex;
                justify-content: flex-end;
            }
        }
        .more {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #fff;
            text-decoration: none;
            position: relative;
            &:after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background: #fff;
                border-radius: 5px;
            }
        }
    }
    &__wrap.innerPage &__slider .more {
        color: #172242;
        &:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            height: 2px;
            background: #172242;
            border-radius: 5px;
        }
    }
    &__arrows {
        font-size: 0;
    }
    &__arrow {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
        font-size: 0;
        @media all and (max-width: 1280px) {
            width: 40px;
        }
        &--left {
            margin-right: 20px;
        }
        &--right {
            transform: rotate(180deg);
        }
        svg rect {
            fill: #FF004D;
            transition: all .3s ease;
        }
        &:hover {
            svg rect {
                fill: #DF0043;
            }
        }
        &:active {
            svg rect {
                fill: #A70032;
            }
        }
    }
    &__bullet {
        font-size: 0;
        border: none;
        background: #D7DCE1;
        padding: 0;
        border-radius: 50%;
        cursor: pointer;
        transition: all .3s ease;
        @media all and (max-width: 1280px) {
          width: 10px;
          height: 10px;
        }
        &:not(:last-child) {
            @media all and (max-width: 1280px) {
              margin-right: 25px;
            }
        }
        &.glide__bullet--active {
            background: #2E5599;
            transform: scale(1.6);
        }
    }
    &__slider-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
        @media all and (max-width: 840px) {
            margin-right: -102px;
        }
    }
    &__wrap {
        width: 100%;
        &:not(.innerPage) {
            padding: 110rem 240rem 0rem 108rem;
            
            .news__title {
                @media all and (max-width: 840px) {
                    color: #fff;
                }
            }
            @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
                padding-top: 81px;
            }
        }
        @media all and (max-width: 1280px) {
            padding: 80px 20px !important;
        }
        @media all and (max-width: 840px) {
            &:not(.innerPage) {
                background: #2E5599;
            }
        }
    }
    
    
    
    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: rem(30);
        @media all and (max-width: 1280px) {
            margin-bottom: 30px;
        }
    }
    &__bottom {
        display: grid;
        grid-template-areas: 
                "first second"
                "first third"
                "first fourth";
        grid-template-columns: repeat(2, 50%);
        grid-gap: rem(20);
    }
    &__title {
        font-size: rem(40);
    }
    &__item_big {
        position: relative;
        padding: rem(60);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-area: first;
        text-decoration: none;
        @media all and (max-width: 1280px) {
            padding: 20px 30px 20px 20px;
            min-height: 450px;
        }
        @media all and (max-width: 840px) {
            padding: 20px;
            min-height: 280px;
        }
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
            opacity: 0.5;
        }
    }
    &__item_big &__image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    &__item_big &__item_top {
        position: relative;
        z-index: 2;
        margin-bottom: rem(70);
    }
    &__item_big &__item_bottom {
        position: relative;
        z-index: 2;
    }
    &__item_big &__date {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: 140%;
        color: #FFFFFF;
        @media all and (max-width: 1280px) {
            font-size: 20px;
        }
        @media all and (max-width: 1280px) {
            font-size: 14px;
        }
    }
    &__item_big &__text {
        font-style: normal;
        font-weight: 600;
        font-size: rem(24);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #FFFFFF;
        @media all and (max-width: 1280px) {
            white-space: normal;
            font-size: 20px;
        }
        @media all and (max-width: 1280px) {
            font-size: 14px;
        }
    }
    &__item {
        display: flex;
        text-decoration: none;
    }
    &__item &__item_left {
        width: rem(220);
        height: rem(185);
        margin-right: rem(20);
    }
    &__item &__image {
        width: 100%;
        height: 100%;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    &__item &__item_right {
        width: calc(100% - #{rem(240)});
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__item &__item_top {
        margin-bottom: rem(42);
    }
    &__item &__date {
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        margin-bottom: rem(16);
        line-height: 140%;
        color: #B4B9C1;
    }
    &__item &__text {
        font-style: normal;
        font-weight: 600;
        font-size: rem(20);
        line-height: 140%;
        color: #172242;
    }
    &__item &__link {
        align-self: start;
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        line-height: 140%;
        color: #FF004D;
        padding-bottom: 5px;
        border-bottom: rem(4) solid #FF004D;
    }
}
</style>