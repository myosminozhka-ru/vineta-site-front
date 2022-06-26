<template>
  <div class="wrapper footerOnBottom">
    <osm-header />
    <div class="header_padding">
      <section class="first">
        <div class="first__text">
          Проектируем, изготавливаем и поставляем оборудование для судостроения
        </div>
        <div class="first__image hide_on_mobile">
          <img :src="require('~/assets/img/about/first_img.png')" width="100%" alt="">
        </div>
      </section>
      <section class="second">
        <div class="second__side second__side--left">
          <div class="second__side_top">
            <div class="second__title">
              <div class="text">О компании</div>
            </div>
            <div class="second__text">
              <p>Современные технологии достигли такого уровня, что дальнейшее развитие различных форм деятельности не
                даёт нам иного выбора, кроме определения благоприятных перспектив. Высокий уровень вовлечения
                представителей целевой аудитории является четким доказательством простого факта: разбавленное изрядной
                долей эмпатии, рациональное мышление, в своём классическом представлении, допускает внедрение
                инновационных.</p>
              <p v-if="isTextShowed">Современные технологии достигли такого уровня, что дальнейшее развитие различных форм деятельности не
                даёт нам иного выбора, кроме определения благоприятных перспектив. Высокий уровень вовлечения
                представителей целевой аудитории является четким доказательством простого факта: разбавленное изрядной
                долей эмпатии, рациональное мышление, в своём классическом представлении, допускает внедрение
                инновационных.</p>
            </div>
          </div>
          <div class="second__buttons" @click="isTextShowed = !isTextShowed">
            <osm-button class="second__button">
                <div class="icon" :class="{'isOpened': isTextShowed}">
                <svg width="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_37_12945)">
                    <path d="M0.933594 8.3999L14.0003 19.5999L27.0669 8.3999" stroke="white" stroke-width="3" />
                    </g>
                    <defs>
                    <clipPath id="clip0_37_12945">
                        <rect width="28" height="28" fill="white" />
                    </clipPath>
                    </defs>
                </svg>
                </div>
                <div class="text">
                  <template v-if="!isTextShowed">Развернуть</template>
                  <template v-else>Свернуть</template>
                </div>
            </osm-button>
          </div>
        </div>
        <div class="second__side second__side--right">
          <div class="second__side_top">
            <div class="second__title">
              <div class="text">Каталог</div>
              <nuxt-link :to="{name: 'catalog'}" class="second__title_button">
                <svg width="100%" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L8 9L1 17" stroke="white" stroke-width="2"/>
                </svg>
              </nuxt-link>
            </div>
            <div class="second__items">
              <div class="second__item" v-for="item in 9" :key="item.index">
                <div class="icon">
                  <img :src="require('~/assets/img/about/cat_icon.svg')" width="100%" alt="">
                </div>
                <div class="text">Теплообменное оборудование</div>
              </div>
            </div>
          </div>
          <div class="second__buttons">
            <osm-button class="second__button">
              <div class="text">
                Лодки и катера
              </div>
              <div class="icon">
                <svg width="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.676 2.87788C24.2651 2.88266 24.7388 3.36242 24.734 3.94946L24.6559 13.5158C24.6511 14.1028 24.1697 14.5749 23.5806 14.5701C22.9915 14.5653 22.5178 14.0855 22.5226 13.4985L22.5798 6.4983L11.2594 17.5974C10.8394 18.0091 10.1641 18.0036 9.75092 17.5851C9.33777 17.1667 9.34326 16.4937 9.76319 16.0819L21.0836 4.98287L14.059 4.92594C13.4699 4.92116 12.9962 4.44141 13.001 3.85437C13.0058 3.26733 13.4872 2.79531 14.0763 2.80008L23.676 2.87788ZM5.9998 5.32962C5.4107 5.32962 4.93314 5.80553 4.93314 6.39259V22.0112C4.93314 22.5982 5.4107 23.0741 5.99981 23.0741H21.9998C22.5889 23.0741 23.0665 22.5982 23.0665 22.0112V18.9252C23.0665 18.3381 23.544 17.8622 24.1331 17.8622C24.7222 17.8622 25.1998 18.3381 25.1998 18.9252V22.0112C25.1998 23.7723 23.7671 25.2001 21.9998 25.2001H5.99981C4.2325 25.2001 2.7998 23.7723 2.7998 22.0112V6.39259C2.7998 4.63141 4.23249 3.2037 5.9998 3.2037H9.18232C9.77142 3.2037 10.249 3.6796 10.249 4.26666C10.249 4.85372 9.77142 5.32962 9.18232 5.32962H5.9998Z" fill="white"/>
                </svg>
              </div>
            </osm-button>
          </div>
        </div>
      </section>
      <section class="third">
        <div class="third__title">О компании в цифрах</div>
        <div class="third__items">
          <div class="third__item" v-for="item in 4" :key="item.index">
            <div class="number">403</div>
            <div class="text">Человек работает</div>
          </div>
        </div>
      </section>
    </div>
    <osm-footer />
  </div>
</template>
<script>
  export default {
    name: 'AboutPage',
    components: {
      OsmHeader: () => import('~/components/global/OsmHeader.vue'),
      OsmFooter: () => import('~/components/global/OsmFooter.vue'),
      OsmButton: () => import('~/components/global/OsmButton.vue'),
    },
    data: () => ({
      isTextShowed: false
    })
  }

