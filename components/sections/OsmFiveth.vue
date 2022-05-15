<template>
    <section class="section section__item section__item--fiveth">
        <customers />
    </section>
</template>
<script>
export default {
  name: 'OsmFivethSection',
  components: {
    Customers: () => import('~/components/sliders/Customers.vue')
  }
}
</script>

<style lang="scss" scoped>
.section {
    &__item {
        padding: vw(100) vw(240) vw(70) vw(108);
    }
}
</style>