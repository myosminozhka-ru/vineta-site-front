<template>
    <h2 class="osm__h2"><slot /></h2>
</template>

<style lang="scss" scoped>
.osm__h2 {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    line-height: 140%;
    color: #172242;
    margin-top: 0;
    @media all and (max-width: 1280px) {
        margin: 0;
        font-size: 30px;
    }
}
</style>