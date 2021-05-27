<template>
  <div class="box_col">
    <h3 class="sous_titre_3">Dommage critique aux véhicules</h3>
    <h6 class="sous_titre_3">Section 8.3 Détruire un véhicule</h6>
    <p>
      Les dommages critiques s'applique au moment où un véhicule subit une perde de au moins 4 points de structure d'un coup. Noter que les véhicules qui arrive à 0 point de structure sont immédiatement transformer en épave.
    </p>
    <div class="conteneur_row">
      <button class="margin20" v-on:click="sol = true, vol = false">Véhicule au sol ?</button>
      <button class="margin20" v-on:click="vol = true, sol = false">Véhicule en vol ?</button>
      <button v-on:click="vol = false, sol = false, DommageCritique = ''">Effacer</button>
  </div>
  <h5 class="sous_titre_3" v-show="vol || sol"><span v-if="vol">Le véhicule volant</span><span v-if="sol">Le véhicule au sol</span> subit, ce dommage critique :</h5>
  <p>
    {{DommageCritique}}
  </p>
  </div>
</template>
<script>
export default {
  name: 'DommageVehicule',
  data () {
    return {
      // affichage des options
      sol: false,
      vol: false,
      DommageCritique: '',
      DCavion: [
        { id: 0, dommage: 'Carlingue touché, sans autre conséquence.' },
        { id: 1, dommage: 'Explosion interne, perte de 1 point de structure supplémentaire.' },
        { id: 3, dommage: 'Système de vol endommagé, impossible d\'éfecture un virage.' },
        { id: 4, dommage: 'Explosion interne, perte de 2 points de structure supplémentaire.' },
        { id: 5, dommage: 'Moteur touché, le véhicule franchit 2 fois son mouvement el ligne droite et explose au sol. (grand gabarit d\'explosion, 1d10 de touche sur 4+).' },
        { id: 6, dommage: 'Des étincelles jaillisse des moteurs suite aux impacts, rien de plus, sauf un voyant rouge sur le tableau de bord.' },
        { id: 7, dommage: 'Perte des commandes de vol, le véhicule fait un virage de 90° babord, franchit son mouvement tactique et explose au sol.(grand gabarit d\'explosion, 1d10 de touche sur 4+)' },
        { id: 8, dommage: 'Perte des commandes de vol, le véhicule fait un virage de 90° tribord, franchit son mouvement tactique et explose au sol.(grand gabarit d\'explosion, 1d10 de touche sur 4+)' },
        { id: 9, dommage: 'Perte des commandes de vol, le véhicule fait un virage de 45° babord, franchit son mouvement tactique et explose au sol.(grand gabarit d\'explosion, 1d10 de touche sur 4+)' },
        { id: 10, dommage: 'Perte des commandes de vol, le véhicule fait un virage de 45° tribord, franchit son mouvement tactique et explose au sol.(grand gabarit d\'explosion, 1d10 de touche sur 4+)' },
        { id: 11, dommage: 'Réservoir de carburant ou cellule énergétique endommagé, le véhicule tente de sortir du champs de bataille, chaque tour qu\'il reste génére un nouveau dommage critique.' },
        { id: 12, dommage: 'Feu à bord, perte de 3 points de structure supplémentaire. Chaque nouveau tour engendre un nouveau dommage critique.' }
      ],
      DCtanck: [
        { id: 0, dommage: 'Carrosserie touché, sans autre conséquence.' },
        { id: 1, dommage: 'Explosion interne, perte de 1 point de structure supplémentaire.' },
        { id: 3, dommage: 'Système de commande endommagé, impossible d\'éfecture un virage, babord ou tribord.' },
        { id: 4, dommage: 'Explosion interne, perte de 2 points de structure supplémentaire.' },
        { id: 5, dommage: 'Moteur touché, le véhicule s\'arrête définitivement. Si il a des tourelles celle-ci peuvent encore fonctionner normalement.' },
        { id: 6, dommage: 'Les impacts produissent plusieurs étincelle inquiétante, rien de plus, sauf un voyant rouge sur le tableau de bord qui s\'allume.' },
        { id: 7, dommage: 'L\'arme avec le moins de puissance encore en fonctionnement du véhicules tombe définitivement en panne.' },
        { id: 8, dommage: 'L\'arme avec le plus de puissance encore en fonctionnement du véhicules tombe définitivement en panne.' },
        { id: 9, dommage: 'Feu à bord, perte de 3 points de structure supplémentaire. Chaque nouveau tour engendre un nouveau dommage critique.' },
        { id: 10, dommage: 'Système de direction endommagé, impossible de faire des virage babord.' },
        { id: 11, dommage: 'Système de direction endommagé, impossible de faire des virage tribord.' },
        { id: 12, dommage: 'Système de direction endommagé, impossible de faire d\'aller en ligne droite.' },
        { id: 13, dommage: 'Système de direction endommagé, impossible de reculer, panne anti-couard !.' },
        { id: 14, dommage: 'Système de direction endommagé, impossible de d\'avancer, mais on peut reculer et faire des virages, chouette ?.' }
      ]
    }
  },
  updated () {
    if (this.vol) {
      const DCv = Math.floor((Math.random() * this.DCavion.length))
      this.DommageCritique = this.DCavion[DCv].dommage
    }
    if (this.sol) {
      const DCv = Math.floor((Math.random() * this.DCtanck.length))
      this.DommageCritique = this.DCtanck[DCv].dommage
    }
  }
}
</script>
