<template>
    <div class="news__top">
        <div class="news__top_title">Новости</div>
        <div class="news__top_buttons hide_on_mobile">
            <div @click.prevent="tabs.selected = 1">
              <osm-button class="news__mods--opener" :class="{'isActive': tabs.selected === 1}" :outlined="true">
                Новости</osm-button>
            </div>
            <div @click.prevent="tabs.selected = 2">
              <osm-button class="news__mods--opener" :class="{'isActive': tabs.selected === 2}" :outlined="true">
                 Пресс-релизы</osm-button>
            </div>
            <div @click.prevent="tabs.selected = 3">
              <osm-button class="news__mods--opener" :class="{'isActive': tabs.selected === 3}" :outlined="true">
                Статьи</osm-button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'CatalogPage',
    components: {
      OsmButton: () => import('~/components/global/OsmButton.vue'),
    },
    data: () => ({
      tabs: {
        selected: 1,
      }
    })
  }

</script>

<style lang="scss" scoped>
.news {
    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: rem(34);
    }
    &__top_title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        line-height: 140%;
        color: #172242;
    }
    &__mods--opener {
      margin-right: rem(20);

      &:not(.isActive) {
        filter: grayscale(1);
        opacity: 0.3;
      }
    }
    &__top_buttons {
        display: flex;
        align-items: center;
    }
}
</style>