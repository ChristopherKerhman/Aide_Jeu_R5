<template>
  <article>
    <h4 class="sous_titre_3">Situation de l'adversaire.</h4>
    <article>
      <h3 class="sous_titre_3">Armure de la cible</h3>
      <ul class="listRow" v-if="isis">
        <li class="espace" v-for="bouclier in coteMaille" v-bind:key="bouclier"><button class="classique" v-on:click="sav(bouclier.valeur)">{{bouclier.des}}</button></li>
      </ul>
    </article>
    <table>
      <tr>
        <td>Situation du combat</td>
        <td>Valide</td>
      </tr>
      <tr v-for="coupe in situationCC" v-bind:key="coupe">
        <td v-if="!coupe.valide">{{coupe.etat}}</td>
        <td v-if="coupe.valide" class="ligth">{{coupe.etat}}</td>
          <td><button class="classique" v-if="!coupe.valide" v-on:click="trans(coupe.modificateur, coupe.id)">Off</button>
            <button v-if="coupe.valide" class="button_active" v-on:click="trans(- coupe.modificateur, coupe.id)">On</button></td>
      </tr>
    </table>
    <div v-if="situationCC[0].valide || situationCC[5].valide || dc < touche" class="box_col">
      <h4 v-if="situationCC[0].valide" class="avertissement">Combat impossible l'adversaire est trop loin.</h4>
      <h4 v-if="situationCC[5].valide" class="avertissement">Combat impossible l'adversaire est derrière un couvert lourd.</h4>
      <h4 v-if="dc < touche" class="avertissement">Combat impossible le dé de combat de votre figurine est trop faible pour toucher.</h4>
      <button class="button-two" v-on:click="retour">Retour</button>
    </div>
  </article>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'situationClose',
  data () {
    return {
      // Garde-fou SLAYER !
      fortune: false,
      // shoot et donnéee armes
      bonus: 0,
      svg: 0,
      modTir: 0,
      situationCC: [
        {
          id: 0,
          etat: 'L\'attaquant est à plus de 2 pouces de la cible.',
          valide: false,
          modificateur: 0
        },
        {
          id: 1,
          etat: 'L\'attaquant est en condition de combat dégradé, nuit, pluie.',
          valide: false,
          modificateur: 1
        },
        {
          id: 2,
          etat: 'L\'adversaire est en possession d\'une arme de défense.',
          valide: false,
          modificateur: 2
        },
        {
          id: 3,
          etat: 'L\'adversaire est petit.',
          valide: false,
          modificateur: 1
        },
        {
          id: 4,
          etat: 'L\'adversaire est à portée derrière un couvert léger.',
          valide: false,
          modificateur: 1
        },
        {
          id: 5,
          etat: 'L\'adversaire est à portée derrière un couvert lourd.',
          valide: false,
          modificateur: 0
        },
        {
          id: 6,
          etat: 'L\'adversaire est grand ou est un véhicule.',
          valide: false,
          modificateur: -1
        }
      ],
      coteMaille: [
        { valeur: 0, des: 'Aucune sauvegarde', mod: 1 },
        { valeur: 6, des: '6+', mod: 1 },
        { valeur: 5, des: '5+', mod: 0 },
        { valeur: 4, des: '4+', mod: 0 },
        { valeur: 3, des: '3+', mod: 1 },
        { valeur: 2, des: '3++', mod: 1 }
      ],
      isis: true
    }
  },
  computed: {
    ...mapState(['touche', 'dc', 'DBRSpecialCC', 'sauvegarde', 'DBRSpecial'])
  },
  methods: {
    record () {
      this.modTir = this.touche + this.modTir
      this.$store.dispatch('receptionTouche', {
        touche: this.modTir
      })
    },
    trans (TCH, CADDY) {
      this.modTir = TCH
      if (this.situationCC[CADDY].valide) {
        this.situationCC[CADDY].valide = false
      } else {
        this.situationCC[CADDY].valide = true
      }
      this.record()
    },
    recordsvg () {
      this.$store.dispatch('receptionSauvegarde', {
        sauvegarde: this.svg
      })
    },
    sav (CASQUE) {
      this.isis = false
      this.svg = CASQUE
      if (this.svg === 0) {
        this.modTir = 1
        this.record()
      }
      if (this.svg === 6) {
        this.modTir = 1
        this.record()
      }
      if (this.svg === 3) {
        this.modTir = 1
        this.record()
      }
      if (this.svg === 2) {
        this.modTir = 1
        this.record()
      }
      // Prise en compte perce-armure & anti-véhicule
      if (this.DBRSpecial[4].valide && this.svg !== 0) {
        this.svg = this.svg + 1
      }
      if (this.DBRSpecial[5].valide && this.svg !== 0) {
        this.svg = this.svg + 2
      }
      // Enregistrement de la sauvegarde
      this.recordsvg()
    },
    retour () {
      location.reload()
    }
  }
}
</script>
