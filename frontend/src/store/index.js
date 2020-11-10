import Vue from 'vue'
import Vuex from 'vuex'
// import formulaire from '../components/formulaire';
const axios = require('axios');

Vue.use(Vuex)

const url = 'http://localhost:3000/api/individu';



// base construction d'un mec
class Gobin {
  constructor (nom, date_naissance, espece, commentaires, _id){
    this.nom = nom;
    this.date_naissance = date_naissance;
    this.espece = espece;
    this.commentaires = commentaires;
    this._id = _id
  }
}


export default new Vuex.Store({
  state: {
    identite: []
  },

  mutations: {
    AffIdentite(state, payload){
      state.identite.push(payload);
    },

    ModifIdentite(state, payload){
      console.log(state)
      console.log(payload)
      state.identite.push(payload);
    },

    SupIdentite(state, payload){
      for (let i = 0; i < state.identite.length; i++){
        if (state.identite[i]._id === payload){
          let pos = [i];
          state.identite.splice(pos , 1);
        }
      }
    },
    AddIdentite(state, NewGobin){
      console.log(state.identite)
      console.log(NewGobin)
      state.identite.push(NewGobin);
      console.log(state.identite)
    },
  },  

  actions: {
    SupGobin(context, payload){
      axios.delete('http://localhost:3000/api/individu/'+ payload)
        .then(function () {
          // handle success
          context.commit('SupIdentite', payload)
        })  
    },

    AddGobin(context, payload){
      let data = { nom:payload.nom, date_naissance:payload.date_naissance, espece:payload.espece, commentaires:payload.commentaires };
      console.log(data)
      axios.post(url, data)
        .then(function (response) {
          console.log(response.data.data);
          let Newdata = response.data.data;
          console.log(Newdata);
          let NewGobin = new Gobin (Newdata.nom, Newdata.date_naissance, Newdata.espece, Newdata.commentaires, Newdata.id);
          console.log(NewGobin);
            context.commit('AddIdentite', NewGobin)
          })
    },

    ModifyGobin(context, payload){
      console.log(payload)
      console.log(context)
      // axios.get('http://localhost:3000/api/individu/'+ payload)
      // .then(function (response){
      //   console.log(response.data)
      // })
    },

    loadIndividu(context){
      // Affichage des gobins
      axios.get(url)
        .then(function (response) {
          // handle success
          let data = response.data;
          for (let i=0 ; i < data.length ; i++){
            let gobinModele = new Gobin(data[i].nom, data[i].date_naissance, data[i].espece, data[i].commentaires, data[i].id);
            context.commit('AffIdentite', gobinModele)
          } 
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },

    loadOneIndividu(context, state){
      console.log(state)
      console.log(context)
      console.log(context.state.identite)
      let id = context.state.identite[2]._id
      console.log(id)
      axios.get('http://localhost:3000/api/individu/'+ id )
      .then(function (response){
        console.log(response.data);
        let data = response.data
        for (let i=0 ; i < data.length ; i++){
          let gobinModele = new Gobin(data[i].nom, data[i].date_naissance, data[i].espece, data[i].commentaires, data[i].id);
          context.commit('ModifIdentite', gobinModele)
        } 
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },

  },  

  modules: {
  },
})
