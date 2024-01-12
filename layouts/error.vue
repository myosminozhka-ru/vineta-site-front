<template>
  <error-page/>
</template>

<script>
import ErrorPage from "~/pages/error-page";
export default {
  name: 'EmptyLayout',
  components: {
    ErrorPage,
  },
  layout: 'error-layout',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
