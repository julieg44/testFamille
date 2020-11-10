<template>
    <form>
        <h1 class='titre-formulaire'>Modifier {{ $route.params.nom }} : </h1>
        <div> {{ identite.espece }}</div>
        <div><label>espece</label><input id="espece" v-model="espece"></div>
        <div>{{ identite.date_naissance }}</div>
        <div><label>date_naissance</label><input id="date_naissance" v-model="date_naissance"></div>
        <div>{{ identite.nom }}</div>
        <div><label>Nom</label><input id="nom" v-model="nom"></div>
        <div>{{ identite.commentaires }}</div>
        <div><label>Commentaires</label><input id="commentaires" v-model="commentaires"></div>
    </form>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'Modifier',

  data(){
      return {espece:"", date_naissance:"", nom:"", commentaires:"" }
  },

  computed: {
    ...mapState ({ 
        identite: "identite"
        }
    )
  },
    created(){
    this.$store.dispatch('loadOneIndividu',{self:this})
  },
}  

</script>  