<template>
  <div class="wrapper footerOnBottom" >
    <osm-header />
    <div class="header_padding" v-if="false">
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
              <nuxt-link :to="{name: 'catalog'}" class="second__item" v-for="item in 9" :key="item.index">
                <div class="icon">
                  <img :src="require('~/assets/img/about/cat_icon.svg')" width="100%" alt="">
                </div>
                <div class="text">Теплообменное оборудование</div>
              </nuxt-link>
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
      <section class="fourth">
        <img :src="require('~/assets/img/about/people.jpg')" width="100%" alt="">
      </section>
      <section class="fiveth">
        <div class="fiveth__title">Руководство</div>
        <div class="fiveth__items">
          <div class="fiveth__item" v-for="item in 4" :key="item.index">
            <div class="avatar">
              <div class="avatar__in">
                <img :src="require('~/assets/img/about/avatar1.jpg')" alt="">
              </div>
            </div>
            <div class="name">Абрамов Дмитрий Витальевич</div>
            <div class="position">Заместитель директора по качеству</div>
            <a href="tel:+78124935048" class="phone">+7(812) 493-50-48 (доб. 141)</a>
            <a href="mailto:utfe@utfe.su" class="email">utfe@utfe.su</a>
          </div>
        </div>
      </section>
      <section class="fourth">
        <img :src="require('~/assets/img/about/people2.jpg')" width="100%" alt="">
        <div class="play">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" fill="none">
            <rect width="100%" height="100%" fill="#FF004D"/>
            <path d="M61.6673 50L38.334 33.3334V66.6667L61.6673 50Z" fill="white"/>
          </svg>
        </div>
      </section>
      <section class="history">
        <div class="history__side history__left">
          <div class="history__top">
            <div class="history__title">Наша история</div>
            <div class="history__line"></div>
            <div class="history__text">Узнайте больше о том, как развивалось предприятие ООО «Винета» с 1996 года — от оборудования для аквакультуры до полноценного судопроизводства.</div>
          </div>
          <osm-button class="history__button">Подробнее</osm-button>
        </div>
        <div class="history__side history__right">
          <div class="history__top">
            <div class="history__title">Технологии производства</div>
            <div class="history__line"></div>
            <div class="history__text">Узнайте больше о тексте для этого блока, который написал в качестве примера. Несколько строк об этапах производства и что ожидает пользователя после клика на плитку.</div>
          </div>
          <osm-button class="history__button" :outlined="true">Подробнее</osm-button>
        </div>
      </section>
      <section class="sixth">
        <customers :has-button="true" />
      </section>
      <section class="seventh">
        <div class="seventh__title">Карта</div>
        <div class="seventh__map">
          <img :src="require('~/assets/img/about/map.svg')" width="100%" alt="">
        </div>
      </section>
      <section class="eighth">
        <licenses />
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
      Customers: () => import('~/components/sliders/Customers.vue'),
      Licenses: () => import('~/components/tabs/Licenses.vue'),
    },
    data: () => ({
      isTextShowed: false
    })
  }

</script>

