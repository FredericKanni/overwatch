import './drop.html';




Template.drop.events({
    'click #az': function() {
        event.preventDefault(); 
    
        console.log('effacer');
    },


    'click #za': function() {
        event.preventDefault(); 
    
        console.log('plop');
    },
    'click #ancien': function() {
        event.preventDefault(); 
    
        console.log('ancien');
    },
    'click #recent': function() {
        event.preventDefault(); 
    
        console.log('recent');
    },












    });
