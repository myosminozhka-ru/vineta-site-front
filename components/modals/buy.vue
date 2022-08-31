<template>
  <div class="modal" :class="{ isOpened: getModals.buy.isOpened }" @click="closeBuy">
    <div class="modal__in" @click.stop>
      <div class="modal__top">
        <div class="modal__closer" @click="closeBuy">
          <img :src="require('~/assets/img/closer.svg')" width="100%" alt="" />
        </div>
      </div>
      <form ref="buy_form" class="modal__form" @submit.prevent="sendForm">
        <div v-if="!isSuccess" class="modal__form_in">
          <div class="modal__title">
            {{ $t('sections.footer.request') }}
          </div>

          <div v-for="field in fields.value?.filter((item) => item.SID === 'GOOD')" :key="field.index" class="osm__form_field">
            <div v-if="errors[field.VARNAME]" class="osm__error">
              {{ errors[field.VARNAME] }}
            </div>
            <input v-model="formData[field.VARNAME]" disabled :type="field.FIELD_TYPE" :placeholder="field.TITLE" :required="field.REQUIRED === 'Y'" :class="{ hasError: errors[field.VARNAME] }" class="osm__input modal__input" />
          </div>
          <!-- 
          <input v-model="formData[field.VARNAME.GOOD]" :type="field.FIELD_TYPE" :placeholder="field.TITLE" :required="field.REQUIRED === 'Y'" :class="{ hasError: errors[field.VARNAME] }" class="osm__input modal__input" /> -->
          <div v-for="field in fields.value?.filter((item) => item.SID !== 'GOOD')" :key="field.index" class="osm__form_field">
            <!-- <pre>
                        {{ field }} 
                        </pre> -->
            <!-- {{ field.VARNAME }} -->
            <div v-if="errors[field.VARNAME]" class="osm__error">
              {{ errors[field.VARNAME] }}
            </div>
            <template v-if="field.VARNAME !== 'NUMBER'">
              <input v-model="formData[field.VARNAME]" :type="field.FIELD_TYPE" :placeholder="field.TITLE" :required="field.REQUIRED === 'Y'" :class="{ hasError: errors[field.VARNAME] }" class="osm__input modal__input" />
            </template>
            <template v-else>
              <osm-counter class="modal__input" />
            </template>

            <!-- <osm-input class="modal__input" :placeholder="field.TITLE" :type="field.FIELD_TYPE" :required="field.REQUIRED === 'Y'"/> -->
          </div>
          <!-- <osm-input class="modal__input" placeholder="Компания *" :required="true"/> -->
          <!-- <osm-input class="modal__input" placeholder="Телефон *" type="tel" :required="true"/>
                    <osm-input class="modal__input" placeholder="E-mail *" type="email" :required="true"/>
                    
                    <osm-textarea class="modal__textarea" placeholder="Ваше сообщение" type="email" :required="true"/> -->
          <p style="font-size: 12rem">
            Заполняя данную форму, вы принимаете условия
            <a href="/upload/iblock/972/hy68tiym8msmmnuf771f6kydjn6m8aj4.docx" target="_blank"> политики конфиденциальности </a>
            об использовании сайта и даете свое согласие на обработку в том числе в части обработки и использования персональных данных
          </p>
          <osm-button class="modal__button" :large="true" type="submit">Отправить</osm-button>
        </div>
        <div v-else class="modal__form_in">
          <div class="modal__title">Спасибо за заявку!</div>
          <div class="modal__subtitle">Мы свяжемся с Вами в ближайшее время.</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'OsmBuyModal',
  data: () => ({
    isSended: false,
    result: null,
    fields: [],
    formData: {},
    errors: {},
    isSuccess: false,
  }),
  async fetch() {
    this.fields = await this.$axios.$get('forms/order.php')
  },
  computed: {
    ...mapGetters(['getModals', 'getProducts']),
    // formData() {
    //     return this.fields.value.map(item => {
    //         return {
    //             name: item.VARNAME,
    //             value: ""
    //         }
    //     })
    // }
  },
  mounted() {
    const codeProduct = window.location.href.split('/')
    this.formData.GOOD = this.getProducts.find((item) => item.CODE === codeProduct[codeProduct.length - 1]).NAME
  },
  methods: {
    ...mapActions(['toggleModal']),
    closeBuy() {
      this.isSuccess = false
      this.formData = {}
      this.toggleModal({
        isOpened: false,
        type: 'buy',
      })
    },
    sendForm() {
      const formObj = { ...this.formData }
      // const form = this.formData.filter(item => item);
      // console.log(form)
      // const data = new FormData(this.$refs.buy_form);
      const form = new FormData()

      for (const key in formObj) {
        form.append(key, formObj[key])
      }
      // this.formData.map(item => {
      //     const [key, value] = item;
      //     console.log(key, value);
      //     return item;
      // })
      // const form = new FormData(this.formData);
      // console.log(form);
      this.$axios.$post('forms/result_order.php', form).then((result) => {
        // console.log(result);
        if (result.error) {
          this.errors = result.error
        }
        if (result.success) {
          this.isSuccess = true
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(23, 34, 66, 0.8);
  z-index: 1000;
  text-align: center;
  // padding: 58px 0;
  padding: 10px 0;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  &.isOpened {
    opacity: 1;
    visibility: visible;
  }
  &:after {
    content: '';
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  &__in {
    background: #ffffff;
    // padding: rem(40);
    padding: rem(20);
    max-width: rem(710);
    width: 100%;
    display: inline-flex;
    vertical-align: middle;
    text-align: left;
    max-height: 100%;
    box-sizing: border-box;
    flex-direction: column;
    @media all and (max-width: 840px) {
      width: 100%;
      max-width: 100%;
      padding: 20px;
    }
  }
  &__top {
    display: flex;
    justify-content: flex-end;
    margin-bottom: rem(9);
  }
  &__closer {
    width: rem(50);
    height: rem(50);
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover {
      filter: hue-rotate(29deg);
    }
    &:active {
      filter: hue-rotate(45deg);
    }
    @media all and (max-width: 1280px) {
      width: 30px;
      height: 30px;
    }
  }
  &__form {
    padding: 0 rem(88) rem(60);
    height: calc(100% - rem(59));
    flex: 1 1 auto;
    overflow: auto;
    @media all and (max-width: 840px) {
      padding: 0;
    }
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    margin-bottom: rem(30);
    line-height: 140%;
    color: #172242;
  }
  &__subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: rem(25);
    line-height: 140%;
    color: #172242;
  }
  .osm__form_field {
    margin-bottom: rem(20);
  }
  // &__input {
  //     margin-bottom: rem(20);
  // }
  &__textarea {
    margin-bottom: rem(20);
  }
}
</style>
