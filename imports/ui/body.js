import { Persos } from '../api/Persos';

import '../api/Persos.js';



import './drop.js';
import './card.js';
import './email.js';
import './input.js';
import './jumbotron.js';
import './modal.js';
import './navbar.js';
import { Msgs } from '../api/Emails';

import './body.html';

Template.body.helpers({
    persos() {
      return   Persos.find().fetch();
    },
    msgs() {
        return   Msgs.find().fetch();
      }

})



       Template.modal.events({  
           

'click .pika': function(event) {


    //RECUPERE L OBJET QUI EST LE BUTTON MODIFIER
          const target = event.target;
    //RECUPERE L ID DE LA CARTE AUQUEL APPARTIENT LE BTN SUR LEQUEL ON VIENT DE VLIQUER
          const idMembre = target.getAttribute('data-id');
    //RECUPRE L OBJET DANS LA COLLECTION AVEC L ID  DE LA CARTE QU ON VIENT DE RECUPERER
          const perso = Persos.findOne({_id:idMembre});
    // console.log('hello');
    
    //         console.log(this._id);
            // console.log(target);
            // console.log(idMembre);
            // console.log(perso);



    
    const firstmod = document.querySelector("#champnom");
    const secondmod = document.querySelector("#champdesc");
    const thirdmod = document.querySelector("#champurl");
    const hidden = document.querySelector("#edit-id");



    hidden.value = idMembre;
            firstmod.value = perso.nom;
            secondmod.value = perso.desc;
            thirdmod.value = perso.url;



            // console.log(firstmod.value);
            // console.log( secondmod.value);
            // console.log( thirdmod.value);
            
        // Persos.update(idMembre, {
        
        //   $set: { nom: pnom.value,
        //     desc: pdesc.value,
        //     url: purl.value },
        
        // });
          // console.log("ce");
        //   const hidden = document.querySelector("#edit-id");

        //   hidden.value = idMembre;
        //   console.log(idMembre);
        //   console.log(perso.nom);

//TODO
        //   var els = document.querySelectorAll('.mystyle');
      
        //   for (var i = 0; i < els.length; i++) {
        //     // console.log('plop');
        //     els[i].classList.remove('mystyle')
        //   }








        //   target.classList.add("mystyle");
          // console.log('mpol')
    


          // console.log(membre.nom);
          // console.log(membre.desc);
          // console.log(membre.url);
        
          const lenom = perso.nom;
          const ladesc = perso.desc;
          const lurl = perso.url;
          // const test =this._id;
          // console.log(test);
          
      // Membres.remove(this._id);
      // console.log('effacer');
    
    
       
          // console.log("ce");
          // Membres.remove(this._id);
    
    
          // var el = document.querySelector(".data-id");
          // console.log(el);
    
          // const membre = Membres.findOne({_id:idMembre});
          // console.log(membre);
    
    const pnom = document.querySelector('#champnom');
    
    const nm = perso.nom;
    // console.log(pnom);
    
    pnom.value =nm;
    
    
    
    const pdesc = document.querySelector('#champdesc');
    
    const nd = perso.desc;
    // console.log(nd);
    //  console.log(pdesc);
    
    pdesc.value =nd;
    
    
    const purl = document.querySelector('#champurl');
    const ur = perso.url;
    // console.log(purl);
    purl.value = ur;
    

    
    // Membres.update(this._id, {

    //   $set: { nom: 'orange' },

    // });
    
       },

       });

