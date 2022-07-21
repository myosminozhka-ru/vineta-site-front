<template>
    <input :type="type" :placeholder="placeholder" :required="required" class="osm__input" />
</template>

<script>
export default {
    name: 'OsmInput',
    props: {
        placeholder: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'text'
        },
        required: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.osm__form_field {
    position: relative;
}
.osm__error {
    position: absolute;
    right: 0;
    top: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #FFFFFF;
    padding: 4px 20px;
    background: #CB2A2A;
    max-width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: all .3s ease;
    height: rem(35);
    &:hover {
        max-width: 100%;
        height: 100%;
        white-space: normal;
    }
}
.osm__input {
    height: rem(60);
    width: 100%;
    box-sizing: border-box;
    padding: 0 rem(40);
    border: 1px solid #D7DCE1;
    background: none;
    border-radius: 0;
    outline: none;
    &.hasError {
        border-color: #CB2A2A;
    }
    @media all and (max-width: 1280px) {
        height: 50px;
        padding: 0 30px;
    }
    &, 
    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: 140%;
        color: #82827D;
        @media all and (max-width: 1280px) {
            font-size: 16px;
        }
    }
    &.hasError,
    &.hasError::placeholder {
        color: #CB2A2A;
    }
}
</style>