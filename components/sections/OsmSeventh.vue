<template>
    <section class="section section__item section__item--seventh news">
        <div class="news__wrap">
            <div class="news__top">
                <osm-h1 class="catalog__title">Каталог</osm-h1>
                <osm-button link="index" :outlined="true">Все новости</osm-button>
            </div>
            <div class="news__bottom">
                <div v-for="(item, key) in news" :key="key" :class="{'news__item_big': key === 0, 'news__item': key != 0}" >
                    <template v-if="key === 0">
                        <div class="news__image">
                            <img :src="item.image" width="100%" alt="">
                        </div>
                        <div class="news__item_top">
                            <div class="news__date">{{ item.date }}</div>
                        </div>
                        <div class="news__item_bottom">
                            <div class="news__text">
                                {{ item.text }}
                            </div>
                            <osm-button :link="item.link">Подробнее</osm-button>
                        </div>
                    </template>
                    <template v-else>
                        <div class="news__item_left">
                            <div class="news__image">
                                <img :src="item.image" width="100%" alt="">
                            </div>
                        </div>
                        <div class="news__item_right">
                            <div class="news__item_top">
                                <div class="news__date">{{ item.date }}</div>
                                <div class="news__text">
                                    {{ item.text }}
                                </div>
                            </div>
                            <a class="news__link" :href="item.link">Читать новость</a>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'OsmSeventhSection',
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  data: () => ({
      news: [
          {
              image: require('~/assets/img/news/news1.jpg'),
              text: 'Команда «Винета» - трижды обладатель «Кубка Чемпионов» в турнире по настольному теннису!',
              date: '2 апреля 2021',
              link: 'index'
          },
          {
              image: require('~/assets/img/news/news1.jpg'),
              text: '25 лет верным курсом!',
              date: '2 апреля 2021',
              link: 'index'
          },
          {
              image: require('~/assets/img/news/news1.jpg'),
              text: 'Поздравляем с наступающим Новым 2022 Годом и Рождеством!',
              date: '2 апреля 2021',
              link: 'index'
          },
          {
              image: require('~/assets/img/news/news1.jpg'),
              text: 'Команда «Винета» - трижды обладатель «Кубка Чемпионов» в турнире по настольному теннису!',
              date: '2 апреля 2021',
              link: 'index'
          }
      ]
  })
}
</script>

<style lang="scss" scoped>
.news {
    &__wrap {
        width: 100%;
        padding: vw(100) vw(240) vw(70) vw(108);
    }
    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: vw(30);
    }
    &__bottom {
        display: grid;
        grid-template-areas: 
                "first second"
                "first third"
                "first fourth";
        grid-template-columns: repeat(2, 50%);
        grid-gap: vw(20);
    }
    &__item_big {
        position: relative;
        padding: vw(60);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-area: first;
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
            opacity: 0.5;
        }
    }
    &__item_big &__image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    &__item_big &__item_top {
        position: relative;
        z-index: 2;
        margin-bottom: vw(70);
    }
    &__item_big &__item_bottom {
        position: relative;
        z-index: 2;
    }
    &__item_big &__date {
        font-style: normal;
        font-weight: 400;
        font-size: vw(20);
        line-height: 140%;
        color: #FFFFFF;
    }
    &__item_big &__text {
        font-style: normal;
        font-weight: 600;
        font-size: vw(24);
        margin-bottom: vw(30);
        line-height: 140%;
        color: #FFFFFF; 
    }
    &__item {
        display: flex;
    }
    &__item &__item_left {
        width: vw(220);
        height: vw(185);
        margin-right: vw(20);
    }
    &__item &__image {
        width: 100%;
        height: 100%;
    }
    &__item &__item_right {
        width: calc(100% - #{vw(240)});
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__item &__item_top {
        margin-bottom: vw(42);
    }
    &__item &__date {
        font-style: normal;
        font-weight: 400;
        font-size: vw(16);
        margin-bottom: vw(16);
        line-height: 140%;
        color: #B4B9C1;
    }
    &__item &__text {
        font-style: normal;
        font-weight: 600;
        font-size: vw(20);
        line-height: 140%;
        color: #172242;
    }
    &__item &__link {
        align-self: start;
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: vw(16);
        line-height: 140%;
        color: #FF004D;
        padding-bottom: 5px;
        border-bottom: vw(4) solid #FF004D;
    }
}
</style>