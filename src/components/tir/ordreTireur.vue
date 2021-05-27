<template>
  <article>
    <div>
        <div v-show="!MouvT && !Couv && !TirAj" class="conteneur_flex">
            <h3 class="sous_titre_3">Ordres qui permettent de tirer</h3>
            <figure>
            <img  class="nav_style" src="@/images/MouvementTactiqueOrdre.png" alt="Status Contact" v-on:click="confirmation1(0)" title="Tir avant mouvement" />
            <figcaption>Tir avant mouvement</figcaption>
            </figure>
            <figure>
            <img  class="nav_style" src="@/images/MouvementTactiqueOrdre.png" alt="Status Contact" v-on:click="confirmation1(1)" title="Tir avant mouvement" />
            <figcaption>Tir en déplacement à moins de 3 pouces</figcaption>
            </figure>
            <figure>
            <img  class="nav_style" src="@/images/MouvementTactiqueOrdre.png" alt="Status Contact" v-on:click="confirmation1(2)" title="Tir avant mouvement" />
            <figcaption>Tir  en déplacement de plus 3 pouces</figcaption>
            </figure>
            <figure>
          <img  class="nav_style" src="@/images/CouvertureOrdre.png" alt="Status tête baissée" v-on:click="confirmation2" />
          <figcaption>Ordre de couverture</figcaption>
            </figure>
          <figure>
            <img  class="nav_style" src="@/images/TirAjusteOrdre.png" alt="Status attente" v-on:click="confirmation3" />
            <figcaption>Ordre tir ajusté</figcaption>
          </figure>
        </div>
        <div class="box_col" v-show="Couv">
          <img  class="ordre_simple" src="@/images/CouvertureOrdre.png" alt="Status tête baissée"/>
              <h3 class="sous_titre_3">Tir de couverture</h3>
              <label>Nombre de tir déjà effectuer sous l'ordre tir de couverture ?</label>
              <select v-model.number="bonus">
                <option value="0">0 tir</option>
                <option value="1">1 tir</option>
                <option value="2">2 tirs</option>
                <option value="3">3 tirs</option>
                <option value="4">4 tirs</option>
                <option value="5">5 tirs</option>
                <option value="6">6 tirs</option>
                <option value="7">7 tirs</option>
                <option value="8">8 tirs</option>
                <option value="9">9 tirs</option>
              </select>
            <button v-show="!isis" v-on:click="confirmationCV">Ok</button>
        </div>
          <div v-show="!MouvT && !Couv && !TirAj" class="conteneur_flex">
              <h3 class="sous_titre_3">Statuts ne permettants pas de tirer</h3>
          <div class="conteneur_flex">
            <img class="ordre_simple" src="@/images/CourseOrdres.png" alt="Ordre Course" />
            <img class="ordre_simple" src="@/images/ChargeOrdre.png" alt="Ordre charge" />
          </div>
          <div class="conteneur_flex">
              <img class="ordre_simple" src="@/images/ContactStatuts.png" alt="Status Contact" />
              <img class="ordre_simple" src="@/images/TeteBaisseeStatuts.png" alt="Status tête baissée" />
              <img class="ordre_simple" src="@/images/AttenteOrdre.png" alt="Status attente" />
            </div>
          </div>
    </div>
  </article>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ordreTireur',
  data () {
    return {
      // Permet d'updater touche
      bonus: 0,
      shoot: 0,
      // Fin de l'update
      // Ordre local
      MouvT: false,
      Couv: false,
      TirAj: false,
      // Affichage interne
      isis: false,
      stop: false
    }
  },
  computed: {
    ...mapState(['touche', 'mouvementT', 'couverture', 'tirA'])
  },
  methods: {
    // Permet d'updater touche
    majTouche () {
      this.shoot = this.touche + this.bonus
      this.$store.dispatch('receptionTouche', {
        touche: this.shoot
      })
    },
    confirmation1 (b) {
      // On enregistre le mouvement tactique.
      this.MouvT = true
      this.bonus = b
      this.$store.dispatch('receptionMT', {
        mouvementT: this.MouvT
      })
      this.majTouche()
    },
    confirmation2 () {
      this.Couv = true
    },
    confirmation3 () {
      this.TirAj = true
      this.bonus = -1
      this.$store.dispatch('receptionTA', {
        tirA: this.TirAj
      })
      this.majTouche()
    },
    confirmationCV () {
      this.isis = true
      // Enregistrmeent du tir de Couverture
      this.$store.dispatch('receptionCV', {
        couverture: this.Couv
      })
      this.majTouche()
    }
  }
}
</script>
