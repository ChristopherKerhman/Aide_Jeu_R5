<template>
  <header class="box_col">
      <h1 class="titre">Le coin des experts</h1>
      <h2 class="sous_titre">Aide de jeu pour R-5</h2>
      <p>
        Vous connaissez la difficulté ? La puissance de l'arme, le nombre de blessure qu'elle fait en cas de touche ? La sauvegarde de la cible ? Passez directement à la résolution.
      </p>
    <div class="conteneur_row">
      <button v-if="!revelatio" v-on:click="presentation">Ouvrir le menu</button>
      <button v-else v-on:click="presentation">Fermer le menu</button>
      <button v-on:click="retour">Remise à 0</button>
    </div>
  </header>
  <div v-if="revelatio">
  <article>
      <!--Alternative-->
      <div id="conteneur_row_dice">
        <article class="conteneur_col">
          <h3 class="sous_titre_3">Type de dé de votre arme</h3>
          <button v-on:click="dice(6)">D6</button>
          <button v-on:click="dice(8)">D8</button>
          <button v-on:click="dice(10)">D10</button>
          <button v-on:click="dice(12)">D12</button>
          <button v-on:click="relance">++</button>
        </article>
          <article class="conteneur_col">
            <h3 class="sous_titre_3">Puissance de l'arme</h3>
            <button v-on:click="Parme(1)">1</button>
            <button v-on:click="Parme(2)">2</button>
            <button v-on:click="Parme(3)">3</button>
            <button v-on:click="Parme(4)">4</button>
            <button v-on:click="Parme(5)">5</button>
          </article>
          </div>
    <h3 class="sous_titre_3">Armure de la cible</h3>
      <ul class="listRow">
        <li class="espace" v-for="bouclier in coteMaille" v-bind:key="bouclier"><button v-on:click="heaume(bouclier.valeur)">{{bouclier.des}}</button></li>
      </ul>
    <h3 class="sous_titre_3">difficulté</h3>
    <label>Difficulté pour toucher</label>
    <select v-model.number="touche">
      <option value="0">0+</option>
      <option value="1">1+</option>
      <option value="2">2+</option>
      <option value="3">3+</option>
      <option value="4" selected>4+</option>
      <option value="5">5+</option>
      <option value="6">6+</option>
      <option value="7">7+</option>
      <option value="8">8+</option>
      <option value="9">9+</option>
      <option value="10">10+</option>
      <option value="11">11+</option>
      <option value="11">12+</option>
    </select>
    <p>Arme sainte ?<input type="checkbox" v-model="sainte" /></p>
    <p>Arme divine ?<input type="checkbox" v-model="divine" /></p>
  </article>
</div>
  <article>
    <div id="conteneur_row_resolution">
      <button v-on:click="action">Action !</button>
      <button v-on:click="piste = []">Vider la piste</button>
    </div>
    <h4 class="sous_titre_3">Difficulté : {{touche}} +</h4>
      <h4 class="sous_titre_3">Caractéristique de l'Arme: {{dePuissance}} <span v-if="dc === 8">D8</span><span v-if="dc === 10">D10</span><span v-if="dc === 12">D12</span><span v-if="dc === 6">D6</span><span v-if="plus"> ++</span></h4>
    <h4 v-if="sauvegarde > 0" class="sous_titre_3">sauvegarde :<span v-if="sauvegarde === 2">3++</span><span v-else> {{sauvegarde}} +</span></h4>
    <h4 v-else class="sous_titre_3">Pas de sauvegarde active</h4>
    <div class="box_col">
      <p class="avertissement" v-if="banane">
        Vous avez oublier <span v-if="dePuissance === 0">la puissance de votre arme</span><span v-if="dePuissance === 0 && dc === 0"> et </span><span v-if="dc === 0">Le type de dé de l'arme</span>.
      </p>
        <p v-for="collector in piste" v-bind:key="collector">{{collector}}</p>
    </div>
  </article>
</template>
<script>
export default {
  name: 'expert',
  data () {
    return {
      // Affichage dans la page
      revelatio: true,
      banane: false,
      // Variable pour faire tourner l'application
      dePuissance: 0,
      dc: 0,
      plus: false,
      touche: 0,
      sauvegarde: 0,
      // Armure de la cible
      svg: 0,
      coteMaille: [
        { valeur: 0, des: 'Aucune sauvegarde', mod: 1 },
        { valeur: 6, des: '6+' },
        { valeur: 5, des: '5+' },
        { valeur: 4, des: '4+' },
        { valeur: 3, des: '3+' },
        { valeur: 2, des: '3++' }
      ],
      // Fin armure de la cible
      sainte: false,
      divine: false,
      bonusMagique: 0,
      piste: [],
      compteurCombat: 0
    }
  },
  methods: {
    presentation () {
      if (this.revelatio) {
        this.revelatio = false
      } else {
        this.revelatio = true
      }
    },
    dice (a) {
      this.dc = a
    },
    Parme (b) {
      this.dePuissance = b
    },
    relance () {
      if (this.plus) {
        this.plus = false
      } else {
        this.plus = true
      }
    },
    heaume (BOUCLIER) {
      this.sauvegarde = BOUCLIER
    },
    action () {
      if (this.dePuissance === 0 || this.dc === 0) {
        this.banane = true
      } else {
        this.banane = false
        // Préparation
        this.compteurCombat++
        this.piste.push(`Combat n°${this.compteurCombat}`)
        this.svg = this.sauvegarde
        // Bonus arme magique
        if (this.sainte) {
          this.bonusMagique = 1 + this.bonusMagique
        }
        if (this.divine) {
          this.bonusMagique = 2 + this.bonusMagique
        }
        for (let i = 1; i <= this.dePuissance; i++) {
          // Tirage des valeur aléatoire pour l'ensemble du combat
          let attaque = Math.floor((Math.random() * this.dc) + 1 + this.bonusMagique)
          const ATTAQUESP = Math.floor((Math.random() * this.dc) + 1 + this.bonusMagique)
          let d6 = Math.floor((Math.random() * 6) + 1)
          const SAUVEGARDESP = Math.floor((Math.random() * 6) + 1)
          console.log(attaque)
          // Prise en compte des sur-puissance (arme et armure)
          // Arme
          if (this.plus === true) {
            // On effectue une relance de faite selon le résultat
            if (attaque < ATTAQUESP) {
              attaque = ATTAQUESP
            }
          }
          // Armure
          if (this.sauvegarde === 2) {
            // On transforme la sauvegarde en 3++
            this.svg = 3
            // On effectue une relance de faite selon le résultat
            if (d6 < SAUVEGARDESP) {
              d6 = SAUVEGARDESP
            }
          }
          // Cas de la sauvegarde à 0
          // Création de la matrice de résultat
          if (attaque >= this.touche) {
            if (d6 >= this.svg) {
              if (this.svg === 0) {
                this.piste.push('Blessure(s)')
              } else {
                this.piste.push('Sauvegarde réussit')
              }
            } else {
              this.piste.push('Blessure(s)')
            }
          } else {
            this.piste.push('Touche manqué')
          }
        }
      }
    },
    retour () {
      location.reload()
    }
  }
}
</script>
