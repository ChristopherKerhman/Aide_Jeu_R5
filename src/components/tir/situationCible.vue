<template>
    <article>
      <h3 class="sous_titre_3">La situation de la cible au moment du tir ?</h3>
      <h3 class="sous_titre_3">Armure de la cible</h3>
      <ul class="listRow" v-if="isis">
        <li class="espace" v-for="bouclier in coteMaille" v-bind:key="bouclier"><button v-on:click="sav(bouclier.valeur)">{{bouclier.des}}</button></li>
      </ul>
      <table>
        <tr v-if="DBRSpecial[8].valide">
          <td colspan="2" class="cellule_centre">Impossible de se cacher derrière un couvert lourd, le tireur possède la modification "Gros calibre".</td>
        </tr>
          <tr v-else>
            <td v-if="!situation1">La cible est derrière un couvert lourd et/ou dans un champs de force ?</td>
              <td v-else class="ligth">La cible est derrière un couvert lourd et/ou dans un champs de force.</td>
            <td class="reponse"><button  v-show="!situation1" v-on:click="heavyCover(2)">Off</button><button v-if="situation1" class="button_active" v-on:click="heavyCover(-2)">On</button></td>
          </tr>
          <tr v-if="DBRSpecial[8].valide || DBRSpecial[8].valide">
            <td colspan="2" class="cellule_centre">Impossible de se cacher derrière un couvert léger, le tireur possède la modification <span v-if="DBRSpecial[8].valide">"Gros calibre"</span><span v-if="DBRSpecial[7].valide">"Visée sûre"</span>.</td>
          </tr>
          <tr v-else>
            <td v-if="!situation2">La cible est derrière un couvert léger ou avec un dispositif technologique ou magique la rendant invisible ?</td>
            <td v-else class="ligth">La cible est derrière un couvert léger ou avec un dispositif technologique ou magique la rendant invisible.</td>
            <td class="reponse"><button  v-show="!situation2" v-on:click="ligthCover(1)">Off</button><button v-if="situation2" class="button_active" v-on:click="ligthCover(-1)">On</button></td>
          </tr>
          <tr v-if="modifiable[0].valide || situation7 || situation9">
            <td colspan="2" class="cellule_centre">
              <span v-if="modifiable[0].valide">L'arme du tireur posséde un viseur "holographique". Le bonus "mouvement tactique" ne s'applique pas.</span>
              <span v-if="situation7">La cible est en course ou en charge.</span>
              <span v-if="situation9">La cible est immobile.</span>
            </td>
          </tr>
          <tr v-else>
            <td v-if="!situation3">La cible est en mouvement tactique (l'ordre au moment du tir) ?</td>
            <td v-else class="ligth">La cible est en mouvement tactique.</td>
              <td class="reponse"><button  v-show="!situation3" v-on:click="mouvementTactique(1)">Off</button><button v-if="situation3" class="button_active"  v-on:click="mouvementTactique(-1)">On</button></td>
          </tr>
          <tr v-if="situation9">
            <td colspan="2" class="cellule_centre">La cible est immobile.</td>
          </tr>
          <tr v-else>
            <td v-if="!situation4">La cible est en vol au moment du tir ?</td>
            <td v-else class="ligth">La cible est en vol au moment du tir.</td>
            <td class="reponse"><button  v-show="!situation4" v-on:click="vol(1)">Off</button><button v-if="situation4" class="button_active" v-on:click="vol(-1)">On</button></td>
          </tr>
          <tr v-if="situation8">
            <td colspan="2" class="cellule_centre">La cible est géante ou un véhicule.</td>
          </tr>
          <tr v-else>
            <td v-if="!situation5">La cible est de petite taille ?</td>
            <td v-else class="ligth">La cible est de petite taille</td>
              <td class="reponse"><button  v-show="!situation5" v-on:click="petite(1)">Off</button><button v-if="situation5" class="button_active" v-on:click="petite(-1)">On</button></td>
          </tr>
          <tr>
            <td v-if="!situation6">La cible a un bouclier balistique ?</td>
            <td v-else class="ligth">La cible a un bouclier balistique ?</td>
            <td class="reponse"><button  v-show="!situation6" v-on:click="bouclier(1)">Off</button><button v-if="situation6" class="button_active" v-on:click="bouclier(-1)">On</button></td>
          </tr>
          <tr v-if="situation3 || situation9">
            <td colspan="2" class="cellule_centre">
              <span v-if="situation3">La cible est en mouvement tactique.</span>
              <span v-if="situation9">La cible est immobile.</span>
            </td>
          </tr>
          <tr v-else>
            <td v-if="!situation7">La cible est en course ou en charge ?</td>
            <td v-else class="ligth">La cible est en course ou en charge ?</td>
            <td class="reponse"><button  v-show="!situation7" v-on:click="course (-1)">Off</button><button v-if="situation7" class="button_active" v-on:click="course (1)">On</button></td>
          </tr>
          <tr v-if="situation5">
            <td colspan="2" class="cellule_centre">La figurine est petite.</td>
          </tr>
          <tr v-else>
            <td v-if="!situation8">La cible est de grande taille ou un véhicule ?</td>
            <td v-else class="ligth">La cible est de grande taille ou un véhicule.</td>
              <td class="reponse"><button  v-show="!situation8" v-on:click="vehicule(-1)">Off</button><button v-if="situation8" class="button_active" v-on:click="vehicule(1)">On</button></td>
          </tr>
          <tr v-if="situation3 || situation4 || situation7">
            <td colspan="2" class="cellule_centre">la cible est en mouvement.</td>
          </tr>
          <tr v-else>
            <td v-if="!situation9">La cible est immobile (sans ordre, ordre couverture, tir ajusté, tête baissée, contact) ? <span v-if="modifiable[1].valide">Arme équipé d'une lunette de visée</span></td>
            <td v-else class="ligth">La cible est immobile (sans ordre, ordre couverture, tir ajusté, tête baissée, contact). <span v-if="modifiable[1].valide">Arme équipé d'une lunette de visée</span></td>
              <td class="reponse"><button  v-show="!situation9" v-on:click="stop">Off</button><button v-if="situation9" class="button_active" v-on:click="stop">On</button></td>
          </tr>
          <tr v-if="modifiable[2].valide || modifiable[3].valide">
            <td colspan="2" class="cellule_centre">
              <span v-if="modifiable[2].valide">Arme du tireur équipé d'une lampe tactique.</span>
              <span v-if="modifiable[3].valide">Arme du tireur équipé d'un pointeur laser.</span>
            </td>
          </tr>
          <tr v-else>
            <td v-if="!situation10">Condition de combat dégradé ? (nuit, pluie, intérieur d'un batiment ou d'une ruine)</td>
            <td v-else class="ligth">Condition de combat dégradé.</td>
            <td class="reponse"><button  v-show="!situation10" v-on:click="pluie(1)">Off</button><button v-if="situation10" class="button_active" v-on:click="pluie(-1)">On</button></td>
          </tr>
      </table>
    </article>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'situationCible',
  data () {
    return {
      // Gestion des situation
      situation1: false,
      situation2: false,
      situation3: false,
      situation4: false,
      situation5: false,
      situation6: false,
      situation7: false,
      situation8: false,
      situation9: false,
      situation10: false,
      message: false,
      // Gestion de la difficulté
      modTir: 0,
      shoot: 0,
      // Gestion de la Sauvegarde
      coteMaille: [
        { valeur: 0, des: 'Aucune sauvegarde', mod: 1 },
        { valeur: 6, des: '6+', mod: 1 },
        { valeur: 5, des: '5+', mod: 0 },
        { valeur: 4, des: '4+', mod: 0 },
        { valeur: 3, des: '3+', mod: 1 },
        { valeur: 2, des: '3++', mod: 1 }
      ],
      svg: 0,
      isis: true
    }
  },
  computed: {
    ...mapState(['touche', 'DBRSpecial', 'modifiable', 'sauvegarde', 'DBRSpecialArmure'])
  },
  methods: {
    record () {
      this.shoot = this.touche + this.modTir
      this.$store.dispatch('receptionTouche', {
        touche: this.shoot
      })
    },
    recordsvg () {
      this.$store.dispatch('receptionSauvegarde', {
        sauvegarde: this.svg
      })
    },
    // Gestion des règles spécial
    heavyCover (HC) {
      this.modTir = HC
      if (this.situation1) {
        this.situation1 = false
      } else {
        this.situation1 = true
      }
      this.record()
    },
    ligthCover (LC) {
      this.modTir = LC
      if (this.situation2) {
        this.situation2 = false
      } else {
        this.situation2 = true
      }
      this.record()
    },
    mouvementTactique (MT) {
      this.modTir = MT
      if (this.situation3) {
        this.situation3 = false
      } else {
        this.situation3 = true
      }
      this.record()
    },
    vol (FLY) {
      this.modTir = FLY
      if (this.situation4) {
        this.situation4 = false
      } else {
        this.situation4 = true
      }
      this.record()
    },
    petite (LITTLE) {
      this.modTir = LITTLE
      if (this.situation5) {
        this.situation5 = false
      } else {
        this.situation5 = true
      }
      this.record()
    },
    bouclier (SHIELD) {
      this.modTir = SHIELD
      if (this.situation6) {
        this.situation6 = false
      } else {
        this.situation6 = true
      }
      this.record()
    },
    course (RUN) {
      this.modTir = RUN
      if (this.situation7) {
        this.situation7 = false
      } else {
        this.situation7 = true
      }
      this.record()
    },
    vehicule (GIANT) {
      this.modTir = GIANT
      if (this.situation8) {
        this.situation8 = false
      } else {
        this.situation8 = true
      }
      this.record()
    },
    stop () {
      if (!this.situation9) {
        if (this.modifiable[1].valide) {
          this.modTir = -2
        } else {
          this.modTir = -1
        }
      } else {
        if (this.modifiable[1].valide) {
          this.modTir = 2
        } else {
          this.modTir = 1
        }
      }
      if (this.situation9) {
        this.situation9 = false
      } else {
        this.situation9 = true
      }
      this.record()
    },
    pluie (RAIN) {
      if (this.situation10) {
        this.situation10 = false
      } else {
        this.situation10 = true
      }
      if (this.modifiable[2].valide || this.modifiable[3].valide) {
        this.modTir = 0
      } else {
        this.modTir = RAIN
      }
      this.record()
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
    }
  }
}
</script>
