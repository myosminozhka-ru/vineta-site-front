<template>
    <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
            <nuxt-link :to="{name: 'index'}">Главная</nuxt-link>
        </li>
        <li class="breadcrumbs__item breadcrumbs__item--delim">
            <span>/</span>
        </li> 
        <li class="breadcrumbs__item">
            <span>Каталог</span>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.breadcrumbs {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none; 
    margin-bottom: vw(30);
    &__item {
        a, span {
            text-decoration: none;
            font-style: normal;
            font-weight: 400;
            font-size: vw(14);
            line-height: 140%;
            color: #555F76;
        }
        span {
            color: #2E5599;
        }
    }
    &__item--delim {
        margin: 0 vw(10);
    }
}
</style>