<template>
  <header class="box_col">
    <h1 class="titre">Support tactique</h1>
    <h2 v-if="!affichageAide1" class="sous_titre lienNav" v-on:click="affichageAide1 = true">Aide de jeu pour R-5</h2>  <h2 v-else class="sous_titre lienNav" v-on:click="affichageAide1 = false">Aide de jeu pour R-5</h2>
        <article class="paragraphe" v-show="affichageAide1">
          <p>
          La dépense d'un pion commandement par un officier suppérieur peut entre autre, permettre un support tactique, une fois par partie. Celui-ci représente l'action de l'artillerie ou un support aérienne, sur un champs de bataille.
          Il faut bien entendu que ce support tactique soit possible, avec le type d'univers que vous mettez en scène. Noter que le support tactique, peut être considérer comme une action magique déclenché au loin par un mage puissant.
        </p>
        <p>
          Un résultat négatif en cas de tir échouché veut dire que votre tir à une chance d'être sortie de votre champs de bataille.
        </p>
      </article>
    </header>
    <section>
      <h3 v-if="!affichageAide2" class="sous_titre_3" v-on:click="affichageAide2 = true">Enregistrement de vos coordonnées de bombardement indirect</h3><h3 v-else class="sous_titre_3" v-on:click="affichageAide2 = false">Enregistrement de vos coordonnées de bombardement indirect</h3>
      <article v-if="affichageAide2">
        <p>
          Prennez en repère votre bord de table, le côté gauche est la coordonnée 0 pouces X, 0 pouces Y. Mesurer ainsi les coordonnées de votre tir. Les chances de réussite sont de 4+ sur 1D10. En cas de tir échouer par l'artillerie,
          le module prend en compte la dérive du tir dans les deux axes, X et Y et vous les indiquera. La déviation est alors de + ou - 1D6 pouces pour l'axe Y et X.
        </p>
        <p>
          Depuis votre bord de déploiement renseigner votre coordonnées X et Y, puis sauvegarder les. Au tour, suivant, revenez ici, pour actionner le tir d'artillerie et découvrir le point d'impact.
        </p>
      </article>
      <article>
            <div class="conteneur_col">
          <div v-if="!message">
            <div class="conteneur_row">
            <label for="ArtillerieX">Coordonnée X</label>
            <input class="sizeInput" type="number" max="90" min="0" v-model.number="Coord_X" /> pouce(s)
          </div>
          <div class="conteneur_row">
            <label for="ArtillerieX">Coordonnée Y</label>
            <input class="sizeInput" type="number" max="90" min="0" v-model.number="Coord_Y" /> pouce(s)
          </div>
          <button class="classique" v-on:click="enregistrementLocal">Enregistrement des coordonnées</button>
          </div>
          <p v-if="message1">
            Vous n'avez pas enregistrer de coordonnée pour l'artillerie.
          </p>
          <p v-if="message">Vos coordonnées sont enregistrer. Revenez au tour prochain pour voir le résultat.</p>
          <button class="classique" v-if="message && !blocage"  v-on:click="actionSupport">Action Support</button>
        </div>
        <p v-if="coordonneesArtillerie.length === 2">
          Coordonnée X = {{coordonneesArtillerie[0].X}} pouces.<br />
          Coordonnée Y = {{coordonneesArtillerie[0].Y}} pouces.<br />
          Résultat du tir = {{coordonneesArtillerie[1]}}
          <button class="button-two" v-on:click="retour">remise à 0</button>
        </p>
      </article>
    </section>
</template>
<script>
export default {
  name: 'supportArtillerie',
  data () {
    return {
      affichageAide1: false,
      affichageAide2: false,
      message: false,
      message1: false,
      blocage: false,
      Coord_X: 0,
      Coord_Y: 0,
      coordonneesArtillerie: [],
      test: [{ id: 0, description: 'test', valide: true },
        { id: 0, description: 'test', valide: true },
        { id: 0, description: 'test', valide: true }
      ]
    }
  },
  mounted () {
    if (localStorage.X && localStorage.Y) {
      this.message = true
    }
  },
  methods: {
    enregistrementLocal () {
      localStorage.X = this.Coord_X
      localStorage.Y = this.Coord_Y
      this.message = true
    },
    actionSupport () {
      this.blocage = true
      this.coordonneesArtillerie.push({ X: parseFloat(localStorage.X), Y: parseFloat(localStorage.Y) })
      const D10 = Math.floor(Math.random() * 10) + 1
      if (D10 >= 4) {
        this.coordonneesArtillerie.push('Tir réussit.')
      } else {
        const HB = Math.random()
        const GD = Math.random()
        if (HB > 0.5) {
          const y = this.coordonneesArtillerie[0].Y
          const D6Y = (Math.floor(Math.random() * 6) + 1) + y
          this.coordonneesArtillerie[0].Y = D6Y
        } else {
          const y = this.coordonneesArtillerie[0].Y
          const D6Y = -(Math.floor(Math.random() * 6) + 1) + y
          this.coordonneesArtillerie[0].Y = D6Y
        }
        if (GD > 0.5) {
          const x = this.coordonneesArtillerie[0].X
          const D6X = (Math.floor(Math.random() * 6) + 1) + x
          this.coordonneesArtillerie[0].X = D6X
        } else {
          const x = this.coordonneesArtillerie[0].X
          const D6X = -(Math.floor(Math.random() * 6) + 1) + x
          this.coordonneesArtillerie[0].X = D6X
        }
        this.coordonneesArtillerie.push('Tir loupée prenez en compte ces coordonnées corrigé.')
      }
      localStorage.clear()
    },
    retour () {
      location.reload()
    }
  }
}
</script>
<style>
.sizeInput {
  margin-bottom: 0.5em;
  width: 4em;
}

</style>
