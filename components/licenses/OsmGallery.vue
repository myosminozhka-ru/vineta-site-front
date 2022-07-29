<template>
    <div class="gallery">
        <div class="gallery__title">Лицензии и сертификаты</div>
        <!-- <pre style="font-size: 15rem;">
            {{ imagesGallery }}
        </pre> -->
        <no-ssr>
            <LightGallery
                :images="imagesGallery"
                :index="index"
                :disable-scroll="true"
                @close="index = null"
            />
        </no-ssr>
        <div class="gallery__items">
            <div class="gallery__item" v-for="(image, key) in images" :key="image.index" @click="index = key">
                <div class="gallery__item_image">
                    <img :src="$vareibles.remote + image.PREVIEW_PICTURE" width="100%" alt="">
                </div>
                <div class="gallery__item_overlay">
                    <div class="icon">
                        <img :src="require('~/assets/img/licenses/search_icon.svg')" width="100%" alt="">
                    </div>
                    <div class="text">
                        Благодарственное письмо от АО "СПМБМ "Малахит"
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            default: () => ([]),
        }
    },
    computed: {
        imagesGallery() {
            return this.images.map(item => {
                return this.$vareibles.remote + item.PREVIEW_PICTURE;
            });
        }
    },
    data: () => ({
        gallery: [
          require('~/assets/img/licenses/license2.png'),
          require('~/assets/img/licenses/license2.png'),
          require('~/assets/img/licenses/license2.png'),
          require('~/assets/img/licenses/license2.png'),
          require('~/assets/img/licenses/license2.png'),
          require('~/assets/img/licenses/license2.png'),
        ],
        index: null,
    })
}
</script>

<style lang="scss" scoped>
.gallery {
    &:not(:last-child) {
        margin-bottom: rem(120);
        @media all and (max-width: 1280px) {
            margin-bottom: 80px;
        }
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #172242;
        @media all and (max-width: 1280px) {;
            font-size: 30px;
            margin-bottom: 30px;
        }
    }
    &__items {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: rem(20);
        @media all and (max-width: 1280px) {
            grid-gap: 20px;
        }
        @media all and (max-width: 1280px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    &__item {
        position: relative;
    }
    &__item_overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(23, 34, 66, 0.8), rgba(23, 34, 66, 0.8));
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: rem(53) rem(33) rem(33) rem(33);
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
        cursor: pointer;
        .icon {
            width: rem(44);
            margin-bottom: rem(20);
            font-size: 0;
        }
        .text {
            font-style: normal;
            font-weight: 600;
            font-size: rem(16);
            line-height: 140%;
            text-align: center;
            color: #FFFFFF;
        }
    }
    &__item:hover &__item_overlay {
        opacity: 1;
        visibility: visible;
    }
}
</style>