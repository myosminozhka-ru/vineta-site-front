<template>
    <div class="wrapper">
        <osm-header />
        <!-- <pre style="font-size: 15rem;">
          {{ getContacts }}
        </pre> -->
        <div class="contacts" v-if="getContacts">
            <div class="header_padding">
                <osm-breadcrumbs />
                <div class="contacts__top">
                    <div class="contacts__left">
                        <div class="contacts__title">{{ getContacts[0].NAME }}</div>
                        <div class="contacts__items">
                          <div class="contacts__item" v-for="contact in getContacts[0].PROPERIES" :key="contact.index">
                            <template v-if="contact.CODE === 'VK' || contact.CODE === 'INSTAGRAM' || contact.CODE === 'TELEGRAM' || contact.CODE === 'FACEBOOK' || contact.CODE === 'TWITTER' && contact.CODE !== 'GEO'">                              
                              <a :href="contact.VALUE" class="contacts__item_in">
                                <div class="icon">
                                    <img :src="require('~/assets/img/contacts/map.svg')" width="100%" alt="">
                                </div>
                                <div class="text">{{ contact.NAME }}</div>
                              </a>
                            </template>
                            <template v-else-if="contact.CODE === 'PHONE'">                              
                              <a :href="`tel:${contact.VALUE}`" class="contacts__item_in">
                                <div class="icon">
                                    <img :src="require('~/assets/img/contacts/map.svg')" width="100%" alt="">
                                </div>
                                <div class="text">{{ contact.VALUE }}</div>
                              </a>
                            </template>
                            <template v-else-if="contact.CODE === 'EMAIL'">                              
                              <a :href="`mailto:${contact.VALUE}`" class="contacts__item_in">
                                <div class="icon">
                                    <img :src="require('~/assets/img/contacts/map.svg')" width="100%" alt="">
                                </div>
                                <div class="text">{{ contact.VALUE }}</div>
                              </a>
                            </template>
                            <template v-else>
                              <div class="contacts__item_in">
                                  <div class="icon">
                                      <img :src="require('~/assets/img/contacts/map.svg')" width="100%" alt="">
                                  </div>
                                  <div class="text">{{ contact.VALUE }}</div>
                              </div>
                            </template>
                            <!-- <a href="mailto:info@vineta.ru" class="contacts__item_in">
                                <div class="icon">
                                    <img :src="require('~/assets/img/contacts/map.svg')" width="100%" alt="">
                                </div>
                                <div class="text">info@vineta.ru</div>
                            </a> -->
                          </div>
                        </div>
                        <osm-button class="contacts__button">
                            <div class="contacts__button_in">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 28" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.44661 19.2741L9.44661 0H11.5207L11.5207 19.2741L16.35 14.4448C16.755 14.0398 17.4116 14.0398 17.8166 14.4448C18.2216 14.8498 18.2216 15.5064 17.8166 15.9114L11.2169 22.5111C10.812 22.9161 10.1553 22.9161 9.75036 22.5111L3.15069 15.9114C2.7457 15.5064 2.7457 14.8498 3.15069 14.4448C3.55568 14.0398 4.2123 14.0398 4.61728 14.4448L9.44661 19.2741ZM20.854 26.963C20.854 27.5357 20.3897 28 19.817 28H1.15032C0.577579 28 0.113281 27.5357 0.113281 26.963V26.963C0.113281 26.3902 0.577579 25.9259 1.15032 25.9259H19.817C20.3897 25.9259 20.854 26.3902 20.854 26.963V26.963Z" fill="white"/>
                                    </svg>
                                </div>
                                <div class="text">Скачать реквизиты</div>
                            </div>
                        </osm-button>
                    </div>
                    <div class="contacts__right">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab7cb646785abc136714c4d0b89eb3d25127d58bd8423a240b26631d7b05a103d&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
          <osm-contacts-slider :gallery="getVacancies.gallery" />
        </div>
        <section class="fiveth">
          <div class="fiveth__title">Руководство</div>
          <div class="fiveth__items">
            <div class="fiveth__item" v-for="item in getAbout.peoples" :key="item.index">
              <div class="avatar">
                <div class="avatar__in">
                  <img :src="$vareibles.remote + item.PREVIEW_PICTURE" alt="">
                </div>
              </div>
              <div class="name">{{ item.NAME }}</div>
              <div v-if="item.PROPERIES.filter(elem => elem.CODE === 'DOLJNOST').length" class="position">{{ item.PROPERIES.filter(elem => elem.CODE === 'DOLJNOST')[0].VALUE }}</div>
              <a v-if="item.PROPERIES.filter(elem => elem.CODE === 'PHONE').length" :href="`tel:${item.PROPERIES.filter(elem => elem.CODE === 'PHONE')[0].VALUE}`" class="phone">{{ item.PROPERIES.filter(elem => elem.CODE === 'PHONE')[0].VALUE }}</a>
              <a v-if="item.PROPERIES.filter(elem => elem.CODE === 'EMAIL').length" :href="`mailto:${item.PROPERIES.filter(elem => elem.CODE === 'EMAIL')[0].VALUE}`" class="email">{{ item.PROPERIES.filter(elem => elem.CODE === 'EMAIL')[0].VALUE }}</a>
            </div>
          </div>
        </section>
      <osm-footer />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "LicensesPage",
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmButton: () => import('~/components/global/OsmButton.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
        OsmContactsSlider: () => import('~/components/contacts/OsmSlider.vue'),
    },
    computed: {
      ...mapGetters(['getContacts']),
      ...mapGetters(['getVacancies']),
      ...mapGetters(['getAbout']),
    }
}
</script>

