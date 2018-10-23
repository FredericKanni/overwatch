import './card.html';
import { Persos } from '../api/Persos';






Template.body.events({
    'click .delete': function() {
        event.preventDefault(); 
    Persos.remove(this._id);
        console.log('effacer');
    },
    });






