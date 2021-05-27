<template>
<!--Page d'erreur 404 pour éviter les problème de navigation dans l'application-->
<div class="not-found">
  Tir manqué, un coup d'épée dans l'eau, fait un F5 mon amis.
</div>
       <router-link to="/">Retour</router-link>
       <router-view/>
</template>
<style>
.not-found {
  font-size: 2em;
  color: black;
}
</style>
