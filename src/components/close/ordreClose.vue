<template>
    <div class="box_col" v-show="!ordreCharge && !ordreContact">
      <h3 class="sous_titre_3">Ordre ou statut du combat ?</h3>
      <img class="nav_style" src="@/images/ChargeOrdre.png" alt="Ordre charge" v-on:click="Vcharge" />
      <img class="nav_style" src="@/images/ContactStatuts.png" alt="Status Contact" v-on:click="Vcontact" />
    </div>
    <div class="box_col" v-if="ordreCharge || ordreContact">
      <h3 class="sous_titre_3">Vous avez choisi cet ordre :</h3>
      <img v-show="ordreCharge" class="ordre_simple" src="@/images/ChargeOrdre.png" alt="Ordre charge" />
      <img v-show="ordreContact" class="ordre_simple" src="@/images/ContactStatuts.png" alt="Status Contact" />
    </div>
    <div class="box_col" v-if="ordreCharge || ordreContact">
      <div id="conteneur_row_dice">
        <article class="conteneur_col">
          <h3 class="sous_titre_3">Type de dé de votre arme</h3>
          <button v-on:click="dice(6)">D6</button>
          <button v-on:click="dice(8)">D8</button>
          <button v-on:click="dice(10)">D10</button>
          <button v-on:click="dice(12)">D12</button>
          <button v-on:click="surP()">++</button>
        </article>
          <article class="conteneur_col">
            <h3 class="sous_titre_3">Puissance de l'arme</h3>
            <button v-on:click="PuissanceA(1)">1</button>
            <button v-on:click="PuissanceA(2)">2</button>
            <button v-on:click="PuissanceA(3)">3</button>
            <button v-on:click="PuissanceA(4)">4</button>
            <button v-on:click="PuissanceA(5)">5</button>
          </article>
        </div>
    </div>
  </template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ordreClose',
  data () {
    return {
    // shoot et donnéee armes
      shoot: 0,
      bonus: 0,
      // Ordre local
      ordreCharge: false,
      ordreContact: false,
      // Donnée arme local
      deCombat: 0,
      dePuissance: 0,
      plus: false
    }
  },
  computed: {
    ...mapState(['touche', 'puissance', 'dc', 'surpuissance', 'contact', 'charge'])
  },
  methods: {
    Vcharge () {
      this.ordreCharge = true
      this.$store.dispatch('receptionCharge', {
        charge: this.ordreCharge
      })
    },
    Vcontact () {
      this.ordreContact = true
      this.$store.dispatch('receptionContact', {
        contact: this.ordreContact
      })
    },
    dice (a) {
      this.deCombat = a
      this.$store.dispatch('receptionDice', {
        dc: this.deCombat
      })
    },
    PuissanceA (b) {
      if (this.ordreCharge) {
        this.dePuissance = b + 1
      } else {
        this.dePuissance = b
      }
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
