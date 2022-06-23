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

<style lang="scss" scoped>
.osm__input {
    height: vw(60);
    width: 100%;
    box-sizing: border-box;
    padding: 0 vw(40);
    border: 1px solid #D7DCE1;
    background: none;
    border-radius: 0;
    outline: none;
    @media all and (max-width: 1024px) {
        height: 50px;
        padding: 0 30px;
    }
    &, 
    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: vw(20);
        line-height: 140%;
        color: #82827D;
        @media all and (max-width: 1024px) {
            font-size: 16px;
        }
    }
}
</style>