<template>
    <div class="news__inner">
        <div class="news__image">
            <img :src="require('~/assets/img/news/news1.jpg')" alt="">
        </div>
        <div class="news__buttons">
            <osm-button class="news__button">28.02.2022</osm-button>
            <osm-button :outlined="true" class="news__button">Пресс-релизы</osm-button>
        </div>
        <div class="news__title">
            Предприятие делится опытом внедрения инструментов бережливого производства
        </div>
        <div class="news__texts">
            <p>На предприятии подвели первые итоги реализации национального проекта «Производительность труда».</p>
            <p>Совместно с экспертом Федерального центра компетенций для оптимизации производственных процессов предприятия был выбран пилотный поток. Переход на новую систему организации производства стартовал с участка изготовления охладителя наддувочного воздуха. Применяя инструменты бережливого производства, планируется сократить время, затрачиваемое на выполнение данного процесса, снизить себестоимость изделия и нарастить рынок сбыта.</p>
            <p>На старте проекта рабочая группа предприятия в составе 14 человек прошла обучение основам бережливого производства, картированию, внедрению системы 5С на производстве, стандартизированной работе, а также реализации проекта по улучшению. По итогам диагностики были проанализированы все потери и проблемы в пилотном потоке, выявлено 57 узких мест, в числе которых: планирование производства, длительная транспортировка деталей и переналадка оборудования, ожидание ОТК и другие. С помощью полученных знаний и при поддержке эксперта ФЦК на рабочих местах была внедрена система 5С, организован производственный анализ, решен вопрос с проведением контроля ― для этого были созданы специальные места приемки ОТК, организован вызов специалиста для контроля по рации, а также разработана визуализация статуса приемки детали. Кроме того, был изменен график работы и трансфера рабочего персонала, что позволило устранить простои во время пересменки и увеличить полезное время вечерней смены на 2 часа.</p>
            <p>По итогам полугодовой реализации проекта предприятие планирует сократить время выполнения процесса на 49%, вдвое снизить объем незавершенного производства ― с 234 до 123 штук, а также увеличить выработку работника пилотного потока ― с 0,4 до 0,6 чел/час.</p>
        </div>
        <div class="news__more">
            <div class="news__more--title">Смотрите так же</div>
            <div class="news__more--items">
                <div v-for="(item, key) in news" :key="key" class="news__item">
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
                        <nuxt-link class="news__link" :to="{name: item.link, params: {newsId: 'tratata'}}">Читать новость</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        OsmButton: () => import('~/components/global/OsmButton.vue')
    },
    data: () => ({
        news: [
          {
              image: require('~/assets/img/news/news1.jpg'),
              text: 'Команда «Винета» - трижды обладатель «Кубка Чемпионов» в турнире по настольному теннису!',
              date: '2 апреля 2021',
              link: 'news-newsId'
          },
          {
              image: require('~/assets/img/news/news1.jpg'),
              text: '25 лет верным курсом!',
              date: '2 апреля 2021',
              link: 'news-newsId'
          },
          {
              image: require('~/assets/img/news/news1.jpg'),
              text: 'Поздравляем с наступающим Новым 2022 Годом и Рождеством!',
              date: '2 апреля 2021',
              link: 'news-newsId'
          },
      ]
    })
}
</script>

<style lang="scss" scoped>
.news {
    &__inner {}
    &__image {
        height: rem(580);
        @media all and (max-width: 1280px) {
            height: rem(400);
        }
        img {
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
    }
    &__button {
        &:not(:last-child) {
            margin-right: rem(30);
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
            font-size: rem(16);
            line-height: 140%;
            color: #555F76;
            margin: 0;
            &:not(:last-child) {
                margin-bottom: rem(20);
            }
        }
    }
    &__item {
        display: flex;
        flex-direction: column;
        border: 1px solid #D7DCE1;
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
        grid-template-columns: repeat(3, 1fr );
        grid-gap: rem(20);
        @media all and (max-width: 840px) {
            grid-template-columns: repeat(1, 1fr );
        }
    }
}
</style>