<template>
  <div class="wrapper">
    <!-- <osm-header /> -->
    <div class="header_padding">
      <div class="news">
        <osm-breadcrumbs />
        <div class="news_page">
          <osm-news-top />
          <main class="news__content">
            <div class="news__content_left">
              <nuxt-child />
            </div>
            <div class="news__content_right">
              <div class="news__content_right_in">
                <div class="news__content_bottons">
                  <osm-button class="news__content_botton" :large="true" link="catalog">{{ $t('buttons.catalog') }}</osm-button>
                  <osm-button v-if="false" class="news__content_botton" :large="true" :outlined="true">Презентация компании</osm-button>
                  <a v-if="'prezentatsiya' in getDownloads && getDownloads.prezentatsiya.PROPERIES" :href="$vareibles.remote + getDownloads.prezentatsiya.PROPERIES[0].SRC" class="button isOutlined isLarge but_prez">Презентация компании</a>
                </div>
                <osm-category />
              </div>
              <div></div>
            </div>
          </main>
        </div>
      </div>
    </div>
    <osm-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NewsPage',
  components: {
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmNewsTop: () => import('~/components/news/OsmNewsTop.vue'),
  },
  data: () => ({
    /**
     * Скрыть лоадер
     * @type {boolean}
     * @default false
     */
    isMounted: false,
  }),
  head() {
    return {
      title: this.getSeo.news.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.news.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.news.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  async fetch({store}) {
    await store.dispatch('setLoadingStatus', true)

    if (!store.state.news.length) {
      await store.dispatch('addNews')
    }
  },
  computed: {
    ...mapGetters(['getDownloads']),
    ...mapGetters(['getSeo']),
  },
  mounted() {
    this.isMounted = true
  }
}
</script>

<style lang="scss" scoped>
.news {
  .but_prez {
    &.isOutlined {
      padding: rem(18) rem(30);
      background: transparent;
      color: #172242;
      border: rem(2) solid #ff004d;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        bottom: rem(-2);
        left: 0;
        height: rem(3);
        background: #fff;
        width: 0;
        transition: all 0.3s ease;
      }
      &:after {
        content: '';
        position: absolute;
        top: rem(-2);
        right: 0;
        height: rem(3);
        background: #fff;
        width: 0;
        transition: all 0.3s ease;
      }
      @media all and (max-width: 1280px) {
        border-width: 2px;
        padding: 18px 30px;
      }
      svg {
        path {
          transition: all 0.3s ease;
        }
      }
      &:hover {
        background: #fff;
        &:before,
        &:after {
          width: 70%;
        }
      }
      &:active {
        border-color: #a70032;
        &:before,
        &:after {
          width: 0;
        }
      }
    }
  }
  padding: rem(30) rem(240) rem(120);
  @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
    padding-left: rem(50);
    padding-right: rem(50);
  }
  background: #fff;

  @media all and (max-width: 1280px) {
    padding: 30px 20px;
  }
  &__content {
    display: flex;

    @media all and (max-width: 1280px) {
      display: block;
    }
  }

  &__content_left {
    width: calc(100% - #{rem(345)} - #{rem(20)});
    @media all and (max-width: 1280px) {
      width: 100%;
    }
    @media all and (max-width: 840px) {
      margin-bottom: 60px;
    }
  }
  &__content_right {
    width: rem(345);
    margin-left: rem(20);
    position: relative;
    @media all and (max-width: 1280px) {
      width: 100%;
      margin-left: 0;
    }
  }
  &__content_right_in {
    position: sticky;
    top: rem(110);
    @media all and (max-width: 1280px) {
      position: static;
    }
    @media all and (min-width: 1440px) {
      top: rem(130);
    }
  }
  &__content_bottons {
    padding: rem(30);
    background: #ffffff;
    border: 1px solid #d7dce1;
    border-bottom: none;
    box-sizing: border-box;
    @media all and (max-width: 1280px) and (min-width: 861px) {
      display: flex;
      align-items: center;
    }
  }
  &__content_botton {
    @media all and (max-width: 1280px) and (min-width: 861px) {
      width: calc(50% - 10px);
    }
    &:not(:last-child) {
      margin-bottom: rem(13);
      @media all and (max-width: 1280px) and (min-width: 861px) {
        margin-bottom: 0;
        margin-right: 20px;
      }
    }
  }
}
</style>
