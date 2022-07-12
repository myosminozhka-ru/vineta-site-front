<template>
    <section class="section section__item section__item--footer section__item--dark">
        <div class="section__left">
            <div class="section__left_top">
                <osm-h1 class="section__title">Оставить заявку</osm-h1>
                <div class="section__text">
                    Безусловно, постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно фиксирует необходимость соответствующих условий активизации. А ещё реплицированные с зарубежных источников, современные
                </div>
            </div>
            <form @submit.prevent class="section__left_form">
                <osm-input class="section__input" placeholder="ФИО *" :required="true"/>
                <!-- <osm-input class="section__input" placeholder="Компания *" :required="true"/> -->
                <osm-input class="section__input" placeholder="Телефон *" type="tel" :required="true"/>
                <osm-input class="section__input" placeholder="E-mail *" type="email" :required="true"/>
                <osm-textarea class="section__textarea" placeholder="Ваше сообщение" type="email" :required="true"/>
                <osm-button class="section__button" :large="true" type="submit">Подробнее</osm-button>
            </form>
        </div>
        <div class="section__right hide_on_mobile">
            <div class="section__content">
                <osm-h1 class="section__title">Контакты</osm-h1>
                <div class="section__contacts">
                    <div class="section__contacts_side">
                        <a href="tel:78124935048" class="section__contact">+7(812)493-50-48</a>
                        <div class="section__contacts_worktime">Пн-Пт с 9:00 до 18:00</div>
                    </div>
                    <div class="section__contacts_side">
                        <a href="mailto:info@vineta.ru" class="section__contact">info@vineta.ru</a>
                        <div class="section__contacts_info">Ответим в течение рабочего дня или на следующий рабочий день</div>
                    </div>
                </div>
                <div class="section__socials">
                    <a :href="social.link" class="section__social" target="_blank" v-for="social in socials" :key="social.index">
                        <img :src="social.icon" width="100%" alt="">
                    </a>
                </div>
            </div>
            <div class="section__map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A53f4c694e1d4abd01e62a7f6f9d00f3717cffcb4b3a7cec3cc46bea2513cf1ab&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        </div>
        <osm-footer class="section__footer hide_on_desktop" />
        <div class="section__popup hide_on_tablet">
            <div class="section__popup_left">ООО “Винета”, 2012-2022</div>
            <div class="section__popup_right">
                <ul>
                    <li><a href="#">Политика конфидециальности</a></li>
                    <li><a href="#">Пользовательское соглашение</a></li>
                    <li><a href="#">Карта сайта</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'OsmFirstSection',
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    OsmInput: () => import('~/components/global/OsmInput.vue'),
    OsmTextarea: () => import('~/components/global/OsmTextarea.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
  },
  data: () => ({
      socials: [
          {
              icon: require('~/assets/img/socials/vk.svg'),
              link: '#',
          },
          {
              icon: require('~/assets/img/socials/vk.svg'),
              link: '#',
          },
          {
              icon: require('~/assets/img/socials/vk.svg'),
              link: '#',
          },
          {
              icon: require('~/assets/img/socials/vk.svg'),
              link: '#',
          },
          {
              icon: require('~/assets/img/socials/vk.svg'),
              link: '#',
          },
          {
              icon: require('~/assets/img/socials/vk.svg'),
              link: '#',
          }
      ]
  })
}
</script>

