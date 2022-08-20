<template>
    <div class="filter" :class="{'opened': isFilterOpened}">
        <div class="filter__in">
            <div class="filter__title" v-if="currentCategory[0]">
                Параметры поиска
                <div class="arrow hide_on_desktop">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                        <path d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"/>
                    </svg>
                </div>
            </div>
            <div class="filter__params" v-if="currentCategory[0]" @click.stop>
                <div class="filter__params_block">
                    <div class="filter__params_title">{{ currentCategory[0].NAME }}</div>
                    <div class="filter__params_items" @click.stop>
                        <label class="filter__params_item" v-for="item in currentCategory[0].CHILD" :key="item.index" @click.stop>
                            <input type="checkbox" class="checkbox" :value="item.CODE" v-model="filters" name="asdasd">
                            <div class="filter__params_checkbox">
                                <div class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 12" fill="none">
                                        <path d="M1 5.5L5.5 10L14.5 1" stroke="white" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="filter__params_name">{{ item.NAME }}</div>
                        </label>
                    </div>
                </div>
                <button class="filter__clear hide_on_desktop" @click="clearFilter">Сбросить</button>
            </div>
            <button class="filter__clear hide_on_tablet" v-if="currentCategory[0]" @click="clearFilter">Сбросить</button>
            <div class="filter__title" v-if="!currentCategory[0]">
                Нет доступных фильтров для этой категории
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters(['getCatalog']),
        ...mapGetters(['getFilters']),
        filters: {
            get() {
                return this.getFilters;
            },
            set(newValue) {
                // console.log(newValue)
                this.addFilters(newValue)
            }
        },
        currentCategory() {
            return this.getCatalog.filter(category => category.CODE === this.$route.params.catalogId);
        }
    },
    data: () => ({
        isFilterOpened: false
    }),
    mounted() {
        console.log(this.getCatalog);
        this.setFilterOpener();
    },
    methods: {
        ...mapActions(['addFilters']),
        setFilterOpener() {
            if (!document.querySelector('.filter__title')) return;
            document.querySelector('.filter__title').addEventListener('click', (event) => {
                if (window.innerWidth <= 1280) {
                    this.isFilterOpened = !this.isFilterOpened
                }
            })
        },
        clearFilter() {
            this.addFilters([]);
        }
    }
}
</script>

<style lang="scss" scoped>
.filter {
    height: 100%;
    @media all and (max-width: 1280px) {
        margin-bottom: 52px;
        position: relative;
        height: auto;
    }
    &__in {
        padding: rem(40) rem(30);
        position: sticky;
        top: rem(200);
        border: 1px solid #D7DCE1;
        @media all and (max-width: 1280px) {
            border: none;
            padding: 0;
            position: static;
        }
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(24);
        margin-bottom: rem(40);
        line-height: 110%;
        color: #172242;
        @media all and (max-width: 1280px) {
            padding: 20px;
            border: 1px solid #F2F2F2;
            font-size: 18px;
            margin-bottom: 0;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    &.opened &__title {
        @media all and (max-width: 1280px) {
            border-color: #FF0040;
            background: #FF0040;
            color: #fff;
            svg path {
                stroke: #fff;
            }
            .arrow {
                transform: rotate(180deg);
            }
        }
    }
    &__params {
        @media all and (max-width: 1280px) {
            padding: 30px 20px;
            background: #F2F2F2;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 4;
            opacity: 0;
            visibility: hidden;
        }
    }
    &.opened &__params {
        @media all and (max-width: 1280px) {
            opacity: 1;
            visibility: visible;
        }
    }
    &__params_title {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        margin-bottom: rem(30);
        line-height: 110%;
        color: #172242;
        @media all and (max-width: 1280px) {
            font-size: 20px;
            margin-bottom: 30px;
        }
    }
    &__params_block {
        &:not(:last-child) {
            margin-bottom: rem(40);
            @media all and (max-width: 1280px) {
                margin-bottom: 40px;
            }
        }
    }
    &__params_item {
        display: flex;
        align-items: flex-start;
        cursor: pointer;
        &:not(:last-child) {
            margin-bottom: rem(20);
            @media all and (max-width: 1280px) {
                margin-bottom: 20px;
            }
        }
    }
    &__params_checkbox {
        width: rem(24);
        height: rem(24);
        box-sizing: border-box;
        border: 1px solid #555F76;
        position: relative;
        transition: .3s all .3s ease;
        @media all and (max-width: 1280px) {
            width: 24px;
            height: 24px;
        }
        .check {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 rem(4);
            transform: scale(0);
            transform-origin: 50% 50%;
            transition: all .3s ease;
            @media all and (max-width: 1280px) {
                padding: 0 4px;
            }
        }
    }
    .checkbox {
        display: none;
    }
    .checkbox:checked + &__params_checkbox {
        background: #FF0040;
        border-color: #FF0040;
        transition: all .3s ease;
        .check {
            transition: .3s all .3s ease;
            transform: scale(1);
        }
    }
    &__params_name {
        font-style: normal;
        font-weight: 400;
        font-size: rem(14);
        line-height: 140%;
        color: #555F76;
        width: calc(100% - #{rem(24)} - #{rem(10)});
        margin-left: rem(10);
        padding-top: rem(3);
        @media all and (max-width: 1280px) {
            width: calc(100% - 24px - 10px);
            margin-left: 10px;
            padding-top: 3px;
            font-size: 14px;
        }
    }
    &__clear {
        width: 100%;
        height: rem(68);
        margin-top: rem(40);
        font-style: normal;
        font-weight: 600;
        font-size: rem(20);
        line-height: 140%;
        color: #FFFFFF;
        background: #FF0040;
        border: none;
        cursor: pointer;
        transition: all .3s ease;
        &:hover {
            background: #DF0043;
        }
        &:active {
            background: #A70032;
        }
        @media all and (max-width: 1280px) {
            height: 68px;
            font-size: 20px;
            margin-top: 0;
        }
    }
}
</style>