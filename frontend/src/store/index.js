import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    identite: [
      {
        nom:"Fabrice",
        date_naissance: '1955-08-14',
        espece: "Homme",
        commentaires:'no comment'
      },
      {
        nom:"Frédérique",
        date_naissance: '1959-08-28',
        espece: "Femme",
        commentaires:'no comment'
      },
      {
        nom:"Iron Bibi",
        date_naissance: '1980-12-16',
        espece: "Homme",
        commentaires:'love love love'
      },
      {
        nom:"Luca",
        date_naissance: '2006-11-25',
        espece: "Homme",
        commentaires:'petit merdeux'
      },
      {
        nom:"Nini",
        date_naissance: '2010-05-29',
        espece: "Femme",
        commentaires:'copié'
      },
      {
        nom:"Sara",
        date_naissance: '2010-05-29',
        espece: "Femme",
        commentaires:'collé'
      },

    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
