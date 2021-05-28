<template>
  <header class="box_col">
      <h1 class="titre">Combat de mêlée</h1>
      <h2 class="sous_titre">Aide de jeu pour R-5</h2>
      <h4 class="sous_titre">Difficulté actuelle = {{touche}} +</h4>
    <h4 class="sous_titre">Arme de mêlée: {{puissance}} <span v-if="dc === 8">D8</span><span v-if="dc === 10">D10</span><span v-if="dc === 12">D12</span><span v-if="dc === 6">D6</span><span v-if="surpuissance"> ++</span></h4>
  </header>
<div class="box_col">
  <section v-if="amt1">
      <button class="button-two" v-if="amt1 && puissance != 0 && dc != 0" v-on:click="nav1">Suite</button>
    <ordreClose/>
  </section>
  <section v-if="amt2">
    <button class="button-two" v-if="amt2" v-on:click="nav2">Suite</button>
    <regleSpecial/>
  </section>
  <section v-if="amt3">
    <button class="button-two" v-if="amt3 && sauvegarde != 10" v-on:click="nav3">Suite</button>
    <situationClose/>
  </section>
  <section v-if="amt4">
    <button class="button-two" v-on:click="retour">Retour</button>
    <resolution/>
  </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ordreClose from '@/components/close/ordreClose.vue'
import regleSpecial from '@/components/close/regleSpecial.vue'
import situationClose from '@/components/close/situationCC.vue'
import resolution from '@/components/resolution.vue'
export default {
  name: 'moduleClose',
  components: {
    ordreClose,
    regleSpecial,
    situationClose,
    resolution
  },
  data () {
    return {
      amt1: true,
      amt2: false,
      amt3: false,
      amt4: false
    }
  },
  computed: {
    ...mapState(['puissance', 'sauvegarde', 'touche', 'dc', 'puissance', 'surpuissance'])
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
    retour () {
      location.reload()
    }
  }
}
</script>
