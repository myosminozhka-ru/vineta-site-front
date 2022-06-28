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
      <img :src="require('~/assets/img/vacancies/bg.svg')" width="100%" alt="">
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
      // OsmButton: () => import('~/components/global/OsmButton.vue'),
      // Customers: () => import('~/components/sliders/Customers.vue'),
      // Licenses: () => import('~/components/tabs/Licenses.vue'),
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
    padding: vw(120) vw(240);
    @media all and (max-width: 1024px) {
      padding: 80px 20px;
    }
    @media all and (max-width: 840px) {
      padding: 60px 15px;
    }
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
        &:nth-child(n+3) {
          margin-top: 20px;
        }
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
  .fourth {
    padding: 0 vw(240);
    font-size: 0;
    @media all and (max-width: 1024px) {
      padding: 0 20px;
    }
    @media all and (max-width: 840px) {
      padding: 0 15px;
    }
  }
  .fiveth {
    padding: vw(120) vw(240);
    @media all and (max-width: 1024px) {
      padding: 80px 20px;
    }
    @media all and (max-width: 840px) {
      padding: 60px 15px;
    }
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
        &:nth-child(n+3) {
          margin-top: 20px;
        }
      }
      .avatar {
        position: relative;
        margin-bottom: vw(20);
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
        font-size: vw(20);
        margin-bottom: vw(10);
        line-height: 140%;
        color: #172242;
        @media all and (max-width: 1024px) {
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
        font-size: vw(16);
        margin-bottom: vw(10);
        line-height: 140%;
        color: #555F76;
        @media all and (max-width: 1024px) {
          font-size: 16px;
          margin-bottom: 10px;
        }
        @media all and (max-width: 840px) {
          font-size: 12px;
        }
      }
      .phone {
        margin-bottom: 10px;
        @media all and (max-width: 1024px) {
          margin-bottom: 10px;
        }
      }
      .phone,
      .email {
        display: block;
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: vw(16);
        line-height: 140%;
        color: #FF0040;
        @media all and (max-width: 1024px) {
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
    padding: vw(120) vw(240);
    background: #F2F2F2;
    @media all and (max-width: 1024px) {
      padding: 80px 20px;
    }
    @media all and (max-width: 840px) {
      padding: 60px 15px;
    }
  }
  .seventh {
    padding: vw(120) vw(240);
    @media all and (max-width: 1024px) {
      padding: 80px 20px;
    }
    @media all and (max-width: 840px) {
      padding: 60px 15px;
    }
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
    &__map {
      padding: 0 vw(110);
      @media all and (max-width: 1024px) {
        padding: 0;
      }
    }
  }
  .eighth {
    overflow: hidden;
    padding: vw(120) vw(240);
    background: #F2F2F2;
    @media all and (max-width: 1024px) {
      padding: 80px 20px;
    }
    @media all and (max-width: 840px) {
      padding: 60px 15px;
    }
  }
</style>
