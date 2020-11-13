<template>
  <button v-on="$listeners">
    <slot>Modifier</slot>
  </button>
</template>

<script>

export default {
  name: 'ModifyValid',
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