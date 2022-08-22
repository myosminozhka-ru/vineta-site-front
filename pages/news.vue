<template>
    <div class="wrapper">
        <osm-header />
        <div class="header_padding">
            <div class="news">
                <osm-breadcrumbs />
                <div class="news_page">
                    <osm-news-top />
                    <main class="news__content">
                        <div class="news__content_left">
                            <nuxt-child />
                        </div>
                        <div class="news__content_right">
                            <div class="news__content_right_in">
                                <div class="news__content_bottons">
                                    <osm-button class="news__content_botton" :large="true" link="catalog">В каталог</osm-button>
                                    <osm-button class="news__content_botton" :large="true" :outlined="true">Презентация компании</osm-button>
                                </div>
                                <osm-category />
                            </div>
                            <div></div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
        <osm-footer />
        <osm-preloader />
    </div>
</template>

<script>
export default {
    name: "NewsPage",
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmNewsTop: () => import('~/components/news/OsmNewsTop.vue'),
        OsmPreloader: () => import('~/components/global/OsmPreloader.vue')
    }
}
</script>

<style lang="scss" scoped>
.news {
    padding: rem(30) rem(240) rem(120);
    @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
      padding-left: rem(50);
      padding-right: rem(50);
    }
    background: #fff;
    // @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
    //     padding: rem(30) rem(100) rem(120);
    // }
    @media all and (max-width: 1280px) {
        padding: 30px 20px;
    }
    &__content {
        display: flex;
        // align-items: flex-start;
        @media all and (max-width: 1280px) {
            display: block;
        }
    }
    
    &__content_left {
        width: calc(100% - #{rem(345)} - #{rem(20)});
        @media all and (max-width: 1280px) {
            width: 100%;
        }
        @media all and (max-width: 840px) {
            margin-bottom: 60px;
        }
    }
    &__content_right {
        width: rem(345);
        margin-left: rem(20);
        position: relative;
        @media all and (max-width: 1280px) {
            width: 100%;
            margin-left: 0;
        }
    }
    &__content_right_in {
        position: sticky;
        top: rem(110);
        @media all and (max-width: 1280px) {
            position: static;
        }
        @media all and (min-width: 1440px) {
            top: rem(130);
        }
    }
    &__content_bottons {
        padding: rem(30);
        background: #FFFFFF;
        border: 1px solid #D7DCE1;
        border-bottom: none;
        box-sizing: border-box;
        @media all and (max-width: 1280px) and (min-width: 861px) {
            display: flex;
            align-items: center;
        }
    }
    &__content_botton {
        @media all and (max-width: 1280px) and (min-width: 861px) {
            width: calc(50% - 10px);
        }
        &:not(:last-child) {
            margin-bottom: rem(13);
            @media all and (max-width: 1280px) and (min-width: 861px) {
                margin-bottom: 0;
                margin-right: 20px;
            }
        }
    }
}
</style>