<style lang="scss" scoped>
  .header_padding {
    background: #fff;
  }
  .first {
    display: flex;
    align-items: center;
    padding: rem(20) rem(240) rem(20) rem(240);
    background: #D7DCE1;
    @media all and (max-width: 1280px) {
      padding: 20px 146px 20px 20px;
    }
    @media all and (max-width: 840px) {
        padding: 60px 15px;
    }

    &__text {
      width: calc(100% - #{rem(419)});
      font-style: normal;
      font-weight: 600;
      font-size: rem(50);
      line-height: 140%;
      color: #172242;
      @media all and (max-width: 1280px) {
        width: 446px;
        font-size: 30px;
      }
      @media all and (max-width: 840px) {
        width: 100%;
      }
    }

    &__image {
      width: rem(419);
      font-size: 0;
       @media all and (max-width: 1280px) {
        width: calc(100% - 446px);
      }
    }
  }
  .second {
    display: flex;
    @media all and (max-width: 1280px) {
      flex-direction: column;
    }
    &__side {
      width: 50%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media all and (max-width: 1280px) {
        width: 100%;
      }
      &--left {
        padding: rem(60) rem(60) rem(60) rem(240);
        @media all and (max-width: 1440px) {
          padding-left: 150px;
        }
        @media all and (max-width: 1280px) {
          padding: 40px 20px;
        }
        @media all and (max-width: 840px) {
          padding: 60px 15px;
        }
      }
      &--right {
        padding: rem(60) rem(240) rem(60) rem(60);
        background: #2E5599;
        @media all and (max-width: 1440px) {
          padding-right: 150px;
        }
        @media all and (max-width: 1280px) {
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
      font-size: rem(24);
      margin-bottom: rem(45);
      line-height: 140%;
      display: flex;
      align-items: center;
      @media all and (max-width: 1280px) {
        font-size: 24px;
        margin-bottom: 42px;
      }
    }
    &__side--right &__title {
      color: #fff;
    }
    &__title_button {
      display: block;
      width: rem(40);
      height: rem(40);
      padding: rem(12) rem(16);
      margin-left: rem(20);
      background: #FF0040;
      box-sizing: border-box;
      font-size: 0;
      transition: all .3s ease;
      @media all and (max-width: 1280px) {
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
        font-size: rem(20);
        line-height: 140%;
        color: #555F76;
        margin: 0;
        @media all and (max-width: 1280px) {
          font-size: 20px;
        }

        &:not(:last-child) {
          margin-bottom: rem(20);
          @media all and (max-width: 1280px) {
            margin-bottom: 20px;
          }
        }
      }
    }
    &__buttons {
      margin-top: rem(54);
      @media all and (max-width: 1280px) {
        margin-top: 30px;
      }
    }
    &__button {
      display: flex;
      align-items: center;
      @media all and (max-width: 1280px) {
        width: 233px;
      }
      @media all and (max-width: 840px) {
        width: 100%;
      }
      .icon {
        width: rem(28);
        height: rem(28);
        margin-right: rem(20);
        font-size: 0;
        transition: all .3s ease;
        @media all and (max-width: 1280px) {
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
        margin-left: rem(20);
        @media all and (max-width: 1280px) {
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
      text-decoration: none;
      @media all and (max-width: 1280px) {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
      @media all and (max-width: 840px) {
        width: 100%;
      }
      .icon {
        font-size: 0;
        width: rem(24);
        margin: rem(10);
        @media all and (max-width: 1280px) {
          width: 24px;
          margin-right: 10px;
        }
      }
      .text {
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        line-height: 140%;
        color: #FFFFFF;
        // width: calc(100% - #{rem(34)});
        position: relative;
        &:after  {
            content: "";
            position: absolute;
            left: 0;
            right: 100%;
            bottom: rem(-5);
            height: rem(1);
            background: #fff;
            transition: all .3s ease;
        }
        
        @media all and (max-width: 1280px) {
          // width: calc(100% - 34px);
          font-size: 16px;
        }
      }
      &:hover .text:after {
        right: 0;
      }
    }
  }
  .third {
    padding: rem(120) rem(240);
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
      .number {
        font-style: normal;
        font-weight: 600;
        font-size: rem(120);
        line-height: 110%;
        color: #FF0040;
        @media all and (max-width: 1280px) {
          font-size: 80px;
        }
        @media all and (max-width: 840px) {
          font-size: 60px;
        }
      }
      .text {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: 110%;
        color: #555F76;
        @media all and (max-width: 1280px) {
          font-size: 20px;
        }
        @media all and (max-width: 840px) {
          font-size: 16px;
        }
      }
    }
  }
  .fourth {
    padding: 0 rem(240);
    font-size: 0;
    position: relative;
    @media all and (max-width: 1440px) {
        padding-right: 150px;
        padding-left: 150px;
    }
    @media all and (max-width: 1280px) {
      padding: 0 20px;
    }
    @media all and (max-width: 840px) {
      padding: 0 15px;
    }
    .play {
      font-size: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      cursor: pointer;
      width: rem(100);
      height: rem(100);
      @media all and (max-width: 1280px) {
        width: 80px;
        height: 80px;
      }
      @media all and (max-width: 840px) {
        width: 60px;
        height: 60px;
      }
      svg rect {
        transition: all .3s ease;
      }
      &:hover {
        svg rect {
          fill: #DF0043;
        } 
      }
      &:active {
        svg rect {
          fill: #A70032;
        } 
      }
    }
  }
  .fiveth {
    padding: rem(120) rem(240);
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
  .sixth {
    overflow: hidden;
    padding: rem(120) rem(240);
    background: #F2F2F2;
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
  }
  .seventh {
    padding: rem(120) rem(240);
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
    &__map {
      padding: 0 rem(110);
      @media all and (max-width: 1280px) {
        padding: 0;
      }
    }
  }
  .eighth {
    overflow: hidden;
    padding: rem(120) rem(240);
    background: #F2F2F2;
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
  }
  .history {
    padding: rem(120) 0;
    display: flex;
    @media all and (max-width: 1280px) {
      padding: rem(80) 0;
    }
    @media all and (max-width: 1280px) {
      overflow: auto;
    }
    &__side {
      width: 50%;
      padding-top: rem(60);
      padding-bottom: rem(60);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media all and (max-width: 1280px) {
        min-width: 314px;
      }
    }
    &__left {
      padding-left: rem(240);
      padding-right: rem(240);
      position: relative;
      background: url('~assets/img/about/about_history.jpg') 50% 50% / cover no-repeat;
      @media all and (max-width: 1280px) {
        padding-left: rem(20);
        padding-right: rem(20);
      }
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #172242;
        opacity: 0.6;
      }
    }
    &__right {
      padding-left: rem(131);
      padding-right: rem(350);
      @media all and (max-width: 1280px) {
        padding-left: rem(20);
        padding-right: rem(20);
      }
    }
    &__top {
      position: relative;
      z-index: 5;
    }
    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: rem(40);
      margin-bottom: rem(30);
      line-height: 140%;
      @media all and (max-width: 1280px) {
        font-size: 30px;
      }
    }
    &__left &__title {
      color: #FFFFFF;
    }
    &__right &__title {
      color: #172242;
    }
    &__line {
      width: 100%;
      height: 2px;
      border-radius: 4px;
      margin-bottom: rem(30);
    }
    &__left &__line {
      background: #FFFFFF;
    }
    &__right &__line {
      background: #555F76;
      opacity: 0.2;
    }
    &__text {
      font-style: normal;
      font-weight: 400;
      font-size: rem(18);
      margin-bottom: rem(30);
      line-height: 140%;
    }
    &__left &__text {
      color: #FFFFFF;
      opacity: 0.9;
    }
    &__right &__text {
      color: #555F76;
      opacity: 0.7;
    }
    &__button {
      position: relative;
      z-index: 5;
      @media all and (max-width: 1280px) {
        width: 183px;
      }
    }
  }
</style>
