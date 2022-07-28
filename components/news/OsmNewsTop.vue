<template>
    <div class="news__top">
        <div class="news__top_title">Новости</div>
        <div class="news__top_buttons hide_on_mobile">
            <div @click.prevent="addSelectedNewsType('Новости')">
              <osm-button class="news__mods--opener" :class="{'isActive': getSelectedNewsType === 'Новости'}" :outlined="true">
                Новости</osm-button>
            </div>
            <div @click.prevent="addSelectedNewsType(' Пресс-релизы')">
              <osm-button class="news__mods--opener" :class="{'isActive': getSelectedNewsType === ' Пресс-релизы'}" :outlined="true">
                 Пресс-релизы</osm-button>
            </div>
            <div @click.prevent="addSelectedNewsType('Статьи')">
              <osm-button class="news__mods--opener" :class="{'isActive': getSelectedNewsType === 'Статьи'}" :outlined="true">
                Статьи</osm-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'CatalogPage',
    components: {
      OsmButton: () => import('~/components/global/OsmButton.vue'),
    },
    computed: {
      ...mapGetters(['getSelectedNewsType']),
    },
    data: () => ({
      tabs: {
        selected: 1,
      }
    }),
    methods: {
      ...mapActions(['addSelectedNewsType'])
    }
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