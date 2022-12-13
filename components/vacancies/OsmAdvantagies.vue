<template>
  <div class="advantages" v-if="bennefits">
    <div class="advantages__title">{{ $t('vacancies.advantages') }}</div>
    <div class="advantages__items">
      <div class="advantages__item" v-for="item in bennefits" :key="item.index">
        <div class="icon">
          <nuxt-img :src="$vareibles.remote + item.PREVIEW_PICTURE" width="100%" alt="" loading="lazy" />
        </div>
        <div class="advantages__item__info">
          <div class="title">{{ item.NAME }}</div>
          <div class="text">{{ item.PREVIEW_TEXT }}</div>
        </div>
      </div>
    </div>
    <div class="advantages__button">
      <osm-button link="about">{{ $t('buttons.about') }}</osm-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bennefits: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  methods: {
    lazyLoadImage(e) {
      const media = e.target.parentNode.querySelectorAll('[data-src]')
      ;[...media].forEach((m) => this.$lazyLoad(m))
    },
  },
}
</script>

<style lang="scss" scoped>
.advantages {
  padding: rem(120) rem(240);
  @media all and (max-width: 1280px) {
    padding: 80px 20px;
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    margin-bottom: rem(30);
    line-height: 140%;
    color: #172242;
    @media all and (max-width: 1280px) {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: rem(20);
    @media all and (max-width: 840px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .icon {
      width: rem(40);
      margin-bottom: rem(20);
      font-size: 0;
    }
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: rem(22);
      margin-bottom: rem(10);
      line-height: 140%;
      color: #172242;
    }
    .text {
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 140%;
      color: #555f76;
    }
  }
  &__item {
    @media all and (max-width: 840px) {
      display: flex;
      align-items: center;
      .icon {
        margin-bottom: 0;
        margin-right: 20px;
        flex: 0 0 40px;
      }
      .advantages__item__info {
        width: 100%;
      }
      .title {
        margin-bottom: 0;
      }
      .text {
        margin-top: rem(10);
      }
    }
  }
  &__button {
    margin-top: rem(30);
    @media all and (max-width: 1280px) {
      width: 188px;
    }
  }
}
</style>