<style lang="scss" scoped>
.section {
    overflow: visible;
    @media all and (max-width: 1280px) {
        flex-direction: column-reverse;
    }
    &__footer {
        order: -1;
    }
    &__title {
        font-size: rem(40);
    }
    &__content {
        margin-bottom: rem(31);
        @media all and (max-width: 1280px) {
            margin-bottom: 30px;
        }
    }
    &__text {
        margin-bottom: 0;
        @media all and (max-width: 1280px) {
            margin-bottom: 0;
        }
    }
    &__left {
        padding-left: rem(107);
        padding-right: rem(71);
        padding-top: rem(175);
        padding-bottom: rem(121);
        width: calc(#{rem(900)} - #{rem(133)});
        background: none;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        @media all and (max-width: 1440px) {
            padding: 178px 70px 120px 0;
            width: calc(100% - 778px);
        }
        @media all and (max-width: 1280px) {
            width: 100%;
            padding: 80px 20px;
        }
        @media all and (max-width: 840px) {
            height: auto !important;
        }
    }
    &__left &__title {
        margin-bottom: rem(30);
        @media all and (max-width: 1440px) {
            margin-bottom: 20px;
        }
        @media all and (max-width: 1280px) {
            margin-bottom: 30px;
        }
    }
    &__left_top {
        margin-bottom: rem(48);
        @media all and (max-width: 1440px) {
            margin-bottom: 20px;
        }
        @media all and (max-width: 1280px) {
            margin-bottom: 20px;
        }
    }
    &__left_form {
        width: 100%;
    }
    &__input {
        margin-bottom: rem(20);
        @media all and (max-width: 1280px) {
            margin-bottom: 10px;
        }
    }
    &__textarea {
        margin-bottom: rem(20);
        @media all and (max-width: 1280px) {
            margin-bottom: 20px;
        }
    }
    &__button {
        width: 100%;
    }
    &__right {
        padding-right: rem(240);
        padding-left: rem(71);
        padding-top: rem(175);
        padding-bottom: rem(121);
        background: #2E5599;
        width: calc(100% - #{rem(900)} + #{rem(133)});
        flex-direction: column;
        
        @media all and (max-width: 1440px) {
            padding: 178px 150px 120px 70px !important;
            width: 778px;
        }
        @media all and (max-width: 1280px) {
            width: 100% !important;
            padding: 80px 20px !important;
        }
    }
    &__right &__title {
        color: #fff;
        margin-bottom: rem(30);
        @media all and (max-width: 1280px) {
            margin-bottom: 30px;
        }
    }
    &__contacts {
        display: flex;
        align-items: flex-start;
        margin-bottom: rem(54);
        @media all and (max-width: 1280px) {
            margin-bottom: 60px;
        }
    }
    &__contacts_side {
        width: rem(240);
        @media all and (max-width: 1280px) {
            width: auto;
        }
        &:not(:last-child) {
            margin-right: rem(143);
            @media all and (max-width: 1280px) {
                margin-right: 130px;
            }
        }
    }
    &__contact {
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: rem(30);
        line-height: 140%;
        color: #FFFFFF;
        display: block;
        margin-bottom: rem(10);
        @media all and (max-width: 1280px) {
            font-size: 20px;
            margin-bottom: 20px;
        }
    }
    &__contacts_worktime {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: 140%;
        color: #FFFFFF;
        @media all and (max-width: 1280px) {
            font-size: 16px;
        }
    }
    &__contacts_info {
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        line-height: 140%;
        color: #FFFFFF;
        @media all and (max-width: 1280px) {
            font-size: 16px;
        }
    }
    &__socials {
        display: flex;
        align-items: center;
    }
    &__social {
        width: rem(50);
        font-size: 0;
        display: block;
        transition: all .3s ease;
        @media all and (max-width: 1280px) {
            width: 40px;
        }
        &:not(:last-child) {
            margin-right: rem(20);
            @media all and (max-width: 1280px) {
                margin-right: 30px;
            }
        }
        &:hover {
            mix-blend-mode: overlay;
        }
    }
    &__map {
        flex: 1 1 auto;
        width: 100%;
        @media all and (max-width: 1280px) {
            height: 370px;
        }
    }
    &__popup {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        left: rem(-133);
        right: 0;
        bottom: -100%;
        z-index: 3;
        background: #172242;
        padding: rem(20) rem(50);
        transition: 1s bottom 0.5s ease;
    }
    &__popup_left {
        font-style: normal;
        font-weight: 600;
        font-size: rem(20);
        line-height: 140%;
        color: #FFFFFF;
    }
    &__popup_right {
        
        ul {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            list-style: none;
            li {
                &:not(:last-child) {
                    margin-right: rem(40);
                }
            }
            a {
                font-style: normal;
                font-weight: 600;
                font-size: rem(16);
                line-height: 140%;
                color: #FFFFFF;
                text-decoration: none;
                position: relative;
                &:after  {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 100%;
                    bottom: rem(-5);
                    height: rem(2);
                    background: #FF0040;
                    transition: all .3s ease;
                }
                &:hover:after {
                    right: 0;
                }
            }
        }
    }
    &.isActive &__popup {
        bottom: 0;
    }
}
</style>