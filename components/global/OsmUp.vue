<template>
    <div class="totop" @click.prevent="scrollToTop" :class="{'isVisible': scrollY > 400}">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12 23" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31544 1.64286C5.70027 1.28147 6.29973 1.28147 6.68456 1.64286L10.6129 5.33195C10.8227 5.5289 10.8227 5.862 10.6129 6.05895C10.421 6.23916 10.1221 6.23916 9.93019 6.05895L8.19964 4.43381C7.56119 3.83424 6.51509 4.28693 6.51509 5.16277V21.4849C6.51509 21.7694 6.28447 22 6 22C5.71553 22 5.48491 21.7694 5.48491 21.4849V5.16277C5.48491 4.28692 4.43881 3.83424 3.80035 4.43381L2.0698 6.05895C1.87791 6.23916 1.57898 6.23916 1.38708 6.05895C1.17735 5.862 1.17735 5.5289 1.38708 5.33195L5.31544 1.64286Z" fill="white" stroke="white"/>
            </svg>
        </div>
        <div class="text">наверх</div>
    </div>
</template>

<script>
export default {
    data: () => ({
        scrollY: 0
    }),
    mounted() {
        window.addEventListener('scroll', () => {
            this.scrollY = window.scrollY
        })
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.totop {
    position: fixed;
    right: rem(50);
    bottom: rem(165);
    width: rem(80);
    height: rem(80);
    border-radius: 50%;
    background: #FF004D;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all .3s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 10;
    @media all and (max-width: 1280px) {
        width: 67px;
        height: 67px;
    }
    &.isVisible {
        opacity: 1;
        visibility: visible;
    }
    cursor: pointer;
    .icon {
        width: rem(10);
        height: rem(21);
        margin-bottom: rem(5);
        font-size: 0;
        pointer-events: none;
        @media all and (max-width: 1280px) {
            width: 8px;
            height: 18px;
            margin-bottom: 5px;
        }
    }
    .text {
        font-style: normal;
        font-weight: 400;
        font-size: rem(14);
        line-height: rem(17);
        color: #FFFFFF;
        @media all and (max-width: 1280px) {
            font-size: 12px;
            line-height: 14px;
        }
    }
    &:hover {
        background: #DF0043;
    }
    &:active {
        background: #A70032;
    }
}
</style>