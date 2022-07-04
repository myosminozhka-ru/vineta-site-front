<template>
    <section class="section section__item">
        <div class="header_padding">
            <div class="section__item__in">
                <div class="section__top--tech">
                    <osm-breadcrumbs />
                </div>
                <div class="section__middle--tech">
                    <osm-h1 class="section__title">Технология производства</osm-h1>
                </div>
                <div class="section__bottom--tech">
                    <div class="section__left--tech">
                        <img :src="require('~/assets/img/techs/image.jpg')" alt="">
                    </div>
                    <div class="section__right--tech">
                        <div class="index">06</div>
                        <div class="texts">
                            <div class="title">Отгрузка</div>
                            <p class="text">
                                Транспортировка деталей, заготовок и готовой продукции производится подъемным оборудованием г/п до 10 тонн.
                            </p>
                            <div class="line"></div>
                            <p class="text">
                                Наше предприятие тесно сотрудничает с проектантами кораблей, судов и плавучих средств: ОАО «Северное ПКБ», ОАО «Зеленодольское ПКБ», ОАО «ЦКБМТ «Рубин», ОАО «Невское ПКБ», ОАО СПМБМ «Малахит», ОАО «ЦКБ «Айсберг», ОАО «ЦМКБ «Алмаз», ОАО «КБ «Вымпел». Данные проектные организации успешно применяют наши разработки и продукцию в своих проектах.
                            </p>
                            <p class="text">
                                Мы продолжаем совершенствовать свое производство. ООО "Винета" имеет свое собственное конструкторское бюро. Персонал проходит обучение, курсы повышения квалификации, периодическую аттестацию в области РМРС, РРР, АЭС. Наш станочный парк пополнятся новым оборудованием и станками. Это позволяет существенно увеличить мощность производства и сократить сроки изготовления оборудования, продолжая обеспечивать высокий стандарт качества продукции, выпускаемой под маркой ООО «Винета».
                            </p>
                            <p class="text">
                                Накопленный опыт в решении многогранных проектно-технологических проблем дает полное основание утверждать, что ООО "Винета", обладая собственным современным производством и высококвалифицированными специалистами, имеет все возможности решать проблемы своих заказчиков и партнеров.
                            </p>
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
        margin-bottom: rem(40);
        @media all and (max-width: 1280px) {
            margin-bottom: 0;
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
        // margin-left: rem(128);
        position: relative;
        @media all and (max-width: 1280px) {
            width: 100%;
            margin-bottom: 30px;
        }
        .index {
            color: #F2F2F2;
            font-size: rem(400);
            font-weight: 600;
            position: absolute;
            top: rem(-187);
            left: 0;
            right: 0;
            text-align: center;
            pointer-events: none;
            @media all and (max-width: 1280px) {
                text-align: right;
                font-size: 300px;
                top: -107px;
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
        }
        .title {
            font-style: normal;
            font-weight: 600;
            font-size: rem(30);
            margin-bottom: rem(30);
            line-height: 140%;
            color: #172242;
            @media all and (max-width: 1280px) {
                font-size: 30px;
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
                font-size: rem(16);
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
            font-size: rem(16);
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
            font-size: rem(16);
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