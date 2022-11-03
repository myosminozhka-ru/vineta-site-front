<template>
  <section class="section section__item section__item--footer section__item--dark">
    <div class="section__left">
      <div class="section__left_top">
        <osm-h1 class="section__title">
          <template v-if="!isSuccess">
            {{ $t('sections.footer.request') }}
            <div>Вы можете направить нам запрос в электронном виде, используя нижеприведенную форму, или позвонить по указанному телефону</div>
          </template>
          <template v-else>
            {{ $t('sections.footer.thanks') }}
          </template>
        </osm-h1>
        <div v-if="false" class="section__text">Безусловно, постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно фиксирует необходимость соответствующих условий активизации. А ещё реплицированные с зарубежных источников, современные</div>
      </div>
      <form class="section__left_form" @submit.prevent="sendForm">
        <div v-for="field in filteredFileds" :key="field.index" class="osm__form_field">
          <div v-if="errors[field.VARNAME]" class="osm__error">
            {{ errors[field.VARNAME] }}
          </div>
          <template v-if="field.VARNAME !== 'PHONE'">
            <input v-model="formData[field.VARNAME]" :type="field.FIELD_TYPE" :placeholder="field.TITLE" :required="field.REQUIRED === 'Y'" :class="{ hasError: errors[field.VARNAME] }" class="osm__input section__input" />
          </template>
          <template v-else>
            <input v-model="formData[field.VARNAME]" v-mask="'+_ (___) ___-__-__'" :type="field.FIELD_TYPE" :placeholder="field.TITLE" :required="field.REQUIRED === 'Y'" :class="{ hasError: errors[field.VARNAME] }" class="osm__input section__input" />
          </template>
          <!-- <osm-input class="section__input" :placeholder="field.TITLE" :type="field.FIELD_TYPE" :required="field.REQUIRED === 'Y'"/> -->
        </div>
        <p style="font-size: 12rem">
          Заполняя данную форму, вы принимаете условия
          <a href="/upload/iblock/972/hy68tiym8msmmnuf771f6kydjn6m8aj4.docx" target="_blank"> политики конфиденциальности </a>
          об использовании сайта и даете свое согласие на обработку в том числе в части обработки и использования персональных данных
        </p>
        <osm-button class="section__button" :large="true" type="submit">{{ $t('sections.footer.send') }}</osm-button>
      </form>
    </div>
    <div class="section__right hide_on_mobile">
      <div class="section__content">
        <div class="section__row">
          <osm-h1 class="section__title">{{ $t('buttons.contacts') }}</osm-h1>

          <div v-if="false" class="section__socials">
            <a v-for="social in socials" :key="social.index" :href="social.link" class="section__social" target="_blank">
              <img :src="social.icon" width="100%" alt="" />
            </a>
          </div>
        </div>
        <div class="section__contacts">
          <div class="section__contacts_side">
            <a href="tel:78124935048" class="section__contact"> +7 (812) 493-50-48 </a>
            <div class="section__contacts_info">187026, Ленинградская обл., Тосненский район, г. Никольское, Ульяновское шоссе 5Ж</div>
            <div class="section__contacts_worktime">
              Пн-Пт с 8:00 до 17:00
              <!-- {{ $t('sections.footer.worktime') }} -->
            </div>
          </div>
          <div class="section__contacts_side">
            <a href="mailto:info@vineta.ru" class="section__contact"> info@vineta.ru </a>
            <div class="section__contacts_info">
              {{ $t('sections.footer.response') }}
            </div>
          </div>
        </div>
      </div>
      <div class="section__map" @mousewheel.stop>
        <osm-map />
      </div>
    </div>
    <osm-footer class="section__footer hide_on_desktop" />
    <div class="section__popup hide_on_tablet">
      <div class="section__popup_left">ООО “Винета”, 2012-2022</div>

      <template v-if="getDownloads['politika-konfedentsialnosti']">
        <div v-if="'PROPERIES' in getDownloads['politika-konfedentsialnosti']" class="section__popup_right">
          <ul>
            <li>
              <a :href="$vareibles.remote + getDownloads['politika-konfedentsialnosti'].PROPERIES[0].VALUE.SRC">Политика конфидециальности</a>
            </li>
            <!-- <li><a href="#">Пользовательское соглашение</a></li>
                        <li><a href="#">Карта сайта</a></li> -->
          </ul>
        </div>
      </template>
      <a href="https://myosminozhka.ru/" target="_blank" class="section__popup_link">
        <img src="~/assets/img/osm_logo.svg" width="100%" alt="" />
      </a>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OsmFirstSection',
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    // OsmInput: () => import('~/components/global/OsmInput.vue'),
    OsmMap: () => import('~/components/global/OsmMap.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
  },
  computed: {
    ...mapGetters(['getDownloads']),
    filteredFileds() {
      return this.fields.value.filter((field) => field.SID !== 'COUNT' && field.SID !== 'GOOD')
    },
  },

  data: () => ({
    fields: {
      value: [],
    },
    formData: {},
    errors: {},
    isSuccess: false,
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
  async mounted() {
    this.fields = await this.$axios.$get('forms/request.php')
   },
  methods: {
    async sendForm() {
      const formObj = { ...this.formData }
      const form = new FormData()

      for (const key in formObj) {
        form.append(key, formObj[key])
        this.formData[key] = ''
      }

      const token = await this.$recaptcha.execute('submit')
      form.append('token', token)

      this.$axios.$post('forms/result_request.php', form).then((result) => {
        // console.log(result);
        if (result.error) {
          this.errors = result.error
        }
        if (result.success) {
          this.isSuccess = true
          for (const key in this.formData) {
            this.formData[key] = ''
          }
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  overflow: visible;
  @media all and (max-width: 1280px) {
    flex-direction: column-reverse;
  }
  &__footer {
    order: -1;
  }
  &__title {
    font-size: rem(40);
    margin-bottom: 0 !important;

    div {
      font-size: rem(16);
      line-height: normal;
      font-weight: normal;
    }
    // @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
    //     margin-bottom: 5px !important;
    // }
  }
  &__content {
    margin-bottom: rem(31);
    padding-top: rem(175);
    padding-left: rem(68);
    padding-right: rem(143);
    padding-bottom: rem(17);
    @media all and (max-width: 1440px) {
      padding-top: 90px;
    }
    @media all and (max-width: 1280px) {
      width: 100% !important;
      padding: 0 !important;
    }
  }
  &__text {
    margin-bottom: 0;
    @media all and (max-width: 1280px) {
      margin-bottom: 0;
    }
  }
  &__left {
    padding-left: rem(107);
    padding-right: rem(71);
    padding-top: rem(175);
    padding-bottom: rem(121);
    width: calc(#{rem(900)} - #{rem(133)});
    background: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media all and (max-width: 1440px) {
      padding: 90px 70px 120px 0;
      width: calc(100% - 778px);
    }
    @media all and (max-width: 1280px) {
      width: 100%;
      padding: 80px 20px;
    }
    @media all and (max-width: 840px) {
      height: auto !important;
      padding: 20px;
      min-height: 1px;
    }
  }
  &__left &__title {
    margin-bottom: rem(30);
    @media all and (max-width: 1440px) {
      margin-bottom: 20px;
    }
    @media all and (max-width: 1280px) {
      margin-bottom: 30px;
    }
  }
  &__left_top {
    margin-bottom: rem(48);
    @media all and (max-width: 1440px) {
      margin-bottom: 20px;
    }
    @media all and (max-width: 1280px) {
      margin-bottom: 20px;
    }
  }
  &__left_form {
    width: 100%;
  }
  .osm__form_field {
    margin-bottom: rem(20);
    @media all and (max-width: 1280px) {
      margin-bottom: 10px;
    }
  }
  &__textarea {
    margin-bottom: rem(20);
    @media all and (max-width: 1280px) {
      margin-bottom: 20px;
    }
  }
  &__button {
    width: 100%;
  }
  &__right {
    // padding-right: rem(240);
    // padding-left: rem(71);

    // padding-bottom: rem(121);
    padding: 0;
    background: #2e5599;
    width: calc(100% - #{rem(900)} + #{rem(133)});
    flex-direction: column;

    // @media all and (max-width: 1440px) {
    //     padding: 90px 150px 120px 70px !important;
    //     width: 778px;
    // }
    @media all and (max-width: 1440px) {
      width: 778px;
      padding: 0 !important;
      // padding: 90px 0 0 0 !important;
      // padding: 80px 20px !important;
    }
    @media all and (max-width: 1280px) {
      width: 100% !important;
      padding: 80px 20px !important;
      // padding: 90px 0 0 0 !important;
      // padding: 80px 20px !important;
    }
    @media all and (max-width: 840px) {
      padding: 20px !important;
      min-height: 1px !important;
    }
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: rem(25);
  }
  &__right &__title {
    color: #fff;
    // margin-bottom: rem(30);
    // @media all and (max-width: 1280px) {
    //     margin-bottom: 30px;
    // }
  }
  &__contacts {
    display: flex;
    align-items: flex-start;
    // margin-bottom: rem(54);
    // @media all and (max-width: 1280px) {
    //     margin-bottom: 60px;
    // }
  }
  &__contacts_side {
    width: rem(240);
    @media all and (max-width: 1280px) {
      width: auto;
    }
    &:not(:last-child) {
      margin-right: rem(143);
      @media all and (max-width: 1280px) {
        margin-right: 130px;
      }
    }
  }
  &__contact {
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: rem(25);
    line-height: 140%;
    color: #ffffff;
    display: inline-block;
    margin-bottom: rem(10);
    position: relative;
    @media all and (max-width: 1280px) {
      font-size: 20px;
      margin-bottom: 20px;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 100%;
      bottom: -5rem;
      height: 1px;
      background: #fff;
      transition: all 0.3s ease;
    }
    &:hover {
      &:after {
        right: 0;
      }
    }
  }
  &__contacts_worktime {
    font-style: normal;
    font-weight: 400;
    font-size: rem(20);
    line-height: 140%;
    color: #ffffff;
    @media all and (max-width: 1280px) {
      font-size: 16px;
    }
  }
  &__contacts_info {
    font-style: normal;
    font-weight: 400;
    font-size: rem(16);
    line-height: 140%;
    color: #ffffff;
    @media all and (max-width: 1280px) {
      font-size: 16px;
    }
  }
  &__socials {
    display: flex;
    align-items: center;
  }
  &__social {
    width: rem(30);
    font-size: 0;
    display: block;
    transition: all 0.3s ease;
    @media all and (max-width: 1280px) {
      width: 40px;
    }
    &:not(:last-child) {
      margin-right: rem(20);
      @media all and (max-width: 1280px) {
        margin-right: 30px;
      }
    }
    &:hover {
      mix-blend-mode: overlay;
    }
  }
  &__map {
    flex: 1 1 auto;
    width: 100%;
    @media all and (max-width: 1280px) {
      height: 370px;
    }
  }
  &__popup {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: rem(-133);
    right: 0;
    bottom: -100%;
    z-index: 3;
    background: #172242;
    padding: rem(20) rem(50);
    transition: 1s bottom 0.5s ease;
  }
  &__popup_left {
    font-style: normal;
    font-weight: 600;
    font-size: rem(20);
    line-height: 140%;
    color: #ffffff;
  }
  &__popup_right {
    ul {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        &:not(:last-child) {
          margin-right: rem(40);
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
      }
    }
  }
  &__popup_link {
    display: block;
    font-size: 0;
    width: rem(169);
  }
  &.isActive &__popup {
    bottom: 0;
  }
}
</style>
