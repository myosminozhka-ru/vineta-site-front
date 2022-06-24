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
                    <li><a href="#">Политика конфидециальности</a></li>
                    <li><a href="#">Пользовательское соглашение</a></li>
                    <li><a href="#">Карта сайта</a></li>
                </ul>
            </div>
        </div>
    </footer>   
</template>

<script>
export default {
    components: {
        OsmLogoFooter: () => import('~/components/footer/OsmLogoFooter.vue'),
        OsmFooterMenu: () => import('~/components/footer/OsmFooterMenu.vue'),
        OsmUp: () => import('~/components/global/OsmUp.vue'),
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
          }
      ]
    }),
}
</script>

<style lang="scss">
.footer {
    @media all and (max-width: 1024px) {
        width: 100%;
    }
    &__top {
        background: #2E5599;
        padding: vw(70) vw(243) vw(70) vw(50);
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media all and (max-width: 1024px) {
            padding: 60px 20px;
            flex-direction: column;
        }
    }
    &__top_left {
        width: vw(312);
        @media all and (max-width: 1024px) {
            width: 155px;
            margin-bottom: 51px;
        }
        @media all and (max-width: 1024px) {
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
        width: vw(30);
        &:not(:last-child) {
            margin-right: vw(10);
        }
    }
    &__top_right {
        @media all and (max-width: 1024px) {
            width: 100%;
        }
    }
    &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #172242;
        padding: vw(20) vw(50);
        transition: 1s bottom 0.5s ease;
        @media all and (max-width: 1024px) {
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
        font-size: vw(20);
        line-height: 140%;
        color: #FFFFFF;
        @media all and (max-width: 1024px) {
            font-size: 18px;
            width: 50%;
        }
        @media all and (max-width: 840px) {
            width: 100%;
            margin-bottom: 19px;
        }
    }
    &__bottom_right {
        @media all and (max-width: 1024px) {
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
            @media all and (max-width: 1024px) {
                flex-direction: column;
                align-items: flex-start;
            }
            li {
                &:not(:last-child) {
                    margin-right: vw(40);
                    @media all and (max-width: 1024px) {
                        margin-right: 0;
                        margin-bottom: 15px;
                    }
                }
            }
            a {
                font-style: normal;
                font-weight: 600;
                font-size: vw(16);
                line-height: 140%;
                color: #FFFFFF;
                text-decoration: none;
                @media all and (max-width: 1024px) {
                    font-size: 16px;
                    font-weight: 400;
                }
            }
        }
    }
}
</style>