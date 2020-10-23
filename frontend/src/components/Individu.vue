<template>
    <div class="contener">
        <h1>{{ nom }}</h1>
        <p>Date de naissance : {{ date_naissance }} </p>
        <p>Sexe : {{ espece }}</p>
        <p>Commentaires : {{ commentaires }}</p>
    </div> 
</template>

<script>

export default {
    name:'Individu',
        props: {
        nom: {
            type: String,
        },
        date_naissance: {
            type: String,
        },
        espece: {
            type: String,
        },
        commentaires: {
            type: String,
        }
        },
}
</script>


<style lang="scss">
h1{
   color: #5d0cb9; 
   font-weight: 700;
}

p{
    color: #fff;
}
.contener{
    width: 30%;
    background-color: #cbc9cc;
    margin-bottom: 5%;
}

</style>