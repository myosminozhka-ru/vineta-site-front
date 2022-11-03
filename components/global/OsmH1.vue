<template>
    <h1 class="osm__h1"><slot /></h1>
</template>

<style lang="scss" scoped>
.osm__h1 {
    font-style: normal;
    font-weight: 600;
    font-size: rem(50);
    line-height: 140%;
    color: #172242;
    margin: 0;
    @media all and (max-width: 1280px) {
        font-size: 30px !important;
    }
}
</style>