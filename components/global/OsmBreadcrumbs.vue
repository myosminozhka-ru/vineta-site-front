<template>
    <ul class="breadcrumbs" :class="{'white': white}">
        <div class="back_button hide_off_mobile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" fill="#FF0040"/>
                <path d="M14.4004 7.2002L10.2004 12.0002L14.4004 16.8002" stroke="white" stroke-width="2"/>
            </svg>
        </div>
        <li class="breadcrumbs__item" v-for="(br, key) in getBreadcrumbs" :key="br.index" :class="{'hide_on_mobile': key > 0}">
            <template v-if="br.isLink">
                <nuxt-link :to="{name: br.link}">{{ br.name }}</nuxt-link>
            </template>
            <template v-else>
                <span>{{ br.name }}</span>
            </template>
            <span v-if="key !== getBreadcrumbs.length - 1" class="breadcrumbs__item--delim hide_on_mobile">/</span>
        </li>
        <!-- <li class="breadcrumbs__item breadcrumbs__item--delim hide_on_mobile">
            
        </li> 
        <li class="breadcrumbs__item hideOffMobile">
            <nuxt-link :to="{name: getBreadcrumbs[0].link}">{{ getBreadcrumbs[0].name }}</nuxt-link>
        </li> -->
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: {
        white: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapGetters(['getBreadcrumbs']),
    }
}
</script>

<style lang="scss" scoped>
.back_button {
    font-size: 0;
    cursor: pointer;
}
.breadcrumbs {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none; 
    margin-bottom: rem(30);
    @media all and (max-width: 1440px) {
        margin-bottom: 35px; 
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 43px; 
    }
    @media all and (max-width: 840px) {
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #D7DCE1;
        margin-bottom: 29px;
    }
    &__item {
        a, span {
            text-decoration: none;
            font-style: normal;
            font-weight: 400;
            font-size: rem(14);
            line-height: 140%;
            color: #555F76;
            @media all and (max-width: 1280px) {
                font-size: 14px;
            }
        }
        span {
            color: #2E5599;
        }
        @media all and (max-width: 840px) {
            margin-left: 15px;
        }
        a {
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
            &:hover {
                color: #FF0040;
                &:after {
                    right: 0;
                }
            }
        }
    }
    &__item--delim {
        margin: 0 rem(10);
        @media all and (max-width: 1280px) {
            margin: 0 10px;
        }
    }
    &.white {
        a, span {
            color: #fff !important;
        }
    }
}
</style>