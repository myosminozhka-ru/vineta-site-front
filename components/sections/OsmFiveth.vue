<template>
    <section class="section section__item section__item--fiveth">
        <customers v-if="isActive" class="customers__slider" />
        <licenses v-if="isActive" />
    </section>
</template>
<script>
export default {
  name: 'OsmFivethSection',
  components: {
    Customers: () => import('~/components/sliders/Customers.vue'),
    Licenses: () => import('~/components/tabs/Licenses.vue'),
  },
  props: {
    /**
     * Виден ли слайдер
     * @type {boolean}
     * @default false
     */
    isActive: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
.section {
    &__item {
      flex-direction: column;
      padding: rem(120) rem(240) rem(0) rem(108);
      @media all and (max-width: 1280px) {
        padding: 80px 20px;
      }
      @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
        padding-top: 81px;
      }
    }
}
.customers {
  &__slider {
    margin-bottom: rem(80);
  }
}
</style>