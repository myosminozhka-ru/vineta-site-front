<template>
    <div>
        <nuxt-link v-if="link" :to="{ name: link }" class="button"><slot/></nuxt-link>
        <button v-else class="button" :type="type"><slot/></button>
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
    padding: vw(20) vw(60);
    background: #FF0040;
    font-style: normal;
    font-weight: 600;
    font-size: vw(20);
    line-height: 140%;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;
}
</style>