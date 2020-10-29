<template>
  <button v-on="$listeners" id="ajout"><a href='../views/formulaire.vue'></a>
    <slot>Ajouter</slot>
  </button>
</template>

<script>
export default {
  name: 'AddBtn'
}
</script>

<style lang="scss">
    button{
        width: 30%;
        background-color: #940659;
        color:#fff;
        margin-bottom: 10%;
    }
</style>