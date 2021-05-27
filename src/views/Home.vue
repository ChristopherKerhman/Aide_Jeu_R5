<template>
  <div class="home">
    <h3 class="titre">R-5 Le jeu de bataille avec des figurines recyclées</h3>
    <article class="paragraphe">
    <h4 v-if="!affichageAide3" class="sous_titre_3" v-on:click="affichageAide3 = true">Objectif de cette Aide de jeu</h4><h4 v-if="affichageAide3" class="sous_titre_3" v-on:click="affichageAide3 = false">Objectif de cette Aide de jeu</h4>
    <p v-if="affichageAide3">
      Cette application va vous permettre de gérer la plupart des cas de combats, tirs et closes combats.
      Elle est créée avec l'idée que chaque joueur possède un smartphone et puisse l'utiliser pour résoudre la plupart des cas.<br />
      Toutefois, les cas très complexes ou non habituels vont nécessiter de sortir les dés pour être résolus.
      Cette application a pour objectif aussi de vous faire gagner du temps sur les jets de dé ou l'application de la règle dans 95% des cas.
    </p>
  </article>
  <div class="conteneur_row">
    <br />
        <figure>
          <router-link  to="/tir">
          <img class="nav_style" src="@/images/Soldier_of_fortuneADJ.png" alt="Soldat moderne" />
      </router-link>
      <figcaption class="linkNav">Tir</figcaption>
      </figure>
        <figure>
          <router-link to="/closecombat">
        <img class="nav_style" src="@/images/Soldier_of_swordADJ.png" alt="Soldat Mediévale" />
        </router-link>
        <figcaption>Combat de mêlée</figcaption>
      </figure>
        <figure>
          <router-link to="/expertCombat">
            <img class="nav_style" src="@/images/Soldier_Expert.png" alt="Soldat SWAT" />
            </router-link>
            <figcaption>Expert en combat</figcaption>
        </figure>
        <figure>
        <router-link to="/DommageVehicule">
            <img class="nav_style" src="@/images/DommageCritique.png" alt="M4 Sherman" />
        </router-link>
        <figcaption>Dommages critiques aux véhicules</figcaption>
      </figure>
      <figure>
      <router-link to="/supportTactique">
          <img class="nav_style" src="@/images/artillerie.png" alt="Canon d'artillerie WWII USMC" />
      </router-link>
      <figcaption>Support tactique</figcaption>
    </figure>
  </div>
  <button v-on:click="Reset">Remise à 0</button>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      affichageAide3: false
    }
  },

  methods: {
    Reset () {
      location.reload()
    }
  }
}
</script>
