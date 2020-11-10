<template>
  <div>
    <h1>The Gobin </h1>
    <div class="home">
      <Individu
      v-for="item in identite"
          :nom="item.nom"
          :date_naissance="item.date_naissance"
          :espece="item.espece"
          :commentaires="item.commentaires"
          :key="item.nom"
          :_id="item._id"
          />
    </div>
    <formulaire />
  </div>  
</template>

<script>

import Individu from '@/components/Individu.vue'
import formulaire from '@/components/formulaire.vue'
import { mapState } from "vuex"
import { mapActions } from "vuex"

export default {
  name: 'Home',
  components: {
    Individu, 
    formulaire,
  },
  computed: {
    ...mapState ({
      identite: "identite"
    })
  },
  created(){
    this.$store.dispatch('loadIndividu',{self:this})
  },

  methods: {
  ...mapActions(["AddGobin"]),
  }
}
</script>

<style lang="scss">
  .home{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
