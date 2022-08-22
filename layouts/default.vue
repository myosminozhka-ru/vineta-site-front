<template>
    <div class="asdasdsdasdasd">
        <nuxt />
    </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      console.log('route change to', to)
      console.log('route change from', from)
    },
  },
}
</script>