<style lang="scss" scoped>
.contacts {
    padding: rem(30) rem(240) rem(120);
    @media all and (max-width: 840px) {
        overflow: hidden;
    }
    @media all and (max-width: 1440px) {
        padding-right: 150px;
        padding-left: 150px;
    }
    @media all and (max-width: 1280px) {
        padding: 30px 20px;
    }
    &__top {
        display: flex;
        align-items: center;
        margin-bottom: rem(120);
        @media all and (max-width: 840px) {
            flex-direction: column;
        }
    }
    &__title {
        margin-bottom: rem(30);
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        line-height: 140%;
        color: #172242;
        @media all and (max-width: 1280px) {
            font-size: 30px;
            margin-bottom: 30px;
        }
    }
    &__left {
        width: calc(100% - #{rem(852)});
        @media all and (max-width: 1280px) {
            width: 50%;
        }
        @media all and (max-width: 840px) {
            width: 100%;
        }
    }
    &__right {
        width: rem(832);
        margin-left: rem(20);
        @media all and (max-width: 1280px) {
            width: 50%;
            margin-left: 0;
        }
        @media all and (max-width: 840px) {
            margin-top: 20px;
            width: 100%;
        }
    }
    &__item {
      &:not(:last-child) {
        margin-bottom: rem(20);
        @media all and (max-width: 1280px) {
            margin-bottom: 20px;
        }
      }
    }
    &__item_in {
        display: flex;
        align-items: center;
        text-decoration: none;
        
        .icon {
            width: rem(30);
            margin-right: rem(20);
            font-size: 0;
            @media all and (max-width: 1280px) {
                width: 30px;
                margin-right: 20px;
            }
        }
        .text {
            width: calc(100% - #{rem(50)});
            font-style: normal;
            font-weight: 400;
            font-size: rem(16);
            line-height: 140%;
            color: #172242;
            @media all and (max-width: 1280px) {
                font-size: 16px;
            }
        }
    }
    &__button {
        margin-top: rem(30);
        @media all and (max-width: 1280px) {
            width: 300px;
            margin-top: 30px;
        }
        @media all and (max-width: 840px) {
            width: 100%;
        }
    }
    &__button_in {
        display: flex;
        align-items: center;
        .icon {
            width: rem(20);
            height: rem(28);
            margin-right: rem(25);
            font-size: 0;
            @media all and (max-width: 1280px) {
                width: 20px;
                height: 28px;
                margin-right: 25px;
            }
        }
    }
}

.fiveth {
    padding: 0 rem(240) rem(120);
    @media all and (max-width: 1440px) {
        padding-right: 150px;
        padding-left: 150px;
    }
    @media all and (max-width: 1280px) {
      padding: 80px 20px;
    }
    @media all and (max-width: 840px) {
      padding: 60px 15px;
    }
    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: rem(40);
      margin-bottom: rem(30);
      line-height: 140%;
      color: #172242;
      @media all and (max-width: 1280px) {
        font-size: 30px;
        margin-bottom: 30px;
      }
      @media all and (max-width: 840px) {}
    }
    &__items {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__item {
      width: calc(100% / 4 - #{rem(60)} / 4);
      @media all and (max-width: 1280px) {}
      @media all and (max-width: 840px) {
        width: calc(100% / 2 - 10px);
        &:nth-child(n+3) {
          margin-top: 20px;
        }
      }
      .avatar {
        position: relative;
        margin-bottom: rem(20);
      }
      .avatar__in {
        padding-top: 95%;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 0;
        }
      }
      .name {
        font-style: normal;
        font-weight: 600;
        font-size: rem(20);
        margin-bottom: rem(10);
        line-height: 140%;
        color: #172242;
        @media all and (max-width: 1280px) {
          font-size: 20px;
          margin-bottom: 10px;
        }
        @media all and (max-width: 840px) {
          font-size: 14px;
        }
      }
      .position {
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        margin-bottom: rem(10);
        line-height: 140%;
        color: #555F76;
        @media all and (max-width: 1280px) {
          font-size: 16px;
          margin-bottom: 10px;
        }
        @media all and (max-width: 840px) {
          font-size: 12px;
        }
      }
      .phone {
        margin-bottom: 10px;
        @media all and (max-width: 1280px) {
          margin-bottom: 10px;
        }
      }
      .phone,
      .email {
        display: block;
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        line-height: 140%;
        color: #FF0040;
        @media all and (max-width: 1280px) {
          font-size: 16px;
        }
        @media all and (max-width: 840px) {
          font-size: 12px;
        }
      }
    }
  }
</style>