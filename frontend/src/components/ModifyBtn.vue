<template>
  <button class="modifyBtn" v-on="$listeners">
    <slot>Modifier</slot>
  </button>
</template>

<script>
export default {
  name: 'ModifyBtn'
}
</script>

<style lang="scss">
    button.modifyBtn{
        width: 30%;
        background-color: #000000;
        color:#fff;
        margin-bottom: 10%;
    }
</style>