<template>
    <div class="wrapper">
        <osm-header />
        <div class="errorPage">
            <div class="errorPage__in">
                <div class="errorPage__code">
                    <img :src="require('~/assets/img/errors/404.svg')" width="100%" alt="">
                </div>
                <div class="errorPage__title">Страница не найдена</div>
                <div class="errorPage__text">А также для военного и гражданского судоремонта, транспорта, предприятий ТЭК, атомной промышленности и других.</div>
                <div class="errorPage__buttons">
                    <osm-button link="index" class="errorPage__button">На главную</osm-button>
                    <osm-button link="catalog" class="errorPage__button">В каталог</osm-button>
                    <osm-button link="contacts" class="errorPage__button">Контакты</osm-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ErrorPage",
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmButton: () => import('~/components/global/OsmButton.vue')
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: #172242;
}
.errorPage {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 1280px) {
        padding: 152px 40px 152px;
        box-sizing: border-box;
        min-height: 0;
    }
    &__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        @media all and (max-width: 1280px) {
            flex-direction: column;
        }
    }
    &__button {
        &:not(:last-child) {
            margin-right: rem(30);
            @media all and (max-width: 1280px) {
                margin-right: 0;
                margin-bottom: 10px;
            }
        }
    }
    &__in {
        max-width: rem(687);
    }
    &__code {
        margin-bottom: rem(-80);
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(64);
        margin-bottom: rem(30);
        line-height: 140%;
        text-align: center;
        color: #FFFFFF;
        @media all and (max-width: 1280px) {
            font-size: 34px;
        }
    }
    &__text {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        margin-bottom: rem(40);
        line-height: 140%;
        text-align: center;
        color: #FFFFFF;
        @media all and (max-width: 1280px) {
            font-size: 16px;
        }
    }
}
</style>