</script>

<style lang="scss" scoped>
  .first {
    display: flex;
    align-items: center;
    padding: vw(20) vw(495) vw(20) vw(240);
    background: #D7DCE1;
    @media all and (max-width: 1024px) {
      padding: 20px 146px 20px 20px;
    }
    @media all and (max-width: 840px) {
        padding: 60px 15px;
    }

    &__text {
      width: calc(100% - #{vw(419)});
      font-style: normal;
      font-weight: 600;
      font-size: vw(50);
      line-height: 140%;
      color: #172242;
      @media all and (max-width: 1024px) {
        width: 446px;
        font-size: 30px;
      }
      @media all and (max-width: 840px) {
        width: 100%;
      }
    }

    &__image {
      width: vw(419);
      font-size: 0;
       @media all and (max-width: 1024px) {
        width: calc(100% - 446px);
      }
    }
  }
  .second {
    display: flex;
    @media all and (max-width: 1024px) {
      flex-direction: column;
    }
    &__side {
      width: 50%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media all and (max-width: 1024px) {
        width: 100%;
      }
      &--left {
        padding: vw(60) vw(60) vw(60) vw(240);
        @media all and (max-width: 1024px) {
          padding: 40px 20px;
        }
        @media all and (max-width: 840px) {
          padding: 60px 15px;
        }
      }
      &--right {
        padding: vw(60) vw(240) vw(60) vw(60);
        background: #2E5599;
        @media all and (max-width: 1024px) {
          padding: 40px 20px;
        }
        @media all and (max-width: 840px) {
          padding: 60px 15px;
        }
      }
    }
    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: vw(24);
      margin-bottom: vw(45);
      line-height: 140%;
      display: flex;
      align-items: center;
      @media all and (max-width: 1024px) {
        font-size: 24px;
        margin-bottom: 42px;
      }
    }
    &__side--right &__title {
      color: #fff;
    }
    &__title_button {
      display: block;
      width: vw(40);
      height: vw(40);
      padding: vw(12) vw(16);
      margin-left: vw(20);
      background: #FF0040;
      box-sizing: border-box;
      font-size: 0;
      transition: all .3s ease;
      @media all and (max-width: 1024px) {
        width: 40px;
        height: 40px;
        padding: 12px 16px;
        margin-left: 28px;
      }
      &:hover {
        background: #DF0043;
      }
      &:active {
          background: #A70032;
      }
    }
    &__text {
      p {
        font-style: normal;
        font-weight: 600400;
        font-size: vw(20);
        line-height: 140%;
        color: #555F76;
        margin: 0;
        @media all and (max-width: 1024px) {
          font-size: 20px;
        }

        &:not(:last-child) {
          margin-bottom: vw(20);
          @media all and (max-width: 1024px) {
            margin-bottom: 20px;
          }
        }
      }
    }
    &__buttons {
      margin-top: vw(54);
      @media all and (max-width: 1024px) {
        margin-top: 30px;
      }
    }
    &__button {
      display: flex;
      align-items: center;
      .icon {
        width: vw(28);
        height: vw(28);
        margin-right: vw(20);
        font-size: 0;
        transition: all .3s ease;
        @media all and (max-width: 1024px) {
          width: 28px;
          height: 28px;
          margin-right: 20px;
        }
        &.isOpened {
          transform: rotate(180deg);
        }
      }
    }
    &__side--right &__button {
      .icon {
        margin-right: 0;
        margin-left: vw(20);
        @media all and (max-width: 1024px) {
          margin-left: 20px;
        }
      }
    }
    &__items {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
    }
    &__item {
      width: 50%;
      display: flex;
      align-items: center;
      @media all and (max-width: 1024px) {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
      @media all and (max-width: 840px) {
        width: 100%;
      }
      .icon {
        font-size: 0;
        width: vw(24);
        margin: vw(10);
        @media all and (max-width: 1024px) {
          width: 24px;
          margin-right: 10px;
        }
      }
      .text {
        font-style: normal;
        font-weight: 400;
        font-size: vw(16);
        line-height: 140%;
        color: #FFFFFF;
        width: calc(100% - #{vw(34)});
        @media all and (max-width: 1024px) {
          width: calc(100% - 34px);
          font-size: 16px;
        }
      }
    }
  }
  .third {
    padding: vw(120) vw(150);
    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: vw(40);
      margin-bottom: vw(30);
      line-height: 140%;
      color: #172242;
      @media all and (max-width: 1024px) {
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
      width: calc(100% / 4 - #{vw(60)} / 4);
      @media all and (max-width: 1024px) {}
      @media all and (max-width: 840px) {
        width: calc(100% / 2 - 10px);
      }
      .number {
        font-style: normal;
        font-weight: 600;
        font-size: vw(120);
        line-height: 110%;
        color: #FF0040;
        @media all and (max-width: 1024px) {
          font-size: 80px;
        }
        @media all and (max-width: 840px) {
          font-size: 60px;
        }
      }
      .text {
        font-style: normal;
        font-weight: 400;
        font-size: vw(20);
        line-height: 110%;
        color: #555F76;
        @media all and (max-width: 1024px) {
          font-size: 20px;
        }
        @media all and (max-width: 840px) {
          font-size: 16px;
        }
      }
    }
  }
</style>
