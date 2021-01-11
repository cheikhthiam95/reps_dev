
const Locataires = require('../models/locataires');

const createLocataire = (req, res) => {
    const locataire = new Locataires({
        nome: req.body.nom,
        prenom: req.body.prenom,
        pays: req.body.pays,

    });

    locataire.save().then(() => {
        console.log('Locataire créatred');
        res.status(200).json({ message: 'Locataire created' })

    }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error on  creatting locataire' })
    })

};
const getAllLocataire = (req, res) => {
    Locataires.find((err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error on  Getting locataire' })
        } else {

            res.status(200).json({ result })
        }
    })

};

const getLocataire = (req, res) => {
    Locataires.
    Locataires.find({ _id: req.params.id }, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error on  Getting locataire' })
        } else {

            res.status(200).json({ result })
        }
    })

};
const updateLocataire = async (req, res) => {

    const locataireUpdate = await Locataires.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            nome: req.body.nome,
            prenom: req.body.prenom,
            pays: req.body.pays
        },
    }, { new: true })
if(locataireUpdate){
    console.log(locataireUpdate);
    res.status(200).json({message:'Update successfully'})
}else{
    res.status(500).json({message:'Error while updating'})
}


};
const deleteLocataire = async (req, res) => {

    const locataireUpdate = await Locataires.findOneAndDelete({ _id: req.params.id });
if(locataireUpdate){
    console.log(locataireUpdate);
    res.status(200).json({message:'Delete successfully'});
}else{
    res.status(500).json({message:'Error while delettting'});
}

};

module.exports = { createLocataire, getLocataire, updateLocataire, deleteLocataire ,getAllLocataire};