Template.body.events({   


    // 'click .pika': function(event) {


    //     //RECUPERE L OBJET QUI EST LE BUTTON MODIFIER
    //           const target = event.target;
    //     //RECUPERE L ID DE LA CARTE AUQUEL APPARTIENT LE BTN SUR LEQUEL ON VIENT DE VLIQUER
    //           const idMembre = target.getAttribute('data-id');
    //     //RECUPRE L OBJET DANS LA COLLECTION AVEC L ID  DE LA CARTE QU ON VIENT DE RECUPERER
    //           const perso = Persos.findOne({_id:idMembre});
    //     // console.log('hello');
        
    //     //         console.log(this._id);
    //     //         console.log(target);
    //     //         console.log(idMembre);
    //     // console.log(membre);
    //           // console.log("ce");
    //         //   const hidden = document.querySelector("#edit-id");

    //         //   hidden.value = idMembre;
    //         //   console.log(idMembre);
    //         //   console.log(perso.nom);
    
    // //TODO
    //         //   var els = document.querySelectorAll('.mystyle');
          
    //         //   for (var i = 0; i < els.length; i++) {
    //         //     // console.log('plop');
    //         //     els[i].classList.remove('mystyle')
    //         //   }
    
    
    
    
    
    
    
    
    //         //   target.classList.add("mystyle");
    //           // console.log('mpol')
        
    
    
    //           // console.log(membre.nom);
    //           // console.log(membre.desc);
    //           // console.log(membre.url);
            
    //           const lenom = perso.nom;
    //           const ladesc = perso.desc;
    //           const lurl = perso.url;
    //           // const test =this._id;
    //           // console.log(test);
              
    //       // Membres.remove(this._id);
    //       // console.log('effacer');
        
        
           
    //           // console.log("ce");
    //           // Membres.remove(this._id);
        
        
    //           // var el = document.querySelector(".data-id");
    //           // console.log(el);
        
    //           // const membre = Membres.findOne({_id:idMembre});
    //           // console.log(membre);
        
    //     const pnom = document.querySelector('#champnom');
        
    //     const nm = perso.nom;
    //     // console.log(pnom);
        
    //     pnom.value =nm;
        
        
        
    //     const pdesc = document.querySelector('#champdesc');
        
    //     const nd = perso.desc;
    //     // console.log(nd);
    //     //  console.log(pdesc);
        
    //     pdesc.value =nd;
        
        
    //     const purl = document.querySelector('#champurl');
    //     const ur = perso.url;
    //     // console.log(purl);
    //     purl.value = ur;
        
    
        
    //     // Membres.update(this._id, {
    
    //     //   $set: { nom: 'orange' },
    
    //     // });
        
    //        },

    'click .save': function(event) {
 
        //RECUPERER LES VALEUR DES CHAMPS DU MODALS
            const pnom = document.querySelector('#champnom');
            const pdesc = document.querySelector('#champdesc');
            const purl = document.querySelector('#champurl');
        
            // const tg = document.querySelector('.mystyle');
        
            console.log(pnom.value);
             console.log(pdesc.value);
             console.log(purl.value);
        
             const hidden = document.querySelector("#edit-id");
             console.log(hidden.value);
const id =hidden.value;

             Persos.update(id, {
                $set: { nom: pnom.value, desc:pdesc.value,url: purl.value},
            });
            //   hidden.value = idMembre;
            //   console.log(idMembre);
            //   console.log(perso.nom);
           
            // console.log('sauvegarder');
            // console.log(pnom.value);
            // console.log( pdesc.value);
            // console.log(purl.value);
            // console.log(tg);
        
        
        
        
            // const idMembre = tg.getAttribute('data-id');
            //RECUPRE L OBJET DANS LA COLLECTION AVEC L ID  DE LA CARTE QU ON VIENT DE RECUPERER
            // const perso = Persos.findOne({_id:idMembre});
            
            // console.log(tg);
                   
              
            // console.log(idMembre);
            // console.log(membre);
            // membre.nom='plop';
            // const lp = document.querySelector('#edit-id');
            // console.log(lp);
        // const target = event.target;
        
        // const idMembre = target.getAttribute('data-id');
        
        // const membre = Membres.findOne({_id:idMembre});
        // console.log(this._id);
        // console.log(target);
        // console.log(membre);
        
        
        // Persos.update(idMembre, {
        
        //   $set: { nom: pnom.value,
        //     desc: pdesc.value,
        //     url: purl.value },
        
        // });
        
          },
    
    });