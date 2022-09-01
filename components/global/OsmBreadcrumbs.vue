<template>
  <div class="breadcrumbs" :class="{ white: white }">
    <div class="breadcrumbs__back back_button hide_off_mobile" @click="toBack">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" fill="#FF0040" />
        <path d="M14.4004 7.2002L10.2004 12.0002L14.4004 16.8002" stroke="white" stroke-width="2" />
      </svg>
    </div>
    <ul class="breadcrumbs__list">
      <li v-for="(item, index) in listItems" :key="index" class="breadcrumbs__item">
        <template v-if="item.isLink && !item.params">
          <a :href="localePath({ name: item.link })">{{ item.name }}</a>
          <span class="breadcrumbs__item--delim hide_on_mobile">/</span>
        </template>
        <template v-else-if="item.isLink && item.params">
          <a :href="localePath({ name: item.link, params: item.params })">{{ item.name }}</a>
          <span class="breadcrumbs__item--delim hide_on_mobile">/</span>
        </template>
        <template v-else>
          <span>{{ item.name }}</span>
        </template>
      </li>
    </ul>
    <!-- <li v-for="(br, key) in getBreadcrumbs" :key="br.index" class="breadcrumbs__item" :class="{ hide_on_mobile: isBCrumbsOnMobileProductPage() ? key !== 2 : false || key > 0 }">
      {{ isBCrumbsOnMobileProductPage() && key == 2 }}
      <template v-if="br.isLink && !br.params">
        <a :href="localePath({ name: br.link })">{{ br.name }}</a>
      </template>
      <template v-else-if="br.isLink && br.params">
        <a :href="localePath({ name: br.link, params: br.params })">{{ br.name }}</a>
      </template>
      <template v-else>
        <span>{{ br.name }}</span>
      </template>
      <span v-if="key !== getBreadcrumbs.length - 1" class="breadcrumbs__item--delim hide_on_mobile">/</span>
    </li> -->
    <!-- <li class="breadcrumbs__item breadcrumbs__item--delim hide_on_mobile">
            
        </li> 
        <li class="breadcrumbs__item hideOffMobile">
            <a :href="{name: getBreadcrumbs[0].link}">{{ getBreadcrumbs[0].name }}</a>
        </li> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    white: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(['getBreadcrumbs']),
    listItems() {
      return this.getBreadcrumbs.filter((item) => item.name !== undefined)
    },
  },
  methods: {
    isBCrumbsOnMobileProductPage() {
      // return this.$route.matched.length === 3 && this.$route.matched[2].path === '/ru/catalog/:catalogId/:productId'
      return false
    },
    toBack() {
      const arrayPath = this.$route.path.split('/')

      if (arrayPath[arrayPath.length - 2] !== '') {
        arrayPath.shift()
        arrayPath.pop()
        this.$router.push({ path: '/' + arrayPath.join('/') })
      }
      //   this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
.back_button {
  font-size: 0;
  cursor: pointer;
  @media print {
    display: none;
  }
}
.breadcrumbs {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: rem(30);
  @media print {
    display: none;
  }
  @media all and (max-width: 1440px) {
    margin-bottom: 35px;
  }
  @media all and (max-width: 1280px) {
    margin-bottom: 43px;
  }
  @media all and (max-width: 840px) {
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #d7dce1;
    margin-bottom: 29px;
  }
  &__item {
    a,
    span {
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 140%;
      color: #555f76;
      @media all and (max-width: 1280px) {
        font-size: 14px;
      }
    }
    span {
      color: #2e5599;
    }
    @media all and (max-width: 840px) {
      margin: 2px 7px;
    }
    a {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 100%;
        bottom: rem(-5);
        height: rem(2);
        background: #ff0040;
        transition: all 0.3s ease;
      }
      &:hover {
        color: #ff0040;
        &:after {
          right: 0;
        }
      }
    }
  }
  &__item--delim {
    margin: 0 rem(10);
    @media all and (max-width: 1280px) {
      margin: 0 10px;
    }
  }
  &.white {
    a,
    span {
      color: #fff !important;
    }
  }

  &__back {
    @media all and (max-width: 840px) {
      margin-right: 15px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    @media all and (max-width: 840px) {
      margin: -2px -7px;
    }
  }
}
</style>
