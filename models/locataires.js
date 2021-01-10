const mongoose = require('mongoose');

 const LocataireSchema =  new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },

    prenom: {
        type:String,
        required: true
      },
       pays:{
           type:String,
           required: false
          
       }
    }
 );


 module.exports = Locataires = mongoose.model('Locataires', LocataireSchema);;
 