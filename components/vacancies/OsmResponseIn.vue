<template>
  <div class="response">
    <div class="response__in">
      <div class="response__left">
        <div class="response__title">Откликнуться на вакансию</div>
        <div class="response__line"></div>
        <div v-for="(item, index) in dataArray" :key="index" class="response__contacts">
          <div class="name">{{ item.NAME }}</div>
          <div class="phones">
            <div v-for="(phone, i) in item.PHONE.VALUE" :key="i" class="phones__item">
              <a class="phones__link" :href="'tel: ' + phone.replaceAll(/\s/g, '')">{{ phone }}</a>
              <div class="delim phones__delim"></div>
            </div>
          </div>
          <div class="email">
            <a :href="'mailto:' + item.EMAIL.VALUE">{{ item.EMAIL.VALUE }}</a>
          </div>
        </div>
      </div>
      <div class="response__right" @click="openApplyModal">
        <osm-button>Откликнуться</osm-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  props: {
    dataArray: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions(['toggleModal']),
    openApplyModal() {
      // console.log('openApplyModal');
      this.toggleModal({
        isOpened: true,
        type: 'apply',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.response {
  padding: rem(120) rem(240);
  @media all and (max-width: 1280px) {
    padding: 80px 20px;
  }
  &__in {
    padding: rem(60);
    background: #172242 url('~assets/img/vacancies/plank_bg.svg') 100% 0% / rem(350) no-repeat;
    display: flex;
    align-items: flex-end;
    @media all and (max-width: 1280px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 40px;
    }
    @media all and (max-width: 840px) {
      padding: 30px;
    }
  }
  &__left {
    flex: 1 1 auto;
    margin-right: rem(76);
    @media all and (max-width: 1280px) {
      margin-right: 0;
      width: 100%;
      margin-bottom: 30px;
    }
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    margin-bottom: rem(20);
    line-height: 110%;
    color: #ffffff;
    @media all and (max-width: 1280px) {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  &__line {
    height: rem(2);
    background: #555f76;
  }
  &__contacts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: rem(60);
    @media all and (max-width: 1280px) {
      margin-top: 30px;
    }
    @media all and (max-width: 840px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .name {
      font-style: normal;
      font-weight: 400;
      font-size: rem(20);
      line-height: rem(20);
      color: #ffffff;
    }
    .phones {
      display: flex;
      align-items: center;

      &__item {
        display: flex;
        align-items: center;

        &:last-child {
          .phones__delim {
            display: none;
          }
        }
      }
      @media all and (max-width: 840px) {
        flex-direction: column;
        align-items: flex-start;
        margin: 60px 0;
      }
    }
    .delim {
      width: rem(6);
      height: rem(6);
      border-radius: rem(1);
      margin: 0 rem(10) rem(5);
      background: #fff;
      @media all and (max-width: 840px) {
        margin: 10px 0;
      }
    }
    .phones {
      a {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: rem(20);
        color: #ffffff;
        text-decoration: none;
        position: relative;
        transition: all 0.3s ease;
        &:after {
          content: '';
          position: absolute;
          bottom: rem(-5);
          left: 0;
          right: 0;
          height: 0;
          background: #fff;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        &:hover {
          color: #fff;
          &:after {
            height: 2px;
          }
        }
      }
    }
    .email {
      a {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: rem(20);
        color: #ffffff;
        text-decoration: none;
        position: relative;
        transition: all 0.3s ease;
        &:after {
          content: '';
          position: absolute;
          bottom: rem(-5);
          left: 0;
          right: 0;
          height: 0;
          background: #32d2e8;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        &:hover {
          color: #32d2e8;
          &:after {
            height: 2px;
          }
        }
      }
    }
  }
}
</style>
