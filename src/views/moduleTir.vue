<template>
  <header class="box_col">
      <h1 class="titre">Tir</h1>
      <h2 class="sous_titre">Aide de jeu pour R-5</h2>
        <h4 class="sous_titre">Difficulté actuelle = {{touche}} +</h4>
        <h4 class="sous_titre">Arme de tir: {{puissance}} <span v-if="dc === 8">D8</span><span v-if="dc === 10">D10</span><span v-if="dc === 12">D12</span><span v-if="dc === 6">D6</span><span v-if="surpuissance"> ++</span></h4>
  </header>
  <div class="conteneur_col">
      <section v-if="amt1">
    <button class="button-two" v-if="mouvementT || couverture || tirA" v-on:click="nav1">suite</button>
    <ordreTireur/>
      </section>
  <section v-if="amt2">
    <button class="button-two" v-if="dc != 0 && puissance != 0" v-on:click="nav2">Suite</button>
    <armeTireur/>
  </section>
  <section v-if="amt3">
    <button class="button-two" v-if="touche <= dc" v-on:click="nav3">Suite</button>
    <p v-if="touche > dc">La difficulté du tir dépasse les capacité du tireur (DC trop faible) le tir est impossible.<br />
      <button class="button-two" v-on:click="retour">Retour</button></p>
    <situationTireur/>
  </section>
  <section v-if="amt4">
      <button class="button-two" v-if="sauvegarde != 10" v-on:click="nav4">Suite</button>
    <p v-if="touche > dc">La difficulté du tir dépasse les capacité du tireur (DC trop faible) le tir est impossible.<br />
      <button class="button-two" v-on:click="retour">Retour</button></p>
    <situationCible/>
  </section>
  <section v-if="amt5">
      <button class="button-two" v-on:click="retour">Retour</button>
    <resolution/>
  </section>
</div>
</template>
<script>
import { mapState } from 'vuex'
import ordreTireur from '@/components/tir/ordreTireur.vue'
import armeTireur from '@/components/tir/armeTireur.vue'
import situationTireur from '@/components/tir/situationTireur.vue'
import situationCible from '@/components/tir/situationCible.vue'
import resolution from '@/components/resolution.vue'
export default {
  name: 'tir',
  components: {
    ordreTireur,
    armeTireur,
    situationTireur,
    situationCible,
    resolution
  },
  computed: {
    ...mapState(['touche', 'dc', 'mouvementT', 'couverture', 'tirA', 'sauvegarde', 'dc', 'puissance', 'surpuissance'])
  },
  data () {
    return {
      amt1: true,
      amt2: false,
      amt3: false,
      amt4: false,
      amt5: false
    }
  },
  methods: {
    nav1 () {
      this.amt1 = false
      this.amt2 = true
    },
    nav2 () {
      this.amt2 = false
      this.amt3 = true
    },
    nav3 () {
      this.amt3 = false
      this.amt4 = true
    },
    nav4 () {
      this.amt4 = false
      this.amt5 = true
    },
    retour () {
      location.reload()
    }
  }
}

</script>
