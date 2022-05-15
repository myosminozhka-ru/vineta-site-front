<template>
    <section class="section section__item section__item--second section__item--dark">
        <div class="section__left">
            <img :src="require('~/assets/img/sections/second.png')" alt="first">
        </div>
        <div class="section__right">
            <div class="section__content">
                <osm-h1 class="section__title">Специализируемся на уникальных технологиях написания текстов</osm-h1>
                <div class="section__text">
                    Предпосылкой для создания компании послужили идеи создания подводного садкового устройства для промышленного выращивания рыбы в условиях открытых акваторий (в России и за рубежом, на тот момент, существовали опытные образцы.
                </div>
                <div class="tiles">
                    <div class="tiles__item">
                        <img :src="require('~/assets/img/sections/second1.jpg')" alt="">
                        <div class="tiles__item-bottom">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60">
                                    <rect width="60" height="60" fill="#FF0040"/>
                                    <path d="M37 30L23 20V40L37 30Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="text">Видео о компании</div>
                        </div>
                    </div>
                    <div class="tiles__item">
                        <img :src="require('~/assets/img/sections/second1.jpg')" alt="">
                    </div>
                    <div class="tiles__item">
                        <img :src="require('~/assets/img/sections/second1.jpg')" alt="">
                    </div>
                </div>
                <div class="section__buttons">
                    <osm-button link="index">Каталог</osm-button>
                    <a href="#" class="section__downloads">
                        <div class="section__pdf">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 25">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11068 17.2091L9.11068 0H10.9625L10.9625 17.2091L15.2744 12.8972C15.636 12.5356 16.2223 12.5356 16.5839 12.8972C16.9455 13.2588 16.9455 13.845 16.5839 14.2066L10.6913 20.0992C10.3297 20.4608 9.74347 20.4608 9.38187 20.0992L3.48932 14.2066C3.12772 13.845 3.12772 13.2588 3.48932 12.8972C3.85091 12.5356 4.43718 12.5356 4.79877 12.8972L9.11068 17.2091ZM19.2959 24.0741C19.2959 24.5854 18.8813 25 18.3699 25H1.70327C1.1919 25 0.777344 24.5854 0.777344 24.0741C0.777344 23.5627 1.1919 23.1481 1.70327 23.1481H18.3699C18.8813 23.1481 19.2959 23.5627 19.2959 24.0741Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="text">Скачать презентацию</div>
                        </div>
                        <div class="section__plank">
                            / PDF 12 МБ
                        </div>
                    </a>
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
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  }
}
</script>

<style lang="scss" scoped>
.section {
    &__item--dark &__title {
        color: #fff;
    }
    &__item--dark &__text {
        color: #fff;
    }
    &__right {
        padding-right: vw(240);
        background: #2E5599;
    }
    &__buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__downloads {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
    &__pdf {
        display: flex;
        align-items: center;
        margin-right: vw(42);
        .icon {
            width: vw(19);
            font-size: 0;
        }
        .text {
            font-style: normal;
            font-weight: 400;
            font-size: vw(16);
            line-height: 140%;
            color: #FFFFFF;
            margin-left: vw(14);
        }
    }
    &__plank {
        padding: vw(12) vw(20);
        font-style: normal;
        font-weight: 400;
        font-size: vw(14);
        line-height: 140%;
        color: #FFFFFF;
        background: #00234A;
    }
}
.tiles {
    margin-bottom: vw(30);
    display: grid;
    grid-template-columns: vw(440) auto;
    grid-gap: vw(20);
    grid-template-areas:
            "first second"
            "first third";
    &__item {
        min-height: vw(148);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }
        &:first-child {
            grid-area: first;
            position: relative;
            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(180deg, rgba(0, 0, 0, 0) 62.5%, #000000 100%);
                z-index: 1;
            } 
        }
    }
    &__item-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 0;
        display: flex;
        align-items: center;
        z-index: 2;
        .icon {
            width: vw(60);
        }
        .text {
            margin-left: vw(20);
            font-style: normal;
            font-weight: 400;
            font-size: vw(20);
            line-height: 130%;
            color: #FFFFFF;
        }
    }
}
</style>