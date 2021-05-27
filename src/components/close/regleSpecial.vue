<template>
  <article>
    <h3 class="sous_titre_3">Règles spéciales qui influencent le combat.</h3>
    <table>
      <tr>
        <td class="reponse" colspan="2"><h5 class="sous_titre_3">Règles spéciales armes de tir utilisées en mêlée</h5></td>
      </tr>
      <tr>
        <td>{{DBRSpecial[0].RS}}</td><td class="reponse"><input type="checkbox" v-model="DBRSpecial[0].valide" /></td>
      </tr>
      <tr>
        <td>{{DBRSpecial[4].RS}}</td><td class="reponse"><input type="checkbox" v-model="DBRSpecial[4].valide" /></td>
      </tr>
      <tr>
        <td>{{DBRSpecial[5].RS}}</td><td class="reponse"><input type="checkbox" v-model="DBRSpecial[5].valide" /></td>
      </tr>
      <tr>
        <td>{{DBRSpecial[6].RS}}</td><td class="reponse"><input type="checkbox" v-model="DBRSpecial[6].valide" /></td>
      </tr>
      <tr>
        <td>{{DBRSpecial[10].RS}}</td><td class="reponse"><input type="checkbox" v-model="DBRSpecial[10].valide" /></td>
      </tr>
      <tr>
        <td>{{DBRSpecial[11].RS}}</td><td class="reponse"><input type="checkbox" v-model="DBRSpecial[11].valide" /></td>
      </tr>
      <tr>
        <td>{{modifiable[4].Description}}</td><td class="reponse"><input type="checkbox" v-model="modifiable[4].valide" /></td>
      </tr>
      <tr>
        <td class="reponse" colspan="2"><h5 class="sous_titre_3">Règles spéciales armes de mêlée</h5></td>
      </tr>
      <tr>
        <td>{{optionM[0].Description}}</td><td class="reponse"><input type="checkbox" v-model="optionM[0].valide" /></td>
      </tr>
      <tr>
        <td>{{optionM[1].Description}}</td><td class="reponse"><input type="checkbox" v-model="optionM[1].valide" /></td>
      </tr>
      <tr>
        <td v-if="!situation1">Petite arme ?</td>
        <td v-else class="ligth">Petite arme</td>
        <td class="reponse"><button  v-show="!situation1" v-on:click="petiteArme(1)">Off</button><button v-if="situation1" class="button_active" v-on:click="petiteArme(-1)">On</button></td>
      </tr>

    </table>
  </article>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'regleSpecial',
  data () {
    return {
      // Affichage de la page
      situation1: false,
      // Variable
      modTir: 0
    }
  },
  computed: {
    ...mapState(['optionM', 'DBRSpecialCC', 'DBRSpecial', 'modifiable', 'touche'])
  },
  methods: {
    record () {
      this.shoot = this.touche + this.modTir
      this.$store.dispatch('receptionTouche', {
        touche: this.shoot
      })
    },
    petiteArme (PW) {
      this.modTir = PW
      if (this.situation1) {
        this.situation1 = false
      } else {
        this.situation1 = true
      }
      this.record()
    }
  }
}
</script>
