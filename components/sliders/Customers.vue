<template>
    <div class="customers glide">
        <osm-h2 class="customers__title">Заказчики</osm-h2>
        <div class="customers__slider">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li v-for="(key, item) in 15" :key="item.index" class="customers__slide glide__slide">
                        <img :src="require('~/assets/img/customers/customer1.png')" alt="">
                    </li>
                </ul>
            </div>
            <div class="customers__arrows" data-glide-el="controls">
                <button class="customers__arrow customers__arrow--left" data-glide-dir="<">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" fill="#FF004D"/>
                        <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                    </svg>
                </button>
                <button class="customers__arrow customers__arrow--right" data-glide-dir=">">
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
import Glide from '@glidejs/glide';
import { mapGetters } from 'vuex';
export default {
    name: "CustomersSlider",
    components: {
        OsmH2: () => import('~/components/global/OsmH2.vue'),
    },
    data: () => ({
        slider: new Glide('.customers.glide', {
            perView: 6
        })
    }),
    computed: {
        ...mapGetters(['getMain']),
        fivethData() {
            return this.getMain[4];
        }
    },
    beforeDestroy() {
        console.log('beforeDestroy');
        if (this.slider) {
            this.slider.destroy();
        }
    },
    beforeMount() {
        console.log('beforeMount');
        this.slider.mount();
    }
}
</script>

<style lang="scss" scoped>
.customers {
    &__title {
        margin-bottom: vw(30);
    }
    &__slider {
        position: relative;
    }
    &__slide {
        padding: vw(20);
        background: #D7DCE1;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: vw(114);
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    &__arrows {}
    &__arrow {
        position: absolute;
        width: vw(40);
        top: 50%;
        border: none;
        background: none;
        padding: 0;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 0;
        &--left {
            left: vw(-20);
        }
        &--right {
            right: vw(-20);
            transform: translateY(-50%) rotate(180deg);
        }
    }
}
</style>