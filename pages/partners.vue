<template>
    <div class="wrapper">
        <osm-header />
        <div class="partners">
            <!-- <pre style="font-size: 15rem;">{{ getPartners }}</pre> -->
            <div class="header_padding" v-if="getPartners">
                <osm-breadcrumbs />
                <div class="partners__title">Основные заказчики и партнёры</div>
                <div class="partners__items">
                    <div v-for="item in getPartners" :key="item.index">
                        <div class="partners__item" v-if="'PROPERIES' in item">
                            <!-- <pre>{{ item }}</pre> -->
                            <div class="partners__item_top">
                                <div class="partners__item_logo" v-if="'PREVIEW_PICTURE' in item">
                                    <img :src="$vareibles.remote + item.PREVIEW_PICTURE" alt="">
                                </div>
                                <div class="partners__item_text" v-if="'PREVIEW_TEXT' in item">
                                    {{ item.PREVIEW_TEXT }}
                                </div>
                                <div class="partners__contact_items" v-if="'PROPERIES' in item">
                                    <div class="partners__contact_item">
                                        <div class="icon">
                                            <img :src="require('~/assets/img/contacts/MAP.svg')" width="100%" alt="">
                                        </div>
                                        <div class="text">{{ item.PROPERIES[1].VALUE }}</div>
                                    </div>
                                    <a :href="`mailto:${item.PROPERIES[2].VALUE}`" class="partners__contact_item email">
                                        <div class="icon">
                                            <img :src="require('~/assets/img/contacts/EMAIL.svg')" width="100%" alt="">
                                        </div>
                                        <div class="text">{{ item.PROPERIES[2].VALUE }}</div>
                                    </a>
                                    <a :href="`tel:${item.PROPERIES[3].VALUE}`" class="partners__contact_item phone">
                                        <div class="icon">
                                            <img :src="require('~/assets/img/contacts/PHONE.svg')" width="100%" alt="">
                                        </div>
                                        <div class="text">{{item.PROPERIES[3].VALUE}}</div>
                                    </a>
                                    <div class="partners__contact_item">
                                        <div class="icon">
                                            <img :src="require('~/assets/img/contacts/SITE.svg')" width="100%" alt="">
                                        </div>
                                        <div class="text">{{ item.PROPERIES[4].VALUE }}</div>
                                    </div>
                                </div>
                            </div>
                            <osm-button link="catalog">В каталог</osm-button>
                        </div>
                    </div>
                </div>
                <div class="partners__title">Дочерние предприятия</div>
                <div class="partners__child_items">
                    <div class="partners__child_item" v-for="item in 1" :key="item.index">
                        <div class="partners__item_name">ОАО «Севмаш»</div>
                        <div class="partners__contact_items">
                            <div class="partners__contact_item">
                                <div class="icon">
                                    <img :src="require('~/assets/img/contacts/MAP.svg')" width="100%" alt="">
                                </div>
                                <div class="text">620062, г. Екатеринбург, пр. Ленина, д. 101, стр.2, офис 500</div>
                            </div>
                            <a href="mailto:info@vineta.ru" class="partners__contact_item">
                                <div class="icon">
                                    <img :src="require('~/assets/img/contacts/EMAIL.svg')" width="100%" alt="">
                                </div>
                                <div class="text">info@vineta.ru</div>
                            </a>
                            <a href="tel:+7(812)493-50-48" class="partners__contact_item">
                                <div class="icon">
                                    <img :src="require('~/assets/img/contacts/PHONE.svg')" width="100%" alt="">
                                </div>
                                <div class="text">+7(812)493-50-48</div>
                            </a>
                            <div class="partners__contact_item">
                                <div class="icon">
                                    <img :src="require('~/assets/img/contacts/WATCH.svg')" width="100%" alt="">
                                </div>
                                <div class="text">Пн-Пт с 9:00 до 18:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <osm-footer />
        <osm-preloader />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "LicensesPage",
    head() {
      return {
        title: this.getPartners && 'SEO' in this.getPartners ? this.getPartners.SEO.META.TITLE : '',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: this.getPartners && 'SEO' in this.getPartners ? this.getPartners.SEO.META.DESCRIPTION : 'DESCRIPTION'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.getPartners && 'SEO' in this.getPartners ? this.getPartners.SEO.META.KEYWORDS : ''
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image'
          },
          {
            hid: 'twitter:url',
            name: 'twitter:url',
            content: 'https://vineta.fvds.ru/'
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: this.getPartners && 'SEO' in this.getPartners ? this.getPartners.SEO.META.TITLE : '',
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.getPartners && 'SEO' in this.getPartners ? this.getPartners.SEO.META.DESCRIPTION : '',
          },
          {
            hid: 'twitter:imag',
            name: 'twitter:imag',
            content: this.getPartners && 'PREVIEW_PICTURE' in this.getPartners ? this.$vareibles.remote + this.getPartners.PREVIEW_PICTURE : require('~/assets/img/product.noimage.png'),
          },
        ]
      }
    },
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
        OsmFooter: () => import('~/components/global/OsmFooter.vue'),
        OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
        OsmButton: () => import('~/components/global/OsmButton.vue'),
        OsmPreloader: () => import('~/components/global/OsmPreloader.vue')
    },
    computed: {
        ...mapGetters(['getPartners']), 
        // filteredPartners() {
        //     return this.getPartners.filter(item => 'PROPERIES' in item);
        // }
    },
    created() {
      this.addBreadcrumbs([
          {
              name: 'Главная',
              link: 'index',
              isLink: true
          },
          {
              name: 'Основные заказчики и партнёры',
              isLink: false
          },
      ])
    },
    methods: {
      ...mapActions(['addBreadcrumbs'])
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: #fff;
}
.partners {
    padding: rem(30) rem(240) rem(120);
    @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
      padding-left: rem(50);
      padding-right: rem(50);
    }
    @media all and (max-width: 1280px) {
        padding: 30px 20px;
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        margin-bottom: rem(25);
        line-height: 140%;
        color: #172242;
        @media all and (max-width: 1280px) {
            font-size: 30px;
            margin-bottom: 30px;
        }
    }
    &__items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: rem(20);
        &:not(:last-child) {
            margin-bottom: rem(120);
        }
        @media all and (max-width: 840px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px;
        }
    }
    &__child_items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: rem(20);
        @media all and (max-width: 840px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px;
        }
    }
    &__item {
        height: 100%;
        padding: rem(20);
        border: 1px solid #D7DCE1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      .phone, .email {
        .text {
            display: inline-block;
            width: max-content;
            position: relative;
            &:after {
              content: "";
              position: absolute;
              left: 0;
              right: 100%;
              bottom: -5rem;
              height: 1px;
              background: #172242;
              transition: all 0.3s ease;
            }
            &:hover {
              &:after {
                right: 0;
              }
            }
        }
      }
    }
    &__item_logo {
        height: rem(70);
        margin-bottom: rem(40);
        display: flex;
        align-items: center;
        @media all and (max-width: 840px) {
            margin-bottom: 25px;
            height: auto;
            // justify-content: center;
        }
        img {
            max-height: 100%;
        }
    }
    &__item_text {
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #555F76;
    }
    &__contact_items {
        margin-bottom: rem(30);
    }
    &__contact_item {
        display: flex;
        align-items: center;
        text-decoration: none;
        &:not(:last-child) {
            margin-bottom: rem(20);
            @media all and (max-width: 1280px) {
                margin-bottom: 20px;
            }
        }
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
    &__item_name {
        font-style: normal;
        font-weight: 600;
        font-size: rem(24);
        margin-bottom: rem(20);
        line-height: 140%;
        color: #172242;
        @media all and (max-width: 1280px) {
            font-size: 18px;
        }
    }
}
</style>