<template>
    <div class="news__content_in">
        <nuxt-link :to="localePath({name: 'news-newsId', params: {newsId: 'test'}})" v-for="(item, key) in news" :key="key" :class="{'news__item_big': key === 0, 'news__item': key != 0}" >
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
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: "OsmNewsContent",
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
    &__content_in {
        display: grid;
        grid-gap: rem(20);
        grid-template-columns: repeat(3, 1fr );
        grid-template-areas: 
            'big big big'
            'first second third';
        @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 700px) {
            grid-template-columns: repeat(2, 1fr );
            grid-template-areas: 
                'big big'
                'first second';
        }
    }
    &__item_big {
        position: relative;
        padding: rem(60);
        min-height: rem(563);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-area: big;
        text-decoration: none;
        @media all and (max-width: 1280px) {
            padding: 20px 30px 20px 20px;
            min-height: 450px;
        }
        @media all and (max-width: 1280px) {
            min-height: 280px;
        }
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
        margin-bottom: rem(70);
    }
    &__item_big &__item_bottom {
        position: relative;
        z-index: 2;
    }
    &__item_big &__date {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: 140%;
        color: #FFFFFF;
        @media all and (max-width: 1280px) {
            font-size: 20px;
        }
        @media all and (max-width: 1280px) {
            font-size: 14px;
        }
    }
    &__item_big &__text {
        font-style: normal;
        font-weight: 600;
        font-size: rem(24);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #FFFFFF;
        @media all and (max-width: 1280px) {
            white-space: normal;
            font-size: 20px;
        }
        @media all and (max-width: 1280px) {
            font-size: 14px;
        }
    }
    &__item {
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }
    &__item &__item_left {
        // height: rem(185);
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
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        margin-bottom: rem(16);
        line-height: 140%;
        color: #B4B9C1;
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
        color: #FF004D;
        padding-bottom: 5px;
        border-bottom: rem(4) solid #FF004D;
    }
}
</style>