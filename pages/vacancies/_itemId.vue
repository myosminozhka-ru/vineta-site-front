<template>
    <div class="vacancy">
        <div class="vacancy__in" v-if="vacancy">
            <osm-breadcrumbs />
            <div class="vacancy__top">
                <!-- <pre style="font-size: 15rem;">
                    {{ vacancy }}
                </pre> -->
                <div class="vacancy__title">{{ vacancy[0].NAME }}</div>
                <div class="vacancy__button hide_on_mobile">
                    <osm-button>Откликнуться</osm-button>
                </div>
            </div>
            <div class="vacancy__price">от 45 000 до 65 000 руб. до вычета налогов</div>
            <div class="vacancy__button hide_off_mobile">
                    <osm-button>Откликнуться</osm-button>
                </div>
            <div class="vacancy__items">
                <div class="vacancy__item">
                    <div class="spec" v-for="item in vacancy[0].PROPERIES" :key="item.index">
                        <div class="title">{{ item.NAME }}</div>
                        <div class="text" v-html="item.VALUE" />
                    </div>
                </div>
                <!-- <div class="vacancy__item" v-for="item in 3" :key="item.index">
                    <div class="title">Требования:</div>
                    <ul class="list">
                        <li>Среднее специальное/среднее техническое /высшее образование (по специальности);</li>
                        <li>Среднее специальное/среднее техническое /высшее образование (по специальности);</li>
                        <li>Среднее специальное/среднее техническое /высшее образование (по специальности);</li>
                        <li>Среднее специальное/среднее техническое /высшее образование (по специальности);</li>
                        <li>Среднее специальное/среднее техническое /высшее образование (по специальности);</li>
                    </ul>
                </div> -->
            </div>
        </div>
        <osm-response />
    </div>
</template>

<script>
export default {
    components: {
        OsmButton: () => import('~/components/global/OsmButton.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmResponse: () => import('~/components/vacancies/OsmResponse.vue'),
    },
    data: () => ({
        vacancy: null
    }),
    async fetch() {
        this.vacancy = await this.$axios.$get(`vacancy-detail.php?code=${this.$route.params.itemId}`)
    },
}
</script>

<style lang="scss" scoped>
.vacancy {
    &__in {
        padding: rem(30) rem(240) rem(120);
        @media all and (max-width: 1280px) {
            padding: 30px 20px;
        }
    }
    &__top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: rem(30);
        @media all and (max-width: 840px) {
            flex-direction: column;
        }
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        margin-right: rem(36);
        line-height: 140%;
        color: #172242;
        flex: 1 1 auto;
        @media all and (max-width: 1280px) {
            font-size: 30px;
        }
        @media all and (max-width: 840px) {
            margin-right: 0;
        }
    }
    &__button {
        @media all and (max-width: 840px) {
            margin-bottom: 30px;
        }
    }
    &__price {
        font-style: normal;
        font-weight: 600;
        font-size: rem(24);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #172242;
    }
    &__item {
        &:not(:last-child) {
            margin-bottom: rem(60);
        }
        .spec {
            .title {
                font-style: normal;
                font-weight: 400;
                font-size: rem(16);
                margin-bottom: rem(10);
                line-height: 140%;
                color: #555F76;
            }
            .text {
                font-style: normal;
                font-weight: 400;
                font-size: rem(18);
                line-height: 140%;
                color: #172242;
            }
            &:not(:last-child) {
                margin-bottom: rem(20);
            }
        }
        & > .title {
            font-style: normal;
            font-weight: 600;
            font-size: rem(24);
            margin-bottom: rem(30);
            line-height: 140%;
            color: #172242;
        }
        .list {
            padding: 0;
            margin: 0;
            padding-left: rem(20);
            li {
                font-style: normal;
                font-weight: 400;
                font-size: rem(15);
                line-height: 140%;
                color: #555F76;
                &:not(:last-child) {
                    margin-bottom: rem(10);
                }
            }
        }
    }
}
</style>