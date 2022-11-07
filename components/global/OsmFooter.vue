<template>
  <footer class="footer">
    <div class="footer__top">
      <osm-up />
      <div class="footer__top_left">
        <osm-logo-footer />
        <div v-if="false" class="footer__top_socials hide_on_tablet">
          <a v-for="social in socials" :key="social.index" :href="social.link" target="_blank" class="footer__top_social">
            <img :src="social.icon" width="100%" alt="" />
          </a>
        </div>
      </div>
      <div class="footer__top_right">
        <osm-footer-menu />
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom_left">ООО “Винета”, 2012-2022</div>
      <!-- <pre>
                {{ getDownloads }}
            </pre> -->
      <template v-if="getDownloads['politika-konfedentsialnosti']">
        <div v-if="'PROPERIES' in getDownloads['politika-konfedentsialnosti']" class="footer__bottom_right">
          <ul>
            <li><a :href="$vareibles.remote + getDownloads['politika-konfedentsialnosti'].PROPERIES[0].VALUE.SRC">Политика конфиденциальности</a></li>
            <!-- <li><a href="#">Пользовательское соглашение</a></li>
                        <li><a href="#">Карта сайта</a></li> -->
          </ul>
        </div>
      </template>
      <a href="https://myosminozhka.ru/" target="_blank" class="footer__popup_link">
        <img src="~/assets/img/osm_logo.svg" width="100%" alt="" />
      </a>
    </div>
    <div class="yandex-metrika">
      <!-- Yandex.Metrika informer -->

      <!-- Yandex.Metrika counter -->
      <script type="text/javascript">
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js";, "ym");

        ym(13997074, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
        });
      </script>
      <noscript
        ><div><img src="https://mc.yandex.ru/watch/13997074" ; style="position: absolute; left: -9999px;" alt="" /></div
      ></noscript>
      <!-- /Yandex.Metrika counter -->
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
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
      },
    ],
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
    background: #2e5599;
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
    margin-right: rem(243);
    @media all and (max-width: 1440px) {
      width: 155px;
      margin-right: rem(243);
    }
    @media all and (max-width: 1280px) {
      width: 155px;
      margin-bottom: 51px;
      margin-right: 0;
    }
    @media all and (max-width: 1280px) {
      margin-bottom: 30px;
      margin-right: 0;
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
      // align-items: flex-start;
    }
    @media all and (max-width: 840px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__bottom_left {
    font-style: normal;
    font-weight: 600;
    font-size: rem(20);
    line-height: 140%;
    color: #ffffff;
    @media all and (max-width: 1280px) {
      font-size: 18px;
      // width: 50%;
    }
    @media all and (max-width: 840px) {
      width: 100%;
      margin-bottom: 19px;
    }
  }
  &__bottom_right {
    @media all and (max-width: 1280px) {
      // width: 50%;
    }
    @media all and (max-width: 840px) {
      width: 100%;
      margin-bottom: 19px;
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
        color: #ffffff;
        text-decoration: none;
        position: relative;
        transition: all 0.3s ease;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 100%;
          bottom: rem(-5);
          height: rem(2);
          background: #fff;
          transition: all 0.3s ease;
        }
        &:hover {
          color: #fff;
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
  &__popup_link {
    display: block;
    font-size: 0;
    width: 169px;
  }
}
</style>
