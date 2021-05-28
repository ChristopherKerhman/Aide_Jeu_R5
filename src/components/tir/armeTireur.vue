<template>

  <div id="conteneur_row_dice" v-if="affichageArme">
    <article class="conteneur_col">
      <h3 class="sous_titre_3">Type de dé de votre arme</h3>
      <button class="classique" v-on:click="dice(6)">D6</button>
      <button class="classique" v-on:click="dice(8)">D8</button>
      <button class="classique" v-on:click="dice(10)">D10</button>
      <button class="classique" v-on:click="dice(12)">D12</button>
      <button class="classique" v-on:click="surP()">++</button>
    </article>
      <article class="conteneur_col">
        <h3 class="sous_titre_3">Puissance de l'arme</h3>
        <button class="classique" v-on:click="PuissanceA(1)">1</button>
        <button class="classique" v-on:click="PuissanceA(2)">2</button>
        <button class="classique" v-on:click="PuissanceA(3)">3</button>
        <button class="classique" v-on:click="PuissanceA(4)">4</button>
        <button class="classique" v-on:click="PuissanceA(5)">5</button>
      </article>
    </div>
    <h4 class="sous_titre_3">Panneau caractéristique de l'arme</h4>
    <article class="conteneur_col">
    <div class="conteneur_row">
      <button class="classique" v-show="!ShowRS" v-on:click="RS(true)">Régle<br />spéciales</button><button class="classique" v-show="ShowRS" v-on:click="RS(false)">Fermer<br />règles spéciales</button>
      <button class="classique" v-show="DBRSpecial[12].valide" v-on:click="Mod(true)">Modifiable</button><button class="classique" v-show="isis" v-on:click="Mod(false)">Fermer<br />Modifiable</button>
    </div>
    <table v-show="ShowRS">
      <tr>
        <td>Règles spéciales</td>
        <td>Valide</td>
      </tr>
      <tr v-for="fou in Rreglespecial" v-bind:key="fou">
        <td>{{fou.RS}}</td>
        <td><input type="checkbox" v-model="fou.valide" /></td>
      </tr>
    </table>
  </article>
  <article class="conteneur_col" v-if="DBRSpecial[12].valide">
    <table v-show="isis">
      <tr>
        <td>Modification</td>
        <td>Valide</td>
      </tr>
      <tr v-for="mat in Rmodifiable" v-bind:key="mat">
        <td>{{mat.Description}}</td>
        <td><input type="checkbox" v-model="mat.valide" /></td>
      </tr>
    </table>
  </article>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'armeTireur',
  data () {
    return {
      // navigation
      isis: false,
      ShowRS: false,
      affichageArme: true,
      tirLobe: false,
      caractWeapon: true,
      // Message d'avertissement
      message: false,
      // variable pour collection des caractéristique de l'arme
      deCombat: 0,
      dePuissance: 0,
      plus: false,
      Rreglespecial: [],
      Rmodifiable: [],
      shoot: 0
    }
  },
  computed: {
    ...mapState(['DBRSpecial', 'modifiable', 'touche', 'dc', 'puissance', 'surpuissance', 'bonusSainte', 'bonusDivine'])
  },
  updated () {
    this.$store.dispatch('receptionRS', {
      DBRSpecial: this.Rreglespecial
    })
    this.$store.dispatch('receptionMod', {
      modifiable: this.Rmodifiable
    })
    if (this.DBRSpecial[9].valide && !this.tirLobe) {
      const TEL = 6
      this.tirLobe = true
      this.$store.dispatch('receptionTouche', {
        touche: TEL
      })
    }
    if (!this.DBRSpecial[9].valide && this.tirLobe) {
      this.shoot = this.touche - 2
      this.tirLobe = false
      this.$store.dispatch('receptionTouche', {
        touche: this.shoot
      })
    }
  },
  methods: {
    affichageRS () {
      // Gestion de la disparition de paramètre des armes.
      if (this.affichageArme) {
        this.affichageArme = false
      } else {
        this.affichageArme = true
      }
    },
    Mod (S) {
      this.isis = S
    },
    RS (K) {
      this.ShowRS = K
      this.Rreglespecial = this.DBRSpecial
      this.Rmodifiable = this.modifiable
      this.affichageRS()
    },
    updateMod () {
      this.isis = false
    },
    dice (a) {
      this.deCombat = a
      this.$store.dispatch('receptionDice', {
        dc: this.deCombat
      })
    },
    PuissanceA (b) {
      this.dePuissance = b
      this.$store.dispatch('receptionPuissance', {
        puissance: this.dePuissance
      })
    },
    surP () {
      if (this.surpuissance) {
        this.plus = false
        this.$store.dispatch('receptionSurP', {
          surpuissance: this.plus
        })
      } else {
        this.plus = true
        this.$store.dispatch('receptionSurP', {
          surpuissance: this.plus
        })
      }
    }
  }
}
</script>
