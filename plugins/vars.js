import Vue from 'vue'

export default ({ app }, inject) => {
  inject('vareibles', Vue.observable({
      remote: 'http://vineta.01sh.ru'
  }))
}