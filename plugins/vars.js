import Vue from 'vue'

export default ({ app }, inject) => {
  inject('vareibles', Vue.observable({
      remote: 'https://otoplenie-viessmann.ru'
  }))
}