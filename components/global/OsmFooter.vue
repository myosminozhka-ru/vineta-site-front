<template>
    <footer class="footer">
        <div class="footer__top">
            <osm-up />
            <div class="footer__top_left">
               <osm-logo-footer />
               <div class="footer__top_socials hide_on_tablet">
                    <a :href="social.link" target="_blank" class="footer__top_social" v-for="social in socials" :key="social.index">
                        <img :src="social.icon" width="100%" alt="">
                    </a>
               </div>
            </div>
            <div class="footer__top_right">
                <osm-footer-menu />
            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom_left">ООО “Винета”, 2012-2022</div>
            <div class="footer__bottom_right">
                <ul>
                    <li v-if="getDownloads[1]"><a :href="$vareibles.remote + getDownloads[1].PROPERIES[0].VALUE.SRC">Политика конфидециальности</a></li>
                    <!-- <li><a href="#">Пользовательское соглашение</a></li>
                    <li><a href="#">Карта сайта</a></li> -->
                </ul>
            </div>
        </div>
    </footer>   
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    components: {
        OsmLogoFooter: () => import('~/components/footer/OsmLogoFooter.vue'),
        OsmFooterMenu: () => import('~/components/footer/OsmFooterMenu.vue'),
        OsmUp: () => import('~/components/global/OsmUp.vue'),
    },
    computed: {
        ...mapGetters(['getDownloads']),
    },
    mounted() {
        // console.log(this.getDownloads[1]);
    },
    data: () => ({
        socials: [
            {
                icon: require('~/assets/img/socials/vk.svg'),
                link: '#',
            },
            {
                icon: require('~/assets/img/socials/telegram.svg'),
                link: '#',
            },
            {
                icon: require('~/assets/img/socials/twitter.svg'),
                link: '#',
            }
        ]
    }),
}
</script>

<style lang="scss">
.footer {
    @media print {
        display: none;
    }
    @media all and (max-width: 1280px) {
        width: 100%;
    }
    &__top {
        background: #2E5599;
        padding: rem(70) rem(243) rem(70) rem(50);
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media all and (max-width: 1280px) {
            padding: 60px 20px;
            flex-direction: column;
        }
    }
    &__top_left {
        width: rem(312);
        @media all and (max-width: 1440px) {
            width: 155px;
        }
        @media all and (max-width: 1280px) {
            width: 155px;
            margin-bottom: 51px;
        }
        @media all and (max-width: 1280px) {
            margin-bottom: 30px;
        }
    }
    &__top_socials {
        display: flex;
        align-items: center;
        font-size: 0;
    }
    &__top_social {
        text-decoration: none;
        width: rem(30);
        &:not(:last-child) {
            margin-right: rem(10);
        }
        &:hover {
            mix-blend-mode: overlay;
        }
    }
    &__top_right {
        @media all and (max-width: 1280px) {
            width: 100%;
        }
    }
    &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #172242;
        padding: rem(20) rem(50);
        transition: 1s bottom 0.5s ease;
        @media all and (max-width: 1280px) {
            padding: 30px 20px;
            align-items: flex-start;
        }
        @media all and (max-width: 840px) {
            flex-direction: column;
        }
    }
    &__bottom_left {
        font-style: normal;
        font-weight: 600;
        font-size: rem(20);
        line-height: 140%;
        color: #FFFFFF;
        @media all and (max-width: 1280px) {
            font-size: 18px;
            width: 50%;
        }
        @media all and (max-width: 840px) {
            width: 100%;
            margin-bottom: 19px;
        }
    }
    &__bottom_right {
        @media all and (max-width: 1280px) {
            width: 50%;
        }
        @media all and (max-width: 840px) {
            width: 100%;
        }
        ul {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            list-style: none;
            @media all and (max-width: 1280px) {
                flex-direction: column;
                align-items: flex-start;
            }
            li {
                &:not(:last-child) {
                    margin-right: rem(40);
                    @media all and (max-width: 1280px) {
                        margin-right: 0;
                        margin-bottom: 15px;
                    }
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
                transition: all .3s ease;
                &:after  {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 100%;
                    bottom: rem(-5);
                    height: rem(2);
                    background: #32D2E8;
                    transition: all .3s ease;
                }
                &:hover {
                    color: #32D2E8;
                }
                &:hover:after {
                    right: 0;
                }
                @media all and (max-width: 1280px) {
                    font-size: 16px;
                    font-weight: 400;
                }
                
            }
        }
    }
}
</style>