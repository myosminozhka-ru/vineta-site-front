<template>
  <div class="header__info">
    <div class="header__button header__button--search hide_on_mobile" @click="openSearch">
      <svg width="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="30" rx="15" fill="#2E5599" />
        <path d="M21.8073 20.1936L19.3339 17.7403C20.294 16.5432 20.7589 15.0238 20.6331 13.4945C20.5073 11.9651 19.8004 10.5421 18.6576 9.51802C17.5148 8.49393 16.0231 7.9466 14.4892 7.98858C12.9553 8.03055 11.4957 8.65864 10.4107 9.74369C9.32563 10.8287 8.69754 12.2883 8.65557 13.8222C8.61359 15.3561 9.16092 16.8478 10.185 17.9906C11.2091 19.1334 12.6321 19.8403 14.1615 19.9661C15.6908 20.0919 17.2102 19.627 18.4073 18.6669L20.8606 21.1203C20.9226 21.1827 20.9963 21.2323 21.0775 21.2662C21.1588 21.3 21.2459 21.3175 21.3339 21.3175C21.4219 21.3175 21.5091 21.3 21.5903 21.2662C21.6715 21.2323 21.7453 21.1827 21.8073 21.1203C21.9274 20.996 21.9946 20.8298 21.9946 20.6569C21.9946 20.484 21.9274 20.3179 21.8073 20.1936ZM14.6673 18.6669C13.7443 18.6669 12.842 18.3932 12.0746 17.8805C11.3072 17.3677 10.709 16.6388 10.3558 15.7861C10.0026 14.9334 9.91019 13.9951 10.0903 13.0898C10.2703 12.1846 10.7148 11.3531 11.3674 10.7004C12.0201 10.0478 12.8516 9.60333 13.7568 9.42326C14.6621 9.2432 15.6004 9.33562 16.4531 9.68882C17.3058 10.042 18.0347 10.6402 18.5474 11.4076C19.0602 12.175 19.3339 13.0773 19.3339 14.0003C19.3339 15.2379 18.8423 16.4249 17.9671 17.3001C17.0919 18.1753 15.9049 18.6669 14.6673 18.6669Z" fill="white" />
      </svg>
    </div>
    <nuxt-link class="header__button header__button--favorites hide_on_mobile" :to="localePath({ name: 'favorites' })">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 30" fill="none">
        <rect width="30" height="30" rx="15" fill="#2E5599" />
        <path d="M22.9788 12.7966C22.9243 12.6295 22.7767 12.5102 22.602 12.4916L17.4819 11.972L15.4058 7.26423C15.3348 7.10463 15.1757 7 15.0001 7C14.8245 7 14.6654 7.10374 14.5945 7.26512L12.5179 11.9725L7.39867 12.4916C7.22399 12.5093 7.07592 12.6299 7.02183 12.7966C6.9673 12.9638 7.01695 13.1473 7.14818 13.2643L10.9839 16.6949L9.89642 21.7236C9.85962 21.8952 9.92701 22.0725 10.0693 22.1758C10.1469 22.2321 10.2382 22.2605 10.33 22.2605C10.4067 22.2605 10.4838 22.2406 10.553 22.1998L15.0005 19.6107L19.4472 22.1998C19.5988 22.2871 19.7886 22.2787 19.9309 22.1736C20.0728 22.0721 20.141 21.893 20.1042 21.7214L19.0167 16.6922L22.8529 13.2621C22.9833 13.1469 23.0334 12.9633 22.9788 12.7966ZM18.2325 16.2054C18.1137 16.3118 18.0609 16.4737 18.0946 16.6297L19.0243 20.9278L15.2231 18.7156C15.0852 18.6349 14.915 18.6349 14.7771 18.7156L10.9751 20.9278L11.9047 16.6297C11.9384 16.4737 11.8857 16.3118 11.7669 16.2054L8.48794 13.2736L12.8637 12.8294C13.0224 12.8139 13.1598 12.7124 13.2245 12.567L14.9997 8.54281L16.7743 12.567C16.8391 12.7124 16.9765 12.8139 17.1352 12.8294L21.5109 13.2736L18.2325 16.2054Z" fill="white" />
      </svg>

      <div v-show="getFavorites.length" class="header__count">
        {{ getFavorites.length }}
      </div>
    </nuxt-link>
    <div class="header__langs hide_on_mobile">
      <nuxt-link :to="switchLocalePath('en')" :class="{ isActive: $i18n.locale === 'en' }">En</nuxt-link>
      <div class="delim">/</div>
      <nuxt-link :to="switchLocalePath('ru')" :class="{ isActive: $i18n.locale === 'ru' }">Ру</nuxt-link>
      <!-- <nuxt-link :to="{ name: 'index' }" class="isActive">Ру</nuxt-link>
            <div class="delim">/</div>
            <nuxt-link :to="{ name: 'index' }">En</nuxt-link> -->
    </div>
    <a href="tel:+78124935048" class="header__phone">+7 (812) 493-50-48</a>
    <a class="header__button header__button--phone hide_off_mobile" href="tel:+78124935048">
      <object :data="require(`~/assets/img/phone.svg`)" width="100%" />
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'OsmInfo',
  data: () => ({
    favoritesCount: 4,
  }),
  computed: {
    ...mapGetters('localStorage', ['getFavorites']),
    availableLocales() {
      // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      return this.$i18n.locales
    },
  },
  methods: {
    ...mapActions(['toggleModal']),
    openSearch() {
      this.toggleModal({
        isOpened: true,
        type: 'search',
      })
      if (document.getElementById('seacrhModal__input')) {
        // console.log(123123123123123);
        setTimeout(() => {
          document.getElementById('seacrhModal__input').focus()
        }, 0)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  &__info {
    display: flex;
    align-items: center;
    @media all and (max-width: 840px) {
      order: 2;
      margin-top: 20px;
      border-top: 1px solid #d7dce1;
      width: 100%;
      padding-top: 12px;
      padding-bottom: 23px;
      justify-content: space-between;
    }
  }
  &__button {
    display: block;
    font-size: 0;
    width: rem(30);
    margin-right: rem(40);
    position: relative;
    cursor: pointer;
    @media all and (max-width: 1280px) {
      width: 30px;
      margin-right: 30px;
    }
    @media all and (max-width: 840px) {
      margin-right: 0;
    }
    &--favorites {
      @media all and (max-width: 840px) {
        order: -1;
      }
    }
    svg {
      pointer-events: none;
    }
    svg rect {
      transition: all 0.3s ease;
    }
    &:hover {
      svg rect {
        fill: #3a68b7;
      }
    }
    &:active {
      svg rect {
        fill: #295196;
      }
    }
  }
  &__count {
    position: absolute;
    top: rem(-5);
    left: rem(-5);
    width: rem(19);
    height: rem(19);
    font-size: rem(14);
    line-height: rem(19);
    font-style: normal;
    font-weight: 400;
    color: #ffffff;
    background: #ff004d;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    text-align: center;
    border-radius: 50%;
    @media all and (max-width: 1280px) {
      top: -5px;
      left: -5px;
      width: 19px;
      height: 19px;
      font-size: 14px;
      line-height: 19px;
    }
  }
  &__langs {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: rem(18);
    margin-right: rem(55);
    line-height: 140%;
    color: #d7dce1;
    @media all and (max-width: 1440px) {
      margin-right: 60px;
    }
    @media all and (max-width: 1280px) {
      font-size: 18px;
      margin-right: 31px;
    }
    .delim {
      margin: 0 rem(8);
    }
    a {
      text-decoration: none;
      font-style: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      position: relative;
      color: inherit;
      &.isActive {
        font-weight: 600;
      }
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 100%;
        bottom: -5rem;
        height: 1px;
        background: #d7dce1;
        transition: all 0.3s ease;
      }
      &:hover {
        &:after {
          right: 0;
        }
      }
    }
  }
  &__phone {
    font-style: normal;
    font-weight: 600;
    font-size: rem(20);
    line-height: 140%;
    color: #d7dce1;
    display: inline-block;
    text-decoration: none;
    position: relative;
    @media all and (max-width: 1280px) {
      font-size: 20px;
    }
    @media all and (max-width: 530px) {
      font-size: 18px;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 100%;
      bottom: -5rem;
      height: 1px;
      background: #d7dce1;
      transition: all 0.3s ease;
    }
    &:hover {
      &:after {
        right: 0;
      }
    }
  }
  object {
    pointer-events: none;
  }
}
</style>
