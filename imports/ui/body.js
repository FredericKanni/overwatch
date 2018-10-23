import { Persos } from '../api/Persos';
import { Msgs } from '../api/Emails';
// import '../api/Persos.js';



import './drop.js';
import './card.js';
import './email.js';
import './input.js';
import './jumbotron.js';
import './modal.js';
import './navbar.js';

import './body.html';


// ATTENTION NE PAS OUBLIE CETTE ETAPE SINON LES #each ne marche pas

Template.body.helpers({
    persos() {
      return   Persos.find().fetch();
    },
    msgs() {
        return   Msgs.find().fetch();
      }
})


Template.modal.events({  
    
//recupere les buttons(click)  avec la classe pika  dans le template modal 
//BUTTON DU MODAL
    'click .pika': function(event) {


    //RECUPERE L OBJET QUI EST LE BUTTON MODIFIER
    const target = event.target;
    //RECUPERE L ID DE LA CARTE AUQUEL APPARTIENT LE BTN SUR LEQUEL ON VIENT DE VLIQUER
    const idMembre = target.getAttribute('data-id');
    //RECUPRE L OBJET DANS LA COLLECTION AVEC L ID  DE LA CARTE QU ON VIENT DE RECUPERER
    const perso = Persos.findOne({_id:idMembre});
    
//RECUPERE LE CHAMP NOM DU FORMULAIRE DU MODAL //CE FORMULAIRE SE SITUE DANS BODY.HTML
    const lenom = document.querySelector("#champnom");
//RECUPERE LE CHAMP DESC
    const ladesc = document.querySelector("#champdesc");
//RECUPERE LE CHAMP URL
    const lurl = document.querySelector("#champurl");
//RECUPERE L INPUT DE TYPE HIDDEN la partie du modal qui se trouve dans body.html
    const hidden = document.querySelector("#edit-id");


//ON FAIT QUE LA VALEUR DU IMPUT HIDDEN QUI EST DANS LE "FORMULAIRE DU MODAL " SOIT  L ID DE LA CARTE SUR LEQUEL ON VIENT DE CLIQUER
    hidden.value = idMembre;
//LA VALEUR DU CHAMP NOM PREND COMME VALEUR  LE nom DE L OBJET perso  cest a dire lacarte auquel appartient le button pika sur lequel on vient de cliquer
    lenom.value = perso.nom;
//LA VALEUR DU CHAMP desc PREND COMME VALEUR..
    ladesc.value = perso.desc;
//LA VALEUR DU CHAMP url PREND COMME VALEUR..
    lurl.value = perso.url;


    // console.log( hidden.value );
    // console.log( lenom.value );
    // console.log( ladesc.value );
    // console.log( lurl.value );
    
    },

 });

Template.body.events({   
  //  recupere les buttons(click) avec la class save dans le body .html 
  //button sauvegarder
    'click .save': function(event) {

    //RECUPERER LES VALEURS DES CHAMPS DU MODALS
        const modalnom = document.querySelector('#champnom');
        const modaldesc = document.querySelector('#champdesc');
        const modalurl = document.querySelector('#champurl');
    
        
        //  console.log(modalnom.value);
        //  console.log(modaldesc.value);
        //  console.log(modalurl.value);
    

        //RECUPRE L INPUT AVEC LA CLASS #edit-id 
        const hidden = document.querySelector("#edit-id");
        //LA VALUE DE CET  INPUT CEST L ID DE LA CARTE SUR LE QUEL ON VEUT ECRASER LES VALEURS
        // console.log(hidden.value);
        //JAI CREE UN AUTRE CONSTANT ID POUR STOCKER HIDDEN.VALUE
        const idcarte =hidden.value;


        //JE PREND LA COLLECTION Perso et j update l element avec la identifient ici id 
        //et je change le valeur des parametre souhaiter de cet element
            Persos.update(idcarte, {
                $set: { nom: modalnom.value, desc:modaldesc.value,url: modalurl.value},
            });
        },
    });