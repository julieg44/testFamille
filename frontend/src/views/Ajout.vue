<template>
    <form>
        <div><label>espece</label><input id="espece"></div>
        <div><label>date_naissance</label><input id="date_naissance"></div>
        <div><label>Nom</label><input id="nom"></div>
        <div><label>Commentaires</label><input id="commentaires"></div>
        <input id="bouton" type="submit" value="Ajouter le Gobin" class="btn">
    </form>
</template>

<script>
const axios = require('axios');
const url = 'http://localhost:3000/api/individu';


let espece = document.getElementById('espece');
let date_naissance = document.getElementById('date_naissance');
let nom = document.getElementById('nom');
let commentaires = document.getElementById('commentaires');
let bouton = document.getElementById('bouton');
console.log(bouton)

bouton.addEventListener('click', function(e){
    e.preventDefault();
    let nouveauGobin = [espece.value, date_naissance.value, nom.value, commentaires.value];
        axios.post(url, JSON.parse(nouveauGobin))
        .then(function (response) {
        console.log(response);
    })
}) 
</script>
