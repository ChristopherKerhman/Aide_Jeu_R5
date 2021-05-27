<template>
  <header class="box_col">
    <h1 class="titre">Adversaire virtuel</h1>
    <h2 v-if="!affichageAide4" class="sous_titre lienNav" v-on:click="affichageAide4 = true">Aide de jeu pour R-5</h2>  <h2 v-else class="sous_titre lienNav" v-on:click="affichageAide4 = false">Aide de jeu pour R-5</h2>
        <article class="paragraphe" v-show="affichageAide4">
          <p>
          Le joueur virtuel, va vous permettre de jouer en solitaire à R-5. Cette aide de jeu, vous propose de simuler le comportement de 5 unités adverse sur un champs de bataille. Ces unités vont prendre des décisions,
          avancer, reculer, soutenir leur camarades etc. Vous n'aurez qu'a bouger les unités selon les indications de l'application à mesure du jeu.<br />
          Vous allez devoir remplir divers paramètre avant de lancer la partie.<br />
          Les troupes ne seront jamais séparer, une unité, reste une unité et ceux jusque la fin de la bataille. L'équipement réel des unités, sera une abstraction et l'adversaire virtuel,
          vous communiquera les dommages qu'il ferra à mesure de la bataille. Noter simplement, que les troupes que vous aurez définis comme agressive et d'élite, seront sans doute bien
          plus dangereuse que des troupes que vous aurez qualifier de civile neutre ou défensif.
          </p>
      </article>
    </header>
    <div v-if="!affichageAide4 && !affichageAide6" class="contener_colonne_basique">
      <IArecord/>
      <button @click="affichageAide5 = true, affichageAide6 = true">Fin de l'enregistrement ?</button>
    </div>
    <div v-if="affichageAide5" class="contener_colonne_basique">
      <IAround/>
    </div>

</template>
<script>
import IArecord from '@/components/IA/enregistrementUnite.vue'
import IAround from '@/components/IA/round.vue'
export default {
  name: 'IA',
  components: {
    IArecord,
    IAround
  },
  data () {
    return {
      affichageAide4: false,
      affichageAide5: false,
      affichageAide6: false
    }
  }
}
</script>
