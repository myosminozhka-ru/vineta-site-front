<template>
    <textarea :placeholder="placeholder" :required="required" class="osm__textarea" />
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
.osm__textarea {
    height: vw(120);
    max-height: vw(220);
    min-height: vw(120);
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    box-sizing: border-box;
    padding: vw(20) vw(40);
    border: 1px solid #D7DCE1;
    background: none;
    border-radius: 0;
    outline: none;
    @media all and (max-width: 1024px) {
        max-height: 100px;
        min-height: 200px;
        padding: 20px 30px;
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