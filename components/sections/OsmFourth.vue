<template>
    <section class="section section__item section__item--fourth" v-if="fourthData">
        <!-- <pre style="font-size: 15rem">{{ fourthData }}</pre> -->
        <div class="section__left">
            <template v-if="'PROPERIES' in fourthData">
                <video v-if="'VIDEO' in fourthData.PROPERIES" controls="false" :src="$vareibles.remote + fourthData.PROPERIES.VIDEO.SRC"
                :type="fourthData.PROPERIES.VIDEO.VALUE.CONTENT_TYPE" ref="secondVideo" :poster="'VIDEO_PREVIEW' in fourthData.PROPERIES ? $vareibles.remote + fourthData.PROPERIES.VIDEO_PREVIEW.VALUE.SRC : require('~/assets/img/product.noimage.png')" />
            </template>
        </div>
        <div class="section__right">
            <!-- <pre style="font-size: 15rem">{{ getMainMore }}</pre> -->
            <div class="section__content">
                <osm-h1 class="section__title">{{ fourthData.NAME }}</osm-h1>
                <div class="section__text">
                    {{ fourthData.PREVIEW_TEXT }}
                </div>
                <osm-button class="section__button" link="techs">{{ $t('buttons.more') }}</osm-button>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  computed: {
      ...mapGetters(['getMain']),
      ...mapGetters(['getMainMore']),
      fourthData() {
        return this.getMain[3];
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
    @media all and (max-width: 1280px) {
        background: #2E5599;
    }
    &__title {
        font-size: rem(40);
        margin-bottom: rem(30);
        @media all and (max-width: 1280px) {
            color: #fff !important;
        }
    }
    &__text {
        
        @media all and (max-width: 1280px) {
            color: #fff !important;
        }
    }
    &__button {
        @media all and (max-width: 1280px) {
            width: 223px;
        }
        @media all and (max-width: 860px) {
            width: 100%;
        }
    }
    &__left {
        video {
            max-width: 100%;
            width: 100%;
        }
    }
}
</style>