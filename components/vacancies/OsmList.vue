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
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list {
    padding: rem(120) rem(240);
    background: #F2F2F2;
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        margin-bottom: rem(30);
        line-height: 110%;
        color: #172242;
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
        }
        &:nth-child(1) {
            max-width: rem(158);
        }
        &:nth-child(3) {
            max-width: rem(310);
        }
    }
}
</style>