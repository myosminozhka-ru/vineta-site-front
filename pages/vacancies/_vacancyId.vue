<template>
    <div class="vacancy">
        <div class="vacancy__in">
            <div class="vacancy__top">
                <div class="vacancy__title">Оператор станков с ЧПУ Challenger (фрезерная группа) 3-5 разряда</div>
                <div class="vacancy__button">
                    <osm-button>Откликнуться</osm-button>
                </div>
            </div>
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
.vacancy {
    padding: 0 rem(240) rem(120);
}
</style>