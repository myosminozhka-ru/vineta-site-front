<template>
    <div class="advantages" v-if="bennefits">
        <div class="advantages__title">Преимущества работы с нами</div>
        <div class="advantages__items">
            <div class="advantages__item" v-for="item in bennefits" :key="item.index">
                <div class="icon">
                    <img :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="">
                </div>
                <div class="title">{{ item.NAME }}</div>
                <div class="text">{{ item.PREVIEW_TEXT }}</div>
            </div>
        </div>
        <div class="advantages__button">
            <osm-button link="about">О компании</osm-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bennefits: {
            type: Array,
            default: () => ([])
        }
    },
    components: {
        OsmButton: () => import('~/components/global/OsmButton.vue')
    }
}
</script>

<style lang="scss" scoped>
.advantages {
    padding: rem(120) rem(240);
    @media all and (max-width: 1280px) {
        padding: 80px 20px;
    }
    &__title {
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
    &__items {
        display: grid;
        grid-template-columns: repeat(4, 1fr );
        grid-gap: rem(20);
        @media all and (max-width: 840px) {
            grid-template-columns: repeat(1, 1fr );
        }
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
        @media all and (max-width: 1280px) {
            width: 188px;
        }
    }
}
</style>