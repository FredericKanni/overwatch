import './email.html';
import { Msgs } from '../api/Emails';








Template.email.events({    


  
  
    'submit .new-site'(event) {      // Prevent default browser form submit
  
      event.preventDefault();      // Get value from form element
  
      const target = event.target;
  
      const nom = target.nom.value;
  
      const desc = target.desc.value;      // Insert a site into the collection

      const url = target.url.value;
      console.log(nom);
      console.log(desc);
      console.log(url);
      Msgs.insert({
  
        nom,
  
        desc,

        url,
  
        createdAt: new Date(), // current time
  
      });      
    
    // Clear form
  
      target.nom.value = '';
  
      target.desc.value = '';   

      target.url.value = '';   
    //   console.log('sa');
    //   console.log(Membres);
  
  }, 

});