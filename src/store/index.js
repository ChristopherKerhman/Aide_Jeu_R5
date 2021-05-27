import { createStore } from 'vuex'

export default createStore({
  state: {
    // Base de donnée concernant les règles spécial et options.
    DBRSpecial: [
      {
        id: 0,
        RS: 'Surprise',
        valide: false
      },
      {
        id: 1,
        RS: 'Invisible',
        valide: false
      },
      {
        id: 2,
        RS: 'Générateur de champs de force',
        valide: false
      },
      {
        id: 3,
        RS: 'Fumigène',
        valide: false
      },
      {
        id: 4,
        RS: 'Perce-armure',
        valide: false
      },
      {
        id: 5,
        RS: 'Anti-véhicule',
        valide: false
      },
      {
        id: 6,
        RS: 'Rafale',
        valide: false
      },
      {
        id: 7,
        RS: 'Visée sûre',
        valide: false
      },
      {
        id: 8,
        RS: 'Gros Calibre',
        valide: false
      },
      {
        id: 9,
        RS: 'tir en lobe',
        valide: false
      },
      {
        id: 10,
        RS: 'Arme Sainte',
        valide: false
      },
      {
        id: 11,
        RS: 'Arme Divine',
        valide: false
      },
      {
        id: 12,
        RS: 'Modifiable',
        valide: false
      },
      {
        id: 13,
        RS: 'Baïonnette',
        valide: false
      },
      {
        id: 14,
        RS: 'Bouclier (balistique)',
        valide: false
      }
    ],
    modifiable: [
      {
        id: 0,
        Description: 'Viseur holographique',
        valide: false
      },
      {
        id: 1,
        Description: 'Lunette de visée',
        valide: false
      },
      {
        id: 2,
        Description: 'Lampe Tactique / éclairage UV ou IR',
        valide: false
      },
      {
        id: 3,
        Description: 'Pointeur Laser',
        valide: false
      },
      {
        id: 4,
        Description: 'Munition explosive',
        valide: false
      },
      {
        id: 5,
        Description: 'Crosse rétractable',
        valide: false
      }
    ],
    DBRSpecialCC: [
      {
        id: 0,
        RS: 'Option mêlée',
        valide: false
      },
      {
        id: 1,
        RS: 'Strangulation',
        valide: false
      },
      {
        id: 2,
        RS: 'Piétinement',
        valide: false
      },
      {
        id: 3,
        RS: 'Petite arme',
        valide: false
      },
      {
        id: 4,
        RS: 'Bouclier',
        valide: false
      },
      {
        id: 5,
        RS: 'Baïonnette',
        valide: false
      }
    ],
    DBRSpecialArmure: [
      {
        id: 0,
        RS: 'Armure mobile',
        valide: false
      },
      {
        id: 1,
        RS: 'Armure Endurante',
        valide: false
      }
    ],
    optionM: [
      {
        id: 0,
        Description: 'Empoisonnée',
        valide: false
      },
      {
        id: 1,
        Description: 'Armes à deux mains',
        valide: false
      }
    ],
    // Fin des bases de donnée
    // Variable
    // Difficulté pour toucher
    touche: 4,
    // Modificateur pour toucher
    modificateur: 0,
    // Caractéristique de l'arme
    puissance: 0,
    dc: 0,
    surpuissance: false,
    bonusSainte: 0,
    bonusDivine: 0,
    // Sauvegarde de la cible
    sauvegarde: 10,
    // Ordres
    course: false,
    charge: false,
    contact: false,
    teteB: false,
    attente: false,
    mouvementT: false,
    couverture: false,
    tirA: false
  },
  mutations: {
    modifTouche (state, payload) {
      state.touche = payload
    },
    modifMT (state, payload) {
      state.mouvementT = payload
    },
    modifCV (state, payload) {
      state.couverture = payload
    },
    modifTA (state, payload) {
      state.tirA = payload
    },
    modifModifiable (state, payload) {
      state.modifiable = payload
    },
    modPuissance (state, payload) {
      state.puissance = payload
    },
    modDC (state, payload) {
      state.dc = payload
    },
    modplus (state, payload) {
      state.surpuissance = payload
    },
    modRS (state, payload) {
      state.DBRSpecial = payload
    },
    modRsCC (state, payload) {
      state.DBRSpecialCC = payload
    },
    modOptionM (state, payload) {
      state.optionM = payload
    },
    modSVG (state, payload) {
      state.sauvegarde = payload
    },
    modArmure (state, payload) {
      state.sauvegarde = payload
    },
    modCharge (state, payload) {
      state.charge = payload
    },
    modContact (state, payload) {
      state.contact = payload
    }
  },
  actions: {
    receptionTouche (context, payload) {
      context.commit('modifTouche', payload.touche)
    },
    receptionMT (context, payload) {
      context.commit('modifMT', payload.mouvementT)
    },
    receptionCV (context, payload) {
      context.commit('modifCV', payload.couverture)
    },
    receptionTA (context, payload) {
      context.commit('modifTA', payload.tirA)
    },
    receptionMod (context, payload) {
      context.commit('modifModifiable', payload.modifiable)
    },
    receptionDice (context, payload) {
      context.commit('modDC', payload.dc)
    },
    receptionPuissance (context, payload) {
      context.commit('modPuissance', payload.puissance)
    },
    receptionSurP (context, payload) {
      context.commit('modplus', payload.surpuissance)
    },
    receptionRS (context, payload) {
      context.commit('modRS', payload.DBRSpecial)
    },
    receptionSauvegarde (context, payload) {
      context.commit('modSVG', payload.sauvegarde)
    },
    receptionArmure (context, payload) {
      context.commit('modArmure', payload.sauvegarde)
    },
    receptionCharge (context, payload) {
      context.commit('modCharge', payload.charge)
    },
    receptionContact (context, payload) {
      context.commit('modContact', payload.contact)
    },
    receptionDBCC (context, payload) {
      context.commit('modRsCC', payload.DBRSpecialCC)
    },
    receptionM (context, payload) {
      context.commit('modOptionM', payload.optionM)
    }
  },
  modules: {
  }
})
