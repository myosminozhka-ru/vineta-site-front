<template>
    <footer class="footer">
        <div class="footer__top">
            <osm-up />
            <div class="footer__top_left">
               <osm-logo-footer />
               <div class="footer__top_socials">
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

<style lang="scss" scoped>
.footer {
    &__top {
        background: #2E5599;
        padding: vw(70) vw(243) vw(70) vw(50);
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    &__top_left {
        width: vw(312);
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
    &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #172242;
        padding: vw(20) vw(50);
        transition: 1s bottom 0.5s ease;
    }
    &__bottom_left {
        font-style: normal;
        font-weight: 600;
        font-size: vw(20);
        line-height: 140%;
        color: #FFFFFF;
    }
    &__bottom_right {
        
        ul {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            list-style: none;
            li {
                &:not(:last-child) {
                    margin-right: vw(40);
                }
            }
            a {
                font-style: normal;
                font-weight: 600;
                font-size: vw(16);
                line-height: 140%;
                color: #FFFFFF;
                text-decoration: none;
            }
        }
    }
}
</style>