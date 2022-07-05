<template>
    <div class="advantages">
        <div class="advantages__title">Преимущества работы с нами</div>
        <div class="advantages__items">
            <div class="advantages__item" v-for="item in 4" :key="item.index">
                <div class="icon">
                    <img :src="require('~/assets/img/advantagies/star.svg')" width="100%" alt="">
                </div>
                <div class="title">Качество</div>
                <div class="text">Проектируем, изготавливаем и поставляем оборудование для судостроения</div>
            </div>
        </div>
        <div class="advantages__button">
            <osm-button>О компании</osm-button>
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
.advantages {
    padding: rem(120) rem(240);
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #172242;
    }
    &__items {
        display: grid;
        grid-template-columns: repeat(4, 1fr );
        grid-gap: rem(20);
        .icon {
            width: rem(40);
            margin-bottom: rem(20);
            font-size: 0;
        }
        .title {
            font-style: normal;
            font-weight: 600;
            font-size: rem(20);
            margin-bottom: rem(10);
            line-height: 140%;
            color: #172242;
        }
        .text {
            font-style: normal;
            font-weight: 400;
            font-size: rem(16);
            line-height: 140%;
            color: #555F76;
        }
    }
    &__button {
        margin-top: rem(30);
    }
}
</style>