<template>
    <section class="section section__item section__item--fiveth">
        <customers class="customers__slider" />
        <licenses />
    </section>
</template>
<script>
export default {
  name: 'OsmFivethSection',
  components: {
    Customers: () => import('~/components/sliders/Customers.vue'),
    Licenses: () => import('~/components/tabs/Licenses.vue'),
  },
  
}
</script>

<style lang="scss" scoped>
.section {
    &__item {
      flex-direction: column;
      padding: vw(100) vw(240) vw(70) vw(108);
      @media all and (max-width: 1024px) {
        padding: 80px 20px;
      }
    }
}
.customers {
  &__slider {
    margin-bottom: vw(80);
  }
}
</style>