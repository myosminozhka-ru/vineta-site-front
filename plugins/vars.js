import Vue from 'vue'

export default ({ app }, inject) => {
  inject(
    'vareibles',
    Vue.observable({
      remote: 'https://vineta.ru',
    })
  )
}
