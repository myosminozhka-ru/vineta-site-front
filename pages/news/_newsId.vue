<template>
  <div v-if="$store.state.dataNews.length" class="news__inner">
    <div class="news__image">
      <nuxt-img :src="$vareibles.remote + $store.state.dataNews[0]?.PREVIEW_PICTURE" alt="" />
    </div>
    <div class="news__buttons">
      <osm-button class="news__button" style="pointer-events: none">{{
        $store.state.dataNews[0]?.PROPERIES[0].VALUE
      }}</osm-button>
      <osm-button
        :outlined="true"
        class="news__button"
        style="pointer-events: none"
        >{{ $store.state.dataNews[0]?.PROPERIES[1].VALUE }}</osm-button
      >
    </div>
    <div class="news__title">
      {{ $store.state.dataNews[0]?.NAME }}
    </div>

    <div class="news__texts">
      <p v-html="$store.state.dataNews[0]?.DETAIL_TEXT" />
    </div>
    <div class="news__more">
      <div class="news__more--title">{{ $t('news.news_more_title') }}</div>
      <div class="news__more--items">
        <a
          v-for="(item, key) in news"
          :key="key"
          :href="localePath(`/news/${item.CODE}`)"
          class="news__item" >
          <div class="news__item_left">
            <div class="news__image">
              <nuxt-img v-if="item.PREVIEW_PICTURE"
                :src="$vareibles.remote + item.PREVIEW_PICTURE"
                alt="" />
              <nuxt-img v-else src="/product.noimage.png" alt="" />
            </div>
          </div>
          <div class="news__item_right">
            <div class="news__item_top">
              <div class="news__date">{{ item.PROPERIES[0].VALUE }}</div>
              <div class="news__text">
                {{ item.NAME }}
              </div>
            </div>
            <NuxtLink :to="{ name: item.link, params: { newsId: item.CODE } }" class="news__link">
              {{ $t('buttons.read_news') }}
            </NuxtLink>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  async fetch({store, app, route, i18n}) {
    const dataNews = await app.$axios.$get(
      `news-detail.php?code=${route.params.newsId}`
    )

    store.dispatch('setDataNews', dataNews)

    store.dispatch('addBreadcrumbs', [
      {
        name: i18n.messages[i18n.locale].buttons.main,
        link: 'index',
        isLink: true,
      },
      {
        name: i18n.messages[i18n.locale].buttons.news,
        link: 'news',
        isLink: true,
      },
      {
        name: dataNews[0].NAME,
        isLink: false,
      },
    ])

    store.dispatch('setLoadingStatus', false)
  },
  computed: {
    ...mapGetters(['getNews']),
    news() {
      return this.getNews.filter(
        (item) => item.CODE !== this.$route.params.newsId
      )
    },
  },
  methods: {
    ...mapActions(['setDataNews']),
  },
}
</script>

<style lang="scss" scoped>
.news {
  &__image {
    position: relative;
    padding-bottom: 73.5%;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    margin-top: rem(20);
    margin-bottom: rem(60);
    @media all and (max-width: 1280px) {
      margin-top: 30px;
      margin-bottom: 40px;
    }
    @media all and (max-width: 640px) {
      flex-direction: column;
    }
  }
  &__button {
    &:not(:last-child) {
      margin-right: rem(30);
      @media all and (max-width: 640px) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
    @media all and (max-width: 640px) {
      width: 100%;
    }
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(30);
    margin-bottom: rem(30);
    line-height: 140%;
    color: #172242;
  }
  &__texts {
    margin-bottom: rem(120);
    @media all and (max-width: 1280px) {
      margin-bottom: 80px;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: rem(20);
      line-height: 140%;
      color: #555f76;
      margin: 0;
      &:not(:last-child) {
        margin-bottom: rem(20);
      }
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    border: 1px solid #d7dce1;
    text-decoration: none;
    position: relative;
  }
  &__item &__item_left {
    margin-bottom: rem(20);
  }
  &__item &__image {
    width: 100%;
    height: 100%;
  }
  &__item &__item_right {
    flex: 1 1 auto;
    padding: rem(20);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__item &__item_top {
    margin-bottom: rem(42);
  }
  &__item &__date {
    position: absolute;
    top: 0;
    left: 0;
    font-style: normal;
    font-weight: 400;
    font-size: rem(16);
    line-height: rem(19);
    color: #ffffff;
    padding: rem(11) rem(22);
    background: #ff0040;
  }
  &__item &__text {
    font-style: normal;
    font-weight: 600;
    font-size: rem(20);
    line-height: 140%;
    color: #172242;
  }
  &__item &__link {
    align-self: start;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: rem(16);
    line-height: 140%;
    color: #ff004d;
    padding-bottom: 5px;
    border-bottom: rem(4) solid #ff004d;
  }
  &__more--title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    margin-bottom: rem(30);
    line-height: 110%;
    color: #172242;
    @media all and (max-width: 1280px) {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  &__more--items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: rem(20);
    @media all and (max-width: 840px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
