<template>
  <button v-on="$listeners">
    <slot>Supprimer</slot>
  </button>
</template>

<script>
export default {
  name: 'DeleteBtn'
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