<template>
    <div>
        <nuxt-link v-if="link" :to="{ name: link }" class="button" :class="{'isOutlined': outlined, 'isLarge': large}"><slot/></nuxt-link>
        <button v-else class="button" :class="{'isOutlined': outlined, 'isLarge': large}" :type="type"><slot/></button>
    </div>
</template>

<script>
export default {
    name: 'OsmButton',
    props: {
        link: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'button'
        },
        outlined: {
            type: Boolean,
            default: false
        },
        large: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    padding: rem(20) rem(60);
    background: #FF0040;
    font-style: normal;
    font-weight: 600;
    font-size: rem(20);
    line-height: 140%;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;
    transition: all .3s ease;
    @media all and (max-width: 1280px) {
        font-size: 20px;
        padding: 20px 40px;
    }
    @media all and (max-width: 1280px) {
        width: 100%;
    }
    &.isOutlined {
        padding: rem(18) rem(30);
        background: transparent;
        color: #172242;
        border: rem(2) solid #FF004D;
        @media all and (max-width: 1280px) {
            border-width: 2px;
            padding: 18px 30px;
        }
        svg {
            // fill: #fff;
            path {
                transition: all .3s ease;
            }
        }
        &:hover {
            color: #fff;
            svg {
                // fill: #fff;
                path {
                    fill: #fff;
                }
            }
        }
    }
    &.isLarge {
        width: 100%;
    }
    &:hover {
        background: #DF0043;
    }
    &:active {
        background: #A70032;
    }
}
</style>