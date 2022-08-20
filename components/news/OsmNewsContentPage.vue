<template>
    <div class="news__content_in">
        <nuxt-link :to="localePath({name: 'news-newsId', params: {newsId: item.CODE}})" v-for="(item, key) in news" :key="key" :class="{'news__item_big': key === 0, 'news__item': key != 0}" class="hide_on_mobile" >
            <template v-if="key === 0">
                <div class="news__image">
                    <img v-if="item.PREVIEW_PICTURE" :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="">
                    <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                </div>
                <div class="news__item_top">
                    <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
                </div>
                <div class="news__item_bottom">
                    <div class="news__text">
                        {{ item.NAME }}
                    </div>
                    <osm-button :link="item.link">{{ $t('buttons.more') }}</osm-button>
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
                        <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
                        <div class="news__text">
                            {{ item.NAME }}
                        </div>
                    </div>
                    <span class="news__link" :to="{name: item.link, params: {newsId: item.CODE}}">Читать новость</span>
                </div>
            </template>
        </nuxt-link>
        <div class="filter__title hide_off_mobile" :class="{'isActive': tabs.selected === 1}" @click="tabs.selected = 1">
            {{ $t('buttons.news') }}
            <div class="arrow hide_on_desktop">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                    <path d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"/>
                </svg>
            </div>
        </div>
        <div class="news__content_tabs hide_off_mobile" v-if="tabs.selected === 1">
            <nuxt-link :to="localePath({name: 'news-newsId', params: {newsId: item.CODE}})" v-for="(item, key) in news" :key="key" class="news__item hide_off_mobile">
                <div class="news__item_left">
                    <div class="news__image">
                        <img v-if="item.PREVIEW_PICTURE" :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="">
                        <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                    </div>
                </div>
                <div class="news__item_right">
                    <div class="news__item_top">
                        <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
                        <div class="news__text">
                            {{ item.NAME }}
                        </div>
                    </div>
                    <span class="news__link" :to="{name: item.link, params: {newsId: 'tratata'}}">Читать новость</span>
                </div>
            </nuxt-link>
        </div>
        <div class="filter__title hide_off_mobile" :class="{'isActive': tabs.selected === 2}" @click="tabs.selected = 2">
            Пресс-релизы
            <div class="arrow hide_on_desktop">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                    <path d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"/>
                </svg>
            </div>
        </div>
        <div class="news__content_tabs hide_off_mobile" v-if="tabs.selected === 2">
            <nuxt-link :to="localePath({name: 'news-newsId', params: {newsId: item.CODE}})" v-for="(item, key) in news" :key="key" class="news__item hide_off_mobile">
                <div class="news__item_left">
                    <div class="news__image">
                        <img v-if="item.PREVIEW_PICTURE" :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="">
                        <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                    </div>
                </div>
                <div class="news__item_right">
                    <div class="news__item_top">
                        <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
                        <div class="news__text">
                            {{ item.NAME }}
                        </div>
                    </div>
                    <span class="news__link" :to="{name: item.link, params: {newsId: 'tratata'}}">Читать новость</span>
                </div>
            </nuxt-link>
        </div>
        <div class="filter__title hide_off_mobile" :class="{'isActive': tabs.selected === 3}" @click="tabs.selected = 3">
            Статьи
            <div class="arrow hide_on_desktop">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                    <path d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"/>
                </svg>
            </div>
        </div>
        <div class="news__content_tabs hide_off_mobile" v-if="tabs.selected === 3">
            <nuxt-link :to="localePath({name: 'news-newsId', params: {newsId: item.CODE}})" v-for="(item, key) in news" :key="key" class="news__item hide_off_mobile">
                <div class="news__item_left">
                    <div class="news__image">
                        <img v-if="item.PREVIEW_PICTURE" :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="">
                        <img v-else :src="require('~/assets/img/product.noimage.png')" alt="">
                    </div>
                </div>
                <div class="news__item_right">
                    <div class="news__item_top">
                        <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
                        <div class="news__text">
                            {{ item.NAME }}
                        </div>
                    </div>
                    <span class="news__link" :to="{name: item.link, params: {newsId: 'tratata'}}">Читать новость</span>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "OsmNewsContent",
    data: () => ({
        tabs: {
            selected: 1,
        },
    }),
    computed: {
        ...mapGetters(['getNews']),
        ...mapGetters(['getSelectedNewsType']),
        news() {
            return this.getNews.filter(item => 'PROPERIES' in item && item.PROPERIES[1].VALUE.replace(/\s/g, '').toLowerCase().includes(this.getSelectedNewsType.replace(/\s/g, '').toLowerCase()));
        }
    }
}
</script>

<style lang="scss" scoped>
.filter {
    &__title {
        @media all and (max-width: 1280px) {
            padding: 20px;
            border: 1px solid #F2F2F2;
            font-size: 18px;
            margin-top: 20px;
            margin-bottom: 20px;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &.isActive {
            border-color: #FF0040;
            background: #FF0040;
            color: #fff;
            svg path {
                stroke: #fff;
            }
            .arrow {
                transform: rotate(180deg);
            }
        }
    }
}

.news {
    &__content_in {
        display: grid;
        grid-gap: rem(20);
        grid-template-columns: repeat(3, 1fr );
        grid-template-areas: 
            'big big big'
            'first second third';
        @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
            grid-template-columns: repeat(2, 1fr );
            grid-template-areas: 
                'big big'
                'first second';
        }
        @media all and (max-width: 840px) {
            display: block;
        }
    }
    &__item_big {
        text-decoration: none;
        position: relative;
        padding: rem(60);
        min-height: rem(563);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-area: big;
        @media all and (max-width: 1280px) {
            padding: 20px 30px 20px 20px;
            min-height: 563px;
        }
        @media all and (max-width: 840px) {
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
        // position: relative;
        // z-index: 2;
        margin-bottom: rem(70);
    }
    &__item_big &__item_bottom {
        position: relative;
        z-index: 2;
    }
    // &__item_big &__date {
    //     font-style: normal;
    //     font-weight: 400;
    //     font-size: rem(20);
    //     line-height: 140%;
    //     color: #FFFFFF;
    //     @media all and (max-width: 1280px) {
    //         font-size: 20px;
    //     }
    //     @media all and (max-width: 1280px) {
    //         font-size: 14px;
    //     }
    // }
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
        flex-direction: column;
        text-decoration: none;
        position: relative;
        @media all and (max-width: 860px) {
            border: 1px solid #D7DCE1;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }
    &__item &__item_left {
        height: rem(345);
        margin-bottom: rem(20);
    }
    &__item &__image {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__item &__item_right {
        flex: 1 1 auto;
        padding: rem(20);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__item &__item_top {
        margin-bottom: rem(42);
    }
    &__date {
        position: absolute;
        top: 0;
        left: 0;
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        line-height: rem(19);
        color: #FFFFFF;
        padding: rem(11) rem(22);
        background: #FF0040;
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