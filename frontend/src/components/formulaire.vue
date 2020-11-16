<template>
    <form>
        <h1 class='titre-formulaire'>A Gobin will born soon : </h1>
        <div><label>espece</label><input id="espece" v-model="espece"></div>
        <div><label>date_naissance</label><input id="date_naissance" v-model="date_naissance"></div>
        <div><label>Nom</label><input id="nom" v-model="nom"></div>
        <div><label>Commentaires</label><input id="commentaires" v-model="commentaires"></div>
        <AddBtn @click="submit()" />
    </form>
</template>

<script>
import AddBtn from '@/components/AddBtn.vue'
import { mapActions } from 'vuex';

export default {
  name: 'formulaire',
  data(){
      return {espece:"", date_naissance:"", nom:"", commentaires:"" }
  },
  components: { 
    AddBtn, 
  },
  methods:{
      ...mapActions(["AddGobin"]),
      submit(){
        // return {espece:this.espece, 
        //         nom:this.nom, 
        //         date_naissance:this.date_naissance,
        //         commentaires:this.commentaires},

        this.$store.dispatch('AddGobin',{espece:this.espece, 
        nom:this.nom, 
        date_naissance:this.date_naissance,
        commentaires:this.commentaires});
      },
  },
}  

</script>

<style lang="scss">
    button{
        width: 30%;
        background-color: #940659;
        color:#fff;
        margin-bottom: 10%;
    }
    .titre-formulaire{
        font-size: 2rem;
        color:red;
    }
    form{
        background-color: #c0bebe;
        width: 60%;
        margin: auto;
        margin-bottom: 30%;
    }
</style>