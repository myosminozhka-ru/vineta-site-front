<template>
    <nav class="footer__menu">
        <ul>
            <li>
                <nuxt-link :to="{name: 'index'}">О компании</nuxt-link>
            </li>
                <li>
                    <nuxt-link :to="{name: 'index'}">Каталог</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{name: 'index'}">Новости</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{name: 'index'}">Вакансии</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{name: 'index'}">Контакты</nuxt-link>
                </li>
        </ul>
        <ul>
            <li>
                <nuxt-link :to="{name: 'index'}">Заказчикам</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{name: 'index'}">Скачать каталог</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{name: 'index'}">Скачать презентацию</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{name: 'index'}">Катера и лодки</nuxt-link>
            </li>
        </ul>
        <ul>
            <li>
                <nuxt-link :to="{name: 'index'}">Контакты</nuxt-link>
            </li>
            <li>
                <span>620062, г. Екатеринбург, пр. Ленина, д. 101, стр.2, офис 500</span>
            </li>
            <li>
                <a href="tel:78124935048">+7(812)493-50-48</a>
            </li>
            <li>
                <a href="mailto:info@vineta.ru">info@vineta.ru</a>
            </li>
            <li>
                <span>Пн-Пт с 9:00 до 18:00</span>
            </li>
            <div class="footer__top_socials hide_on_desktop">
                <a :href="social.link" target="_blank" class="footer__top_social" v-for="social in socials" :key="social.index">
                    <img :src="social.icon" width="100%" alt="">
                </a>
            </div>
        </ul>
    </nav>
</template>

<script>
export default {
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
          }
      ]
    }),
}
</script>

<style lang="scss" scoped>
.footer {
    &__top_socials {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    &__top_social {
        font-size: 0;
        display: block;
        @media all and (max-width: 1024px) {
            width: 30px;
        }
        &:not(:last-child) {
            @media all and (max-width: 1024px) {
                margin-right: 10px;
            }
        }
    }
    &__menu {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        ul {
            margin: 0;
            padding: 0;
            &:not(:last-child) {
                margin-right: vw(160);
                @media all and (max-width: 1024px) {
                    margin-right: 86px;
                }
            }
            li {
                display: block;
                &:not(:last-child) {
                    margin-bottom: vw(15);
                    @media all and (max-width: 1024px) {
                        margin-bottom: 15px;
                    }
                }
            }
            a, span {
                text-decoration: none;
                font-style: normal;
                font-weight: 400;
                font-size: vw(16);
                line-height: 140%;
                color: #D7DCE1;
                @media all and (max-width: 1024px) {
                    font-size: 16px;
                }
                
            }
            li:first-child {
                margin-bottom: vw(20);
                @media all and (max-width: 1024px) {
                    margin-bottom: 20px;
                }
                a, span {
                    font-style: normal;
                    font-weight: 600;
                    font-size: vw(24);
                    line-height: 140%;
                    color: #FFFFFF;
                    @media all and (max-width: 1024px) {
                        font-size: 18px;
                    }
                }
            }
        }
    }
}
</style>