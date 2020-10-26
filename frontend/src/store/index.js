import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

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

const url = 'http://localhost:3000/api/individu';
let tabloGobin =[];

// Affichage des gobins
axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
    let data = response.data[0];
    console.log(data);
    for (let i=0 ; i < data.length ; i++){
      let gobinModele = new Gobin(data[i].nom, data[i].date_naissance, data[i].espece, data[i].commentaires, data[i]._id);
      tabloGobin.push(gobinModele);
    } 
    console.log(tabloGobin);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


export default new Vuex.Store({
  state: {
    identite: tabloGobin
  },
  mutations: {
  },
  actions: {
    /// on degage Marty et Nestor
    SupMartyNestor(){
       axios.delete(url)
      .then(function (response) {  
        // handle success
        console.log(response.data);
        for (let i=0 ; i < tabloGobin.length; i++){
          if (tabloGobin[i].nom === 'Marty'){
            tabloGobin = tabloGobin.filter(function(item){
              return item !== tabloGobin[i];
            })
          }
        }
        console.log(tabloGobin);
      })
    }
  },
  modules: {
  }
})
