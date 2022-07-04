<template>
    <section class="section section__item">
        <div class="header_padding">
            <div class="section__item__in">
                <div class="section__top--tech">
                    <osm-breadcrumbs />
                </div>
                <div class="section__customers--tech">
                    <div class="title">Заказчики</div>
                    <div class="items">
                        <div class="item" v-for="item in 20" :key="item.index">
                            <img :src="require('~/assets/img/techs/alfeus_logo.svg')" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'OsmFirstSection',
  components: {
    // OsmH1: () => import('~/components/global/OsmH1.vue'),
    // OsmButton: () => import('~/components/global/OsmButton.vue'),
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue')
  },
}
</script>

<style lang="scss" scoped>
.section {
    background: #fff;
    &__item__in {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: rem(30) rem(260) rem(40) rem(107);
        @media all and (max-width: 1440px) {
            padding: 30px 20px 40px;
        }
    }
    &__top--tech {
        @media all and (max-width: 1440px) {
            display: none;
        }
    }
    &__customers--tech {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
            font-style: normal;
            font-weight: 600;
            font-size: rem(40);
            margin-bottom: rem(30);
            line-height: 140%;
            color: #172242;
            @media all and (max-width: 1440px) {
                font-size: 30px;
                margin-bottom: 30px;
            }
        }
        .items {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
        }
        .item {
            width: calc(100% / 6 - #{rem(20)} * 5 / 6);
            padding: rem(25);
            box-sizing: border-box;
            font-size: 0;
            background: #F2F2F2;
            &:not(:nth-child(6n+6)) {
                margin-right: calc(#{rem(20)} * 5 / 6);
            }
            &:nth-child(n + 7) {
                margin-top: rem(20);
            }
            img {
                width: 100%;
            }
            @media all and (max-width: 1440px) {
                width: calc(100% / 4 - 20px * 3 / 4);
                padding: 20px;
                &:not(:nth-child(6n+6)) {
                    margin-right: 0;
                }
                &:nth-child(n + 7) {
                    margin-top: 0;
                }
                &:not(:nth-child(4n+4)) {
                    margin-right: 20px;
                }
                &:nth-child(n + 5) {
                    margin-top: 20px;
                }
            }
            @media all and (max-width: 840px) {
                width: calc(100% / 2 - 10px);
                margin-right: 0;
                margin-top: 0;
                &:not(:nth-child(4n+4)) {
                    margin-right: 0;
                }
                &:nth-child(n + 5) {
                    margin-top: 0;
                }
                &:not(:nth-child(2n+2)) {
                    margin-right: 20px;
                }
                &:nth-child(n + 3) {
                    margin-top: 20px;
                }
            }
        }
    }
}
.header_padding {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
</style>