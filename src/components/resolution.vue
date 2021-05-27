<template>
<article>
  <ul class="listBox">
    <li v-show="sauvegarde === 3">Armure endurante, plusieurs touches ne passe pas la cible en statut "tête baissé".</li>
    <li v-show="modifiable[4].valide">Munition explosive : cible passe en baissé la tête en cas de blessure.</li>
    <li v-show="DBRSpecial[0].valide">L'arme a la règle spéciale "surprise", l'unité prise pour cible passe automatiquement en "tête baissée".</li>
    <li v-show="DBRSpecial[6].valide">Tir en rafale, vous pouvez répartir chaque blessures sur 1 ou plusieurs unités</li>
    <li v-show="DBRSpecial[10].valide || DBRSpecial[11].valide">Arme divine ou sainte.<button v-if="bonusMagique === 0" v-on:click="magique">Préparation armes magique</button></li>
  </ul>
  <h4 v-if="sauvegarde > 0" class="sous_titre_3">sauvegarde : {{sauvegarde}} +</h4>
  <h4 v-else class="sous_titre_3">Pas de sauvegarde active</h4>
  <button v-on:click="action">Action !</button>
  <div class="box_col">
      <p v-for="collector in piste" v-bind:key="collector">{{collector}}</p>
  </div>
</article>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'resolution',
  data () {
    return {
      svg: 0,
      piste: [],
      compteurCombat: 0,
      bonusMagique: 0
    }
  },
  computed: {
    ...mapState(['touche', 'puissance', 'dc', 'surpuissance', 'sauvegarde', 'modifiable', 'DBRSpecial'])
  },
  methods: {
    magique () {
      if (this.DBRSpecial[10].valide) {
        this.bonusMagique = 1 + this.bonusMagique
      }
      if (this.DBRSpecial[11].valide) {
        this.bonusMagique = 2 + this.bonusMagique
      }
    },
    action () {
      // Préparation
      this.compteurCombat++
      this.piste.push(`Combat n°${this.compteurCombat}`)
      this.svg = this.sauvegarde
      let blessure = 1
      if (this.modifiable[4].valide) {
        blessure = 2
      }
      for (let i = 1; i <= this.puissance; i++) {
        // Tirage des valeur aléatoire pour l'ensemble du combat
        let attaque = Math.floor((Math.random() * this.dc) + 1 + this.bonusMagique)
        const ATTAQUESP = Math.floor((Math.random() * this.dc) + 1 + this.bonusMagique)
        let d6 = Math.floor((Math.random() * 6) + 1)
        const SAUVEGARDESP = Math.floor((Math.random() * 6) + 1)
        // Prise en compte des sur-puissance (arme et armure)
        // Arme
        if (this.surpuissance === true) {
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
              const hurt = 1 * blessure
              this.piste.push(hurt + ' blessure(s)')
            } else {
              this.piste.push('Sauvegarde réussit')
            }
          } else {
            const hurt = 1 * blessure
            this.piste.push(hurt + ' blessure(s)')
          }
        } else {
          this.piste.push('Touche manqué')
        }
      }
    }
  }
}
</script>
