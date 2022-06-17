<template>
    <div class="filter">
        <div class="filter__in">
            <div class="filter__title">
                Параметры поиска
            </div>
            <div class="filter__params">
                <div class="filter__params_block">
                    <div class="filter__params_title">Фланцевые</div>
                    <div class="filter__params_items">
                        <label class="filter__params_item">
                            <input type="checkbox" class="checkbox" value="Забортной воды проходные сетчатые" v-model="filters" name="filter1">
                            <div class="filter__params_checkbox">
                                <div class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 12" fill="none">
                                        <path d="M1 5.5L5.5 10L14.5 1" stroke="white" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="filter__params_name">Забортной воды проходные сетчатые (8)</div>
                        </label>
                        <label class="filter__params_item">
                            <input type="checkbox" class="checkbox" value="Пресной воды проходные" v-model="filters" name="filter2">
                            <div class="filter__params_checkbox">
                                <div class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 12" fill="none">
                                        <path d="M1 5.5L5.5 10L14.5 1" stroke="white" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="filter__params_name">Пресной воды проходные (9)</div>
                        </label>
                    </div>
                </div>
                <div class="filter__params_block">
                    <div class="filter__params_title">Штуцерные</div>
                    <div class="filter__params_items">
                        <label class="filter__params_item">
                            <input type="checkbox" class="checkbox" value="Cетчатые однопатронные" v-model="filters" name="filter3">
                            <div class="filter__params_checkbox">
                                <div class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 12" fill="none">
                                        <path d="M1 5.5L5.5 10L14.5 1" stroke="white" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="filter__params_name">Cетчатые однопатронные (2)</div>
                        </label>
                        <label class="filter__params_item">
                            <input type="checkbox" class="checkbox" value="Cетчатые одинарные" v-model="filters" name="filter4">
                            <div class="filter__params_checkbox">
                                <div class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 12" fill="none">
                                        <path d="M1 5.5L5.5 10L14.5 1" stroke="white" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="filter__params_name">Cетчатые одинарные (1)</div>
                        </label>
                    </div>
                </div>
            </div>
            <button class="filter__clear">Сбросить</button>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        filters: []
    })
}
</script>

<style lang="scss" scoped>
.filter {
    &__in {
        padding: vw(40) vw(30);
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: vw(24);
        margin-bottom: vw(40);
        line-height: 110%;
        color: #172242;
    }
    &__params_title {
        font-style: normal;
        font-weight: 400;
        font-size: vw(20);
        margin-bottom: vw(30);
        line-height: 110%;
        color: #172242;
    }
    &__params_block {
        &:not(:last-child) {
            margin-bottom: vw(40);
        }
    }
    &__params_item {
        display: flex;
        align-items: flex-start;
        cursor: pointer;
        &:not(:last-child) {
            margin-bottom: vw(20);
        }
    }
    &__params_checkbox {
        width: vw(24);
        height: vw(24);
        box-sizing: border-box;
        border: 1px solid #555F76;
        position: relative;
        transition: .3s all .3s ease;
        .check {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 vw(4);
            transform: scale(0);
            transform-origin: 50% 50%;
            transition: all .3s ease;
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
        font-size: vw(14);
        line-height: 140%;
        color: #555F76;
        width: calc(100% - #{vw(24)} - #{vw(10)});
        margin-left: vw(10);
        padding-top: vw(3);
    }
    &__clear {
        width: 100%;
        height: vw(68);
        margin-top: vw(40);
        font-style: normal;
        font-weight: 600;
        font-size: vw(20);
        line-height: 140%;
        color: #FFFFFF;
        background: #FF0040;
        border: none;
        cursor: pointer;
    }
}
</style>