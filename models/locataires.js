const mongoose = require('mongoose');

 const LocataireSchema =  new mongoose.Schema({
    nommer:{
        type: String,
        required: true
    },

    prenom: {
        type:String,
        required: true
      },
       pays:{
           type:String,
           required: false,
           default:false
       }
    }
 );


 module.exports = Locataires = mongoose.model('Locataires', LocataireSchema);;
 