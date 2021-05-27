<template>
  <div class="box_col">
<section class="conteneur_adj">
  <nav>
    <span v-if="interupteur">Affiche les aides de jeu en cliquant sur les titres.</span><span v-else>Clique sur le titre pour le retour au menu d'aide.</span>
    <div class="conteneur_row" v-if="interupteur">
    <h4 v-on:click="tour" class="sous_titre_3 lienNav">Tour de jeu Afficher</h4>&nbsp;
    <h4 v-on:click="tir" class="sous_titre_3 lienNav">Tir</h4>&nbsp;
    <h4 v-on:click="commandement" class="sous_titre_3 lienNav">Les pions commandements</h4>&nbsp;
    <h4 v-on:click="ordre" class="sous_titre_3 lienNav">Les différents ordres</h4>&nbsp;
    <h4 class="sous_titre_3 lienNav" v-on:click="contact">Contact</h4>
    </div>
  </nav>
  <article v-if="tourDeJeu">
        <div class="box_col">
      <h3 class="sous_titre_3 lienNav" v-on:click="tour">Tour de jeu</h3>
        <ul class="listBox">
          <li><strong>Début du tour</strong></li>
          <li><strong>Phase d'initiative :</strong> Le plus haut de jet de DQM entre les deux camps obtient l'initiative.</li>
          <li><strong>Phase de contact :</strong> Résolution de tous les statuts "contact".</li>
          <li><strong>Phase d'ordre :</strong> Chaque camps active ces unités les unes après les autres en alternance.</li>
          <li><strong>Phase de regroupement :</strong> Une fois toute les unités activées, on test si les unités en statut "Tête baissée" le reste, un jet de DQM difficulté 4 permet d'éliminer le statut "tête baissée".</li>
          <li><strong>Fin du tour</strong></li>
        </ul>
      </div>
  </article>
  <article v-if="Atir">
      <div class="box_col">
      <h3 class="sous_titre_3 lienNav" v-on:click="tir">Tir</h3>
        <p>
          Les phases pour déclarer un tir ?
        </p>
        <ul class="listBox">
          <li>1 : Vérifier la ligne de vue.</li>
          <li>2 : Si 3 couverts sont entre le tireur et la cible, celle-ci est invisible. Aucun tir n'est possible.</li>
          <li>3 : Vérifier la portée de l'arme, si elle ne peut pas atteindre la cible, le tir est impossible. (voir règles optionnel)</li>
          <li>4 : Si la cible est dans la zone de portée l'arme, elle peut toucher.</li>
          <li>5 : Caclucler la difficulté de tir.</li>
          <li>6 : La cible effectue le jet de sauvegard, si il réussi, la cible n'est pas hors combat. Sinon, perte de 1 point de vie. Les cible à 0 point de vie sont retiré du jeu immédiatement. Elles sont hors combat.</li>
          <li>7 : Plus de trois touches sans être hors combat passe la cible automatiquement en "tête baissée".</li>
        </ul>
      </div>
  </article>
  <article v-if="Acommandement">
    <div class="box_col">
      <h3 class="sous_titre_3 lienNav" v-on:click="commandement">Utilisation des pions de commandement</h3>
        <ul class="listBox">
          <li>Réactivé une unité qui a le status "tête baissée".</li>
          <li>Relancer un jet de dé jugé raté.</li>
          <li>Gagner automatiquement l'initiative pour le tour</li>
        <h5 class="sous_titre_3">Utilisation des pions de commandement pour les officiers suppérieurs</h5>
          <li>Rendre "invisible" son unité le temps d'un tour si celle-ci est derrière un couvert lourd.</li>
          <li>Un officier supérieur peut réclamer en échange d'un pion commandement d'une support tactique extérieur sous forme d'un tir d'artillerie (gros gabarit / puissance D8) une fois par partie à l'emplacement de son choix (déterminer en secret par le joueur).</li>
          <li>Un officier suppérieur peut récupérer un pion commandement dépensé une fois par partie.</li>
          <li>Utilisation des pions commandment par les Mages & Sorcier : 1 pion commandement par niveau de sort magique lancé.</li>
        </ul>
      </div>
  </article>
  <article v-if="Aordre">
      <div class="box_col">
    <h3 class="sous_titre_3 lienNav" v-on:click="ordre">Les ordres</h3>
        <ul class="listBox">
          <li><img class="ordre_simple" src="@/images/CourseOrdres.png" alt="Ordre Course" /> Ordre qui permet de franchir le maximum de son mouvement, sans le bonus de 1d4 pouces.</li>
          <li><img class="ordre_simple" src="@/images/ChargeOrdre.png" alt="Ordre charge" /> Ordre qui permet de vous déplacer du maximum de son mouvement et ajoute un bonus de +1d4. Vous êtes pris pour cible par l'unité que vous chargez.</li>
          <li><img class="ordre_simple" src="@/images/MouvementTactiqueOrdre.png" alt="Status Contact" /> Ordre qui permet de se déplacer de son mouvement tactique et tirer.</li>
          <li><img class="ordre_simple" src="@/images/CouvertureOrdre.png" alt="Status tête baissée" /> Ordre qui permet de tirer sur des unités qui passent dans le champs de vision de l'unité sous l'ordre couverture.
          L'unité est immobile, chaque nouveau tir ajoute +1 à la difficulté.</li>
          <li><img  class="ordre_simple" src="@/images/TirAjusteOrdre.png" alt="Status attente" /> Ordre qui permet de prendre pour cible une unité de maniére précise, -1 à la difficulté de tir. L'unité est immobile.</li>
        <h3 class="sous_titre_3 lienNav" v-on:click="ordre">Les status</h3>
          <li><img class="ordre_simple" src="@/images/ContactStatuts.png" alt="Status Contact" /> L'unité est en combat de mêlée.</li>
          <li><img class="ordre_simple" src="@/images/AttenteOrdre.png" alt="Status attente" /> L'unité est en attente d'ordre, elle pourra agir en même temps qu'une autre de vos unités, en coordination.</li>
          <li><img class="ordre_simple" src="@/images/TeteBaisseeStatuts.png" alt="Status tête baissée" /> Votre unité est immobile, sous le feu enemis ou choqué par les dommages qu'elle subit.</li>
        </ul>
      </div>
  </article>
  <article v-if="Acontact">
    <div class="box_col">
      <h3 class="sous_titre_3 lienNav" v-on:click="contact">Contact</h3>
        <ul class="listBox">
          <li>Les unités sous le statut contact à moins de 2 pouces l'une de l'autre peuvent combattre.</li>
          <li>Les combats sont simultannées. Retirer les pertes en même temps.</li>
          <li>Calculer la difficulté de manière habituel.</li>
          <li>On retire les unités qui ont 0 point de vie à la fin des combats.</li>
        </ul>
      </div>
  </article>
</section>
</div>
</template>
<script>
export default {
  name: 'AidedeJeu',
  data () {
    return {
      tourDeJeu: false,
      Atir: false,
      Acommandement: false,
      Aordre: false,
      Acontact: false,
      interupteur: true
    }
  },
  methods: {
    bascule () {
      if (this.interupteur) {
        this.interupteur = false
      } else {
        this.interupteur = true
      }
    },
    tour () {
      this.bascule()
      if (!this.tourDeJeu) {
        this.tourDeJeu = true
      } else {
        this.tourDeJeu = false
      }
    },
    tir () {
      this.bascule()
      if (!this.Atir) {
        this.Atir = true
      } else {
        this.Atir = false
      }
    },
    commandement () {
      this.bascule()
      if (!this.Acommandement) {
        this.Acommandement = true
      } else {
        this.Acommandement = false
      }
    },
    ordre () {
      this.bascule()
      if (!this.Aordre) {
        this.Aordre = true
      } else {
        this.Aordre = false
      }
    },
    contact () {
      this.bascule()
      if (!this.Acontact) {
        this.Acontact = true
      } else {
        this.Acontact = false
      }
    }
  }
}
</script>
