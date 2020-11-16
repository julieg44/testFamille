<template>
  <div>
      <form >
        <h1 class='titre-formulaire'>Modifier {{ Oneidentite[0].nom }} : </h1>
        <div class="ligne">
          <div class='ancien'> {{ Oneidentite[0].espece }} => </div>
          <div><label>espece</label><input id="espece" v-model="NewEspece"></div>
        </div>
        <div class="ligne">
          <div class='ancien'>{{ Oneidentite[0].date_naissance }} => </div>
          <div><label>date_naissance</label><input id="date_naissance" v-model="NewDate_naissance"></div>
        </div>
        <div class="ligne">
          <div class='ancien'>{{ Oneidentite[0].nom }} => </div>
          <div><label>Nom</label><input id="nom" v-model="NewNom"></div>
        </div>
        <div class="ligne">
          <div class='ancien'>{{ Oneidentite[0].commentaires }} => </div>
          <div><label>Commentaires</label><input id="commentaires" v-model="NewCommentaires"></div>
        </div>
          <ModifyValid @click="submit()"/>
    </form>
  </div>  
</template>

<script>
import { mapState } from "vuex"
import { mapActions } from 'vuex';
import ModifyValid from '@/components/ModifyValid'


export default {
  name: 'ModifierPage',
  components: {
    ModifyValid,
  },

  data(){
      return {NewEspece:'', NewDate_naissance:'', NewNom:'', NewCommentaires:'', }
  },

  computed: {
    ...mapState ({ 
        Oneidentite: 'Oneidentite',
        },'test')
  },
  methods: {
    ...mapActions(["ModifyGobin"]),
    submit(){
      // return {espece:this.espece, 
      //         nom:this.nom, 
      //         date_naissance:this.date_naissance,
      //         commentaires:this.commentaires},

      this.$store.dispatch('ModifyGobin',{espece:this.NewEspece, 
      nom:this.NewNom, 
      id:this.$route.params.id,
      date_naissance:this.NewDate_naissance,
      commentaires:this.NewCommentaires});
    },
  },
  created(){
    this.$store.dispatch('loadOneIndividu',{id:this.$route.params.id})
  },
}  

</script>  

<style lang="scss">

.ligne{
  display: flex;
  justify-content: space-between;
  margin: 2%;
}

.ancien{
  display: flex;
  font-weight: 900;
}
</style>