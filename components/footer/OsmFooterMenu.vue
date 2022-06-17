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
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.footer {
    &__menu {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        ul {
            margin: 0;
            padding: 0;
            &:not(:last-child) {
                margin-right: vw(160);
            }
            li {
                display: block;
                &:not(:last-child) {
                    margin-bottom: vw(15);
                }
            }
            a, span {
                text-decoration: none;
                font-style: normal;
                font-weight: 400;
                font-size: vw(16);
                line-height: 140%;
                color: #D7DCE1;
            }
            li:first-child {
                margin-bottom: vw(20);
                a, span {
                    font-style: normal;
                    font-weight: 600;
                    font-size: vw(24);
                    line-height: 140%;
                    color: #FFFFFF;
                }
            }
        }
    }
}
</style>