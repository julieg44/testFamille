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
    identite: [],
    Oneidentite:[],
  },

  mutations: {
    AffIdentite(state, payload){
      state.identite.push(payload);
    },

    AffOneIdentite(state, payload){
      state.Oneidentite.push(payload);
    },

    ModifIdentite(state, payload){
      console.log(state.identite)
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
      state.identite.push(NewGobin);
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
      axios.post(url, data)
        .then(function (response) {
          console.log(response.data);
          let Newdata = response.data.data;
          let NewGobin = new Gobin (Newdata.nom, Newdata.date_naissance, Newdata.espece, Newdata.commentaires, Newdata.id);
            context.commit('AddIdentite', NewGobin)
          })
    },

    ModifyGobin(context, payload){

      console.log(payload)
      console.log(context.state)

      //// modification d'une seule donnée
      for (let i = 0; i < context.state.identite.length; i++){
        if (context.state.identite[i]._id === payload.id){
          console.log(context.state.identite[i])
          if (payload.nom === ""){
            payload.nom = context.state.identite[i].nom
            }
          if (payload.espece === ""){
            payload.espece = context.state.identite[i].espece
            } 
          if (payload.date_naissance === ""){
            payload.date_naissance = context.state.identite[i].date_naissance
            } 
          if (payload.commentaires === ""){
            payload.commentaires = context.state.identite[i].commentaires
            }      
        }
      }

      let data = { nom:payload.nom, date_naissance:payload.date_naissance, espece:payload.espece, commentaires:payload.commentaires, id:payload.id };
      console.log(data)
      axios.put('http://localhost:3000/api/individu/'+ payload.id, data )
      .then(function (response) {
        console.log(response)
        let NewGobin = new Gobin (data.nom, data.date_naissance, data.espece, data.commentaires, data.id);
          for (let i=0; i<context.state.identite.length;i++){
            if (context.state.identite[i].id === payload.id)
            context.commit('ModifIdentite', NewGobin)
          }
        })
    },

    loadIndividu(context){
      // Affichage des gobins
      axios.get(url)
        .then(function (response) {
          // handle success
          let data = response.data; 
          if(context.state.identite.length === 0){
            for (let i=0 ; i < data.length ; i++){
              let gobinModele = new Gobin(data[i].nom, data[i].date_naissance, data[i].espece, data[i].commentaires, data[i].id);
              context.commit('AffIdentite', gobinModele)
            } 
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

    loadOneIndividu(context, payload){
          console.log(context);
          context.state.Oneidentite = [];
          console.log(context);
          axios.get('http://localhost:3000/api/individu/'+ payload.id )
          .then(function (response){
            console.log(response.data);
            let data = response.data
            let gobinModele = new Gobin(data.nom, data.date_naissance, data.espece, data.commentaires, data.id);
            context.commit('AffOneIdentite', gobinModele)
            console.log(gobinModele)              
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }
  },
     

  modules: {
  },
})
