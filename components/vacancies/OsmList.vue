<template>
    <div class="list">
        <div class="list__title">Вакансии</div>
        <div class="list__items">
            <div class="list__item" v-for="item in 5" :key="item.index">
                <div class="list__item_title">Токарь/токарь универсал 3-6 разряда</div>
                <div class="list__item_info">
                    <div class="list__item_info--item">
                        <div class="title">Опыт работы:</div>
                        <div class="text">от 2 лет в области машиностроения</div>
                    </div>
                    <div class="list__item_info--item">
                        <div class="title">Отклад:</div>
                        <div class="text">45 000-65 000 Р</div>
                    </div>
                    <div class="list__item_info--item">
                        <div class="title">Образование:</div>
                        <div class="text">специальное/среднее техническое / высшее образование</div>
                    </div>
                    <div class="list__item_info--item">
                        <div class="title">График работы:</div>
                        <div class="text">
                            <div>8.00 - 17.00</div>
                            <div>16.00-24.00</div>
                        </div>
                    </div>
                </div>
                <div class="list__item_button">
                    <osm-button>Откликнуться</osm-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        OsmButton: () => import('~/components/global/OsmButton.vue')
    }
}
</script>

<style lang="scss" scoped>
.list {
    padding: rem(120) rem(240);
    background: #F2F2F2;

    @media all and (max-width: 1280px) {
        padding: 60px 20px;
    }
    &__title {
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
    &__item {
        background: #fff;
        padding: rem(40) rem(50);
        &:not(:last-child) {
            margin-bottom: rem(10);
        }
    }
    &__item_title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(20);
        margin-bottom: rem(16);
        line-height: 140%;
        color: #172242;
    }
    &__item_info {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media all and (max-width: 840px) {
            flex-direction: column;
        }
    }
    &__item_info--item {
        .title {
            font-style: normal;
            font-weight: 400;
            font-size: rem(14);
            margin-bottom: rem(5);
            line-height: 140%;
            color: #555F76;
        }
        .text {
            font-style: normal;
            font-weight: 400;
            font-size: rem(20);
            line-height: 140%;
            color: #172242;
            @media all and (max-width: 1280px) {
                font-size: 16px;
            }
        }
        &:nth-child(1) {
            max-width: rem(158);
        }
        &:nth-child(3) {
            max-width: rem(310);
        }
        @media all and (max-width: 1280px) {
            max-width: 100% !important;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }
    &__item_button {
        margin-top: rem(30);
        @media all and (max-width: 1280px) {
            margin-top: 30px;
            max-width: 209px;
        }
    }
}
</style>