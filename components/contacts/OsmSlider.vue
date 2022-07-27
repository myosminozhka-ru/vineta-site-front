<template>
    <div class="contacts__slider glide" v-if="gallery">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide" v-for="item in gallery" :key="item.index">
                    <div class="contacts__slider_item">
                        <div class="contacts__slider_item_in">
                            <img :src="$vareibles.remote + item.PREVIEW_PICTURE" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="contacts__arrows" >
            <!-- <nuxt-link :to="{name: 'index'}" class="more">Смотреть все</nuxt-link> -->
            <div class="contacts__arrows-in" data-glide-el="controls">
                <button class="contacts__arrow contacts__arrow--left" data-glide-dir="<">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" fill="#FF004D"/>
                        <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                    </svg>
                </button>
                <button class="contacts__arrow contacts__arrow--right" data-glide-dir=">">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" fill="#FF004D"/>
                        <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Glide from '@glidejs/glide'
export default {
    name: "OsmCatalogSlider",
    props: {
        gallery: {
            type: Array,
            default: () => ([])
        }
    },
    data: () => ({
        slider: new Glide('.glide', {
            perView: 4,
            gap: '20rem',
            type: 'carousel',
            breakpoints: {
                840: {
                    perView: 1,
                }
            }
        })
    }),
    mounted() {
        this.slider.mount();
    }
}
</script>


<style lang="scss" scoped>
.contacts {
    &__slider {
        @media all and (max-width: 840px) {
            margin-right: -20px;
            width: calc(100% + 20px);
            padding-right: 102px;
            .glide__slides,
            .glide__track {
                overflow: visible;
            }
        }
    }
    &__slider_item_in {
        padding-top: 100%;
        position: relative;
        font-size: 0;
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    &__arrows {
        @media all and (max-width: 840px) {
            
            display: none;
            // display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
            padding-bottom: 10px;
        }
    }
    &__arrow {
        position: absolute;
        width: rem(40);
        top: 50%;
        border: none;
        background: none;
        padding: 0;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 0;
        @media all and (max-width: 1280px) {
            width: 40px;
        }
        @media all and (max-width: 840px) {
            position: static;
            transform: translateY(0);
        }
        &--left {
            left: rem(-20);
            @media all and (max-width: 1280px) {
                left: -20px;
            }
        }
        &--right {
            right: rem(-20);
            transform: translateY(-50%) rotate(180deg);
            @media all and (max-width: 1280px) {
                right: -20px;
            }
            @media all and (max-width: 840px) {
                transform: rotate(180deg);
            }
        }
    }
}
</style>