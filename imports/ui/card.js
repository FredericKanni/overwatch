import './card.html';

//importe la collection Persos depuis le dossier dans le quel il est declareer
import { Persos } from '../api/Persos';






Template.body.events({
    //Recupere tous les buttons avec la class delete dans le body.html
    'click .delete': function() {
        //empreche que la page se reactualise
        event.preventDefault(); 
        //this._id renvoie l id de la carte auquel appatient le button sur lequel on vient de cliquer4
        //et Persos.remove  retire un element de la collection avec l id qui et dans le () //en argument
         Persos.remove(this._id);
        console.log('effacer');
    },
 });






