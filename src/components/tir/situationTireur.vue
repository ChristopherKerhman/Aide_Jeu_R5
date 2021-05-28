<template>
  <article>
      <h3 class="sous_titre_3">La situation du tireur au moment du tir ?</h3>
      <table>
        <tr>
          <td v-if="!situation1">Le tireur est chargé par l'unité qu'il vise ?</td>
          <td v-else class="ligth">Le tireur est chargé par l'unité qu'il vise.</td>
          <td class="reponse"><button class="classique" v-show="!situation1" v-on:click="charge(3)">Off</button><button v-if="situation1" class="button_active" v-on:click="charge(-3)">On</button></td>
        </tr>
        <tr>
          <td v-if="!situation2">Le tireur cible une figurine en particulier dans une unité de plus de une figurine ?</td>
          <td v-else class="ligth">Le tireur cible une figurine en particulier dans une unité de plus de une figurine.</td>
          <td class="reponse"><button class="classique" v-show="!situation2" v-on:click="viser(1)">Off</button><button v-if="situation2" class="button_active" v-on:click="viser(-1)">On</button></td>
        </tr>
        <tr>
          <td v-if="!situation3">Le tireur est derrière un couvert léger ou lourd ou géner par une figurine allié ?</td>
          <td v-else class="ligth">Le tireur est derrière un couvert léger ou lourd ou géner par une figurine allié.</td>
          <td class="reponse"><button class="classique" v-show="!situation3" v-on:click="underCover(1)">Off</button><button v-if="situation3" class="button_active" v-on:click="underCover(-1)">On</button></td>
        </tr>
        <tr>
          <td v-if="!situation4">Le tireur est en vol ou à bord d'un véhicule (ou les deux) ?</td>
          <td v-else class="ligth">Le tireur est en vol ou à bord d'un véhicule (ou les deux).</td>
          <td class="reponse"><button class="classique" v-show="!situation4" v-on:click="deplacement(1)">Off</button><button v-if="situation4" class="button_active" v-on:click="deplacement(-1)">On</button></td>
        </tr>
        <tr>
          <td v-if="!situation5">Le tireur est surélevé par rapport à la cible ?</td>
          <td v-else class="ligth">Le tireur est surélevé par rapport à la cible.</td>
          <td class="reponse"><button class="classique" v-show="!situation5" v-on:click="domination(-1)">Off</button><button v-if="situation5" class="button_active" v-on:click="domination(+1)">On</button></td>
        </tr>
      </table>
  </article>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'situationTireur',
  data () {
    return {
      modTir: 0,
      shoot: 0,
      situation1: false,
      situation2: false,
      situation3: false,
      situation4: false,
      situation5: false
    }
  },
  computed: {
    ...mapState(['touche'])
  },
  methods: {
    record () {
      this.shoot = this.touche + this.modTir
      this.$store.dispatch('receptionTouche', {
        touche: this.shoot
      })
    },
    charge (OC) {
      this.modTir = OC
      if (this.situation1) {
        this.situation1 = false
      } else {
        this.situation1 = true
      }
      this.record()
    },
    // Pause jusque demain
    viser (VS) {
      this.modTir = VS
      if (this.situation2) {
        this.situation2 = false
      } else {
        this.situation2 = true
      }
      this.record()
    },
    underCover (UC) {
      this.modTir = UC
      if (this.situation3) {
        this.situation3 = false
      } else {
        this.situation3 = true
      }
      this.record()
    },
    deplacement (DP) {
      this.modTir = DP
      if (this.situation4) {
        this.situation4 = false
      } else {
        this.situation4 = true
      }
      this.record()
    },
    domination (DOM) {
      this.modTir = DOM
      if (this.situation5) {
        this.situation5 = false
      } else {
        this.situation5 = true
      }
      this.record()
    }
  }
}
</script>
