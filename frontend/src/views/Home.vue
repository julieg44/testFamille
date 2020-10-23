<template>
  <div class="home">
    <Individu
    v-for="item in identite"
				:nom="item.nom"
				:date_naissance="item.date_naissance"
				:espece="item.espece"
				:commentaires="item.commentaires"
				:key="item.nom"
        />
  </div>
</template>

<script>

import Individu from '@/components/Individu.vue'
import { mapState } from "vuex"

export default {
  name: 'Home',
  components: {
    Individu
  },
  computed: {
    ...mapState ({
      identite: "identite"
    })
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
