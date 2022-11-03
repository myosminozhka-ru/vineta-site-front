<template>
    <div class="modal" :class="{'isOpened': getModals.apply.isOpened}" @click="closeBuy">
        <div class="modal__in" @click.stop>

        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "OsmBuyModal",
    data: () => ({
        isSended: false,
        result: null,
        fields: [],
        formData: {},
        errors: {},
        isSuccess: false
    }),
    computed: {
        ...mapGetters(['getModals']),
    },
    mounted() {
        this.formData.GOOD = window.location.href;
    },
    methods: {
      ...mapActions(['toggleModal']),
      closeBuy() {
        this.isSuccess = false;
        this.formData = {};
        this.toggleModal({
          isOpened: false,
          type: 'preview'
        })
      },
    }
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(23, 34, 66, 0.8);
    z-index: 1000;
    text-align: center;
    // padding: 58px 0;
    padding: 10px 0;
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
    &.isOpened {
        opacity: 1;
        visibility: visible;
    }
    &:after {
        content: "";
        height: 100%;
        display: inline-block;
        vertical-align: middle;
    }
    &__in {
        background: #FFFFFF;
        // padding: rem(40);
        padding: rem(20);
        max-width: rem(710);
        width: 100%;
        display: inline-flex;
        vertical-align: middle;
        text-align: left;
        max-height: 100%;
        box-sizing: border-box;
        flex-direction: column;
        @media all and (max-width: 840px) {
            width: 100%;
            max-width: 100%;
            padding: 20px;
        }
    }
    &__top {
        display: flex;
        justify-content: flex-end;
        margin-bottom: rem(9);
    }
    &__closer {
        width: rem(50);
        height: rem(50);
        cursor: pointer;
        transition: all .3s ease-out;
        &:hover {
            filter: hue-rotate(29deg);
        }
        &:active {
            filter: hue-rotate(45deg);
        }
        @media all and (max-width: 1280px) {
            width: 30px;
            height: 30px;
        }
    }
    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #172242;
    }
}
</style>