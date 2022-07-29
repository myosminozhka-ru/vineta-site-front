<template>
    <div class="list">
        <!-- <pre style="font-size: 15rem;">{{ vacancies }}</pre> -->
        <div class="list__title">Вакансии</div>
        <div class="list__items" v-if="isMounted">
            <div class="list__item" v-for="item in vacancies" :key="item.index">
                <div class="list__item_title">{{ item.NAME }}</div>
                <div class="list__item_info">
                    <div class="list__item_info--item" v-for="prop in item.PROPERIES" :key="prop.index">
                        <template v-if="prop.CODE !== 'YSL'">
                            <div class="title">{{ prop.NAME }}</div>
                            <template v-if="prop.VALUE.TEXT" >
                                <div class="text" v-html="decodeHTML(prop.VALUE.TEXT)"></div>
                            </template>
                            <template v-if="!prop.VALUE.TEXT" >
                                <div class="text" v-html="decodeHTML(prop.VALUE)"></div>
                            </template>
                        </template>
                    </div>
                </div>
                <div class="list__item_button">
                    <nuxt-link :to="{name: 'vacancies-itemId', params: {itemId: item.CODE}}" class="button">Подробнее</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        vacancies: {
            type: Array,
            default: () => ([]),
        }
    },
    data: () => ({
        isMounted: false
    }),
    mounted() {
        this.isMounted = true
    },
    methods: {
        decodeHTML(html) {
            const txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        }
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
        @media all and (max-width: 860px) {
            padding: 30px;
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
        display: grid;
        grid-template-columns: repeat(4, 1fr );
        grid-gap: rem(30);
        @media all and (max-width: 1280px) {
            grid-template-columns: repeat(3, 1fr );
        }
        @media all and (max-width: 840px) {
            grid-template-columns: repeat(1, 1fr );
            grid-gap: rem(10);
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
            // white-space: pre-wrap;
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