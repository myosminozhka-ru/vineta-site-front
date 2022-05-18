<template>
    <div class="licenses glide">
        <div class="licenses__slider">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li v-for="(key, item) in 15" :key="item.index" class="licenses__slide glide__slide">
                        <img :src="require('~/assets/img/licenses/license1.png')" alt="">
                    </li>
                </ul>
            </div>
            <div class="licenses__arrows" data-glide-el="controls">
                <button class="licenses__arrow licenses__arrow--left" data-glide-dir="<">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" fill="#FF004D"/>
                        <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                    </svg>
                </button>
                <button class="licenses__arrow licenses__arrow--right" data-glide-dir=">">
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
// import Glide from '@glidejs/glide'
export default {
    name: "licensesSlider",
    data: () => ({
        sliders: []
    }),
    beforeDestroy() {
        console.log('beforeDestroy');
        // this.slider.destroy();
    },
    beforeMount() {
        console.log('beforeMount');
        // document.querySelectorAll('.licenses.glide').forEach(item => {
        //     this.sliders.push(
        //         new Glide(item, {
        //             perView: 6
        //         }).mount()
        //     );
        // });
    }
}
</script>

<style lang="scss" scoped>
.licenses {
    max-width: 100%;
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