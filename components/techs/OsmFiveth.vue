<template>
    <section class="section section__item">
        <div class="header_padding">
            <div class="section__item__in">
                <div class="section__top--tech">
                    <osm-breadcrumbs />
                </div>
                <div class="section__middle--tech">
                    <osm-h1 class="section__title">{{ $t('buttons.techs') }}</osm-h1>
                </div>
                <div class="section__bottom--tech">
                    <div class="section__left--tech">
                        <nuxt-img :src="$vareibles.remote + dataObject.PREVIEW_PICTURE" alt="" loading="lazy" />
                    </div>
                    <div class="section__right--tech" @mousewheel.stop>
                        <div class="index">04</div>
                        <div class="texts">
                          <div class="title">{{ dataObject.NAME }}</div>

                          <div v-html="dataObject.PREVIEW_TEXT"></div>

<!--                            <p class="text">-->
<!--                                На предприятии осуществляется сварка изделий из углеродистых и высоколегированных (коррозионностойких) сталей, а также алюминиевых сплавов, сплавов на основе меди и титановых сплавов. Сварка производится отечественными сварочными материалами.-->
<!--                            </p>-->
<!--                            <div class="text">-->
<!--                                Сварочный участок оснащен сварочным оборудованием для полуавтоматической и ручной аргонодуговой сварки, а также установками лазерной сварки, комплексами орбитальной сварки и установкой автоматической аргонодуговой сварки.-->
<!--                            </div>-->
<!--                            <div class="text">-->
<!--                                Отработаны, аттестованы, внедрены и успешно применяются на практике следующие прогрессивные технологии:-->
<!--                            </div>-->
<!--                            <ul class="list">-->
<!--                              <li>автоматическая дуговая сварка неплавящимся электродом в среде защитного газа титановых сплавов (сварка в узкощелевую разделку).</li>-->
<!--                              <li>автоматическая дуговая орбитальная сварка неплавящимся электродом в среде защитного газа титановых сплавов (вварка труб в трубную решетку).</li>-->
<!--                            </ul>-->
<!--                            <div class="text">Сварка выполняется высококвалифицированными сварщиками, обученными и аттестованными на выполнение ручной, полуавтоматической и автоматической аргонодуговой сварки, имеющими свидетельства о допуске к сварке изделий поднадзорных ВП МО РФ, РМРС, РРР, а также оборудования и трубопроводов атомных энергетических установок.</div>-->
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
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue')
  },
  props: {
    dataObject: {
      type: Object,
      default: () => ({})
    }
  }
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
    &__middle--tech {
        padding-bottom: rem(40);
        @media all and (max-width: 1280px) {
            padding-bottom: 0;
            position: relative;
            z-index: 2;
            display: none;
        }
    }
    &__bottom--tech {
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        @media all and (max-width: 1280px) {
            flex-direction: column;
        }
    }
    &__left--tech {
        width: rem(602);
        margin-right: rem(128);
        font-size: 0;
        height: 100%;
        @media all and (max-width: 1280px) {
            width: 100%;
            margin-right: 0;
            order: 2;
            height: 400px;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    &__right--tech {
        width: calc(100% - #{rem(602)} - #{rem(128)});
height: 100%;
        position: relative;
        @media all and (max-width: 1280px) {
            width: 100%;
            margin-bottom: 30px;
        }
        .index {
            color: #e7e7e7;
            font-size: rem(400);
            font-weight: 600;
            position: absolute;
            top: rem(-187);
            left: 0;
            right: 0;
            text-align: center;
            pointer-events: none;
            @media all and (max-width: 1440px) {
                text-align: right;
                font-size: 270px;
                top: -107px;
            }
            @media all and (max-width: 1280px) {
                top: -65px;
            }
            @media all and (max-width: 860px) {
                font-size: 190px;
top: -50px;
right: 10px;
            }
            &:after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(180deg, rgba(255, 255, 255, 0) -12.5%, #FFFFFF 56.04%);
            }
        }
        .texts {
            position: relative;
            z-index: 2;
height: 100%;
overflow: auto;
        }
        .title {
            font-style: normal;
            font-weight: 600;
            font-size: rem(30);
            margin-bottom: rem(30);
            line-height: 140%;
            color: #172242;
            @media all and (max-width: 1280px) {
                font-size: 20px;
                margin-bottom: 30px;
            }
        }
        .list {
            padding: 0;
            margin: 0;
            padding-left: rem(24);
            @media all and (max-width: 1280px) {
                padding-left: 24px;
            }
            &:not(:last-child) {
                margin-bottom: rem(40);
                @media all and (max-width: 1280px) {
                    margin-bottom: 40px;
                }
            }
            li {
                font-style: normal;
                font-weight: 400;
                font-size: rem(18);
                line-height: 140%;
                color: #555F76;
                @media all and (max-width: 1280px) {
                    margin-bottom: 40px;
                    font-size: 16px;
                }
                &:not(:last-child) {
                    margin-bottom: rem(10);
                    @media all and (max-width: 1280px) {
                        margin-bottom: 10px;
                    }
                }
            }
        }
        .subtitle {
            font-style: normal;
            font-weight: 600;
            font-size: rem(18);
            line-height: 140%;
            color: #172242;
            @media all and (max-width: 1280px) {
                font-size: 16px;
            }
            &:not(:last-child) {
                margin-bottom: rem(20);
                @media all and (max-width: 1280px) {
                    margin-bottom: 20px;
                }
            }
        }
        .text {
            margin: 0;
            font-style: normal;
            font-weight: 400;
            font-size: rem(18);
            line-height: 140%;
            color: #555F76;
            @media all and (max-width: 1280px) {
                font-size: 16px;
            }
            &:not(:last-child) {
                margin-bottom: rem(20);
                @media all and (max-width: 1280px) {
                    margin-bottom: 20px;
                }
            }
        }
        .line {
            height: rem(2);
            background: #D7DCE1;
            border-radius: 20px;
            @media all and (max-width: 1280px) {
                height: 2px;
            }
            &:not(:last-child) {
                margin-bottom: rem(20);
                @media all and (max-width: 1280px) {
                    margin-bottom: 20px;
                }
            }
        }
        .bg_text {
            padding: rem(20);
            background: #D7DCE1;
            font-style: normal;
            font-weight: 400;
            font-size: rem(14);
            line-height: 140%;
            text-align: center;
            color: #555F76;
            @media all and (max-width: 1280px) {
                font-size: 12px;
                padding: 20px;
            }
            &:not(:last-child) {
                margin-bottom: rem(30);
                @media all and (max-width: 1280px) {
                    margin-bottom: 30px;
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
