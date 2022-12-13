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
                        <div class="item">
                            <nuxt-img src="/techs/tech_1_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_2_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_3_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_4_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_5_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_6_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_7_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_8_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_9_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_10_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_11_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_12_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_13_f.png" alt="" loading="lazy" />
                        </div>
                        <div class="item">
                            <nuxt-img src="/techs/tech_14_f.png" alt="" loading="lazy" />
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
        @media all and (max-width: 1480px) {
            padding: rem(30) rem(50) rem(40) rem(107);
        }
        @media all and (max-width: 1280px) {
            padding: 30px 20px 40px;
        }
    }
    &__top--tech {
        @media all and (max-width: 1280px) {
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
            @media all and (max-width: 1280px) {
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
            min-height: 114px;
            max-height: 114px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:not(:nth-child(6n+6)) {
                margin-right: calc(#{rem(20)} * 5 / 6);
            }
            &:nth-child(n + 7) {
                margin-top: rem(20);
            }
            img {
                max-width: 100%;
            }
            @media all and (max-width: 1440px) {
                width: calc(100% / 4 - 20px * 3 / 4);
                padding: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 94px;
                max-height: 94px;
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
