<template>
    <div class="news__inner" v-if="detail">
        <!-- <pre style="font-size: 15rem;">
            {{ detail }}
        </pre> -->
        <div class="news__image">
            <img :src="$vareibles.remote + detail[0].PREVIEW_PICTURE" alt="">
        </div>
        <div class="news__buttons">
            <osm-button class="news__button" style="pointer-events: none;">{{ detail[0].PROPERIES[0].VALUE }}</osm-button>
            <osm-button :outlined="true" class="news__button" style="pointer-events: none;">{{ detail[0].PROPERIES[1].VALUE }}</osm-button>
        </div>
        <div class="news__title">
            {{ detail[0].NAME }}
        </div>
        <div class="news__texts">
            <p v-html="detail[0].DETAIL_TEXT" />
        </div>
        <div class="news__more">
            <div class="news__more--title">Смотрите так же</div>
            <div class="news__more--items">
                <a :href="`/news/${item.CODE}`" v-for="(item, key) in news" :key="key" class="news__item">
                    <div class="news__item_left">
                        <div class="news__image">
                            <img :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="">
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
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
        OsmButton: () => import('~/components/global/OsmButton.vue')
    },
    data: () => ({
        detail: null,
    }),
    computed: {
        ...mapGetters(['getNews']),
        news() {
            return this.getNews.filter(item => item.CODE !== this.$route.params.newsId)
        }
    },
    beforeDestroy() {
        this.detail = null
    },
    async mounted() {
        this.detail = await this.$axios.$get(`news-detail.php?code=${this.$route.params.newsId}`);
        this.addBreadcrumbs([
            {
                name: 'Новости',
                link: 'news',
                isLink: true
            },
            {
                name: this.detail[0].NAME,
                isLink: false
            },
        ])
    },
    methods: {
        ...mapActions(['addBreadcrumbs']), 
    }
}
</script>

<style lang="scss" scoped>
.news {
    &__inner {}
    &__image {
        height: rem(580);
        @media all and (max-width: 1280px) {
            height: rem(400);
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    &__buttons {
        display: flex;
        align-items: center;
        margin-top: rem(20);
        margin-bottom: rem(60);
        @media all and (max-width: 1280px) {
            margin-top: 30px;
            margin-bottom: 40px;
        }
    }
    &__button {
        &:not(:last-child) {
            margin-right: rem(30);
        }
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(30);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #172242;
    }
    &__texts {
        margin-bottom: rem(120);
        @media all and (max-width: 1280px) {
            margin-bottom: 80px;
        }
        p {
            font-style: normal;
            font-weight: 400;
            font-size: rem(16);
            line-height: 140%;
            color: #555F76;
            margin: 0;
            &:not(:last-child) {
                margin-bottom: rem(20);
            }
        }
    }
    &__item {
        display: flex;
        flex-direction: column;
        border: 1px solid #D7DCE1;
        text-decoration: none;
        position: relative;
    }
    &__item &__item_left {
        // height: rem(185);
        margin-bottom: rem(20);
    }
    &__item &__image {
        width: 100%;
        height: 100%;
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
    &__item &__date {
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
    &__more--title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        margin-bottom: rem(30);
        line-height: 110%;
        color: #172242;
        @media all and (max-width: 1280px) {
            font-size: 30px;
            margin-bottom: 30px;
        }
    }
    &__more--items {
        display: grid;
        grid-template-columns: repeat(3, 1fr );
        grid-gap: rem(20);
        @media all and (max-width: 840px) {
            grid-template-columns: repeat(1, 1fr );
        }
    }
}
</style>