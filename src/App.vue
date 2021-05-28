<template>
  <div id="nav">
    <router-link to="/">Aide de jeu</router-link> |
    <router-link to="/aideDeJeu">Rappel de règles</router-link> |
    <router-link to="/about">Crédits</router-link>
  </div>
  <router-view/>
</template>
<style>
/*==Police pour créer le lien avec le site.==*/
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e3134;
}
#nav {
  padding: 30px;
  font-family: 'Russo One', sans-serif;
  font-size: 1em;
  font-weight: 100;
}
#nav a {
  font-weight: bold;
  color: #05364A;
}
#nav a.router-link-exact-active {
  color: #679436ff;
}
 body {
  align-items: center;
  max-width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #ebf2faff;
  padding-bottom: 2em;
  word-wrap: break-word;
}
.margin20 {
  margin-right: 2em;
}
/* Les flex box */
.contener_colonne_basique {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.conteneur_col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1em;
}
.conteneur_col_left {
    display: flex;
    flex-direction: column;
    align-items: baseline;
}
.conteneur_row_left {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
}
.conteneur_row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
#conteneur_row_resolution {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#conteneur_row_dice {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
}
.box_col {
    border: 4px solid rgba(44, 44, 44, 0.781);
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1vh;
    padding-bottom: 1vh;
    margin: 0.5vh;
}
.conteneur_flex {
  border: 4px solid rgba(44, 44, 44, 0.781);
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
/*==Flex box Liste ==*/
.listBox {
    list-style: none;
    display: block;
    text-align: left;
    margin-right: 1em;
    margin-left: 1em;
}
.listRow {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.listSimple {
  list-style: none;
}
.espace {
  margin-right: 0.5em;
}
.radioBox {
    display: flex;
    flex-direction: column;
    border: solid 1px #838383;
    width: 25%;
    margin-bottom: 0.5em;
}
/**==Présentation générale==*/
section {
  max-width: 95%;
}
/*==Présentation tableau==*/
table {
  max-width: 100%;
  border: 1 px black, solid;
  background-color: #98a098;
  vertical-align: middle;
  margin-bottom: 0.2em;
  font-size: 1em;
  min-width: 60%;
  margin-left: 1em;
  margin-right: 0em;
}
.cellule_centre {
  text-align: center;
}
td {
  height: 5em;
  min-width: 5em;
  text-align: center;
}
tr:nth-child(odd)
{
  background-color: #b3b3b3;
}
tr:nth-child(even)
{
  background-color: #818181;
}
.reponse {
  width: 4em;
  text-align: center;
}
/*===Conteneur ordres===*/
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1em 1em;
    grid-template-areas: "Contact Charge";
    height: 10%;
}
.Contact {
    grid-area: Contact;
    border: 8px black groove;
    margin: auto;
    margin-left: auto;
    margin-right: auto;
}
.Charge {
    grid-area: Charge;
    border: 8px #414141 groove;
    margin: auto;
    margin-left: auto;
    margin-right: auto;
}
.ordre_simple {
    border: 5px  groove;
    margin: auto;
    margin-left: auto;
    margin-right: auto;
}
/**==Images==*/
.image_simple {
    border: 5px  groove;
    margin-left: 2em;
    margin-right: 2em;
    padding: 0.2em;
}
/*===Fin conteneur ordre===*/
/*==Contenaire tableaux des bonus / malus - etape==*/
.conteneur_etape {
    display: flex;
    flex-direction: column;
}
/*==Conteneur à dés et style des boutons de dé==*/
.dice {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.dice_type {
    text-transform: uppercase;
    text-align: center;
    border: 4px solid #929292;
    background: #981212;
    width: 4em;
}
/*====Fin contenaire====*/
/*==Style des bouton==*/
/* button {
    text-transform: uppercase;
    text-align: center;
    border: 4px solid #929292;
    border-radius: 0.7em;
    height: 2.5em;
    margin: 0.5em;
    padding-top: 0.2em;
    font-size: 0.8em;
}
button:hover {
    border: 4px solid rgba(255,5,5,0.53);
    -webkit-box-shadow: -2px 0px 14px 1px rgba(255,5,5,0.53);
    box-shadow: -2px 0px 14px 1px rgba(255,5,5,0.53);
} */
.stop {
    background: #fe5252;
}
.ok {
    background: linear-gradient(195deg, #8df723, #b8350c);
}
.passe {
    background: linear-gradient(245deg, white, black);
    color: white;
}
.linkNav {
  text-decoration: none;
  color: Black;
}
.classique {
        font-size: 1em;
        height: 3em;
        min-width: 3em;
        width: auto;
        display:block;
        text-decoration:none;
        text-transform: uppercase;
        font-weight: 400;
        /* margin:0 auto; */
        margin-bottom: 0.5em;
        margin-top: 0em;
        margin-left: auto;
        margin-right: auto;
        border-radius:7px;
        border:solid 1px  #bf0603;
        background-color: #c3c3c3;
        text-align:center;
        padding: auto;
        -webkit-transition: all 0.1s;
        -moz-transition: all 0.1s;
        transition: all 0.1s;
        -webkit-box-shadow: 0px 5px 0px  #d0acab;
        -moz-box-shadow: 0px 5px 0px  #d0acab;
        box-shadow: 0px 5px 0px   #dcc4c3;
        font-family: 'Russo One', sans-serif;
}
.classique:active {
    -webkit-box-shadow: 0px 5px 0px  #d0acab;
    -moz-box-shadow: 0px 5px 0px  #d0acab;
    box-shadow: 0px 5px 0px   #dcc4c3;
    position:relative;
    top:7px;
}
.button_active {
  font-size: 1em;
  height: 3em;
  min-width: 3em;
  width: auto;
  display:block;
  text-decoration:none;
  background-color: #c3c3c3;
  font-weight: 400;
  /* margin:0 auto; */
  margin-bottom: 0.5em;
  margin-top: 0em;
  margin-left: auto;
  margin-right: auto;
  border-radius:7px;
  border:solid 1px #22ba18;
  color:  #03bf1f;
  text-transform: uppercase;
  -webkit-box-shadow: 0px 2px 0px #03bf1f;
  -moz-box-shadow: 0px 2px 0px  #03bf1f;
  box-shadow: 0px 2px 0px   #03bf1f;
  position:relative;
  top:7px;
  font-family: 'Russo One', sans-serif;
}
/*==Bouton suite==*/
/*Button Two*/
.button-two {
  border:solid 1px  #bf0603;
  font-family: 'Russo One', sans-serif;
  text-transform: uppercase;
  border-radius: 4px;
  background-color:#c3c3c3;
  padding: 1em;
  width: auto;
  transition: all 0.5s;
}
/*==Luminosité panneau de contrôle.==*/
.ligth {
  background-color: #009216;
}

/*Présentation*/
/* @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap'); == Ancienne police */
.titre {
    font-size: 2em;
    color: #2e3134;
    font-weight: 100;
    font-family: 'Russo One', sans-serif;
    text-transform: uppercase;
    padding: 0.05em;
    /*text-shadow: 1px 1px 2px rgb(21, 167, 142), 0 0 1em rgb(121, 121, 129), 0 0 0.2em rgb(5, 5, 5);
*/
}
.sous_titre {
    font-size: large;
    color: #2e3134;
    font-weight: 100;
    text-transform: uppercase;
    font-family: 'Russo One', sans-serif;
    padding: 0.05em;
    /*text-shadow: 1px 1px 2px rgb(21, 167, 142), 0 0 1em rgb(121, 121, 129), 0 0 0.2em rgb(5, 5, 5);
*/
}
.sous_titre_3 {
    padding-left: 0.4em;
    color: #2e3134;
    text-transform: uppercase;
    font-size: medium;
    font-weight: 100;
    font-family: 'Russo One', sans-serif;
    /*text-shadow: 1px 1px 2px rgb(21, 167, 142), 0 0 1em rgb(121, 121, 129), 0 0 0.2em rgb(5, 5, 5);
*/
}
.paragraphe {
  border: black solid 2px;
  text-align: justify;
  padding: 0.5em;
  margin-left: 0.8em;
  margin-right: 0.8em;
}
/*==Avertissement==*/
.avertissement {
  color: red;
  background-color: black;
  text-transform: uppercase;
  font-family: 'Russo One', sans-serif;
  font-size: 1em;
  width: 50%;
  text-align: center;
}
/*==Validation==*/
.validation {
    text-transform: uppercase;
    text-align: center;
    border: 4px solid #929292;
    border-radius: 0.7em;
    height: 3.5em;
    margin: 0.5em;
    padding-top: 0.2em;
}
.nav_style {
  border: 4px solid #929292;
  border-radius: 25px;
  margin-left: 2em;
  margin-right: 2em;
  padding: 0.2em;
  margin-bottom: 0.5em;
}
.nav_style:hover {
  border: 4px  solid rgba(255,5,5,0.53);
  -webkit-box-shadow: -2px 0px 14px 1px rgba(255,5,5,0.53);
  box-shadow: -2px 0px 14px 1px rgba(255,5,5,0.53);
  margin-left: 2em;
  margin-right: 2em;
  padding: 0.2em;
}
/*==Présentation aide de jeu==*/
.conteneur_adj {
  width: 95%;
}
.menuGauche {
  width: 10%;
}
.texteDroite {
  width: 80%
}
.lienNav {
  color: #2e3134;
  text-decoration: underline;;
}
.lienNav:hover {
  color: #42b983;
}
/*==Fin Présentation aide de jeu==*/

@media screen and (max-width: 740px) {
  #nav {
    padding: 30px;
    font-family: 'Russo One', sans-serif;
    font-size: 1em;
  }
  body {
  overflow: scroll;
  }
  .margin20 {
    margin-bottom: 0.5em;
  }
  .titre {
      font-size: medium;
      /* font-family: 'Black Ops One'; === Ancienne police */
      font-family: 'Russo One', sans-serif;
      text-transform: uppercase;
      padding: 0.05em;
  }
  .sous_titre {
      font-size: small;
      text-transform: uppercase;
      font-family: 'Russo One', sans-serif;
      padding: 0.05em;
      /*text-shadow: 1px 1px 2px rgb(21, 167, 142), 0 0 1em rgb(121, 121, 129), 0 0 0.2em rgb(5, 5, 5);
  */
  }
  .sous_titre_3 {
      padding-left: 0.4em;
      text-transform: uppercase;
      font-size: x-small;
      font-family: 'Russo One', sans-serif;
      /*text-shadow: 1px 1px 2px rgb(21, 167, 142), 0 0 1em rgb(121, 121, 129), 0 0 0.2em rgb(5, 5, 5);
  */
  }
  .listBox {
    margin-right: 1em;
    margin-left: -1em;
  }
  .avertissement {
    color: red;
    background-color: black;
    text-transform: uppercase;
    font-family: 'Russo One', sans-serif;
    font-size: 0.8em;
    width: 50%;
  }
  /*=conteneur=*/
  .conteneur_row_left {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
  }
  /*==Bouton de sauvegarde==*/
  .conteneur_row {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  .espace {
    margin-right: 0.5em;
    margin-bottom: 0.5em;
  }
  .lienNav {
    color: #2e3134;
    margin-bottom: 0.5em;
  }
  .lienNav:hover {
    color: #42b983;
  }
  .listRow {
      list-style: none;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
  }
}
</style>
