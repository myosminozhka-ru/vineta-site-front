<template>
    <div class="news__content_in">
      <nuxt-link
        v-for="(item, key) in news"
        :key="key"
        :to="localePath({name: 'news-newsId', params: {newsId: item.CODE}})"
        :class="{'news__item_big' :key === 0, 'news__item': key != 0}"
        class="hide_on_mobile" >
            <template v-if="key === 0">
              <div class="news__image">
                  <nuxt-img v-if="item.PREVIEW_PICTURE" :src="$config.vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="" loading="lazy" />
                  <nuxt-img v-else src="/product.noimage.png" alt="" loading="lazy" />
              </div>
              <div class="news__item-inner">
                <div class="news__item_top">
                    <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
                </div>
                <div class="news__item_bottom">
                    <div class="news__text">
                        {{ item.NAME }}
                    </div>
                    <osm-button :link="item.link">{{ $t('buttons.more') }}</osm-button>
                </div>
              </div>
            </template>
            <template v-else>
                <div class="news__item_left">
                    <div class="news__image">
                        <nuxt-img v-if="item.PREVIEW_PICTURE" :src="$config.vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="" loading="lazy" />
                        <nuxt-img v-else src="/product.noimage.png" alt="" loading="lazy" />
                    </div>
                </div>
                <div class="news__item_right">
                    <div class="news__item_top">
                        <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
                        <div class="news__text">
                            {{ item.NAME }}
                        </div>
                    </div>
                    <span :to="{name: item.link, params: {newsId: item.CODE}}" class="news__link">{{ $t('buttons.read_news') }}</span>
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
        <div v-if="tabs.selected === 1" class="news__content_tabs hide_off_mobile">
            <nuxt-link v-for="(item, key) in news" :key="key" :to="localePath({name: 'news-newsId', params: {newsId: item.CODE}})" class="news__item hide_off_mobile">
                <div class="news__item_left">
                    <div class="news__image">
                        <nuxt-img v-if="item.PREVIEW_PICTURE" :src="$config.vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="" loading="lazy" />
                        <nuxt-img v-else src="/product.noimage.png" alt="" loading="lazy" />
                    </div>
                </div>
                <div class="news__item_right">
                    <div class="news__item_top">
                        <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
                        <div class="news__text">
                            {{ item.NAME }}
                        </div>
                    </div>
                    <span :to="{name: item.link, params: {newsId: 'tratata'}}" class="news__link">{{ $t('buttons.read_news') }}</span>
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
        <div v-if="tabs.selected === 2" class="news__content_tabs hide_off_mobile">
            <nuxt-link v-for="(item, key) in news" :key="key" :to="localePath({name: 'news-newsId', params: {newsId: item.CODE}})" class="news__item hide_off_mobile">
                <div class="news__item_left">
                    <div class="news__image">
                        <nuxt-img v-if="item.PREVIEW_PICTURE" :src="$config.vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="" loading="lazy" />
                        <nuxt-img v-else src="/product.noimage.png" alt="" loading="lazy" />
                    </div>
                </div>
                <div class="news__item_right">
                    <div class="news__item_top">
                        <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
                        <div class="news__text">
                            {{ item.NAME }}
                        </div>
                    </div>
                    <span :to="{name: item.link, params: {newsId: 'tratata'}}" class="news__link">{{ $t('buttons.read_news') }}</span>
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
        <div v-if="tabs.selected === 3" class="news__content_tabs hide_off_mobile">
            <nuxt-link v-for="(item, key) in news" :key="key" :to="localePath({name: 'news-newsId', params: {newsId: item.CODE}})" class="news__item hide_off_mobile">
                <div class="news__item_left">
                    <div class="news__image">
                        <nuxt-img v-if="item.PREVIEW_PICTURE" :src="$config.vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="" loading="lazy" />
                        <nuxt-img v-else src="/product.noimage.png" alt="" loading="lazy" />
                    </div>
                </div>
                <div class="news__item_right">
                    <div class="news__item_top">
                        <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
                        <div class="news__text">
                            {{ item.NAME }}
                        </div>
                    </div>
                    <span :to="{name: item.link, params: {newsId: 'tratata'}}" class="news__link">{{ $t('buttons.read_news') }}</span>
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
        @media all and (max-width: 1440px) {
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
      position: relative;
      grid-area: big;
    }
    &__item_big &__item-inner {
        text-decoration: none;
        position: absolute;
        left: 0;
        top: 0;
        padding: rem(60);
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media all and (max-width: 1280px) {
            padding: 20px 30px 20px 20px;
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
        padding-bottom: 53.5%;
        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    &__item_big &__item_top {
        margin-bottom: rem(70);
    }
    &__item_big &__item_bottom {
        position: relative;
        z-index: 2;
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
        flex-direction: column;
        text-decoration: none;
        position: relative;
        @media all and (max-width: 860px) {
            border: 1px solid #D7DCE1;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
        &:hover {
            .news__item_right {
                border-color: #FF0040;
            }
            .news__link {
                color: #DF0043;
                border-color: #DF0043;
            }
        }
        &:active {
            .news__link {
                color: #A70032;
                border-color: #A70032;
            }
        }
    }
    &__item &__item_left {
        position: relative;
        padding-top: 53.5%;
        img {
            position: absolute;
            top: 0;
        }
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
        padding-top: rem(40);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #D7DCE1;
        transition: all .3s ease-out;
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
        text-overflow: ellipsis;
        overflow: hidden;
        -ms-line-clamp: 3;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        display: -webkit-box;
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
