<template>
    <div class="osm__counter">
        <div class="osm__title">{{ $t('counter.title') }}:</div>
        <div class="osm__buttons">
            <button type="button" class="osm__button" @click="minus">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 2" fill="none">
                        <path d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z"/>
                    </svg>
                </div>
            </button>
            <output class="osm__output">{{ counterValue }}</output>
            <button type="button" class="osm__button" @click="plus">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                        <path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="white"/>
                        </svg>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        counter: 1
    }),
    computed: {
        counterValue: {
            get() {
                return this.counter;
            },
            set(newValue) {
                if (newValue < 1) {
                    this.counter = 1;
                } else {
                    this.counter = newValue;
                }
            }
        }
    },
    methods: {
        plus() {
            this.counterValue++;
        },
        minus() {
            this.counterValue--;
        }
    }
}
</script>

<style lang="scss" scoped>
.osm {
    &__counter {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__title {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: 140%;
        color: #82827D;
    }
    &__buttons {
        display: flex;
    }
    &__button,
    &__output {
        height: rem(60);
        box-sizing: border-box;
        background: none;
        border-radius: 0;
        outline: none;
        @media all and (max-width: 1280px) {
            height: 50px;
        }
    }
    &__output {
        display: block;
        width: rem(96);
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: rem(60);
        text-align: center;
        color: #172242;
        border-top: 1px solid #D7DCE1;
        border-bottom: 1px solid #D7DCE1;
        @media all and (max-width: 1280px) {
            line-height: 50px;
            width: 56px;
        }
    }
    &__button {
        border: 1px solid #D7DCE1;
        width: rem(60);
        cursor: pointer;
        transition: all .3s ease;
        @media all and (max-width: 1280px) {
            width: 50px;
        }
        .icon {
            width: rem(16);
            margin: 0 auto;
            svg path {
                fill: #2E5599;
            }
        }
        &:hover {
            background: #DF0043;
            .icon {
                svg path {
                    fill: #fff;
                }
            }
        }
        &:active {
            background: #A70032;
            .icon {
                svg path {
                    fill: #fff;
                }
            }
        }
    }
}
</style>