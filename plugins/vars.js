import Vue from 'vue'

export default ({ app }, inject) => {
<<<<<<< HEAD
  inject('vareibles', Vue.observable({
      remote: 'https://vineta.fvds.ru'
  }))
}
=======
  inject(
    'vareibles',
    Vue.observable({
      remote: 'https://vineta.ru',
    })
  )
}
>>>>>>> 0b99a1df6726a552c775289950725fcc6512a58e
