<template>
    <ul class="breadcrumbs">
        <div class="back_button hide_off_mobile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" fill="#FF0040"/>
                <path d="M14.4004 7.2002L10.2004 12.0002L14.4004 16.8002" stroke="white" stroke-width="2"/>
            </svg>
        </div>
        <li class="breadcrumbs__item hide_on_mobile">
            <nuxt-link :to="{name: 'index'}">Главная</nuxt-link>
        </li>
        <li class="breadcrumbs__item breadcrumbs__item--delim hide_on_mobile">
            <span>/</span>
        </li> 
        <li class="breadcrumbs__item">
            <span>Каталог</span>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.back_button {
    font-size: 0;
    cursor: pointer;
}
.breadcrumbs {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none; 
    margin-bottom: vw(30);
    @media all and (max-width: 1024px) {
        margin-bottom: 43px; 
    }
    @media all and (max-width: 840px) {
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #D7DCE1;
        margin-bottom: 29px;
    }
    &__item {
        a, span {
            text-decoration: none;
            font-style: normal;
            font-weight: 400;
            font-size: vw(14);
            line-height: 140%;
            color: #555F76;
            @media all and (max-width: 1024px) {
                font-size: 14px;
            }
        }
        span {
            color: #2E5599;
        }
        @media all and (max-width: 840px) {
            margin-left: 15px;
        }
    }
    &__item--delim {
        margin: 0 vw(10);
        @media all and (max-width: 1024px) {
            margin: 0 10px;
        }
    }
}
</style>