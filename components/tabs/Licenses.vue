<template>
    <div class="licenses">
        <osm-h2 class="licenses__title">Лицензии и сертификаты</osm-h2>
        <tabs @clicked="tabClicked" @changed="tabChanged">
            <tab v-for="tab in tabs" :key="tab.index" :name="tab">
                <licenses />
            </tab>
        </tabs>
    </div>
</template>

<script>
export default {
  name: 'LicensesTabs',
  components: {
    OsmH2: () => import('~/components/global/OsmH2.vue'),
    Licenses: () => import('~/components/sliders/Licenses.vue'),
  },
  data: () => ({
    tabs: ['Лицензии и сертификаты', 'Благодарственные письма и отзывы', 'Отчеты СОУП и аттестации']
  }),
  methods: {
    tabClicked (selectedTab) {
        console.log('Current tab re-clicked:' + selectedTab.tab.name);
    },
    tabChanged (selectedTab) {
        console.log('Tab changed to:' + selectedTab.tab.name);
    },
  }
}
</script>

<style lang="scss">
.tabs-component {
    &-tabs {
        list-style: none;
        display: flex;
        align-items: center;
        margin: 0 0 vw(26) 0;
        padding: 0;
    }
    &-tab {
        position: relative;
        &:after {
            content: '';
            position: absolute;
            left: 50%;
            right: 50%;
            bottom: vw(-5);
            height: vw(2);
            background: #FF004D;
            transition: all .3s ease;
        }
        &:not(:last-child) {
            margin-right: vw(100);
        }
        a {
            text-decoration: none;
            font-style: normal;
            font-weight: 400;
            font-size: vw(20);
            line-height: 140%;
            color: #172242;
            transition: all .3s ease;
        }
        &.is-active {
            &:after {
                left: 0;
                right: 0;
            }
            a {
                font-weight: 600;
                color: #FF004D;
            }
        }
    }
}
</style>

<style lang="scss" scoped>
.licenses {
    max-width: 100%;
    &__title {
        margin-bottom: vw(30);
    }
}
</style>