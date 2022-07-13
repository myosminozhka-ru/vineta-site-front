<template>
    <div class="header__info">
        <nuxt-link class="header__button header__button--search hide_on_mobile" :to="{ name: 'index' }">
            <svg width="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="30" rx="15" fill="#2E5599"/>
                <path d="M21.8073 20.1936L19.3339 17.7403C20.294 16.5432 20.7589 15.0238 20.6331 13.4945C20.5073 11.9651 19.8004 10.5421 18.6576 9.51802C17.5148 8.49393 16.0231 7.9466 14.4892 7.98858C12.9553 8.03055 11.4957 8.65864 10.4107 9.74369C9.32563 10.8287 8.69754 12.2883 8.65557 13.8222C8.61359 15.3561 9.16092 16.8478 10.185 17.9906C11.2091 19.1334 12.6321 19.8403 14.1615 19.9661C15.6908 20.0919 17.2102 19.627 18.4073 18.6669L20.8606 21.1203C20.9226 21.1827 20.9963 21.2323 21.0775 21.2662C21.1588 21.3 21.2459 21.3175 21.3339 21.3175C21.4219 21.3175 21.5091 21.3 21.5903 21.2662C21.6715 21.2323 21.7453 21.1827 21.8073 21.1203C21.9274 20.996 21.9946 20.8298 21.9946 20.6569C21.9946 20.484 21.9274 20.3179 21.8073 20.1936ZM14.6673 18.6669C13.7443 18.6669 12.842 18.3932 12.0746 17.8805C11.3072 17.3677 10.709 16.6388 10.3558 15.7861C10.0026 14.9334 9.91019 13.9951 10.0903 13.0898C10.2703 12.1846 10.7148 11.3531 11.3674 10.7004C12.0201 10.0478 12.8516 9.60333 13.7568 9.42326C14.6621 9.2432 15.6004 9.33562 16.4531 9.68882C17.3058 10.042 18.0347 10.6402 18.5474 11.4076C19.0602 12.175 19.3339 13.0773 19.3339 14.0003C19.3339 15.2379 18.8423 16.4249 17.9671 17.3001C17.0919 18.1753 15.9049 18.6669 14.6673 18.6669Z" fill="white"/>
            </svg>

        </nuxt-link>
        <nuxt-link class="header__button header__button--favorites hide_on_mobile" :to="{ name: 'index' }">
            <svg width="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="15" fill="#2E5599"/>
                <path d="M18.666 8.00031H10.666C10.1356 8.00031 9.62687 8.21102 9.2518 8.58609C8.87673 8.96116 8.66602 9.46987 8.66602 10.0003V17.3336C8.66602 17.8641 8.87673 18.3728 9.2518 18.7479C9.62687 19.1229 10.1356 19.3336 10.666 19.3336H12.3927L14.1927 21.1403C14.255 21.2021 14.3289 21.251 14.4101 21.2842C14.4913 21.3173 14.5783 21.3341 14.666 21.3336C14.8249 21.3337 14.9786 21.2769 15.0993 21.1736L17.246 19.3336H18.666C19.1964 19.3336 19.7052 19.1229 20.0802 18.7479C20.4553 18.3728 20.666 17.8641 20.666 17.3336V10.0003C20.666 9.46987 20.4553 8.96116 20.0802 8.58609C19.7052 8.21102 19.1964 8.00031 18.666 8.00031ZM19.3327 17.3336C19.3327 17.5105 19.2624 17.68 19.1374 17.805C19.0124 17.9301 18.8428 18.0003 18.666 18.0003H16.9993C16.8405 18.0003 16.6868 18.057 16.566 18.1603L14.6993 19.7603L13.1393 18.1936C13.0771 18.1319 13.0032 18.083 12.922 18.0498C12.8407 18.0166 12.7538 17.9998 12.666 18.0003H10.666C10.4892 18.0003 10.3196 17.9301 10.1946 17.805C10.0696 17.68 9.99935 17.5105 9.99935 17.3336V10.0003C9.99935 9.82349 10.0696 9.65393 10.1946 9.5289C10.3196 9.40388 10.4892 9.33364 10.666 9.33364H18.666C18.8428 9.33364 19.0124 9.40388 19.1374 9.5289C19.2624 9.65393 19.3327 9.82349 19.3327 10.0003V17.3336Z" fill="white"/>
            </svg>

            <div v-if="favoritesCount" class="header__count">
                {{ favoritesCount }}
            </div>
        </nuxt-link>
        <div class="header__langs hide_on_mobile">
            <nuxt-link :to="{ name: 'index' }" class="isActive">Ру</nuxt-link>
            <div class="delim">/</div>
            <nuxt-link :to="{ name: 'index' }">En</nuxt-link>
        </div>
        <a href="tel:+78124935048" class="header__phone">+7 (812) 493-50-48</a>
        <div class="header__button header__button--phone hide_off_mobile">
            <object :data="require(`~/assets/img/phone.svg`)" width="100%" />
        </div>
    </div>
</template>

<script>
export default {
    name: "OsmInfo",
    data: () => ({
        favoritesCount: 4,
    })
}
</script>

<style lang="scss" scoped>
.header {
    &__info {
        display: flex;
        align-items: center;
        @media all and (max-width: 840px) {
            order: 2;
            margin-top: 20px;
            border-top: 1px solid #D7DCE1;
            width: 100%;
            padding-top: 12px;
            padding-bottom: 23px;
            justify-content: space-between;
        }
    }
    &__button {
        display: block;
        font-size: 0;
        width: rem(30);
        margin-right: rem(40);
        position: relative;
        @media all and (max-width: 1280px) {
            width: 30px;
            margin-right: 30px;
        }
        @media all and (max-width: 840px) {
            margin-right: 0;
        }
        &--favorites {
            @media all and (max-width: 840px) {
                order: -1;
            }
        }
        svg rect {
            transition: all .3s ease;
        }
        &:hover {
            svg rect {
                fill: #32D2E8;
            }
        }
        &:active {
            svg rect {
                fill: #128D9E;
            }
        }
    }
    &__count {
        position: absolute;
        top: rem(-5);
        left: rem(-5);
        width: rem(19);
        height: rem(19);
        font-size: rem(14);
        line-height: rem(19);
        font-style: normal;
        font-weight: 400;
        color: #FFFFFF;
        background: #FF004D;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        text-align: center;
        border-radius: 50%;
        @media all and (max-width: 1280px) {
            top: -5px;
            left: -5px;
            width: 19px;
            height: 19px;
            font-size: 14px;
            line-height: 19px;
        }
    }
    &__langs {
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: rem(18);
        margin-right: rem(55);
        line-height: 140%;
        color: #D7DCE1;
        @media all and (max-width: 1440px) {
            margin-right: 60px;
        }
        @media all and (max-width: 1280px) {
            font-size: 18px;
            margin-right: 31px;
        }
        .delim {
            margin: 0 rem(8);
        }
        a {
            text-decoration: none;
            font-style: inherit;
            font-weight: inherit;
            font-size: inherit;
            line-height: inherit;
            color: inherit;
            &.isActive {
                font-weight: 600;
            }
        }
    }
    &__phone {
        font-style: normal;
        font-weight: 600;
        font-size: rem(20);
        line-height: 140%;
        color: #D7DCE1;
        text-decoration: none;
        @media all and (max-width: 1280px) {
            font-size: 20px;
        }
        @media all and (max-width: 530px) {
            font-size: 18px;
        }
    }
    object {
        pointer-events: none;
    }
}
</style>